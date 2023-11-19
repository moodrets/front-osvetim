<template>
    <div class="app-acc" :class="{'is-open': state.isOpen}">
        <div 
            class="app-acc__top"
            @click="onToggle"
        >
            <div class="app-acc__title">
                <slot name="title"></slot>
            </div>
            <div class="rounded-icon transition-all duration-300 pointer">
                <div class="svg-icon">
                    <svg><use xlink:href="#arrow-down"></use></svg>
                </div>
            </div>
        </div>
        <div class="app-acc__body" >
            <div style="min-height: 0;">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
    isOpen: false
})

function onToggle() {
    state.isOpen = !state.isOpen
}
</script>

<style lang="scss">
.app-acc {
    @apply
        mb-3
    ;

    &__top {
        -webkit-tap-highlight-color: transparent;
        @apply
            select-none
            cursor-pointer
            flex
            items-center
            py-2.5
            border-b
            border-neutral
            transition-all
            duration-300
        ;
    }

    &__title {
        @apply
            pr-5
            flex-1
            text-[36px]
            lg:text-[48px]
            leading-[1.0]
            tracking-[-0.96px]
            font-semibold
        ;
    }   

    &__body {
        @apply
            overflow-hidden
            grid
            transition-all
            duration-300
            text-base
            leading-normal
        ;
        grid-template-rows: 0fr;
    }

    &.is-open {
        .app-acc__top {
            @apply border-brand mb-5;
        }

        .rounded-icon {
            @apply rotate-180 ring-1 ring-brand border-brand;
        }

        .app-acc__body {
            grid-template-rows: 1fr;
            @apply pb-4;
        }
    }
}
</style>