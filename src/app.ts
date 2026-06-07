// ==================== TYPEWRITER EFFECT ====================
const texts = ["Enterprise Web Apps.", "Secure Architectures.", "FastAPI Microservices.", "Modern UIs.", "Scalable Systems."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function type() {
    currentText = texts[count % texts.length];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
        if (window.playTypeSound) window.playTypeSound();
    }

    typewriterElement.textContent = letter;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && index === currentText.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count++;
        speed = 500;
    }

    setTimeout(type, speed);
}

// ==================== DOM CONTENT LOADED ====================
document.addEventListener("DOMContentLoaded", function() {
    // Aggressive AudioContext Unlock
    const audioEvents = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    const unlockAudio = function() {
        if (window.initAudioContext) window.initAudioContext();
    };
    audioEvents.forEach(event => {
        document.addEventListener(event, unlockAudio, { once: true, passive: true });
    });

    setInterval(() => {
        if (window.initAudioContext) window.initAudioContext();
    }, 100);

    type();

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        if (window.playClickSound) window.playClickSound();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });



    // ==================== SCROLL PROGRESS BAR ====================
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        document.getElementById('scrollProgress').style.width = scrollPercent + '%';
    });

    // ==================== NAV SCROLL EFFECT ====================
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // ==================== ACTIVE NAV LINK HIGHLIGHT ====================
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(function(section) {
            const sectionTop = (section as HTMLElement).offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id') || '';
            }
        });

        navLinksAll.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ==================== BACK TO TOP BUTTON ====================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== STATS COUNTER ANIMATION ====================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateCounters() {
        statNumbers.forEach(function(stat) {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            function updateCounter() {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current).toString();
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toString();
                }
            }
            updateCounter();
        });
    }

    // ==================== SKILL BAR ANIMATION ====================
    function animateSkillBars() {
        const skillFills = document.querySelectorAll('.skill-fill');
        skillFills.forEach(function(fill) {
            const width = fill.getAttribute('data-width');
            (fill as HTMLElement).style.width = width + '%';
        });
    }

    // ==================== INTERSECTION OBSERVER ====================
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger stats counter when stats section is visible
                if (entry.target.classList.contains('stat-card') && !statsAnimated) {
                    statsAnimated = true;
                    animateCounters();
                }

                // Trigger skill bars when skill cards are visible
                if (entry.target.classList.contains('skill-card')) {
                    animateSkillBars();
                }
            }
        });
    }, { threshold: 0.2 });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach(function(el) {
        observer.observe(el);
    });

    // ==================== TILT EFFECT (Desktop Only) ====================
    if (window.innerWidth > 768) {
        const tiltCards = document.querySelectorAll('.tilt-card');
        tiltCards.forEach(function(card) {
            card.addEventListener('mousemove', function(e: any) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-5px)';
            });

            card.addEventListener('mouseleave', function() {
                (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ==================== MAGNETIC CUSTOM CURSOR ====================
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const hoverElements = document.querySelectorAll('a, button, input, .skill-card, .project-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
            });
        });
    }

    // ==================== INTERACTIVE HACKER TERMINAL ====================
    const termInput = document.getElementById('terminal-input') as HTMLInputElement;
    const termHistory = document.getElementById('terminal-history');

    if (termInput && termHistory) {
        termInput.addEventListener('keydown', function(e: KeyboardEvent) {
            if (e.key === 'Enter') {
                const val = this.value.trim();
                if (!val) return;
                
                // Echo command
                const cmdLine = document.createElement('p');
                cmdLine.innerHTML = `<span class="prompt">$</span> ${val}`;
                termHistory.appendChild(cmdLine);

                // Process command
                const output = document.createElement('p');
                output.className = 'terminal-output';

                const cmd = val.toLowerCase();
                if (cmd === 'help') {
                    output.innerHTML = 'Available commands: help, whoami, skills, projects, clear, sudo';
                } else if (cmd === 'whoami') {
                    output.innerHTML = 'Rashid Khan Ap - Enterprise Full-Stack Developer';
                } else if (cmd === 'skills') {
                    output.innerHTML = '["Python", "TypeScript", "FastAPI", "Django", "SCSS", "Docker", "DevSecOps"]';
                } else if (cmd === 'projects') {
                    output.innerHTML = 'Loading enterprise repositories... <a href="#projects" style="color:var(--accent-color)">[Click Here]</a>';
                } else if (cmd === 'clear') {
                    termHistory.innerHTML = '';
                } else if (cmd === 'sudo') {
                    output.innerHTML = 'nice try. This incident will be reported.';
                    output.style.color = 'red';
                } else if (cmd === 'matrix') {
                    output.innerHTML = 'Wake up, Neo...';
                    document.body.style.background = 'black';
                    document.body.style.color = '#00FF41';
                    setTimeout(() => location.reload(), 2000);
                } else {
                    output.innerHTML = `bash: ${val}: command not found`;
                }

                if (cmd !== 'clear') {
                    termHistory.appendChild(output);
                }

                // Scroll to bottom
                const terminalBody = document.getElementById('terminal-body');
                if (terminalBody) {
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }

                // Play type sound for realistic feedback
                if ((window as any).playTypeSound) {
                    try { (window as any).playTypeSound(); } catch (e) {}
                }

                this.value = '';
            }
        });

        // Keep focus on input when clicking terminal
        const terminalBody = document.getElementById('terminal-body');
        if (terminalBody) {
            terminalBody.addEventListener('click', () => {
                termInput.focus();
            });
        }
    }
});


