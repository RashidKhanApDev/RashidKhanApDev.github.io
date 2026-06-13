// Enterprise Visitor Intelligence SDK

const BACKEND_URL = "https://analytics-api.rashidkhanapdev.workers.dev/api/track";

// ==================== SHARED UTILITIES ====================
function getDeviceOS(): string {
    const userAgent = navigator.userAgent;
    if (/windows/i.test(userAgent)) return 'Windows';
    if (/mac/i.test(userAgent)) return 'MacOS';
    if (/linux/i.test(userAgent)) return 'Linux';
    if (/android/i.test(userAgent)) return 'Android';
    if (/ios|iphone|ipad/i.test(userAgent)) return 'iOS';
    return 'Unknown';
}

function getBrowser(): string {
    const userAgent = navigator.userAgent;
    if (/chrome|crios/i.test(userAgent) && !/edge|opr\//i.test(userAgent)) return 'Chrome';
    if (/firefox|fxios/i.test(userAgent)) return 'Firefox';
    if (/safari/i.test(userAgent) && !/chrome|crios/i.test(userAgent)) return 'Safari';
    if (/edge/i.test(userAgent)) return 'Edge';
    return 'Other';
}

// ==================== NOISE FILTER ====================
// Patterns that are NOT real attacks — Three.js, WebGL, bots etc.
const NOISE_PATTERNS = [
    /webgl/i,
    /three\.js/i,
    /canvas/i,
    /HTMLCanvasElement/i,
    /WebGLRenderer/i,
    /fetch failed/i,
    /network/i,
    /CORS/i,
    /telemetry/i,
    /Threat Intel Dispatch Failed/i,
    /Failed to send telemetry/i,
];

function isNoise(message: string): boolean {
    return NOISE_PATTERNS.some(pattern => pattern.test(message));
}

// ==================== VISITOR INTELLIGENCE ====================
class VisitorIntelligence {
    private startTime: number;

    constructor() {
        this.startTime = Date.now();
        this.init();
    }

    private init() {
        // Only track visitors who stay more than 5 seconds
        setTimeout(() => {
            this.captureAndSend();
        }, 5000);
    }

    private getUTMParams() {
        const params = new URLSearchParams(window.location.search);
        return params.get('utm_campaign') || params.get('ref') || null;
    }

    private async captureAndSend() {
        try {
            const duration = Math.floor((Date.now() - this.startTime) / 1000);

            // Record minimal session snapshot using rrweb if available
            let sessionData: any[] = [];
            if ((window as any).rrweb) {
                (window as any).rrweb.record({
                    emit(event: any) {
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
                deviceOS: getDeviceOS(),
                browser: getBrowser(),
                screen: `${window.screen.width}x${window.screen.height}`,
                referrer: document.referrer || null,
                utm: this.getUTMParams(),
                duration: duration,
                sessionEvents: sessionData.slice(0, 50) // Max 50 events
            };

            await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (e) {
            // Silently fail - do not trigger security alert for analytics failure
        }
    }
}

// ==================== OFFENSIVE SECURITY MONITOR ====================
class OffensiveSecurityMonitor {
    constructor() {
        this.hijackGlobalErrors();
        this.hijackUnhandledRejections();
        this.hijackConsoleErrors();
    }

    private hijackGlobalErrors() {
        window.addEventListener('error', (event) => {
            // Filter out Three.js / WebGL / bot noise
            if (isNoise(event.message || '') || isNoise(event.filename || '')) return;
            this.dispatchThreatIntel('Runtime Exception', event.message, event.filename, event.lineno, event.error?.stack);
        });
    }

    private hijackUnhandledRejections() {
        window.addEventListener('unhandledrejection', (event) => {
            const msg = String(event.reason);
            // Filter noise
            if (isNoise(msg)) return;
            this.dispatchThreatIntel('Unhandled Promise Rejection', msg, window.location.href, 0, event.reason?.stack);
        });
    }

    private hijackConsoleErrors() {
        const originalConsoleError = console.error;
        console.error = (...args) => {
            originalConsoleError(...args);
            const message = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
            // Filter Three.js, WebGL, bot-caused noise before sending alert
            if (isNoise(message)) return;
            this.dispatchThreatIntel('Console Error Triggered', message, window.location.href, 0, new Error().stack);
        };
    }

    private async dispatchThreatIntel(vector: string, message: string, source: string = 'Unknown', line: number = 0, stacktrace?: string) {
        try {
            const payload = {
                type: 'error',
                deviceOS: getDeviceOS(),
                browser: getBrowser(),
                url: window.location.href,
                vector: vector,
                errorMessage: message,
                sourceFile: source,
                lineNumber: line,
                stacktrace: stacktrace ? stacktrace.substring(0, 500) : 'N/A'
            };

            await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (e) {
            // Failsafe — never throw from error handler
            console.warn('Threat Intel Dispatch Failed', e);
        }
    }
}

// ==================== INITIALIZE ====================
if (typeof window !== 'undefined') {
    new VisitorIntelligence();
    new OffensiveSecurityMonitor();
}
