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
                
                // Construct Telegram Message
                const message = `
🚀 **New Visitor Detected!**
📍 **Location:** ${country}
🌐 **IP:** ${ip}
📡 **ASN:** ${asn}
💻 **Device:** ${payload.deviceOS || 'Unknown'} (${payload.browser || 'Unknown'})
📱 **Resolution:** ${payload.screen || 'Unknown'}
🔗 **Referrer:** ${payload.referrer || 'Direct'}
🏷️ **UTM Campaign:** ${payload.utm || 'None'}
⏱️ **Session Duration:** ${payload.duration || 0}s
                `.trim();

                // Send to Telegram
                const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
                
                await fetch(telegramUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: env.TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'Markdown'
                    })
                });

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
