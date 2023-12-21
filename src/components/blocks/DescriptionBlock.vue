<template>
    <section class="description-block py-5">
        <div class="centered">
            <div class="pt-5 border-t border-neutral-alpha mb-10 text-[14px] leading-[1.3] xl:mb-[100px]">Преимущества:</div>
            <div 
                v-for="(item, itemIndex) in desciptionItems" 
                :key="itemIndex"
                class="py-2 border-b border-neutral-alpha mb-4 xl:flex xl:gap-3"
            >
                <div class="mb-4 font-semibold leading-[1.0] tracking-[-0.84px] text-[28px] md:text-[48px] xl:text-[76px] xl:flex-1 xl:min-w-0 xl:mb-0">{{ item.title }}</div>
                <div class="text-[14px] leading-[1.3] tracking-[-0.28px] md:pb-5 xl:w-[274px] xl:flex-none xl:pb-0">{{ item.text }}</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const desciptionItems = ref<{
    title: string, 
    text: string
}[]>([
    {
        title: 'Качество',
        text: 'На нашем сайте вы можете приобрести качественные осветительные приборы от известных брендов домой или в офис.'
    },
    {
        title: 'Широкий выбор',
        text: 'На нашем сайте вы можете приобрести качественные осветительные приборы от известных брендов домой или в офис.'
    },
    {
        title: 'Регулярные новинки',
        text: 'На нашем сайте вы можете приобрести качественные осветительные приборы от известных брендов домой или в офис.'
    },
    {
        title: 'Гарантия',
        text: 'На нашем сайте вы можете приобрести качественные осветительные приборы от известных брендов домой или в офис.'
    },
    {
        title: 'Индивидуальный подход',
        text: 'На нашем сайте вы можете приобрести качественные осветительные приборы от известных брендов домой или в офис.'
    },
])
</script>