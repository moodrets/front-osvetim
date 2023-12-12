<template>
    <section class="instagram-block relative text-center pb-6">
        <div class="centered pt-20 border-t border-neutral border-opacity-50 md:pt-40">
            <div class="h1">Мы в Instagram:</div>
            <div class="mb-8">
                Присоединяйтесь, чтобы узнать о нас<br> больше. Мы будем вам всегдя рады!
            </div>
            <div class="mb-20 md:mb-[116px]">
                <a href="https://www.instagram.com/" target="_blank" class="w-full app-button app-button--secondary sm:w-auto">instagram*</a>
            </div>
        </div>
        <div 
            class="text-center h-[220px] bg-left" 
            :style="{'background-image': `url(${routerPath}img/inst-photo-line.png)`}"
        ><!-- TODO: надо заменить этот div на виджет instagram --></div>
    </section>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath';
</script>