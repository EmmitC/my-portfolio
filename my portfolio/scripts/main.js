
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change background image based on the mode
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundImage = "url('my%20portfolio/resources/images/dark-mode-image.jpg')";
    } else {
        document.body.style.backgroundImage = "url('my%20portfolio/resources/images/light-mode-image.jpg')";
    }
});


const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// Three.js Setup for 3D Golf Ball Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Golf ball geometry (using sphere with dimples)
const textureLoader = new THREE.TextureLoader();
const golfBallTexture = textureLoader.load('golf-ball-texture.jpg'); // You need a golf ball texture image
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: golfBallTexture });
const golfBall = new THREE.Mesh(geometry, material);
scene.add(golfBall);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    golfBall.rotation.x += 0.01;
    golfBall.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});



