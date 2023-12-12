<template>
    <section class="values-block">
        <div class="centered">
            <div class="grid grid-cols-2 gap-y-5 py-5 border-t border-neutral border-opacity-40 lg:grid-cols-4">
                <span class="h-[1px] bg-neutral bg-opacity-40 col-span-2 row-start-2 lg:hidden"></span>
                <div
                    v-for="(block, blockIndex) in blocksData"
                    :key="blockIndex"
                    class="border-r border-neutral border-opacity-40 pr-4 odd:pl-4 lg:pl-4 lg:first-of-type:pl-0 lg:last:border-opacity-0"
                >
                    <div class="rounded-icon pointer-events-none">
                        <div class="svg-icon">
                            <svg><use :xlink:href="`#${block.icon}`"></use></svg>
                        </div>
                    </div>
                    <div class="mt-7 text-[14px] font-semibold leading-[1.1] tracking-[-0.28px] md:text-[20px]" v-html=block.label></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const blocksData = ref([
    {
        icon: 'light',
        label: 'помощь в подборе<br> освещения'
    },
    {
        icon: 'delivery',
        label: 'бесплатная<br> доставка'
    },
    {
        icon: 'pay',
        label: 'оплата при<br> получении'
    },
    {
        icon: 'geo',
        label: 'пункты выдачи по<br> всей России'
    },
])
</script>