<template>
    <main class="product-view py-12 lg:py-20">
        <div class="centered">

            <div class="mb-10 md:flex lg:mb-24">
                <div class="flex-none md:w-[310px] lg:w-[400px] xl:w-[640px]">

                    <div class="swiper js-product-item-slider select-none">
                        <div class="pointer-events-none absolute top-4 right-4 flex items-center gap-2 z-[10]">
                            <div class="rounded-icon">
                                <div class="svg-icon svg-icon--nostyle">
                                    <svg><use xlink:href="#percent"></use></svg>
                                </div>
                            </div>
                            <div class="rounded-icon">
                                <div class="svg-icon">
                                    <svg><use xlink:href="#spot"></use></svg>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-wrapper">
                            <div v-for="(slide, slideIndex) in productPics" :key="slideIndex" class="swiper-slide h-auto">
                                <div class="relative flex items-center justify-center bg-neutral-100 h-full">
                                    <img :src="slide" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="slider-prev">
                            <div class="svg-icon">
                                <svg><use xlink:href="#arrow-left"></use></svg>
                            </div>
                        </div>
                        <div class="slider-next">
                            <div class="svg-icon">
                                <svg><use xlink:href="#arrow-right"></use></svg>
                            </div>
                        </div>
                        <div class="slider-pagination"></div>
                    </div>

                </div>
                <div class="pt-10 md:pt-0 md:min-w-0 md:pl-5 md:flex md:flex-1 md:flex-col">

                    <div class="mb-6 md:flex md:items-start">
                        <h1 class="mb-0">Loft It Бра Eye LOFT1714W-BL</h1>
                        <div class="hidden lg:flex flex-none flex-col items-end md:pl-2">
                            <div class="rounded-icon">
                                <div class="svg-icon">
                                    <svg><use xlink:href="#heart-filled"></use></svg>
                                </div>
                            </div>
                            <div class="mt-5 text-[20px] leading-[1.2] font-semibold xl:text-[28px]">990 ₽</div>
                            <a href="#" class="text-[10px] underline">Нашли дешевле?</a>
                        </div>
                    </div>

                    <div class="mb-8 text-[12px] uppercase text-dark text-opacity-60 leading-[1.4]">
                        <div>Артикул: LOFT1714W-BL</div>
                        <div>Штрихкод: 6961136016027</div>
                    </div>

                    <div class="mb-4">
                        <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                            <div class="text-dark text-opacity-50">Наличие (на складе):</div>
                            <div>5 шт.</div>
                        </div>
                        <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                            <div class="text-dark text-opacity-50">Коллекция:</div>
                            <div>Eye</div>
                        </div>
                        <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                            <div class="text-dark text-opacity-50">Производитель:</div>
                            <div>Loft it</div>
                        </div>
                    </div>

                    <a
                        v-scroll-to="{target: '#product-chars', offsetY: 140}"
                        href="#"
                        class="underline self-start text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]"
                    >Все характеристики</a>

                    <div class="mt-auto pt-5 lg:pt-8">
                        <div class="flex items-end gap-4 mb-5 text-dark text-opacity-50 text-[14px] leading-[1.3] lg:text-[20px] lg:font-semibold lg:gap-10 lg:mb-10">
                            <div class="rounded-icon mr-auto lg:hidden">
                                <div class="svg-icon">
                                    <svg><use xlink:href="#heart-filled"></use></svg>
                                </div>
                            </div>
                            <div>
                                <div class="mb-2.5">Количество:</div>
                                <CountButtons buttonsClass="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]" />
                            </div>
                            <div class="self-stretch">   
                                <div class="mb-2.5">Цена:</div>
                                <div class="text-[20px] text-dark font-semibold leading-[1.1] lg:text-[36px]">990 ₽</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-stretch gap-2 lg:flex-row md:max-w-[80%] lg:max-w-none">
                            <button type="button" class="whitespace-nowrap app-button app-button--primary">Добавить в корзину</button>
                            <button type="button" class="whitespace-nowrap app-button app-button--secondary">Купить в 1 клик</button>
                        </div>
                    </div>

                </div>
            </div>

            <div id="product-chars" class="pt-5 border-t border-neutral-alpha">
                <div class="h1">Характеристики</div>

                <AppTabs
                    :items="[
                        {label: 'Основные', key: 'general'},
                        {label: 'Внешний вид', key: 'view'},
                        {label: 'Габариты', key: 'dimensions'},
                        {label: 'Электрика', key: 'electrics'},
                        {label: 'Доп. информация', key: 'add'},
                        {label: 'Размер упаковки', key: 'packing_size'},
                    ]"
                >
                    <template #general>
                        <div class="md:flex md:gap-5">
                            <div class="md:flex-1 md:min-w-0">
                                <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                                    <div class="text-dark text-opacity-50">Бренд:</div>
                                    <div>Loft it </div>
                                </div>
                                <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                                    <div class="text-dark text-opacity-50">Стиль:</div>
                                    <div>Хай-тек</div>
                                </div>
                                <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                                    <div class="text-dark text-opacity-50">Страна производства:</div>
                                    <div>Китай</div>
                                </div>
                                <div class="py-2 border-b border-neutral text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] flex items-end justify-between lg:text-[20px]">
                                    <div class="text-dark text-opacity-50">Коллекция:</div>
                                    <div>Eye</div>
                                </div>
                            </div>
                            <div class="md:flex-1 md:min-w-0 hidden md:block">
                                <img :src="`${routerPath}img/product-char-pic.png`" alt="">
                            </div>
                        </div>
                    </template>
                    <template #view>
                        <h3>Внешний вид</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas vero inventore et. Fuga fugiat hic ab soluta facere saepe cumque commodi adipisci. Eum tenetur neque qui quis libero veniam?
                        </p>
                    </template>
                    <template #dimensions>
                        <h3>Габариты</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas vero inventore et. Fuga fugiat hic ab soluta facere saepe cumque commodi adipisci. Eum tenetur neque qui quis libero veniam?
                        </p>
                    </template>
                    <template #electrics>
                        <h3>Электрика</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas vero inventore et. Fuga fugiat hic ab soluta facere saepe cumque commodi adipisci. Eum tenetur neque qui quis libero veniam?
                        </p>
                    </template>
                    <template #add>
                        <h3>Доп. информация</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas vero inventore et. Fuga fugiat hic ab soluta facere saepe cumque commodi adipisci. Eum tenetur neque qui quis libero veniam?
                        </p>
                    </template>
                    <template #packing_size>
                        <h3>Размер упаковки</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas vero inventore et. Fuga fugiat hic ab soluta facere saepe cumque commodi adipisci. Eum tenetur neque qui quis libero veniam?
                        </p>
                    </template>
                </AppTabs>

            </div>

            <div class="mt-8 pt-5 border-t border-neutral-alpha lg:mt-20">
                <div class="flex flex-col items-start gap-4 mb-8 md:mb-14 md:items-center md:justify-between md:flex-row">
                    <div class="h1 mb-0">Товары из коллекции</div>
                    <a href="#" class="app-button app-button--secondary">Смотреть все</a>
                </div>
                <ProductList
                    :columns="4"
                    :list="productListFromCollection" 
                />
            </div>

            <div class="mt-8 pt-5 border-t border-neutral-alpha lg:mt-20">
                <div class="flex flex-col items-start gap-4 mb-8 md:mb-14 md:items-center md:justify-between md:flex-row">
                    <div class="h1 mb-0">Товары из категории</div>
                    <a href="#" class="app-button app-button--secondary">Смотреть все</a>
                </div>
                <ProductList 
                    :columns="4"
                    :list="productListFromCategory"
                />
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import { onMounted, onUnmounted, ref } from 'vue';
import { initProductItemSlider } from '@/scripts/initSliders';
import { routerPath } from '@/reactive/RouterPath';
import ProductList from '@/components/blocks/ProductList.vue'
import { productListFromCollection, productListFromCategory } from '@/reactive/ProductsLists'

let slider: Swiper | null = null

const productPics = ref([
    `${routerPath}img/product-pic-1.png`,
    `${routerPath}img/product-pic-2.png`,
    `${routerPath}img/product-pic-3.png`,
    `${routerPath}img/product-pic-4.png`,
])

onMounted(() => {
    slider = initProductItemSlider()
})

onUnmounted(() => {
    slider?.destroy()
})
</script>