const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideCount = slides.length;

function updateCarousel() {
    if (slideCount === 0) return;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const computedStyle = window.getComputedStyle(track);
    const gap = parseFloat(computedStyle.gap) || 15;

    const moveAmount = currentIndex * (slideWidth + gap);

    track.style.transform = `translateX(-${moveAmount}px)`;
}

function nextSlide() {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideCount - 1; 
    }
    updateCarousel();
}

let autoplayTimer = setInterval(nextSlide, 1500);

function restartAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 2000);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAutoplay(); 
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAutoplay();
});

window.addEventListener('DOMContentLoaded', updateCarousel);
window.addEventListener('resize', updateCarousel);