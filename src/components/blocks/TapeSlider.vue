<template>
    <div class="swiper js-tape-slider">
        <div class="swiper-wrapper">
            <div 
                v-for="(slide, slideIndex) in slides" 
                :key="slideIndex" 
                class="swiper-slide w-[160px] py-3 px-2 md:w-[220px]"
            >
                <div class="bg-neutral-100 relative group">
                    <router-link
                        :to="{name: 'product-item', params: {id: 1}}"
                        class="absolute left-0 right-0 top-0 bottom-0 z-[5]"
                    ></router-link>
                    <img 
                        class="transition-all duration-300 group-hover:drop-shadow-lg w-full" 
                        :src="slide.img" 
                        alt=""
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Swiper from 'swiper';
import { initTapeSlider } from '@/scripts/initSliders';
import { routerPath } from '@/reactive/RouterPath';

let slider: Swiper | null = null

const slides = ref([
    {
        img: `${routerPath}img/product-pic-2.png`,
    },
    {
        img: `${routerPath}img/product-pic-3.png`,
    },
    {
        img: `${routerPath}img/product-pic-4.png`,
    },
    {
        img: `${routerPath}img/product-pic-2.png`,
    },
    {
        img: `${routerPath}img/product-pic-3.png`,
    },
    {
        img: `${routerPath}img/product-pic-4.png`,
    },
    {
        img: `${routerPath}img/product-pic-2.png`,
    },
    {
        img: `${routerPath}img/product-pic-3.png`,
    },
    {
        img: `${routerPath}img/product-pic-4.png`,
    },
    {
        img: `${routerPath}img/product-pic-2.png`,
    },
    {
        img: `${routerPath}img/product-pic-3.png`,
    },
    {
        img: `${routerPath}img/product-pic-4.png`,
    },
])

onMounted(() => {
    slider = initTapeSlider()
})

onUnmounted(() => {
    slider?.destroy()
})
</script>