const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", event => {
  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
    const pupil = eye.querySelector(".pupil");
    const pupilOffsetX = Math.cos(angle) * 10;
    const pupilOffsetY = Math.sin(angle) * 10;
    pupil.style.transform = `translate(${pupilOffsetX}px, ${pupilOffsetY}px)`;
  });
});

