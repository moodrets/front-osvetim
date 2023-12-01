<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <h1>Оформление заказа:</h1>

            <div class="xl:flex">
                <div class="xl:flex-1 xl:min-w-0 xl:pr-14">
                    <OrderForm></OrderForm>
                </div>
                <div class="xl:w-[380px] xl:flex-none">

                    <div class="p-5 rounded-lg bg-neutral-100 xl:p-10 xl:sticky xl:top-[134px]">
                        <div class="h4">Ваш заказ:</div>

                        <div class="flex justify-between items-end mb-1">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Товары (4):</div>
                            <div class="h4 mb-0">34 328 ₽</div>
                        </div>

                        <div class="flex justify-between items-end mb-6">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Скидка:</div>
                            <div class="h6 mb-0 text-brand">-2 000 ₽</div>
                        </div>

                        <div class="flex justify-between items-end mb-1">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Вес:</div>
                            <div class="h6 mb-0">5,97 кг</div>
                        </div>

                        <div class="flex justify-between items-end mb-6">
                            <div class="text-[14px] text-dark text-opacity-50 font-semibold">Габариты:</div>
                            <div class="h6 mb-0">0,03308 м3</div>
                        </div>

                        <div>
                            <router-link 
                                class="app-button app-button--secondary" 
                                :to="{'name': 'order-success'}"
                            >Оформить заказ</router-link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import OrderForm from '@/components/forms/OrderForm.vue';
</script>