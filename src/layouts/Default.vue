<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
    <Banner
        img="/banners/banner-footer.png"
    >
        <div class="text-[14px] text-white mb-1 uppercase">Новинка 2024</div>
        <div class="h1 text-white mb-5">Поможем подобрать освещение по фото и дизайн проекту</div>
        <div>
            <a href="#" class="app-button app-button--light">Смотреть</a>
        </div>
    </Banner>
    <Subscribe></Subscribe>
    <AppFooter></AppFooter>
</template>

<script setup lang="ts">
import AppHeader from '@/components/blocks/AppHeader.vue'
import AppFooter from '@/components/blocks/AppFooter.vue'
import Subscribe from '@/components/blocks/Subscribe.vue'
import Banner from '@/components/blocks/Banner.vue'
</script>