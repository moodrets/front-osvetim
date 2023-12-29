<template>
    <AboutPresentBlock class="text-white text-center"></AboutPresentBlock>
    <AboutDescriptionBlock></AboutDescriptionBlock>
    <DescriptionBlock></DescriptionBlock>
    <Banner>
        <div class="text-center text-white max-w-[520px] px-4 mx-auto">
            <div class="pt-5 mb-[100px]">Ассортимент магазина:</div>
            <div class="text-[48px] mb-3 leading-[0.9] font-semibold md:text-[96px]" data-animated-block="fadeInDown">33 982</div>
            <div class="text-[28px] text-white text-opacity-50 mb-10 font-semibold leading-[1.1] md:text-[36px]" data-animated-block="fadeInDown">уникальных товаров для Вас и Ваших близких</div>
            <div data-animated-block="zoomIn">
                <router-link 
                    :to="{name: 'catalog'}"
                    class="app-button app-button--light"
                >в каталог</router-link>
            </div>
        </div>
        <TapeSlider class="mt-20" />
    </Banner>
    <AboutSlideShow></AboutSlideShow>
    <AboutSlideShow></AboutSlideShow>
    <AboutSlideShow></AboutSlideShow>
    <TextPictureBlock></TextPictureBlock>
    <Partners></Partners>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Swiper} from 'swiper'
import { initSlideshow } from '@/scripts/initSliders'
import Partners from '@/components/blocks/Partners.vue'
import AboutSlideShow from '@/components/blocks/AboutSlideShow.vue'
import TextPictureBlock from '@/components/blocks/TextPictureBlock.vue'
import Banner from '@/components/blocks/Banner.vue'
import TapeSlider from '@/components/blocks/TapeSlider.vue'
import DescriptionBlock from '@/components/blocks/DescriptionBlock.vue'
import AboutPresentBlock from '@/components/blocks/AboutPresentBlock.vue'
import AboutDescriptionBlock from '@/components/blocks/AboutDescriptionBlock.vue'

let slider: Swiper | Swiper[] | null = null

onMounted(() => {
    slider = initSlideshow()
})

onUnmounted(() => {
    if (Array.isArray(slider)) {
        slider.forEach(swiper => swiper.destroy())
    } else {
        slider?.destroy()
    }
})
</script>