export function initAnimations() {
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
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems) {
        galleryItems.forEach(item => observer.observe(item));
    }
}