const sliderProduct = () => {
    const productSlider = document.querySelector('.new-products__swiper')
    const buttonNext = document.querySelector('.new-products__btn--next')
    const buttonPrev = document.querySelector('.new-products__btn--prev')

    const swiper = new Swiper(productSlider, {
        autoHeight: true,
        direction: "horizontal",
        grabCursor: true,
        watchOverflow: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true
        },
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 0,
            },

            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 1,
            },
        },
        loop: true,
    });
};

const sliderPromo = () => {
    promoSlider = document.querySelector('.swiper__promo');
    buttonNext = document.querySelector('.promo__btn--next');
    buttonPrev = document.querySelector('.promo__btn--prev');
    const swiper = new Swiper(promoSlider, {
        autoHeight: false,
        autiplay: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        autoplay: {
            delay: 10000,
        },
        direction: "horizontal",
        watchOverflow: false,
        spaceBetween: 0,
        sliderPerView: 1,
    })
}

window.addEventListener('DOMContentLoaded', () => {
    sliderProduct();
    sliderPromo();
});
