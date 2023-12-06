<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <h1>Корзина:</h1>

            <div class="xl:flex">
                <div class="xl:flex-1 xl:min-w-0 xl:pr-14">

                    <div class="cart-items-list space-y-10">
                        <div v-for="item in 4" :key="item" class="cart-item flex border-b border-neutral md:border-none">
                            <div class="group relative mr-5 text-center w-[72px] md:w-[200px]">
                                <a href="#" class="absolute inset-0 z-[5]"></a>
                                <img class="transition-all duration-300 object-cover inline-block group-hover:drop-shadow-lg" :src="`${routerPath}img/cart-pic-1.png`" alt="">
                            </div>
                            <div class="flex-1 min-w-0 md:border-b border-neutral pb-4">
                                <div class="lg:flex mb-4">
                                    <div class="text-[14px] font-semibold leading-[1.0] md:text-[20px] lg:max-w-[60%]">
                                        Коннектор прямой (соединители в комплекте) для магнитного шинопровода Over 135032
                                    </div>
                                    <div class="text-[20px] mt-4 font-semibold leading-[1.2] lg:flex-none lg:text-right lg:ml-auto lg:mt-0">
                                        <div>990 ₽</div>
                                        <div class="text-dark text-opacity-40 line-through">3 990 ₽</div>
                                    </div>
                                </div>
                                <div class="text-[10px] font-medium text-dark text-opacity-40 uppercase mb-4 md:text-[12px]">Артикул: LOFT1714W-BL</div>
                                <div class="flex items-center gap-4 select-none relative z-10 -ml-[94px] md:ml-auto">
                                    <CountButtons></CountButtons>
                                    <div class="flex items-center gap-2 ml-auto">
                                        <div class="rounded-icon">
                                            <div class="svg-icon">
                                                <svg><use xlink:href="#heart-filled"></use></svg>
                                            </div>
                                        </div>
                                        <div class="rounded-icon">
                                            <div class="svg-icon">
                                                <svg><use xlink:href="#close"></use></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="pt-8 xl:pt-0 xl:w-[380px] xl:flex-none">
                    
                    <div class="p-5 rounded-lg bg-neutral-100 xl:p-10 xl:sticky xl:top-[134px]">
                        <div class="h4">Ваш заказ:</div>

                        <div class="flex justify-between items-end mb-1">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Товары (4):</div>
                            <div class="h4 mb-0">34 328 ₽</div>
                        </div>

                        <div class="flex justify-between items-end mb-6">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Скидка:</div>
                            <div class="h6 mb-0 text-brand">-2 000 ₽</div>
                        </div>

                        <div class="flex justify-between items-end mb-1">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Вес:</div>
                            <div class="h6 mb-0">5,97 кг</div>
                        </div>

                        <div class="flex justify-between items-end mb-6">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Габариты:</div>
                            <div class="h6 mb-0">0,03308 м3</div>
                        </div>

                        <div class="mb-7">
                            <form action="#">
                                <input type="text" class="app-form-control" placeholder="Промокод">
                            </form>
                        </div>

                        <div>
                            <router-link class="app-button app-button--dark" :to="{'name': 'order'}">
                                перейти к оформлению
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import CountButtons from '@/components/common/CountButtons.vue';
import { routerPath } from '@/reactive/RouterPath';
</script>