import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

export function initArticlesItemSlider(): Swiper {
    const slider = new Swiper('.js-article-item-slider', {
        modules: [Pagination],
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: '.slider-pagination',
            renderBullet(index: number, className: string) {
                return `
                    <div class="slider-pagination__item ${className}"></div>
                `
            }
        },
    });

    return slider
}

export function initNotFoundPageSlider() {
    const slider = new Swiper('.js-not-found-page-slider', {
        slidesPerView: 'auto',
        speed: 600,
        spaceBetween: 0,
        centeredSlides: true,
        centeredSlidesBounds: true
    });

    return slider
}

export function initProductItemSlider() {
    const slider = new Swiper('.js-product-item-slider', {
        modules: [Pagination, Navigation],
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
        },
        pagination: {
            el: '.slider-pagination',
            renderBullet(index: number, className: string) {
                return `
                    <div class="slider-pagination__item ${className}"></div>
                `
            }
        },
    });

    return slider
}