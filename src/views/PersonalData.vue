<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <h1>Мои данные:</h1>

            <div class="xl:flex">
                <div class="xl:w-[380px] xl:flex-none">
                    <nav class="p-5 rounded-lg bg-neutral-100 xl:p-10 xl:sticky xl:top-[134px]">
                        <PersonalMenu></PersonalMenu>
                    </nav>
                </div>
                <div class="xl:flex-1 xl:min-w-0 xl:pl-14">

                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import PersonalMenu from '@/components/blocks/PersonalMenu.vue'
</script>