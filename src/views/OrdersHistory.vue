<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <h1>История заказов:</h1>

            <div class="xl:flex">
                <div class="mb-10 xl:w-[380px] xl:flex-none xl:mb-0">
                    <nav class="hidden p-5 rounded-lg bg-neutral-100 xl:p-10 xl:sticky xl:top-[134px] xl:block">
                        <PersonalMenu></PersonalMenu>
                    </nav>
                    <div class="xl:hidden">
                        <PersonalMenuMobile></PersonalMenuMobile>
                    </div>
                </div>

                <div class="xl:flex-1 xl:min-w-0 xl:pl-14">
                    
                    <div class="orders-items-list space-y-10">
                        <OrderItem 
                            v-for="order in 4" 
                            :key="order"
                        ></OrderItem>
                    </div>

                    <div class="mt-8">
                        <a
                            href="#"
                            @click.prevent="$router.go(-1)"
                            class="app-button app-button--secondary w-full sm:w-auto xl:hidden"
                        >вернуться назад</a>
                    </div>

                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import PersonalMenu from '@/components/blocks/PersonalMenu.vue'
import PersonalMenuMobile from '@/components/blocks/PersonalMenuMobile.vue'
import OrderItem from '@/components/blocks/OrderItem.vue'
</script>