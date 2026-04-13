// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Stagger children of grids
document.querySelectorAll('produto-grid .pq-zuno-grid, .tecnologia-grid .depoimentos-grid, .grupos-grid .grupo-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
});
