<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <div class="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between md:flex-wrap">
                <h1 class="mb-0">Бра с плафонами:</h1>
                <div class="text-[16px] text-dark text-opacity-50 font-semibold md:text-[20px]">18 позиций</div>
            </div>
            <div class="xl:flex xl:gap-5">
                <aside class="hidden xl:block xl:flex-none xl:w-[310px]">
                    <CatalogAside />
                </aside>
                <div class="xl:flex-1 xl:min-w-0">
                    <div class="flex mb-5 justify-between xl:justify-end">
                        <MobileFiltersBurger class="xl:hidden" />
                        <AppSort
                            v-cloak
                            dropdownClass="right-0 origin-top-right"
                            :sort-items="[
                                {text: 'По популярности &darr;', key: 'popular', value: 'desc', current: true},
                                {text: 'По популярности &uarr;', key: 'popular', value: 'asc', current: false},
                                {text: 'По цене &darr;', key: 'price', value: 'desc', current: false},
                                {text: 'По цене &uarr;', key: 'price', value: 'asc', current: false},
                            ]"
                        />
                    </div>
                    <ProductList
                        :list="productListCatalog"
                        :columns="3"
                    />
                    <Pagination class="mt-10 lg:mt-14" />
                </div>
            </div>
        </div>
    </main>
    <Offcanvas 
        name="mobileCatalogAside"
        class="xl:hidden" 
    >
        <CatalogAside />
	</Offcanvas>
</template>

<script setup lang="ts">
import { productListCatalog } from '@/reactive/ProductsLists';
import ProductList from '@/components/blocks/ProductList.vue'
import CatalogAside from '@/components/blocks/CatalogAside.vue'
</script>