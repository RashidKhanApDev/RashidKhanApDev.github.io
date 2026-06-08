import * as THREE from 'three';

export function initSpaceCanvas() {
    const canvas = document.getElementById('space-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 400;

    // Create 3D particle system for realistic space
    const geometry = new THREE.BufferGeometry();
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

    const material = new THREE.PointsMaterial({
        size: 2.0,
        map: createStarTexture(),
        transparent: true,
        opacity: 0.9,
        color: 0xffffff,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Realistic slow space drift instead of chaotic rotation
        particlesMesh.rotation.y = elapsedTime * 0.005;
        particlesMesh.rotation.x = elapsedTime * 0.002;

        // Interactive subtle parallax based on mouse
        camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 50 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
