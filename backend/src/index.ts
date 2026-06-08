export default {
    async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        const url = new URL(request.url);
        
        if (url.pathname === '/api/track' && request.method === 'POST') {
            try {
                const payload: any = await request.json();
                
                // Extract Cloudflare Headers
                const ip = request.headers.get('cf-connecting-ip') || 'Unknown IP';
                const country = request.headers.get('cf-ipcountry') || 'Unknown Country';
                const asn = request.headers.get('cf-asn') || 'Unknown ASN';
                const userAgent = request.headers.get('user-agent') || 'Unknown Device';
                
                let message = "";

                if (payload.type === 'error') {
                    // OffSec / Red Team Error Alert Format
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
                } else {
                    // Standard Visitor Alert Format
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
                
                // Message is now built dynamically above

                // Send to Telegram
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
                        const tgError = await tgResponse.text();
                        console.error('Telegram API Error:', tgError);
                    }
                } else {
                    console.error('TELEGRAM_BOT_TOKEN is missing in environment.');
                }

                // Save to D1 Database only if it's a regular visitor
                if (env.DB && payload.type !== 'error') {
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

        return new Response('API Endpoint Active (Send POST to /api/track)', { 
            status: 200, 
            headers: corsHeaders 
        });
    }
};
