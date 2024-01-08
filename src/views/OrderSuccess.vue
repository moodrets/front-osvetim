<template>
    <main class="overflow-hidden relative py-12 flex-1 flex flex-col lg:py-20">
        <div class="three-lamp three-lamp--main-right"></div>
        <div class="three-lamp three-lamp--main-left"></div>
        <div class="text-center max-w-[270px] m-auto">
            <h1>Спасибо за заказ!</h1>
            <p class="text-style-base">Наш менеджер свяжется с вами в ближайшее время.</p>
            <router-link
                class="app-button app-button--secondary" 
                :to="{name: 'main'}"
            >На главную</router-link>
        </div>
        <div class="flex justify-center items-center flex-wrap mt-4 gap-1">
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
    </main>
</template>