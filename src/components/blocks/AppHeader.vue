<template>
    <header class="app-header sticky top-0 z-[100] flex-none">
        <div class="app-header__top py-4 border-b border-neutral bg-white">
            <div class="centered flex items-center">
                <div class="app-logo app-logo--header">
                    <router-link 
                        :to="{name: 'main'}"
                    >
                        <img :src="`${routerPath}img/logo-dark.svg`" alt="">
                    </router-link>
                </div>
                <div class="ml-auto flex items-center gap-4 pl-4 lg:gap-8">
                    <GeoLocation class="text-[12px] font-medium hidden md:flex lg:text-[16px]" />
                    <div class="text-center pt-2 hidden md:block lg:pt-4">
                        <a class="text-[14px] font-semibold leading-[1.1] tracking-[-0.8px] lg:text-[20px]" href="tel:88126678226">
                            8 (812) 667-82-26
                        </a>
                        <div class="flex items-center justify-center leading-[1.4] text-[10px] text-accent lg:text-[12px]">
                            <div class="svg-icon flex-none mr-1 w-[6px] h-[6px]">
                                <svg><use xlink:href="#dot"></use></svg>
                            </div>
                            <div class="font-medium tracking-[0.24px]">10.00-20.00</div>
                        </div>
                    </div>
                    <div class="flex-none flex items-center gap-1">
                        <router-link :to="{name: 'orders-history'}" class="rounded-icon">
                            <div class="svg-icon">
                                <svg><use xlink:href="#user"></use></svg>
                            </div>
                        </router-link>
                        <router-link :to="{name: 'favorites'}" class="rounded-icon hidden md:flex">
                            <div class="svg-icon">
                                <svg><use xlink:href="#heart"></use></svg>
                            </div>
                        </router-link>
                        <router-link :to="{name: 'cart'}" class="rounded-icon">
                            <div class="svg-icon">
                                <svg><use xlink:href="#cart"></use></svg>
                            </div>
                            <div class="badge">4</div>
                        </router-link>
                        <MobileMenuBurger class="md:hidden"></MobileMenuBurger>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-header__menu bg-white">
            <div class="centered">
                <div class="relative flex items-center justify-between py-2.5 min-h-[44px]">
                    <OffcanvasClose />
                    <nav class="text-[14px] leading-[1.3] font-medium hidden md:block lg:text-base">
                        <ul class="select-none flex items-center justify-center gap-5 lg:gap-8">
                            <li>
                                <router-link 
                                    :to="{name:'catalog'}" class="decor-link [&.is-active-link]:text-brand"
                                >Каталог</router-link>
                            </li>
                            <li>
                                <router-link 
                                    :to="{name:'about'}" class="decor-link [&.is-active-link]:text-brand"
                                >О нас</router-link>
                            </li>
                            <li>
                                <router-link 
                                    :to="{name:'articles'}" class="decor-link [&.is-active-link]:text-brand"
                                >Новости</router-link>
                            </li>
                            <li>
                                <router-link 
                                    :to="{name:'delivery-and-payment'}" class="decor-link [&.is-active-link]:text-brand"
                                >Доставка и оплата</router-link>
                            </li>
                            <li>
                                <router-link 
                                    :to="{name:'contacts'}" class="decor-link [&.is-active-link]:text-brand"
                                >Контакты</router-link>
                            </li>
                            <li>
                                <router-link 
                                    :to="{name:'styles'}" class="decor-link [&.is-active-link]:text-brand"
                                >Стили</router-link>
                            </li>
                        </ul>
                    </nav>
                    <AppSearch />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath';
</script>