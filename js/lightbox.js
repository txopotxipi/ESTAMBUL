document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('[data-lightbox="gallery"]');
    let currentImageIndex = 0;

    function openLightbox(image, index) {
        lightboxImg.src = image.src;
        currentImageIndex = index;
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    function navigateImage(direction) {
        currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => openLightbox(image, index));
    });

    document.querySelector('.lightbox .close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox .prev').addEventListener('click', () => navigateImage(-1));
    document.querySelector('.lightbox .next').addEventListener('click', () => navigateImage(1));

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Touch events for mobile
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
                navigateImage(-1); // Swipe right
            } else {
                navigateImage(1); // Swipe left
            }
        }
    }
});