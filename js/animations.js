document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer para elementos de la galería
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos de la galería
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });

    // Observar la crónica
    const cronicaContent = document.querySelector('.cronica-content');
    if (cronicaContent) {
        observer.observe(cronicaContent);
    }
});