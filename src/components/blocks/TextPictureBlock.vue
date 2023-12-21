<template>
    <section class="py-5">
        <div class="centered">
            <div class="lg:flex lg:gap-5">
                <div class="pb-8 lg:flex-1 lg:min-w-0 lg:pb-0">
                    <h2 class="mb-10">Поможем подобрать освещение по фото и дизайн-проекту бесплатно</h2>
                    <div class="text-style-base">
                        К каждому покупателю мы применяем индивидуальный подход. Чтобы помочь вам в создании грамотной системы освещения дома или в офисе, мы проводим консультацию и изучаем ваши потребности и запросы. Мы можем подобрать для вас товар на любой бюджет, к тому же у нас действует гибкая система скидок.
                    </div>
                    <button 
                        v-modal-call="{name: 'callbackModal'}"
                        class="mt-10 app-button app-button--primary"
                    >проконсультироваться</button>
                </div>
                <div class="lg:flex-1 lg:min-w-0 lg:-order-1">
                    <img :src="`${routerPath}img/about-content-pic.png`" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath'
</script>