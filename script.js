// Magic Sparkle Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  // Create sparkle trail
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-trail';
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  document.body.appendChild(sparkle);
  
  // Remove sparkles after animation
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

// Click effect
document.addEventListener('click', () => {
  cursor.classList.add('clicked');
  setTimeout(() => cursor.classList.remove('clicked'), 300);
});

// Video embed function
function embedVideo(videoId, element) {
  element.innerHTML = `
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;
}

// Pluto Easter Egg
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'p') {
    document.body.classList.toggle('pluto-party');
    const planets = document.querySelectorAll('.planet-animation');
    planets.forEach(planet => {
      planet.style.animationDuration = '2s';
      setTimeout(() => {
        planet.style.animationDuration = '8s';
      }, 2000);
    });
  }
});