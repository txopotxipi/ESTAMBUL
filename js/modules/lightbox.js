export function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('[data-lightbox="gallery"]');
    
    if (!lightbox || !lightboxImg || !galleryImages.length) return;

    let currentImageIndex = 0;

    function openLightbox(image, index) {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        currentImageIndex = index;
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    function navigateImage(direction) {
        currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
        const newImage = galleryImages[currentImageIndex];
        lightboxImg.src = newImage.src;
        lightboxImg.alt = newImage.alt;
    }

    // Event Listeners
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => openLightbox(image, index));
    });

    const closeButton = lightbox.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }

    const prevButton = lightbox.querySelector('.prev');
    const nextButton = lightbox.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => navigateImage(-1));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => navigateImage(1));
    }

    // Cerrar lightbox al hacer clic fuera
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Eventos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                navigateImage(-1); // Deslizar a la derecha
            } else {
                navigateImage(1); // Deslizar a la izquierda
            }
        }
    }
}