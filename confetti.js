const confetti = {
  createCanvas: () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    return canvas;
  },

  particles: [],

  colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#fdcb6e', '#e17055'],

  createParticle: (canvas, x, y) => {
    const ctx = canvas.getContext('2d');
    return {
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -8 - 5,
      size: Math.random() * 6 + 4,
      color: confetti.colors[Math.floor(Math.random() * confetti.colors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
      life: 1,
      decay: 0.015
    };
  },

  animate: (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.particles = confetti.particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2;
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;
      if (p.life <= 0) return false;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      ctx.restore();
      return true;
    });

    if (confetti.particles.length > 0) {
      requestAnimationFrame(() => confetti.animate(canvas));
    } else {
      canvas.remove();
    }
  },

  explode: (x = window.innerWidth / 2, y = window.innerHeight / 2, count = 100) => {
    const canvas = confetti.createCanvas();
    for (let i = 0; i < count; i++) {
      confetti.particles.push(confetti.createParticle(canvas, x, y));
    }
    confetti.animate(canvas);
  }
};

// Export for modules
if (typeof module !== 'undefined') module.exports = confetti;

