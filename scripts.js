// Scroll smooth deja existent
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  showPopup("Hai să lucrăm împreună!");
}

// ------------------------
// Fade-in efect la scroll
// ------------------------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .centered-title').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ------------------------
// Typing effect în hero
// ------------------------
const heroTitle = document.querySelector('.hero h2');
const fullText = "Construiesc site-uri care impresionează.";
let index = 0;

function type() {
  if (index < fullText.length) {
    heroTitle.textContent += fullText.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
heroTitle.textContent = "";
type();

// ------------------------
// Light/Dark mode switch
// ------------------------
const toggleButton = document.createElement('button');
toggleButton.textContent = "🌙";
toggleButton.className = "mode-toggle";
document.body.appendChild(toggleButton);

toggleButton.onclick = () => {
  document.body.classList.toggle('light-mode');
  toggleButton.textContent = document.body.classList.contains('light-mode') ? "☀️" : "🌙";
};

// ------------------------
// Popup alert
// ------------------------
function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.classList.add('show'), 100);
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => document.body.removeChild(popup), 300);
  }, 2500);
}
const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = "🌓";
toggleBtn.className = "mode-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Burger menu logic
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});