// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ===== MORE INFO TOGGLE =====
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  const isHidden = details.classList.contains('hidden');

  if (isHidden) {
    details.classList.remove('hidden');
    btn.textContent = 'Less info ↑';
    btn.classList.add('open');
  } else {
    details.classList.add('hidden');
    btn.textContent = 'More info ↓';
    btn.classList.remove('open');
  }
}
