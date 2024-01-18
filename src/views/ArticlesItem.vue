<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <article class="lg:flex">
                <div class="pb-10 lg:pb-0 lg:w-1/2 lg:pr-24">
                    <h1 class="mb-3">Итоги выставки INTERLIGHT RUSSIA 2023</h1>
                    <time class="block text-[12px] font-medium mb-8 opacity-50">27.11.2023</time>
                    <div class="text-style-base">
                        <p>
                            На нашем сайте вы можете приобрести качественные осветительные приборы от известных брендов домой или в офис. У нас вы найдете как минималистичные светильники, так и лампы оригинальной формы и дизайна. При помощи удобного поиска вы можете подобрать подходящий вам светильник на определенную мощность, площадь освещения, напряжение, тип цоколя с конкретными дизайнерскими решениями. На странице каждого товара представлены подробные технические характеристики, а также фотографии, чтобы вы могли понять, подойдет ли прибор к вашему интерьеру.
                        </p>
                        <p>
                            Наш ассортимент включает проверенную продукцию из России, Италии, Испании, Германии, Австрии, Венгрии, Чехии, США и других стран. Мы регулярно обновляем каталог и добавляем новые позиции. Как только у брендов, с которыми мы сотрудничаем, появляется новая продукция, она сразу же доступна к продаже в нашем интернет-магазине. На каждый товар действует гарантия.
                        </p>
                    </div>
                </div>
                <div class="lg:w-1/2">

                    <div class="swiper js-article-item-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="slide in 3" :key="slide">
                                <img :src="`${routerPath}img/article-item-slide.png`" alt="">
                            </div>
                        </div>
                        <div class="slider-pagination"></div>
                    </div>

                </div>
            </article>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useSwiper } from '@/composables/useSwiper';
import { routerPath } from '@/reactive/RouterPath';
import { initArticlesItemSlider } from '@/scripts/initSliders';

useSwiper(initArticlesItemSlider)
</script>