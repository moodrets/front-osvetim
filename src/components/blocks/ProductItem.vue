<template>
    <div
        class="product-item relative"
        :class="product.addClass"
    >
        <div class="relative mb-2.5 min-h-[156px] bg-neutral-100 flex items-center justify-center transition-all duration-300 lg:min-h-[310px] hover:shadow-lg">
            <div class="pointer-events-none absolute z-[10] top-2 right-2 flex items-center gap-2 md:top-4 md:right-4">
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
            <img class="w-full" :src="product.img" alt="">
        </div>
        <div class="text-[12px] leading-[1.4] uppercase text-dark text-opacity-50 mb-4">{{ product.article }}</div>
        <div class="text-[14px] text-dark font-semibold leading-[1.1] md:text-[20px]">{{ product.name }}</div>
        <div class="flex flex-wrap justify-end gap-2.5 mt-1.5 text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] md:text-[20px]">
            <div class="opacity-40 line-through">1990 ₽</div>
            <div>990 ₽</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProductItem } from '@/reactive/ProductsLists';

const props = defineProps<{
    product: IProductItem
}>()
</script>