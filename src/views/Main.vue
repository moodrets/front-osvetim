<template>
    <PresentBlock></PresentBlock>
    <ValuesBlock></ValuesBlock>
    <Banner
        :img="`${routerPath}banners/banner-2.png`"
    >
        <div class="h1 text-white mb-5">Баннер</div>
        <div>
            <a href="#" class="app-button app-button--light">Смотреть</a>
        </div>
    </Banner>
    <MainCategories></MainCategories>
    <div class="centered">
        <div class="products-block pt-5 mb-10 border-t border-neutral-alpha md:mb-20">
            <div class="flex flex-col items-start gap-4 mb-8 md:mb-14 md:items-center md:justify-between md:flex-row">
                <div class="h1 mb-0">Распродажа</div>
                <a href="#" class="app-button app-button--secondary">Смотреть все</a>
            </div>
            <ProductList
                :columns="4"
                :list="productListSale"
            />
            <div class="flex justify-center mt-10 lg:mt-16">
                <a href="#" class="app-button app-button--secondary">Смотреть все</a>
            </div>
        </div>
        <div class="products-block pt-5 mb-10 border-t border-neutral-alpha md:mb-20">
            <div class="flex flex-col items-start gap-4 mb-8 md:mb-14 md:items-center md:justify-between md:flex-row">
                <div class="h1 mb-0">Новинки</div>
                <a href="#" class="app-button app-button--secondary">Смотреть все</a>
            </div>
            <ProductList 
                :columns="4"
                :list="productListNewItems"
            />
            <div class="flex justify-center mt-10 lg:mt-16">
                <a href="#" class="app-button app-button--secondary">Смотреть все</a>
            </div>
        </div>
    </div>
    <SlideShow></SlideShow>
    <MainAboutBlock></MainAboutBlock>
    <InstagramBlock></InstagramBlock>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath'
import { productListNewItems, productListSale } from '@/reactive/ProductsLists'
import PresentBlock from '@/components/blocks/PresentBlock.vue'
import ValuesBlock from '@/components/blocks/ValuesBlock.vue'
import Banner from '@/components/blocks/Banner.vue'
import MainCategories from '@/components/blocks/MainCategories.vue'
import ProductList from '@/components/blocks/ProductList.vue'
import SlideShow from '@/components/blocks/SlideShow.vue'
import InstagramBlock from '@/components/blocks/InstagramBlock.vue'
import MainAboutBlock from '@/components/blocks/MainAboutBlock.vue'
</script>