window.initializeCarousel = function () {
    //console.log("initializeCarousel function called")
    const carousel = document.querySelector('.carousel');
    const leftBtn = document.querySelector('.btn-left');
    const rightBtn = document.querySelector('.btn-right');
    const images = Array.from(carousel.querySelectorAll('img'));
    let currentIndex = 0;
    
    //console.log('Left button:', leftBtn);
    //console.log('Right button:', rightBtn);
    //console.log('Carousel:', carousel);
    //console.log('Images:', images);

    //console.log('Initial visible count:', getVisibleImageCount());

    function getVisibleImageCount() {
    const containerWidth = carousel.offsetWidth;
    const imageWidth = images[0].offsetWidth;
    const visibleCount = Math.floor((containerWidth + 5) / imageWidth); // Added 5px buffer

    //console.log('Container width:', containerWidth, 'Image width:', imageWidth, 'Calculated visible count:', visibleCount);
    return visibleCount;
    }


    function moveCarousel(direction) {
        //console.log('moveCarousel called with direction:', direction);
        const totalImages = images.length;
        const visibleCount = getVisibleImageCount();
        //console.log('Total images:', totalImages, 'Visible count:', visibleCount);

        currentIndex += direction;
        //console.log('New currentIndex:', currentIndex);

        if (currentIndex < 0) {
            currentIndex = totalImages - visibleCount;
        } else if (currentIndex > totalImages - visibleCount) {
            currentIndex = 0;
        }
        //console.log('Adjusted currentIndex:', currentIndex);

        const offset = images.slice(0, currentIndex).reduce((sum, img) => sum + img.offsetWidth, 0);
        //console.log('Calculated offset:', offset);
        //console.log('Applying transform:', `translateX(-${offset}px)`);
        carousel.style.transform = `translateX(-${offset}px)`;
    }


    leftBtn.addEventListener('click', () => moveCarousel(-1));
    rightBtn.addEventListener('click', () => moveCarousel(1));

    // Handle window resize
    window.addEventListener('resize', () => {
        moveCarousel(0);  // Recalculate position on resize
    });

}

// Initialize the carousel when the DOM is fully loaded

window.carouselLoaded = function () {
    //console.log("DOM fully loaded, initializing carousel");
    window.initializeCarousel();
}