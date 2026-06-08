"use strict";
// Enterprise Visitor Intelligence SDK
const BACKEND_URL = "https://analytics-api.rashidkhanapdev.workers.dev/api/track";
class VisitorIntelligence {
    startTime;
    constructor() {
        this.startTime = Date.now();
        this.init();
    }
    init() {
        // Only track visitors who stay more than 5 seconds
        setTimeout(() => {
            this.captureAndSend();
        }, 5000);
    }
    getDeviceOS() {
        const userAgent = navigator.userAgent;
        if (/windows/i.test(userAgent))
            return 'Windows';
        if (/mac/i.test(userAgent))
            return 'MacOS';
        if (/linux/i.test(userAgent))
            return 'Linux';
        if (/android/i.test(userAgent))
            return 'Android';
        if (/ios|iphone|ipad/i.test(userAgent))
            return 'iOS';
        return 'Unknown';
    }
    getBrowser() {
        const userAgent = navigator.userAgent;
        if (/chrome|crios/i.test(userAgent) && !/edge|opr\//i.test(userAgent))
            return 'Chrome';
        if (/firefox|fxios/i.test(userAgent))
            return 'Firefox';
        if (/safari/i.test(userAgent) && !/chrome|crios/i.test(userAgent))
            return 'Safari';
        if (/edge/i.test(userAgent))
            return 'Edge';
        return 'Other';
    }
    getUTMParams() {
        const params = new URLSearchParams(window.location.search);
        return params.get('utm_campaign') || params.get('ref') || null;
    }
    async captureAndSend() {
        try {
            const duration = Math.floor((Date.now() - this.startTime) / 1000);
            // Record minimal session snapshot using rrweb if available
            let sessionData = [];
            if (window.rrweb) {
                window.rrweb.record({
                    emit(event) {
                        sessionData.push(event);
                    },
                    recordCanvas: false,
                    sampling: {
                        mousemove: false,
                        mouseInteraction: true,
                        scroll: true,
                        input: 'last'
                    }
                });
                // Wait 1 second to capture initial render
                await new Promise(r => setTimeout(r, 1000));
            }
            const payload = {
                deviceOS: this.getDeviceOS(),
                browser: this.getBrowser(),
                screen: `${window.screen.width}x${window.screen.height}`,
                referrer: document.referrer || null,
                utm: this.getUTMParams(),
                duration: duration,
                sessionEvents: sessionData.slice(0, 50) // Send max 50 events to avoid payload size limits for Telegram
            };
            await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            console.log('Telemetry sent successfully.');
        }
        catch (e) {
            console.error('Failed to send telemetry:', e);
        }
    }
}
// Initialize on load
if (typeof window !== 'undefined') {
    new VisitorIntelligence();
}
