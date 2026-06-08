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

    // Create 3D particle system
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 1000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create a glowing circular texture for the particles
    const createCircleTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const context = canvas.getContext('2d');
        if (context) {
            context.beginPath();
            context.arc(8, 8, 8, 0, 2 * Math.PI, false);
            context.fillStyle = 'white';
            context.fill();
        }
        return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
        size: 2.5,
        map: createCircleTexture(),
        transparent: true,
        opacity: 0.6,
        color: 0x8b5cf6, // Elegant purple-blue accent for Apple luxury feel
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

        // Rotate particles slowly
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        // Interactive physics based on mouse
        camera.position.x += (mouseX * 200 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 200 - camera.position.y) * 0.05;
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
