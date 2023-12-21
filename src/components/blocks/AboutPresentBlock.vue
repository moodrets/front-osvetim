<template>
    <div class="about-present-block py-10 flex group overflow-hidden relative z-[5] min-h-[390px] md:min-h-[792px] xl:min-h-[1030px]">
        <div 
            class="absolute left-0 right-0 top-0 bottom-0 -z-[2] bg-cover bg-no-repeat bg-center transition-all duration-[0.4s] group-hover:scale-[1.05]"
            :style="`background-image: url(${routerPath}img/about-present-pic.png)`"
        ></div>
        <div class="centered my-auto">
            <h1 class="text-[48px] leading-[1.0] mb-8 md:text-[96px]">SDL<br>СветМаркет</h1>
            <div class="relative bg-neutral max-w-[254px] mx-auto mb-5">
                <router-link
                    class="absolute inset-0"
                    :to="{name: 'catalog'}"
                ></router-link>
                <img :src="`${routerPath}img/product-pic-2.png`" alt="">
            </div>
            <router-link
                class="app-button app-button--primary"
                :to="{name: 'catalog'}"
            >в каталог</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath'
</script>