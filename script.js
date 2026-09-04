const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuBtn.textContent = navLinks.classList.contains('show') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuBtn.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('helloBtn').addEventListener('click', () => {
  document.getElementById('message').textContent =
    'Thanks for visiting my portfolio! 🚀';
});
