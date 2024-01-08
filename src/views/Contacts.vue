<template>
    <main class="py-12 lg:py-20 relative overflow-hidden">
        <div class="three-lamp three-lamp--main-right"></div>
        <div class="three-lamp three-lamp--main-left"></div>
        <div class="centered">
            <div class="font-semibold text-center flex flex-col items-center max-w-[540px] mx-auto">
                <div class="text-base font-normal mb-20 lg:mb-32">Контактная информация:</div>
                <a class="text-[28px] leading-[1.1] tracking-[-0.8px] lg:text-[48px]" href="tel:88126678226">8 (812) 667-82-26</a>
                <div class="text-dark text-opacity-40 text-[14px] tracking-[-0.28px]">пн-пт: 9.00-19.00; сб-вс: выходные</div>
                <a class="mt-3 text-[28px] leading-[1.1] tracking-[-0.8px] lg:text-[48px]" href="mailto:osvetim@mail.com">
                    osvetim@mail.com
                </a>
                <div class="mt-3 text-[20px] lg:text-[28px] leading-[1.0]">
                    г. Москва, Волоколамское шоссе, д.103, ТЦ "Гвоздь", 3 этаж, 33.
                </div>
                <button
                    v-modal-call="{name: 'callbackModal'}"
                    class="mt-20 app-button app-button--secondary"
                >написать нам</button>
                <div class="mt-10 flex justify-center items-center flex-wrap gap-1 lg:mt-20">
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
    </main>
    <div 
        id="contacts-map" 
        class="bg-neutral grayscale" 
        style="height: 520px; width: 100%;"
    ></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { initContactsMap } from '@/scripts/initYandexMap'

onMounted(() => {
    initContactsMap()
})
</script>