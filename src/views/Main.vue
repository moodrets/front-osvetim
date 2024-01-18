<template>
    <PresentBlock></PresentBlock>
    <ValuesBlock></ValuesBlock>
    <MainPageBanners></MainPageBanners>
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
    <MainSlideShow></MainSlideShow>
    <MainAboutBlock></MainAboutBlock>
    <InstagramBlock></InstagramBlock>
</template>

<script lang="ts" setup>
import { productListNewItems, productListSale } from '@/reactive/ProductsLists'
import PresentBlock from '@/components/blocks/PresentBlock.vue'
import ValuesBlock from '@/components/blocks/ValuesBlock.vue'
import MainCategories from '@/components/blocks/MainCategories.vue'
import ProductList from '@/components/blocks/ProductList.vue'
import MainSlideShow from '@/components/blocks/MainSlideShow.vue'
import InstagramBlock from '@/components/blocks/InstagramBlock.vue'
import MainAboutBlock from '@/components/blocks/MainAboutBlock.vue'
import MainPageBanners from '@/components/blocks/MainPageBanners.vue'
</script>