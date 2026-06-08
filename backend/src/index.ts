export default {
    async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        const url = new URL(request.url);

        // ==========================================
        // 1. GET /api/status - Called by Frontend
        // ==========================================
        if (url.pathname === '/api/status' && request.method === 'GET') {
            let currentStatus = 'online';
            if (env.DB) {
                try {
                    // Ensure table exists (zero downtime creation)
                    await env.DB.prepare(`CREATE TABLE IF NOT EXISTS system_config (key TEXT PRIMARY KEY, value TEXT)`).run();
                    const result = await env.DB.prepare(`SELECT value FROM system_config WHERE key = 'system_status'`).first();
                    if (result && result.value) {
                        currentStatus = result.value;
                    }
                } catch (e) {
                    console.error('DB Status Check Error:', e);
                }
            }
            return new Response(JSON.stringify({ status: currentStatus }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        }

        // ==========================================
        // 2. GET /api/setup-webhook - Admin Route
        // ==========================================
        if (url.pathname === '/api/setup-webhook' && request.method === 'GET') {
            const cleanToken = env.TELEGRAM_BOT_TOKEN ? env.TELEGRAM_BOT_TOKEN.trim() : '';
            if (!cleanToken) return new Response('No Token', { status: 400 });
            
            const webhookUrl = `${url.origin}/api/webhook`;
            const tgUrl = `https://api.telegram.org/bot${cleanToken}/setWebhook?url=${encodeURIComponent(webhookUrl)}`;
            
            const res = await fetch(tgUrl);
            const data = await res.json();
            return new Response(JSON.stringify({ setup: 'Webhook registered', url: webhookUrl, telegramResponse: data }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        }

        // ==========================================
        // 3. POST /api/webhook - Telegram Commands
        // ==========================================
        if (url.pathname === '/api/webhook' && request.method === 'POST') {
            try {
                const update: any = await request.json();
                const cleanToken = env.TELEGRAM_BOT_TOKEN ? env.TELEGRAM_BOT_TOKEN.trim() : '';
                
                // Helper to send messages back to Telegram
                const reply = async (chatId: string, text: string, buttons: any[] = []) => {
                    const payload: any = { chat_id: chatId, text: text, parse_mode: 'HTML' };
                    if (buttons.length > 0) {
                        payload.reply_markup = { inline_keyboard: buttons };
                    }
                    await fetch(`https://api.telegram.org/bot${cleanToken}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                };

                // Helper to update status in D1
                const setStatus = async (status: string) => {
                    if (env.DB) {
                        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS system_config (key TEXT PRIMARY KEY, value TEXT)`).run();
                        await env.DB.prepare(`INSERT OR REPLACE INTO system_config (key, value) VALUES ('system_status', ?)`).bind(status).run();
                    }
                };

                const controlPanelButtons = [
                    [{ text: '🔴 INITIATE DEFCON 1', callback_data: 'set_defcon1' }],
                    [{ text: '🟡 MAINTENANCE MODE', callback_data: 'set_maintenance' }],
                    [{ text: '🟢 RESTORE SYSTEM', callback_data: 'set_online' }],
                    [{ text: '📊 CHECK STATUS', callback_data: 'check_status' }]
                ];

                // Handle regular messages
                if (update.message && update.message.text) {
                    const chatId = update.message.chat.id;
                    const text = update.message.text;

                    if (text === '/start' || text === '/panel') {
                        await reply(chatId, "<b>🛡️ ENTERPRISE KILL SWITCH PANEL</b>\nSelect an action:", controlPanelButtons);
                    }
                }
                
                // Handle button clicks (Callback Queries)
                if (update.callback_query) {
                    const chatId = update.callback_query.message.chat.id;
                    const data = update.callback_query.data;

                    if (data === 'set_defcon1') {
                        await setStatus('defcon1');
                        await reply(chatId, "🚨 <b>DEFCON 1 INITIATED!</b>\nAll users will see a red lock screen and LocalStorage will be wiped.", controlPanelButtons);
                    } else if (data === 'set_maintenance') {
                        await setStatus('maintenance');
                        await reply(chatId, "🟡 <b>MAINTENANCE MODE ENGAGED.</b>\nSite is temporarily closed for updates.", controlPanelButtons);
                    } else if (data === 'set_online') {
                        await setStatus('online');
                        await reply(chatId, "🟢 <b>SYSTEM RESTORED.</b>\nWebsite is fully functional and online.", controlPanelButtons);
                    } else if (data === 'check_status') {
                        let current = 'online';
                        if (env.DB) {
                            const result = await env.DB.prepare(`SELECT value FROM system_config WHERE key = 'system_status'`).first();
                            if (result && result.value) current = result.value;
                        }
                        await reply(chatId, `📊 <b>CURRENT SYSTEM STATUS:</b> <code>${current.toUpperCase()}</code>`, controlPanelButtons);
                    }
                }
                
                return new Response('OK');
            } catch (e) {
                console.error("Webhook error", e);
                return new Response('Error', { status: 500 });
            }
        }

        // ==========================================
        // 4. POST /api/track - Existing Analytics
        // ==========================================
        if (url.pathname === '/api/track' && request.method === 'POST') {
            try {
                const payload: any = await request.json();
                
                const ip = request.headers.get('cf-connecting-ip') || 'Unknown IP';
                const country = request.headers.get('cf-ipcountry') || 'Unknown Country';
                const asn = request.headers.get('cf-asn') || 'Unknown ASN';
                const userAgent = request.headers.get('user-agent') || 'Unknown Device';
                
                let message = "";

                if (payload.type === 'error') {
                    message = `
🚨 <b>[DEFCON-1] OFFSEC ALERT</b> 🚨
<b>TARGET:</b> Portfolio Frontend
<b>VECTOR:</b> ${payload.vector || 'Unknown Vector'}
<b>SOURCE:</b> ${payload.sourceFile || 'Unknown'} (Line: ${payload.lineNumber || 0})
<b>THREAT LEVEL:</b> CRITICAL
<b>ATTACKER IP:</b> ${ip} [${country}]
<b>ENVIRONMENT:</b> ${payload.deviceOS} / ${payload.browser}

💻 <b>PAYLOAD (Trace):</b>
<pre>${payload.stacktrace || payload.errorMessage || 'No trace provided'}</pre>
                    `.trim();
                } else if (payload.type === 'blocked') {
                    message = `
🛑 <b>ACCESS BLOCKED (SYSTEM DOWN)</b>
<b>IP:</b> ${ip} [${country}]
<b>Device:</b> ${payload.deviceOS || 'Unknown'} (${payload.browser || 'Unknown'})
                    `.trim();
                } else {
                    message = `
🚀 <b>New Visitor Detected!</b>
📍 <b>Location:</b> ${country}
🌐 <b>IP:</b> ${ip}
📡 <b>ASN:</b> ${asn}
💻 <b>Device:</b> ${payload.deviceOS || 'Unknown'} (${payload.browser || 'Unknown'})
📱 <b>Resolution:</b> ${payload.screen || 'Unknown'}
🔗 <b>Referrer:</b> ${payload.referrer || 'Direct'}
🏷️ <b>UTM Campaign:</b> ${payload.utm || 'None'}
⏱️ <b>Session Duration:</b> ${payload.duration || 0}s
                    `.trim();
                }

                if (env.TELEGRAM_BOT_TOKEN) {
                    const cleanToken = env.TELEGRAM_BOT_TOKEN.trim();
                    const telegramUrl = `https://api.telegram.org/bot${cleanToken}/sendMessage`;
                    
                    const tgResponse = await fetch(telegramUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: env.TELEGRAM_CHAT_ID,
                            text: message,
                            parse_mode: 'HTML'
                        })
                    });
                    if (!tgResponse.ok) {
                        console.error('Telegram API Error:', await tgResponse.text());
                    }
                }

                // Save to D1 Database only if it's a regular visitor
                if (env.DB && payload.type !== 'error' && payload.type !== 'blocked') {
                    try {
                        await env.DB.prepare(
                            `INSERT INTO visitors (deviceOS, browser, screen, referrer, utm, duration) VALUES (?, ?, ?, ?, ?, ?)`
                        ).bind(
                            payload.deviceOS || 'Unknown',
                            payload.browser || 'Unknown',
                            payload.screen || 'Unknown',
                            payload.referrer || 'Direct',
                            payload.utm || 'None',
                            payload.duration || 0
                        ).run();
                    } catch (dbError) {
                        console.error('Database Error:', dbError);
                    }
                }

                return new Response(JSON.stringify({ status: 'success' }), {
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                });

            } catch (error: any) {
                return new Response(JSON.stringify({ error: error.message }), { 
                    status: 500,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders } 
                });
            }
        }

        return new Response('API Endpoint Active', { 
            status: 200, 
            headers: corsHeaders 
        });
    }
};
