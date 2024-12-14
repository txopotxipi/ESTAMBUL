import { initNavigation } from './modules/navigation.js';
import { initLightbox } from './modules/lightbox.js';
import { initAnimations } from './modules/animations.js';
import { initCronica } from './modules/cronica.js';
import { initVideos } from './modules/videos.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLightbox();
    initAnimations();
    initCronica();
    initVideos();
});