<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <h1>История заказов:</h1>

            <div class="xl:flex">
                <div class="mb-10 xl:w-[380px] xl:flex-none xl:mb-0">
                    <nav class="hidden p-5 rounded-lg bg-neutral-100 xl:p-10 xl:sticky xl:top-[134px] xl:block">
                        <PersonalMenu></PersonalMenu>
                    </nav>
                    <div class="xl:hidden">
                        <PersonalMenuMobile></PersonalMenuMobile>
                    </div>
                </div>

                <div class="xl:flex-1 xl:min-w-0 xl:pl-14">
                    
                    <div class="orders-items-list space-y-10">
                        <div v-for="item in 4" :key="item" class="order-item flex">
                            <div class="relative text-center mr-5 w-[72px] md:w-[200px] md:mb-0 group">
                                <a href="#" class="absolute inset-0 z-[5]"></a>
                                <img class="transition-all duration-300 object-cover inline-block group-hover:drop-shadow-lg" :src="`${routerPath}img/cart-pic-1.png`" alt="">
                            </div>
                            <div class="flex-1 flex flex-col items-start min-w-0 border-b border-neutral [&.is-active-link]:text-brand pb-5">
                                <div class="mb-5 lg:flex lg:w-full">
                                    <div>
                                        <div class="text-[14px] font-semibold leading-[1.0] md:text-[28px]">
                                            Заказ №21939239023
                                        </div>
                                        <div class="mt-2.5 text-[10px] font-medium text-dark text-opacity-40 md:text-[14px]">доставлен 25 сентября 2023</div>
                                    </div>
                                    <div class="text-[14px] mt-4 font-semibold leading-[1.2] md:text-[20px] lg:flex-none lg:text-right lg:ml-auto lg:mt-0">
                                        <div>990 ₽</div>
                                        <div class="text-dark text-opacity-40 line-through">3 990 ₽</div>
                                    </div>
                                </div>
                                <!--  -->
                                <div class="cursor-pointer text-dark text-opacity-50 border-b border-dark border-opacity-50 text-[14px] font-semibold leading-[1.1] mt-auto md:text-[20px]">Состав заказа</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a
                            href="#"
                            @click.prevent="$router.go(-1)"
                            class="app-button app-button--secondary w-full sm:w-auto xl:hidden"
                        >вернуться назад</a>
                    </div>

                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import PersonalMenu from '@/components/blocks/PersonalMenu.vue'
import PersonalMenuMobile from '@/components/blocks/PersonalMenuMobile.vue'
import { routerPath } from '@/reactive/RouterPath';
</script>