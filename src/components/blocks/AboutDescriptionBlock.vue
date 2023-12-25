<template>
    <section class="py-9">
        <div class="centered">
            <h2
                class="text-[20px] mb-10 md:text-[36px] xl:text-[48px] xl:mb-[140px]"
                data-animated-block="fadeInRight"
            >– это российская торговая<br>компания, занимающаяся<br> продажей осветительных<br> приборов для дома и офиса.</h2>
            <div class="grid grid-cols-2 gap-5 pt-5 border-t border-neutral border-opacity-40">

                <div class="col-span-2 md:mb-10 xl:col-span-1">
                    <div class="grid grid-cols-2 gap-y-5">
                        <span class="h-[1px] bg-neutral bg-opacity-40 col-span-2 row-start-2"></span>
                        <div
                            v-for="(block, blockIndex) in descValues"
                            :key="blockIndex"
                            class="border-r border-neutral border-opacity-40 pt-8 pr-4 odd:pl-4 md:odd:border-opacity-0"
                            data-animated-block="fadeInRight"
                        >
                            <div class="text-[36px] leading-[1.0] font-semibold mb-2 md:text-[48px]">{{ block.value }}</div>
                            <div class="text-[14px] leading-[1.0] tracking-[-0.28px] md:text-[16px]" v-html=block.label></div>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 md:col-span-1 xl:row-span-2" data-animated-block="fadeInUp">
                    <div class="mb-10">
                        <img :src="`${routerPath}img/about-block-pic-1.png`" alt="">
                    </div>
                    <div class="text-style-base mb-6">
                        Наши предметы освещения для квартиры, дома или офиса соответствуют высшим стандартам качества и рассчитаны на долгосрочную работу.
                    </div>
                    <router-link
                        class="app-button app-button--secondary w-full sm:w-auto"
                        :to="{name: 'catalog'}"
                    >В каталог</router-link>
                </div>

                <div class="col-span-2 md:col-span-1" data-animated-block="fadeInUp">
                    <div class="mb-10">
                        <img :src="`${routerPath}img/about-block-pic-2.png`" alt="">
                    </div>
                    <div class="text-style-base">
                        Ассортимент включает проверенную продукцию из России, Италии, Испании, Германии, Австрии, Венгрии, Чехии, США и других стран. Мы регулярно обновляем каталог и добавляем новые позиции.
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath';
import { descValues } from '@/reactive/DescValues'
</script>