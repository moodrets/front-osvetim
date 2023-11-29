import Swiper from "swiper";
import { Pagination } from "swiper/modules";

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