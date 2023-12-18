<template>
    <nav class="mb-10 pb-2.5 border-b border-neutral-alpha">
        <div class="text-[12px] leading-[1.4] uppercase mb-5 text-dark">Категории:</div>
        <div class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px] space-y-1">
            <Details v-for="category in categoriesList">
                <template #title>
                    <a href="#" class="text-dark decor-link">{{ category.name }}</a>
                    <span class="text-[14px] text-dark text-opacity-40 ml-2">{{ category.count }}</span>
                </template>
                <template #content>
                    <ul class="px-5 py-2.5 text-[16px] font-semibold leading-[1.1] tracking-[-0.8px] space-y-1">
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Подвесные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">270</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Потолочные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">13</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Каскадные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">455</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Хрустальные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">78</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Большие</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">123</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">На штанге</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">4855</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Светодиодные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">1258</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Кольца</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">7</span>
                        </li>
                    </ul>
                </template>
            </Details>
        </div>
    </nav>

    <nav class="mb-10 pb-2.5 border-b border-neutral-alpha">
        <div class="text-[12px] leading-[1.4] uppercase mb-5 text-dark">Категории:</div>
        <div class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px] space-y-1">
            <Details v-for="category in specialOffers">
                <template #title>
                    <a href="#" class="text-dark decor-link">{{ category.name }}</a>
                    <span class="text-[14px] text-dark text-opacity-40 ml-2">{{ category.count }}</span>
                </template>
                <template #content>
                    <ul class="px-5 py-2.5 text-[16px] font-semibold leading-[1.1] tracking-[-0.8px] space-y-1">
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Подвесные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">270</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Потолочные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">13</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Каскадные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">455</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Хрустальные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">78</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Большие</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">123</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">На штанге</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">4855</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Светодиодные</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">1258</span>
                        </li>
                        <li class="flex items-center">
                            <a href="#" class="decor-link">Кольца</a>
                            <span class="text-[14px] text-dark text-opacity-40 ml-2">7</span>
                        </li>
                    </ul>
                </template>
            </Details>
        </div>
    </nav>

    <div class="pb-2.5 border-b border-neutral-alpha">
        <div class="text-[12px] leading-[1.4] uppercase mb-5 text-dark">Параметры:</div>
        <div class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px] space-y-1">
            <Details v-for="filter in filtersList">
                <template #title>
                    <a href="#" class="text-dark decor-link">{{ filter.name }}</a>
                </template>
                <template #content>
                    <div class="flex py-2 gap-4">
                        <div class="flex-1 min-w-0">
                            <input class="app-form-control" type="text" placeholder="от">
                        </div>
                        <div class="flex-1 min-w-0">
                            <input class="app-form-control" type="text" placeholder="от">
                        </div>
                    </div>
                </template>
            </Details>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface CategoryItem {
    name: string,
    count: string
}

interface FiltersItem {
    name: string,
}

const categoriesList = ref<CategoryItem[]>([
    {
        name: 'Люстры',
        count: '3671'
    },
    {
        name: 'Светильники',
        count: '288'
    },
    {
        name: 'Торшеры',
        count: '70'
    },
    {
        name: 'Настенные светильники',
        count: '220'
    },
    {
        name: 'Уличный свет',
        count: '70'
    },
    {
        name: 'Настольные лампы',
        count: '758'
    },
    {
        name: 'Трековое освещение',
        count: '2188'
    },
    {
        name: 'Встраиваемые',
        count: '32'
    },
    {
        name: 'Комплектующие',
        count: '7589'
    },
])

const specialOffers = ref<CategoryItem[]>([
    {
        name: 'Новинки',
        count: '48'
    },
    {
        name: 'Распродажа',
        count: '54'
    },
])

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