<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <div class="max-w-[400px] text-center mx-auto">
                <h1>Страница не&nbsp;найдена</h1>
                <div class="text-style-base mb-10">
                    Пожалуйста, воспользуйтесь поиском по сайту или вернитесь на главную
                </div>
                <router-link :to="{name: 'main'}" class="app-button app-button--secondary">На главную</router-link>
            </div>
        </div>
        <TapeSlider class="mt-10" />
    </main>
</template>

<script setup lang="ts">
import TapeSlider from '@/components/blocks/TapeSlider.vue'
</script>