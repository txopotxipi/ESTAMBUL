document.addEventListener('DOMContentLoaded', () => {
    // Animación para la entrada de párrafos
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los párrafos de la crónica
    document.querySelectorAll('.cronica-content p').forEach(paragraph => {
        observer.observe(paragraph);
    });

    // Tiempo de lectura estimado
    const content = document.querySelector('.cronica-content');
    if (content) {
        const words = content.textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // 200 palabras por minuto
        const readingTimeElement = document.querySelector('.reading-time');
        if (readingTimeElement) {
            readingTimeElement.textContent = `Tiempo de lectura: ${readingTime} min`;
        }
    }
});