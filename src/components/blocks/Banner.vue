<template>
    <div class="app-banner group overflow-hidden relative h-[720px] flex flex-col items-center justify-center">
        <div 
            class="absolute left-0 right-0 top-0 bottom-0 z-1 bg-cover bg-dark bg-no-repeat bg-center transition-all duration-[0.4s] group-hover:scale-[1.05]"
            :style="{'background-image': `url(${img})`}"
        ></div>
        <div class="absolute z-2 left-5 right-5 top-5 h-[1px] bg-white bg-opacity-30 pointer-events-none transition-all duration-[0.4s] group-hover:bg-opacity-100 md:right-16 md:left-16"></div>
        <div class="text-center relative z-5 max-w-[480px] px-4">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        img?: string
    }>(),
    {
        img: '/banners/banner-footer.png',
    }
)
</script>