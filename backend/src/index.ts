import { Router } from 'itty-router';

const router = Router();

// Configure CORS
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle OPTIONS preflight requests
router.options('*', () => {
    return new Response(null, { headers: corsHeaders });
});

router.post('/api/track', async (request, env) => {
    try {
        const payload = await request.json();
        
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
💻 **Device:** ${payload.deviceOS} (${payload.browser})
📱 **Resolution:** ${payload.screen}
🔗 **Referrer:** ${payload.referrer || 'Direct'}
🏷️ **UTM Campaign:** ${payload.utm || 'None'}
⏱️ **Session Duration:** ${payload.duration}s
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

        // Here we could also store the massive rrweb payload in D1/R2
        // e.g., await env.DB.prepare('INSERT INTO visits...').run();

        return new Response(JSON.stringify({ status: 'success' }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        });
    }
});

router.all('*', () => new Response('Not Found', { status: 404, headers: corsHeaders }));

export default {
    async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
        return router.handle(request, env, ctx);
    },
};
