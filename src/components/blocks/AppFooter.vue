<template>
    <footer class="app-footer bg-dark pt-5 py-3 text-white flex-none relative z-[10] js-app-footer">
        <div class="three-lamp three-lamp--footer"></div>
        <div class="centered">
            <div class="app-logo app-logo--footer select-none">
                <router-link :to="{name: 'main'}">
                    <img :src="`${routerPath}img/logo-light.svg`" alt="" />
                </router-link>
            </div>
            <div class="text-center mt-4 select-none">
                <img class="max-w-[230px] lg:max-w-full inline-block" :src="`${routerPath}img/slogan-light.svg`" alt="" />
            </div>
            <div class="flex items-start justify-center gap-2 mt-8 text-[14px] leading-[1.4] tracking-[-0.28px] md:justify-between md:mt-[100px]">
                <div class="opacity-40 hidden md:block md:w-1/3">Навигация:</div>
                <nav class="md:w-1/3">
                    <ul class="text-center">
                        <li><a href="#" class="decor-link">Люстры</a></li>
                        <li><a href="#" class="decor-link">Светильники</a></li>
                        <li><a href="#" class="decor-link">Настенные светильники</a></li>
                        <li><a href="#" class="decor-link">Торшеры</a></li>
                        <li><a href="#" class="decor-link">Уличный свет</a></li>
                        <li><a href="#" class="decor-link">Настольные лампы</a></li>
                        <li><a href="#" class="decor-link">Трековое освещение</a></li>
                        <li><a href="#" class="decor-link">Встраиваемые светильники</a></li>
                    </ul>
                </nav>
                <div class="opacity-40 hidden md:block md:w-1/3 md:text-right">Контакты:</div>
            </div>
            <div class="flex flex-col items-center gap-2 mt-8 pt-8 border-t border-neutral border-opacity-40 md:flex-row md:mt-20 md:justify-between md:border-none md:pt-0">
                <nav class="hidden md:block md:w-1/3">
                    <ul class="text-[14px] leading-[1.4] tracking-[-0.28px]">
                        <li><router-link :to="{name:'catalog'}" class="decor-link">Каталог</router-link></li>
                        <li><router-link :to="{name:'about'}" class="decor-link">О нас</router-link></li>
                        <li><router-link :to="{name:'articles'}" class="decor-link">Новости</router-link></li>
                        <li><router-link :to="{name:'delivery-and-payment'}" class="decor-link">Доставка и оплата</router-link></li>
                        <li><router-link :to="{name:'contacts'}" class="decor-link">Контакты</router-link></li>
                        <li><router-link :to="{name:'login'}" class="decor-link">Вход</router-link></li>
                        <li><router-link :to="{name:'registration'}" class="decor-link">Регистрация</router-link></li>
                    </ul>
                </nav>
                <div class="flex flex-col items-center md:w-1/3">
                    <button
                        v-modal-call="{name: 'callbackModal'}"
                        class="app-button app-button--light"
                    >Написать нам</button>
                    <div class="flex justify-center items-center flex-wrap mt-4 gap-1">
                        <a href="#" class="rounded-icon rounded-icon--light">
                            <div class="svg-icon">
                                <svg><use xlink:href="#vk"></use></svg>
                            </div>
                        </a>
                        <a href="#" class="rounded-icon rounded-icon--light">
                            <div class="svg-icon">
                                <svg><use xlink:href="#inst"></use></svg>
                            </div>
                        </a>
                        <a href="#" class="rounded-icon rounded-icon--light">
                            <div class="svg-icon">
                                <svg><use xlink:href="#tg"></use></svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-1 mb-6 -order-1 md:w-1/3 md:items-end md:text-right md:order-none md:mb-0">
                    <a class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px]" href="tel:88126678226">
                        8 (812) 667-82-26
                    </a>
                    <div class="opacity-60 text-[10px]">
                        <div>пн-пт: 09.00-21.00</div>
                        <div>сб-вс: 10.00-19.00</div>
                    </div>
                    <GeoLocation class="font-medium" icon-class="text-white" />
                </div>
            </div>
            <div class="text-[10px] leading-[1.4] opacity-80 pt-3 mt-5 border-t border-white border-opacity-40 flex flex-col items-center gap-2 md:flex-row">
                <div class="md:w-1/3">
                    <router-link 
                        :to="{name: 'public-offer'}" 
                        class="hover:underline"
                    >Публичная оферта</router-link>
                </div>
                <div class="md:w-1/3 md:text-center">© SDL SvetMarket 2023</div>
                <div class="md:w-1/3 md:text-right">
                    <router-link :to="{name: 'privacy-policy'}" class="hover:underline">Политика конфиденциальности</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath';
</script>