document.addEventListener('mousemove', function(e){
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const offsetX = Math.cos(angle) * 8;
        const offsetY = Math.sin(angle) * 8;
        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});