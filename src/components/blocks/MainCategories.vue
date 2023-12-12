
<template>
    <section class="main-categories relative overflow-hidden lg:static">
        <div class="centered pt-5 pb-[120px] lg:relative">
            <div class="hidden w-[156px] absolute -z-[1] -right-5 top-0 md:block lg:w-[260px] xl:right-32">
                <img :src="`${routerPath}img/lamp.png`" alt="" />
            </div>
            <div class="text-center text-base leading-[1.3] tracking-[-0.32px] pt-5 border-t border-neutral border-opacity-50 mb-[100px]">Разделы каталога:</div>
            <nav class="flex flex-col items-center">
                <ul class="text-center space-y-1 mb-8 text-[20px] leading-[1.0] font-semibold md:text-[36px] xl:text-[48px]">
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Люстры</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(237)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Светильники</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(229)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Настенные светильники</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(36)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Торшеры</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(57)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Уличный свет</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(8)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Настольные лампы</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(543)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Трековое освещение</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(18)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="decor-link text-stone hover:text-dark">
                            <span>Встраиваемые светильники</span> 
                            <span class="mt-1 ml-2 text-[14px] font-light text-dark lg:text-[16px]">(199)</span>
                        </a>
                    </li>
                </ul>
                <a href="#" class="app-button app-button--secondary">Смотреть все</a>
            </nav>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { routerPath } from '@/reactive/RouterPath'
</script>