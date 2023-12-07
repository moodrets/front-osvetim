<template>
    <div 
        class="grid gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-12"
        :class="[
            props.columns === 3 ? 'grid-cols-2 lg:grid-cols-3' : '',
            props.columns === 4  ? 'grid-cols-2 lg:grid-cols-4' : '',
        ]"
    >
        <ProductItem
            v-for="(product, productIndex) in list"
            :key="productIndex"
            :product="product"
        ></ProductItem>
    </div>
</template>

<script setup lang="ts">
import { IProductItem } from '@/reactive/ProductsLists';
import ProductItem from '@/components/blocks/ProductItem.vue'

const props = withDefaults(
    defineProps<{
        columns?: number,
        list?: IProductItem[]
    }>(),{
        columns: 3,
        list: () => [] 
    }
)
</script>