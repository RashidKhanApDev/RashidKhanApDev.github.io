import * as THREE from 'three';

let isInitialized = false;
let animationId = 0;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let geometry: THREE.BufferGeometry;
let material: THREE.PointsMaterial;
let particlesMesh: THREE.Points;
let cometGeometry: THREE.CylinderGeometry;
let cometMaterial: THREE.MeshBasicMaterial;
let comet: THREE.Mesh;
let skillMeshes: THREE.Mesh[] = [];

export function initSpaceCanvas() {
    if (isInitialized) return;
    
    const canvas = document.getElementById('space-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    isInitialized = true;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 400;

    // Create 3D particle system for realistic space
    geometry = new THREE.BufferGeometry();
    const particlesCount = 4000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Spherical distribution for deeper space feel
        posArray[i] = (Math.random() - 0.5) * 1500;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create a glowing circular texture for the stars
    const createStarTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const context = canvas.getContext('2d');
        if (context) {
            const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(210,230,255,0.8)');
            gradient.addColorStop(0.5, 'rgba(100,150,255,0.2)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            
            context.fillStyle = gradient;
            context.fillRect(0, 0, 16, 16);
        }
        return new THREE.CanvasTexture(canvas);
    };

    material = new THREE.PointsMaterial({
        size: 2.0,
        map: createStarTexture(),
        transparent: true,
        opacity: 0.9,
        color: 0xffffff,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Create a Comet (Shooting Star)
    cometGeometry = new THREE.CylinderGeometry(0.8, 0.0, 150, 8);
    cometMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    comet = new THREE.Mesh(cometGeometry, cometMaterial);
    scene.add(comet);
    
    // Comet Velocity
    const cometVelocity = new THREE.Vector3(-10, -5, -8);
    // Orient the comet so its head (+Y) points in the direction of velocity
    const cometDirection = cometVelocity.clone().normalize();
    comet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), cometDirection);
    
    // Initial random far position
    const resetComet = () => {
        comet.position.set(
            Math.random() * 1000 + 800,
            Math.random() * 800 + 500,
            (Math.random() - 0.5) * 1000
        );
    };
    resetComet();

    // 3. Floating 3D Skill Icons (Interactive)
    const skills = [
        { name: 'Python', color: '#3776AB' },
        { name: 'Rust', color: '#DEA584' },
        { name: 'Go', color: '#00ADD8' },
        { name: 'FastAPI', color: '#009688' }
    ];
    
    skills.forEach((skill, idx) => {
        // Create text texture
        const c = document.createElement('canvas');
        c.width = 256; c.height = 256;
        const ctx = c.getContext('2d');
        if (ctx) {
            ctx.fillStyle = skill.color;
            ctx.beginPath();
            ctx.arc(128, 128, 120, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.font = 'bold 40px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(skill.name, 128, 128);
        }
        
        const tex = new THREE.CanvasTexture(c);
        const geo = new THREE.PlaneGeometry(30, 30);
        const mat = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        
        const mesh = new THREE.Mesh(geo, mat);
        // Spread them out randomly
        mesh.position.set(
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 200 - 100
        );
        scene.add(mesh);
        skillMeshes.push(mesh);
    });

    let mouseX = 0;
    let mouseY = 0;
    
    // Raycaster for interactive hover
    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    const clock = new THREE.Clock();
    
    // For Audio Visualizer
    const dataArray = new Uint8Array(128); // Will hold frequency data

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // 1. Audio Visualizer Effect
        let audioScale = 1.0;
        if (window.getAudioAnalyser) {
            const analyser = window.getAudioAnalyser();
            if (analyser) {
                analyser.getByteFrequencyData(dataArray);
                let sum = 0;
                for(let i = 0; i < dataArray.length; i++) sum += dataArray[i];
                const avg = sum / dataArray.length;
                // Scale up when audio plays (avg > 0)
                audioScale = 1.0 + (avg / 256.0) * 1.5;
            }
        }
        
        // Apply audio scale to particle material size and Comet scale
        material.size = 2.0 * audioScale;
        comet.scale.set(audioScale, audioScale, audioScale);

        // Realistic slow space drift instead of chaotic rotation
        particlesMesh.rotation.y = elapsedTime * 0.005;
        particlesMesh.rotation.x = elapsedTime * 0.002;

        // Animate comet
        comet.position.add(cometVelocity);
        
        // Reset comet if it goes far out of view
        if (comet.position.x < -1500 || comet.position.y < -1000) {
            // Optional: wait randomly before resetting to make it appear occasionally
            if (Math.random() < 0.02) {
                resetComet();
            }
        }

        // Interactive subtle parallax based on mouse
        camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 50 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        
        // Float and interact with skill icons
        raycaster.setFromCamera(mouseVec, camera);
        const intersects = raycaster.intersectObjects(skillMeshes);
        
        skillMeshes.forEach((mesh, idx) => {
            // Gentle floating
            mesh.position.y += Math.sin(elapsedTime * 2 + idx) * 0.2;
            mesh.rotation.y = Math.sin(elapsedTime * 0.5 + idx) * 0.5;
            
            // Default opacity
            (mesh.material as THREE.MeshBasicMaterial).opacity = 0.6;
        });

        // Hover effect (brighten and repel slightly)
        if (intersects.length > 0) {
            const hit = intersects[0].object as THREE.Mesh;
            (hit.material as THREE.MeshBasicMaterial).opacity = 1.0;
            hit.scale.set(1.2, 1.2, 1.2);
            document.body.style.cursor = 'pointer';
        } else {
            skillMeshes.forEach(mesh => mesh.scale.set(1, 1, 1));
            document.body.style.cursor = 'default';
        }

        renderer.render(scene, camera);
        animationId = window.requestAnimationFrame(tick);
    };

    // Update mouse vector for raycaster
    document.addEventListener('mousemove', (event) => {
        mouseVec.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVec.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    tick();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 4. Cinematic Smooth Page Transitions (Scroll zoom)
    if ((window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap;
        gsap.registerPlugin((window as any).ScrollTrigger);
        
        gsap.to(camera.position, {
            z: 50, // zoom in
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5 // smooth catching up
            }
        });
    }
}

export function disposeSpaceCanvas() {
    if (!isInitialized) return;
    
    window.cancelAnimationFrame(animationId);
    
    if (particlesMesh) {
        scene.remove(particlesMesh);
    }
    if (geometry) geometry.dispose();
    if (material) {
        if (material.map) material.map.dispose();
        material.dispose();
    }
    
    if (comet) {
        scene.remove(comet);
    }
    if (cometGeometry) cometGeometry.dispose();
    if (cometMaterial) cometMaterial.dispose();
    
    skillMeshes.forEach(mesh => {
        scene.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
            const mat = mesh.material as THREE.MeshBasicMaterial;
            if (mat.map) mat.map.dispose();
            mat.dispose();
        }
    });
    skillMeshes = [];
    
    if (renderer) {
        renderer.dispose();
    }
    
    isInitialized = false;
}
