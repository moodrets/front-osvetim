<template>
    <div class="flex items-center font-medium cursor-pointer" @click="modalToggle('geoLocationModal')">
        <div class="svg-icon mr-[2px]" :class="iconClass">
            <svg><use xlink:href="#geo"></use></svg>
        </div>
        <div>{{ currentLocation.city }}</div>
    </div>
</template>

<script setup lang="ts">
import { currentLocation } from '@/composables/useGeoLocation';
import { modalToggle } from '@/composables/useModal'

withDefaults(
    defineProps<{
        iconClass?: string
    }>(),
    {
        iconClass: 'text-brand'
    }
)
</script>