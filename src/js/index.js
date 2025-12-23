// navigation js
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const offcanvas = document.getElementById('offcanvas');
const overlay = document.getElementById('overlay');

menuBtn.onclick = () => {
  offcanvas.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
};

closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;

function closeMenu() {
  offcanvas.classList.add('translate-x-full');
  overlay.classList.add('hidden');
}
