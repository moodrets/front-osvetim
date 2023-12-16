<template>
    <div class="swiper w-full js-slide-show">
        <div class="swiper-wrapper">
            <div 
                v-for="slide in 3" 
                :key="slide"
                :style="{'background-image': `url(${routerPath}img/slide-show-${slide}.png)`}"
                class="swiper-slide bg-cover bg-center bg-no-repeat relative h-[680px] md:h-[800px]"
            >
                
            </div>
        </div>
        <div class="slider-pagination"></div>
    </div>
</template>

<script setup lang="ts">
import { Swiper} from 'swiper'
import { initSlideshow } from '@/scripts/initSliders'
import { onMounted, onUnmounted } from 'vue'
import { routerPath } from '@/reactive/RouterPath'

let slider: Swiper | null = null

onMounted(() => {
  slider = initSlideshow()
})

onUnmounted(() => {
  slider?.destroy()
})
</script>