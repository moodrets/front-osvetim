<template>
    <div 
        class="grid gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-12"
        :class="[
            props.columns === 3 ? 'grid-cols-2 lg:grid-cols-3' : '',
            props.columns === 4  ? 'grid-cols-2 lg:grid-cols-4' : '',
        ]"
    >
        <div
            v-for="(product, productIndex) in productList" 
            :key="productIndex" 
            class="product-item relative"
            :class="product.addClass"
        >
            <div class="relative mb-2.5 group min-h-[156px] bg-neutral-100 lg:min-h-[310px]">
                <div class="pointer-events-none absolute top-2 right-2 flex items-center gap-2 z-[10] md:top-4 md:right-4">
                    <div class="rounded-icon w-8 h-8 md:w-11 md:h-11">
                        <div class="svg-icon svg-icon--nostyle">
                            <svg><use xlink:href="#percent"></use></svg>
                        </div>
                    </div>
                    <div class="rounded-icon w-8 h-8 md:w-11 md:h-11">
                        <div class="svg-icon">
                            <svg><use xlink:href="#spot"></use></svg>
                        </div>
                    </div>
                </div>
                <router-link 
                    :to="{name: 'product-item', params: {id: product.id}}"
                    class="absolute left-0 right-0 top-0 bottom-0 z-[5]"
                ></router-link>
                <img class="transition-all duration-300 group-hover:drop-shadow-lg w-full" :src="product.img" alt="">
            </div>
            <div class="text-[12px] leading-[1.4] uppercase text-dark text-opacity-50 mb-4">{{ product.article }}</div>
            <div class="text-[14px] text-dark font-semibold leading-[1.1] md:text-[20px]">{{ product.name }}</div>
            <div class="flex flex-wrap justify-end gap-2.5 mt-1.5 text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] md:text-[20px]">
                <div class="opacity-40 line-through">1990 ₽</div>
                <div>990 ₽</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath';
import { ref } from 'vue';

const props = withDefaults(
    defineProps<{
        columns?: number
    }>(),{
        columns: 3
    }
)

const productList = ref<{
    id: number,
    img: string,
    name: string,
    article: string,
    price: string,
    priceOld: string,
    addClass?: string
}[]>([
    {
        id: 1,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'lg:col-span-2'
    },
    {
        id: 2,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 4,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 5,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 6,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 7,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 8,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 9,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'lg:col-span-2'
    },
    {
        id: 10,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
])
</script>