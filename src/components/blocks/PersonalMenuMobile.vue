<template>
    <router-link :to="{name: 'orders-history'}" class="flex items-center justify-between py-2.5 border-b border-neutral [&.is-active-link]:text-brand">
        <div class="text-[28px] pr-2 font-semibold tracking-[-1.08px]">История заказов</div>
        <div class="rounded-icon">
            <div class="svg-icon -rotate-90">
                <svg><use xlink:href="#arrow-down"></use></svg>
            </div>
        </div>
    </router-link>
    <router-link :to="{name: 'personal-data'}" class="flex items-center justify-between py-2.5 border-b border-neutral [&.is-active-link]:text-brand">
        <div class="text-[28px] pr-2 font-semibold tracking-[-1.08px]">Мои данные</div>
        <div class="rounded-icon">
            <div class="svg-icon -rotate-90">
                <svg><use xlink:href="#arrow-down"></use></svg>
            </div>
        </div>
    </router-link>
    <router-link :to="{name: 'personal-password'}" class="flex items-center justify-between py-2.5 border-b border-neutral [&.is-active-link]:text-brand">
        <div class="text-[28px] pr-2 font-semibold tracking-[-1.08px]">Пароль</div>
        <div class="rounded-icon">
            <div class="svg-icon -rotate-90">
                <svg><use xlink:href="#arrow-down"></use></svg>
            </div>
        </div>
    </router-link>
</template>