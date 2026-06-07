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

    // ==================== PRELOADER ====================
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hidden');
    }, 2200);

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
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
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
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
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
            fill.style.width = width + '%';
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
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-5px)';
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
});


