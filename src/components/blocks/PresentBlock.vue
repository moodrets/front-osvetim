<template>
    <section class="present-block">
        <div class="relative centered text-center flex flex-col items-center py-20 md:py-24 lg:py-32">
            <div class="text-left text-[14px] tracking-[-0.28px] absolute left-16 top-16 hidden xl:block">
                Интернет-магазин<br> осветительных приборов
            </div>
            <div class="mb-5">
                <img class="w-[100px]" :src="`${routerPath}img/logo-black.svg`" alt="">
            </div>
            <div class="mb-2.5 text-[48px] tracking-[-0.96px] font-semibold leading-[1.0] lg:text-[96px]">
                Светлые<br> решения<br> для жизни
            </div>
            <div class="text-[14px] tracking-[-0.28px] xl:hidden">
                Интернет-магазин<br> осветительных приборов
            </div>
            <div class="floating-block text-left min-w-[270px] absolute right-16 bottom-16 hidden xl:block">
                <router-link :to="{name: 'product-item', params: {id: 1}}"></router-link>
                <div class="floating-block__label">Divinare</div>
                <div class="floating-block__title">Встраиваемый<br> светильник Giorgetta<br> 1769/03 PL-1</div>
                <div class="floating-block__price text-right">990 ₽</div>
            </div>
            <router-link 
                :to="{name: 'catalog'}" 
                class="mt-5 app-button app-button--secondary"
            >в каталог</router-link>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath';
</script>