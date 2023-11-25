<template>
    <div 
        class="py-8 flex-1 flex bg-no-repeat bg-cover bg-center"
        :style="{'background-image': `url(${routerPath}img/login-bg.png)`}"
    >
        <div class="centered">
            <div class="h-full flex flex-col p-5 bg-white rounded-lg lg:max-w-[610px] lg:p-10">
                <h1>Восстановление пароля</h1>
                <div class="mb-8 text-dark text-opacity-40 font-semibold lg:mb-12">
                    В первый раз здесь? 
                    <router-link :to="{name: 'registration'}" class="text-inherit hover:underline">Зарегистрируйтесь</router-link>
                </div>
                <PasswordRecoveryForm></PasswordRecoveryForm>
                <div class="mt-auto flex flex-wrap items-center gap-1">
                    <a href="#" class="rounded-icon">
                        <div class="svg-icon">
                            <svg><use xlink:href="#vk"></use></svg>
                        </div>
                    </a>
                    <a href="#" class="rounded-icon">
                        <div class="svg-icon">
                            <svg><use xlink:href="#inst"></use></svg>
                        </div>
                    </a>
                    <a href="#" class="rounded-icon">
                        <div class="svg-icon">
                            <svg><use xlink:href="#tg"></use></svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath';
</script>