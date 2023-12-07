<template>
    <div class="flex items-center font-medium cursor-pointer">
        <div class="svg-icon mr-[2px]" :class="iconClass">
            <svg><use xlink:href="#geo"></use></svg>
        </div>
        <div>Санкт-Петербург</div>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        iconClass?: string
    }>(),
    {
        iconClass: 'text-brand'
    }
)
</script>