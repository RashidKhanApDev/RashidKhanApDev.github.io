// space.js - Premium Dark Space Orbit Canvas Background
(function() {
    const canvas = document.createElement('canvas');
    canvas.id = 'space-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.background = '#060b19'; // Deep dark navy space
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    });

    // Configuration
    const STAR_COUNT = 500;
    const NEBULA_COUNT = 4;
    const SHOOTING_STAR_INTERVAL = 4000; // ms
    
    // State
    let stars = [];
    let nebulae = [];
    let orbitalRings = [];
    let shootingStars = [];
    let lastShootingStar = 0;
    
    // Mouse Parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
        targetMouseX = e.clientX;
        targetMouseY = e.clientY;
    });

    class Star {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width * 1.5 - width * 0.25; // Render slightly outside screen for parallax
            this.y = Math.random() * height * 1.5 - height * 0.25;
            this.z = Math.random() * 3 + 1; // Depth: 1 (front) to 4 (back)
            this.size = Math.max(0.3, (Math.random() * 2.5) / this.z);
            this.baseOpacity = Math.random() * 0.5 + 0.3;
            this.twinkleSpeed = Math.random() * 0.02 + 0.005;
            this.twinklePhase = Math.random() * Math.PI * 2;
            // Slight color variation (white, slight blue, slight yellow)
            const colors = ['#ffffff', '#e0f0ff', '#fffde0'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        draw(ctx, offsetX, offsetY) {
            // Parallax shift
            const shiftX = offsetX / this.z;
            const shiftY = offsetY / this.z;
            
            // Twinkle
            this.twinklePhase += this.twinkleSpeed;
            const opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.3;
            
            ctx.globalAlpha = Math.max(0.1, Math.min(1, opacity));
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x + shiftX, this.y + shiftY, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    class Nebula {
        constructor(color) {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 300 + 200;
            this.color = color;
            this.pulseSpeed = Math.random() * 0.005 + 0.002;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        draw(ctx) {
            this.pulsePhase += this.pulseSpeed;
            const opacity = 0.08 + Math.sin(this.pulsePhase) * 0.04;
            
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, `rgba(${this.color}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${this.color}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class OrbitalRing {
        constructor(rx, ry, tilt, speedMultiplier, color) {
            this.rx = rx; // X radius
            this.ry = ry; // Y radius
            this.tilt = tilt; // Rotation angle
            this.speedMultiplier = speedMultiplier;
            this.particles = [];
            this.color = color;
            
            const numParticles = Math.floor(Math.random() * 4) + 4; // 4 to 7 particles
            for(let i = 0; i < numParticles; i++) {
                this.particles.push({
                    angle: Math.random() * Math.PI * 2,
                    speed: (Math.random() * 0.005 + 0.002) * this.speedMultiplier,
                    size: Math.random() * 2 + 1.5,
                    glow: Math.random() * 5 + 3
                });
            }
        }

        draw(ctx, centerX, centerY) {
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(this.tilt);
            
            // Draw faint ring
            ctx.beginPath();
            ctx.ellipse(0, 0, this.rx, this.ry, 0, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${this.color}, 0.05)`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw orbiting particles
            for(let p of this.particles) {
                p.angle += p.speed;
                const x = Math.cos(p.angle) * this.rx;
                const y = Math.sin(p.angle) * this.ry;
                
                // Z-sorting effect (fade when "behind")
                const depth = Math.sin(p.angle); // -1 (back) to 1 (front)
                const scale = (depth + 2) / 2; // 0.5 to 1.5
                const opacity = (depth + 1.5) / 2.5; // 0.2 to 1.0

                ctx.globalAlpha = opacity;
                
                // Glow
                ctx.shadowBlur = p.glow * scale;
                ctx.shadowColor = `rgb(${this.color})`;
                
                ctx.fillStyle = `rgb(${this.color})`;
                ctx.beginPath();
                ctx.arc(x, y, p.size * scale, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.shadowBlur = 0; // Reset
            }
            
            ctx.restore();
            ctx.globalAlpha = 1;
        }
    }

    class ShootingStar {
        constructor() {
            this.x = Math.random() * width;
            this.y = -50;
            this.length = Math.random() * 150 + 50;
            this.speed = Math.random() * 15 + 10;
            this.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // ~45 degrees down-right
            this.opacity = 1;
            this.decay = Math.random() * 0.02 + 0.01;
            this.active = true;
        }

        draw(ctx) {
            if (!this.active) return;
            
            const dx = Math.cos(this.angle);
            const dy = Math.sin(this.angle);
            
            this.x += dx * this.speed;
            this.y += dy * this.speed;
            this.opacity -= this.decay;
            
            if (this.opacity <= 0 || this.x > width + this.length || this.y > height + this.length) {
                this.active = false;
                return;
            }

            const tailX = this.x - dx * this.length;
            const tailY = this.y - dy * this.length;

            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
            gradient.addColorStop(0.1, `rgba(100, 200, 255, ${this.opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    function init() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push(new Star());
        }

        nebulae = [
            new Nebula('30, 58, 95'),   // deep blue
            new Nebula('45, 27, 105'),  // purple
            new Nebula('74, 25, 66')    // magenta
        ];

        orbitalRings = [
            new OrbitalRing(300, 100, Math.PI / 6, 1, '59, 130, 246'),  // Blue
            new OrbitalRing(400, 150, -Math.PI / 8, 0.8, '139, 92, 246'), // Purple
            new OrbitalRing(500, 120, Math.PI / 3, 0.6, '236, 72, 153')   // Pink
        ];
    }

    function animate(time) {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse parallax interpolation
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
        
        const parallaxOffsetX = (width / 2 - mouseX) * 0.05;
        const parallaxOffsetY = (height / 2 - mouseY) * 0.05;

        // Draw Nebulae
        for (let n of nebulae) n.draw(ctx);

        // Draw Stars
        for (let s of stars) s.draw(ctx, parallaxOffsetX, parallaxOffsetY);

        // Draw Orbits
        // Parallax for the orbits as well
        const orbitX = width / 2 + parallaxOffsetX * 0.5;
        const orbitY = height / 2 + parallaxOffsetY * 0.5;
        for (let r of orbitalRings) r.draw(ctx, orbitX, orbitY);

        // Shooting Stars
        if (time - lastShootingStar > SHOOTING_STAR_INTERVAL && Math.random() < 0.02) {
            shootingStars.push(new ShootingStar());
            lastShootingStar = time;
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
            shootingStars[i].draw(ctx);
            if (!shootingStars[i].active) {
                shootingStars.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    init();
    requestAnimationFrame(animate);
})();
