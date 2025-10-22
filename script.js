// 🎂 Countdown Timer
const timer = document.getElementById("timer");
function updateCountdown() {
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  const now = new Date();
  const diff = endOfDay - now;

  if (diff <= 0) {
    timer.textContent = "The day is over, but memories remain forever ❤️";
    return;
  }

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent = `${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// 💬 Typed Message
const message = "On your special day, I just want to remind you how amazing you are — kind, strong, and full of light. 💖\n\nMay your dreams shine as bright as your smile!";
let index = 0;
function typeMessage() {
  const textElement = document.getElementById("typed-message");
  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeMessage, 60);
  }
}
window.onload = typeMessage;

// 🎉 Confetti Celebration
setTimeout(() => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });
}, 2500);

// 🖼️ Swiper Initialization
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

// 💫 Slide-In Animation for Memory Cards
const cards = document.querySelectorAll(".memory-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 🎁 Button Surprise Function
function showSurprise() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  setTimeout(() => {
    alert("💖 Every memory with you is special — more surprises coming soon!");
  }, 500);
}

// 🌸 Popup Functions
function showSurprise() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Show the popup after confetti
  setTimeout(() => {
    document.getElementById("surprise-popup").style.display = "flex";
  }, 800);
}

function closePopup() {
  document.getElementById("surprise-popup").style.display = "none";
}

// 💖 Floating Hearts / Sparkles Background
const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Create particles
function createParticles() {
  const colors = ["#ffb6c1", "#ffffff", "#ffd6e6", "#ff69b4"];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? "circle" : "heart",
    });
  }
}

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size / 2, -size / 2, size, size / 3, 0, size);
  ctx.bezierCurveTo(-size, size / 3, -size / 2, -size / 2, 0, 0);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    if (p.shape === "circle") {
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    } else {
      drawHeart(p.x, p.y, p.size * 3, p.color);
    }
    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();

// 🩷 Show caption for active slide
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  on: {
    slideChange: function () {
      document.querySelectorAll(".caption").forEach((cap) => (cap.style.opacity = 0));
      const active = document.querySelector(".swiper-slide-active .caption");
      if (active) {
        active.style.opacity = 1;
      }
    },
  },
});

const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

musicToggle.addEventListener('click', () => {
  if(bgMusic.paused){
    bgMusic.play();
    musicToggle.textContent = "🔊 Music On";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇 Music Off";
  }
});

const galleryBtn = document.getElementById('cute-gallery-btn');
const galleryModal = document.getElementById('cute-gallery-modal');
const closeModal = galleryModal.querySelector('.close');

galleryBtn.addEventListener('click', () => {
  galleryModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  galleryModal.style.display = 'none';
});

// Close when clicking outside modal content
window.addEventListener('click', (e) => {
  if(e.target === galleryModal){
    galleryModal.style.display = 'none';
  }
});

const voiceBtn = document.getElementById('voice-msg-btn');
const voiceModal = document.getElementById('voice-modal');
const voiceClose = voiceModal.querySelector('.close');

voiceBtn.addEventListener('click', () => {
  voiceModal.style.display = 'block';
});

voiceClose.addEventListener('click', () => {
  voiceModal.style.display = 'none';
});

// Close when clicking outside modal content
window.addEventListener('click', (e) => {
  if(e.target === voiceModal){
    voiceModal.style.display = 'none';
  }
});

const audio = document.getElementById('voice-audio');
document.getElementById('play-btn').addEventListener('click', ()=> audio.play());
document.getElementById('pause-btn').addEventListener('click', ()=> audio.pause());
document.getElementById('mute-btn').addEventListener('click', ()=> audio.muted = !audio.muted);

// Show popup on page load
window.addEventListener('load', () => {
  const popup = document.getElementById('welcome-popup');
  popup.classList.add('show');
});

// Buttons
const yesBtn = document.getElementById('popup-yes-btn');
const noBtn = document.getElementById('popup-no-btn');
const popup = document.getElementById('welcome-popup');
const exitOverlay = document.getElementById('exit-overlay');

// YES → continue
yesBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

// NO → fade to black and close tab
noBtn.addEventListener('click', () => {
  exitOverlay.classList.add('show');
  setTimeout(() => {
    window.close(); // only works if user opened in new tab
    window.location.href = "about:blank"; // fallback
  }, 1500);
});

// 📱 Desktop Mode Reminder with Floating Hearts
window.addEventListener('load', () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const reminder = document.getElementById('desktop-reminder');
  const closeBtn = document.getElementById('close-reminder');
  const heartContainer = document.querySelector('.reminder-hearts');

  // Show reminder only on mobile
  if (isMobile) {
    reminder.style.display = 'flex';

    // 🌸 Create floating hearts
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement('span');
      heart.classList.add('heart-particle');
      heart.textContent = ['💖', '💞', '💕'][Math.floor(Math.random() * 3)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 5 + 's';
      heart.style.fontSize = Math.random() * 20 + 14 + 'px';
      heartContainer.appendChild(heart);
    }
  }

  // Close button
  closeBtn.addEventListener('click', () => {
    reminder.style.display = 'none';
  });
});
