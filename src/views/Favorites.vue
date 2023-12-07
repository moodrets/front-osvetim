<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <div class="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between md:flex-wrap">
                <h1 class="mb-0">Избранное:</h1>
                <div class="text-[16px] text-dark text-opacity-50 font-semibold md:text-[20px]">10 позиций</div>
            </div>
            <div class="flex mb-5 md:justify-end">
                <AppSort
                    :sort-items="[
                        {text: 'По популярности &darr;', key: 'popular', value: 'desc', current: true},
                        {text: 'По популярности &uarr;', key: 'popular', value: 'asc', current: false},
                        {text: 'По цене &darr;', key: 'price', value: 'desc', current: false},
                        {text: 'По цене &uarr;', key: 'price', value: 'asc', current: false},
                    ]"
                />
            </div>
            <ProductList
                :list="productListFavorites"
                :columns="4" 
            />
            <Pagination class="justify-center mt-10 lg:mt-14" />
        </div>
    </main>
</template>

<script setup lang="ts">
import ProductList from '@/components/blocks/ProductList.vue'
import { productListFavorites } from '@/reactive/ProductsLists';
</script>