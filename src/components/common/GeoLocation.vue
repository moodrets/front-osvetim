<template>
    <div class="flex items-center cursor-pointer" @click.prevent="clickHandler">
        <div class="svg-icon mr-[2px]" :class="iconClass">
            <svg><use xlink:href="#geo"></use></svg>
        </div>
        <div>{{ currentLocation.city }}</div>
    </div>
</template>

<script setup lang="ts">
import { currentLocation } from '@/composables/useGeoLocation';
import { modalToggle } from '@/composables/useModal'

const props = withDefaults(
    defineProps<{
        iconClass?: string
    }>(),
    {
        iconClass: 'text-brand',
    }
)

function clickHandler() {
    modalToggle('geoLocationModal')
}
</script>