<template>
    <ul class="text-[16px] lg:text-[20px] font-semibold leading-[1.1]">
        <li>
            <router-link 
                class="[&.is-active-link]:text-dark block py-2.5 border-b border-neutral text-stone" 
                :to="{name: 'orders-history'}"
            >История заказов
            </router-link>
        </li>
        <li>
            <router-link 
                class="[&.is-active-link]:text-dark block py-2.5 border-b border-neutral text-stone" 
                :to="{name: 'personal-data'}"
            >Мои данные</router-link>
        </li>
        <li>
            <router-link 
                class="[&.is-active-link]:text-dark block py-2.5 border-b border-neutral text-stone" 
                :to="{name: 'personal-password'}"
            >Пароль</router-link>
        </li>
    </ul>
</template>