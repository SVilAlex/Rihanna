const swiper = new Swiper(".swiper-container", {
    loop: true,
    
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
