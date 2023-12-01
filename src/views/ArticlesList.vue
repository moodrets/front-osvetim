<template>
    <main class="py-12 lg:py-20">
        <section class="centered">
            <h1>Новости:</h1>
            <div class="articles-list grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <article 
                    class="articles-item flex flex-col relative bg-neutral-100 p-7 transition-all duration-300 hover:shadow-lg" 
                    v-for="(article, articleIndex) in articlesList" 
                    :key="articleIndex"
                >
                    <router-link class="absolute inset-0 z-[5]" :to="`articles/${article.id}`"></router-link>
                    <div class="text-[22px] font-semibold leading-[1.0] mb-4 md:text-[28px]">{{ article.title }}</div>
                    <div class="text-style-base">{{ article.text }}</div>
                    <div class="pt-5 mt-auto flex items-end justify-between gap-2.5 md:flex-col md:items-start xl:flex-row xl:items-end xl:pt-20">
                        <time
                            class="text-[12px] uppercase font-medium opacity-50 xl:order-last"
                            :datetime="article.date"
                        >{{ article.date }}</time>
                        <div class="w-[194px]">
                            <img class="max-w-full" :src="`${routerPath}img/${article.img}`" alt="">
                        </div>
                    </div>
                </article>
            </div>
            <Pagination class="mt-12 justify-center"></Pagination>
        </section>
    </main>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath';
import { ref } from 'vue'

const articlesList = ref([
    {
        id: 1,
        title: 'Итоги выставки INTERLIGHT RUSSIA 2023',
        text: 'Выражаем искреннюю благодарность за то, то посетили наш стенд на международной выставке INTERLIGHT RUSSIA 2023!',
        date: '27.11.2023',
        img: 'article-pic.png'
    },
    {
        id: 2,
        title: 'Каталог LOFT IT осень-зима 2023',
        text: 'Уважаемые партнеры! Спешим сообщить вам о том, что мы выпустили новый каталог LOFT IT осень-зима 2023. Ознакомиться с электронной версией можно по ссылке или в разделе «Каталог» нашего сайта.',
        date: '27.11.2023',
        img: 'article-pic.png'
    },
    {
        id: 3,
        title: 'Итоги MosBuild 2023',
        text: 'Уважаемые партнеры! Спешим сообщить вам о том, что мы выпустили новый каталог LOFT IT осень-зима 2023. Ознакомиться с электронной версией можно по ссылке или в разделе «Каталог» нашего сайта.',
        date: '27.11.2023',
        img: 'article-pic.png'
    },
    {
        id: 4,
        title: 'Итоги выставки INTERLIGHT RUSSIA 2023',
        text: 'Уважаемые партнеры! Спешим сообщить вам о том, что мы выпустили новый каталог LOFT IT осень-зима 2023. Ознакомиться с электронной версией можно по ссылке или в разделе «Каталог» нашего сайта.',
        date: '27.11.2023',
        img: 'article-pic.png'
    },
    {
        id: 5,
        title: 'Итоги выставки INTERLIGHT RUSSIA 2023',
        text: 'Уважаемые партнеры! Спешим сообщить вам о том, что мы выпустили новый каталог LOFT IT осень-зима 2023. Ознакомиться с электронной версией можно по ссылке или в разделе «Каталог» нашего сайта.',
        date: '27.11.2023',
        img: 'article-pic.png'
    },
    {
        id: 6,
        title: 'Итоги выставки INTERLIGHT RUSSIA 2023',
        text: 'Уважаемые партнеры! Спешим сообщить вам о том, что мы выпустили новый каталог LOFT IT осень-зима 2023. Ознакомиться с электронной версией можно по ссылке или в разделе «Каталог» нашего сайта.',
        date: '27.11.2023',
        img: 'article-pic.png'
    }
])
</script>