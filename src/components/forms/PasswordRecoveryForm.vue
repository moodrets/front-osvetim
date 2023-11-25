<template>
    <form @submit.prevent="onSubmit">
        <div class="app-form-field mb-4">
            <input type="text" class="app-form-control" placeholder="Эл. почта">
        </div>
        <div class="app-form-field mb-4">
            <input type="password" class="app-form-control" placeholder="Новый пароль">
        </div>
        <div class="app-form-field mb-6">
            <input type="password" class="app-form-control" placeholder="Повторите пароль">
        </div>
        <div class="mb-12 flex items-center gap-7">
            <button type="submit" class="app-button app-button--secondary">Отправить</button>
            <a 
                href="#"
                class="text-dark text-opacity-40 font-semibold underline hover:no-underline"
                @click.prevent="$router.go(-1)"
            >Вернуться назад</a>
        </div>
    </form>
</template>

<script setup lang="ts">
async function onSubmit() {}
</script>