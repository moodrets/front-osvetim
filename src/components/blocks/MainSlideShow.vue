<template>
    <div class="swiper w-full js-slide-show">
        <div class="swiper-wrapper">
            <div 
                v-for="slide in 3" 
                :key="slide"
                :style="{'background-image': `url(${routerPath}img/slide-show-${slide}.png)`}"
                class="swiper-slide bg-cover bg-center bg-no-repeat relative h-[680px] md:h-[800px]"
            >
                <div class="floating-block text-white text-left min-w-[270px] absolute left-10 top-10 md:left-16 md:top-16">
                    <router-link :to="{name: 'product-item', params: {id: 1}}"></router-link>
                    <div class="floating-block__label">Divinare</div>
                    <div class="floating-block__title md:text-[20px]">Встраиваемый<br> светильник Giorgetta<br> 1769/03 PL-1</div>
                    <div class="floating-block__price text-right">990 ₽</div>
                </div>
                <div class="floating-block text-white text-left min-w-[270px] absolute right-10 bottom-20 md:right-16 md:bottom-40">
                    <router-link :to="{name: 'product-item', params: {id: 1}}"></router-link>
                    <div class="floating-block__label">Divinare</div>
                    <div class="floating-block__title md:text-[20px]">Встраиваемый<br> светильник Giorgetta<br> 1769/03 PL-1</div>
                    <div class="floating-block__price text-right">990 ₽</div>
                </div>
            </div>
        </div>
        <div class="slider-pagination"></div>
    </div>
</template>

<script setup lang="ts">
import { useSwiper } from '@/composables/useSwiper';
import { routerPath } from '@/reactive/RouterPath';
import { initSlideShow } from '@/scripts/initSliders';

useSwiper(initSlideShow)
</script>