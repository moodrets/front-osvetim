<template>
    <section class="main-about-block pt-10 pb-[100px]">
        <div class="centered">
            <div 
                data-animated-block="fadeInRight" 
                class="h1 mb-10 leading-[.9] lg:text-[98px] xl:max-w-[80%]"
            >Качество<br>Широкий выбор<br>Комплексный подход</div>
            <div class="xl:flex xl:gap-4">
                <div class="xl:flex-1 xl:min-w-0">
                    <div class="grid grid-cols-2 gap-y-5 pt-5 pb-12 border-t border-neutral border-opacity-40 xl:pb-0">
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
                <div class="lg:flex-1 lg:min-w-0">
                    <div data-animated-block="fadeInDown">
                        <img class="w-full" :src="`${routerPath}img/main-about-pic.png`" alt="">
                    </div>
                </div>
            </div>

            <div class="mt-16 xl:flex xl:gap-4" data-animated-block="fadeInDown">
                <div class="xl:flex-1 xl:min-w-0">
                    <div class="h6">О нас</div>
                </div>
                <div class="xl:flex-1 xl:min-w-0">
                    <div class="text-style-base mb-10">
                        SDL СветМаркет – это российская торговая компания, занимающаяся продажей осветительных приборов для дома и офиса. Наши предметы освещения для квартиры или дома соответствуют высшим стандартам качества и рассчитаны на долгосрочную работу. В каталогах представлены потолочные люстры, бра (настенные светильники), торшеры, настольные лампы и другие товары для создания системы освещения от отечественных и зарубежных брендов.
                    </div>
                    <a href="#" class="app-button app-button--secondary">Узнать больше</a>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath'
import { descValues } from '@/reactive/DescValues'
</script>