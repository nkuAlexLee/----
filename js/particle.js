document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
        constructor(x, y, size, color) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let size = Math.random() * 5 + 1;
            let color = 'rgba(255, 255, 255, 0.8)';
            particlesArray.push(new Particle(x, y, size, color));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    canvas.addEventListener('mousemove', function (event) {
        const mouseX = event.x;
        const mouseY = event.y;
        const size = Math.random() * 5 + 1;
        const color = 'rgba(255, 255, 255, 0.8)';
        particlesArray.push(new Particle(mouseX, mouseY, size, color));
        if (particlesArray.length > 200) {
            particlesArray.shift();
        }
    });
});