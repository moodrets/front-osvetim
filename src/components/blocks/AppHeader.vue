<template>
    <header class="app-header sticky top-0 z-[100] flex-none">
        <div class="app-header__top py-4 border-b border-neutral bg-white">
            <div class="centered flex items-center">
                <div class="app-logo app-logo--header">
                    <router-link :to="{name: 'login'}"><img :src="`${routerPath}img/logo-dark.svg`" alt=""></router-link>
                </div>
                <div class="ml-auto flex items-center gap-[30px] pl-4">
                    <GeoPosition class="hidden lg:flex"></GeoPosition>
                    <div class="text-center pt-4 hidden lg:block">
                        <a class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px]" href="tel:88126678226">
                            8 (812) 667-82-26
                        </a>
                        <div class="flex items-center justify-center leading-[1.4] text-[12px] text-accent">
                            <div class="svg-icon flex-none mr-1 w-[6px] h-[6px]">
                                <svg><use xlink:href="#dot"></use></svg>
                            </div>
                            <div class="font-medium tracking-[0.24px]">10.00-20.00</div>
                        </div>
                    </div>
                    <div class="flex-none flex items-center gap-1">
                        <router-link :to="{name: 'login'}" class="rounded-icon">
                            <div class="svg-icon">
                                <svg><use xlink:href="#user"></use></svg>
                            </div>
                        </router-link>
                        <a href="#" class="rounded-icon">
                            <div class="svg-icon">
                                <svg><use xlink:href="#heart"></use></svg>
                            </div>
                        </a>
                        <a href="#" class="rounded-icon hidden lg:flex">
                            <div class="svg-icon">
                                <svg><use xlink:href="#cart"></use></svg>
                            </div>
                            <div class="badge">7</div>
                        </a>
                        <MobileBurger class="lg:hidden"></MobileBurger>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-header__menu bg-white">
            <div class="centered">
                <div class="relative flex items-center justify-between py-2.5 min-h-[44px]">
                    <div></div>
                    <nav class="text-base leading-[1.3] font-medium hidden md:block">
                        <ul class="flex items-center justify-center gap-[30px]">
                            <li><router-link :to="{name:'catalog'}" class="hover:text-brand">Каталог</router-link></li>
                            <li><router-link :to="{name:'about'}" class="hover:text-brand">О нас</router-link></li>
                            <li><router-link :to="{name:'articles'}" class="hover:text-brand">Новости</router-link></li>
                            <li><router-link :to="{name:'delivery-and-payment'}" class="hover:text-brand">Доставка и оплата</router-link></li>
                            <li><router-link :to="{name:'contacts'}" class="hover:text-brand">Контакты</router-link></li>
                        </ul>
                    </nav>
                    <AppSearch></AppSearch>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath';
</script>