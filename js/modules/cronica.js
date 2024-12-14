export function initCronica() {
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

    // Observar párrafos de la crónica
    const paragraphs = document.querySelectorAll('.cronica-content p');
    if (paragraphs) {
        paragraphs.forEach(paragraph => observer.observe(paragraph));
    }

    // Calcular tiempo de lectura
    const content = document.querySelector('.cronica-content');
    const readingTimeElement = document.querySelector('.reading-time');
    
    if (content && readingTimeElement) {
        const words = content.textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // 200 palabras por minuto
        readingTimeElement.textContent = `Tiempo de lectura: ${readingTime} min`;
    }
}