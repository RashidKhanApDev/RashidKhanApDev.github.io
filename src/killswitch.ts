export function initKillSwitch() {
    let isDown = false;
    const checkStatus = async () => {
        try {
            const res = await fetch('https://analytics-api.rashidkhanapdev.workers.dev/api/status');
            const data = await res.json();
            
            if (data.status === 'defcon1' && !isDown) {
                isDown = true;
                initiateLockdown('DEFCON 1: SYSTEM SEIZED', 'UNAUTHORIZED ACCESS PROTOCOL ENGAGED');
                
                // Clear all storage (Auto-destruct)
                localStorage.clear();
                sessionStorage.clear();
                
                // Tell backend we blocked access
                fetch('https://analytics-api.rashidkhanapdev.workers.dev/api/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'blocked' })
                });
            } else if (data.status === 'maintenance' && !isDown) {
                isDown = true;
                initiateLockdown('SYSTEM MAINTENANCE', 'We are currently upgrading our systems. Please check back later.');
            } else if (data.status === 'online' && isDown) {
                isDown = false;
                window.location.reload();
            }
        } catch (e) {
            // Silently fail if API is unreachable to prevent breaking the site
        }
    };

    // Check immediately, then every 30 seconds (reduced from 5s to prevent API overload)
    checkStatus();
    setInterval(checkStatus, 30000);
}

function initiateLockdown(title: string, subtitle: string) {
    // Remove all existing body content
    document.body.innerHTML = '';
    
    // Set extreme dark mode styles on body
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#ff0000';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.fontFamily = "'JetBrains Mono', monospace";

    // Create siren overlay
    const siren = document.createElement('div');
    siren.className = 'defcon-siren';
    document.body.appendChild(siren);

    // Create content container
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.zIndex = '1000';
    container.style.padding = '3rem';
    container.style.background = 'rgba(25, 0, 0, 0.8)';
    container.style.border = '2px solid #ff0000';
    container.style.boxShadow = '0 0 50px rgba(255, 0, 0, 0.5)';
    container.style.backdropFilter = 'blur(10px)';

    const h1 = document.createElement('h1');
    h1.textContent = title;
    h1.style.fontSize = '3rem';
    h1.style.margin = '0 0 1rem 0';
    h1.style.textShadow = '0 0 20px #ff0000';

    const p = document.createElement('p');
    p.textContent = subtitle;
    p.style.fontSize = '1.2rem';
    p.style.color = '#ff8888';

    container.appendChild(h1);
    container.appendChild(p);
    document.body.appendChild(container);
}
