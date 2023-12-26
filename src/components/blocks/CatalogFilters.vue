<template>
    <div class="pb-2.5 border-b border-neutral-alpha">
        <div class="text-[12px] leading-[1.4] uppercase mb-5 text-dark">Параметры:</div>
        <div class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px] space-y-1">
            <Details v-for="filter in filtersList">
                <template #title="{toggle}">
                    <div @click="toggle" class="cursor-pointer">{{ filter.name }}</div>
                </template>
                <template #content>
                    <div class="flex py-2 gap-4">
                        <div class="flex-1 min-w-0">
                            <input class="app-form-control" type="text" placeholder="от">
                        </div>
                        <div class="flex-1 min-w-0">
                            <input class="app-form-control" type="text" placeholder="до">
                        </div>
                    </div>
                </template>
            </Details>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FiltersItem {
    name: string,
}

const filtersList = ref<FiltersItem[]>([
    {name: 'Бренд'},
    {name: 'Цена'},
    {name: 'Материал'},
    {name: 'Цоколь'},
    {name: 'Тип лампы'},
    {name: 'Цветовая температура, К'},
    {name: 'Световой поток, Лм'},
    {name: 'Мощность лампы, W'},
    {name: 'Стиль'},
    {name: 'Количество ламп'},
    {name: 'Напряжение, W'},
])
</script>