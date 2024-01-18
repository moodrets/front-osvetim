<template>
    <div class="swiper w-full js-slide-show">
        <div class="swiper-wrapper">
            <div 
                v-for="slide in 5" 
                :key="slide"
                :style="{'background-image': `url(${routerPath}img/slide-show-${slide}.png)`}"
                class="swiper-slide bg-cover bg-center bg-no-repeat relative h-[680px] md:h-[800px]"
            >
                <div class="centered text-white">
                    <div class="h-[1px] bg-neutral-alpha my-5"></div>
                    <div class="h1">Заголовок {{ slide }}</div>
                    <a href="#" class="app-button app-button--light">смотреть</a>
                </div>
            </div>
        </div>
        <div class="slider-pagination"></div>
    </div>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath'
import { useSwiper } from '@/composables/useSwiper'
import { initSlideShow } from '@/scripts/initSliders'

useSwiper(initSlideShow)
</script>