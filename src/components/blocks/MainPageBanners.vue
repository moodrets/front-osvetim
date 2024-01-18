<template>
    <div class="relative">
        <div class="three-lamp three-lamp--main-banner"></div>
        <div class="swiper js-main-banner-slider">
            <div class="swiper-wrapper pointer-events-none md:pointer-events-auto">
                <div class="swiper-slide flex flex-col bg-dark h-[680px] md:h-[720px]">
                    <div class="pointer-events-auto text-center text-white mt-auto px-5 max-w-[700px] mx-auto">
                        <div class="uppercase text-[14px] font-light mb-8">Специальные предложения</div>
                        <div class="text-stone font-semibold leading-[1.1] text-[28px] md:text-[36px] xl:text-[48px]">
                            Самые актуальные<br> новинки <span class="text-white">уже в наличии</span>
                        </div>
                        <div class="mt-8">
                            <router-link
                                class="app-button app-button--light"
                                :to="{name: 'catalog'}"
                            >в каталог</router-link>
                        </div>
                    </div>
                    <TapeSlider class="mt-auto pointer-events-auto"></TapeSlider>
                </div>
                <div class="swiper-slide flex flex-col bg-neutral-100 bg-right-bottom bg-no-repeat h-[680px] md:h-[720px]" :style="{'background-image': `url(${routerPath}banners/banner-discount.png)`}">
                    <div class="pointer-events-auto text-center text-dark mt-auto px-5 max-w-[700px] mx-auto">
                        <div class="uppercase text-[14px] font-light mb-8">Специальные предложения</div>
                        <div class="font-semibold leading-[1.1] text-[64px] md:text-[96px]">10%</div>
                        <div class="font-semibold leading-[1.1] text-[28px] md:text-[48px]">скидка<br> <span class="text-stone">на первый заказ</span></div>
                        <div class="mt-8">
                            <router-link
                                class="app-button app-button--secondary"
                                :to="{name: 'catalog'}"
                            >в каталог</router-link>
                        </div>
                    </div>
                    <TapeSlider class="mt-auto pointer-events-auto"></TapeSlider>
                </div>
                <div class="swiper-slide flex flex-col bg-dark bg-center bg-no-repeat bg-cover h-[680px] md:h-[720px]" :style="{'background-image': `url(${routerPath}banners/banner-main.png)`}">
                    <div class="pointer-events-auto text-center text-white my-auto px-5 max-w-[700px] mx-auto">
                        <div class="uppercase text-[14px] font-light mb-8">Специальные предложения</div>
                        <div class="font-semibold leading-[1.1] text-[28px] md:text-[36px] xl:text-[48px]">
                            Бесплатный подбор<br> освещения по вашему<br> дизайн-проекту
                        </div>
                        <div class="mt-8">
                            <router-link
                                class="app-button app-button--light"
                                :to="{name: 'catalog'}"
                            >в каталог</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-prev">
                <div class="svg-icon">
                    <svg><use xlink:href="#arrow-left"></use></svg>
                </div>
            </div>
            <div class="slider-next">
                <div class="svg-icon">
                    <svg><use xlink:href="#arrow-right"></use></svg>
                </div>
            </div>
            <div class="slider-pagination bottom-auto top-8 z-[40]"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TapeSlider from '@/components/blocks/TapeSlider.vue'
import { useSwiper } from '@/composables/useSwiper';
import { routerPath } from '@/reactive/RouterPath';
import { initMainBannersSlider } from '@/scripts/initSliders';

useSwiper(initMainBannersSlider, 200)
</script>