<template>
    <div class="app-banner group overflow-hidden relative z-[5] min-h-[720px] py-5 bg-dark">
        <div 
            class="absolute left-0 right-0 top-0 bottom-0 -z-[2] bg-cover bg-no-repeat bg-center transition-all duration-[0.4s] group-hover:scale-[1.05]"
            :style="img ? `background-image: url(${img})` : {}"
        ></div>
        <div class="absolute -z-[1] left-5 right-5 top-5 h-[1px] bg-white bg-opacity-30 pointer-events-none transition-all duration-[0.4s] group-hover:bg-opacity-100 md:right-16 md:left-16"></div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        img?: string
    }>(),
    {
        img: '',
    }
)
</script>