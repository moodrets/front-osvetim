<template>
    <div class="app-offcanvas" :class="{'is-open': offcanvasVisible}" @click="clickHandler">
        <div class="app-offcanvas__body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { offcanvasVisible, offcanvasToggle } from '@/reactive/Offcanvas';

function clickHandler(event: Event) {
    const target = event.target as HTMLElement
    if (target.classList.contains('app-offcanvas')) {
        offcanvasToggle()
    }
}
</script>

<style lang="scss">
.app-offcanvas {
    @apply
        fixed
        left-0
        right-0
        top-0
        bottom-0
        z-[100]
        bg-dark
        bg-opacity-50
        backdrop-blur-[3px]
        transition-all
        duration-300
        pointer-events-none
        opacity-0
    ;

    &__body {
        @apply
            transition-all
            duration-300
            translate-x-[-120%]
            bg-white
            w-[280px]
            h-full
            overflow-y-auto
            p-5
            shadow-xl
        ;
    }

    &.is-open {
        @apply
            opacity-100
            pointer-events-auto
        ;

        .app-offcanvas__body {
            @apply 
                translate-x-0
            ;
        }
    }
}
</style>