<template>
    <div
        v-cloak
        tabindex="0"
        class="app-modal"
        ref="appModalRef"
        :class="{'is-open': modalVisibleState[props.name]}"
        :style="{'--app-modal-width': `${props.width}px`}"
        @click="clickHandler"
        @keydown.esc="onClose"
    >
        <div class="app-modal__body">
            <div class="app-modal__close" @click="onClose">
                <div class="svg-icon w-8 h-8">
                    <svg><use xlink:href="#close"></use></svg>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { modalVisibleState, modalToggle } from '@/composables/useModal';
import { onUpdated, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        width?: number,
        name: string,
    }>(),
    {
        name: 'defaultModal',
        width: 480,
    }
)

modalVisibleState.value[props.name] = false

const appModalRef = ref<HTMLElement>()

function onClose() {
    modalToggle(props.name)
}

function clickHandler(event: Event) {
    if ((event.target as HTMLElement).classList.contains('app-modal')) {
        modalToggle(props.name)
    }
}

onUpdated(() => {
    if (modalVisibleState.value[props.name] === true) {
        appModalRef?.value?.focus()
    }
    if (modalVisibleState.value[props.name] === false) {
        appModalRef?.value?.blur()
    }
})
</script>

<style lang="scss">
.app-modal {
    @apply 
        flex
        fixed
        z-[200]
        left-0
        right-0
        top-0
        bottom-0
        bg-dark
        bg-opacity-50
        backdrop-blur-sm
        overflow-y-auto
        p-5
        opacity-0
        pointer-events-none
        transition-all
        duration-300
        lg:p-8
    ;

    &__close {
        @apply 
            cursor-pointer
            absolute
            right-3
            top-3
            z-10
        ;

        .svg-icon {
            @apply block;
        }
    }

    &__body {
        @apply 
            relative
            m-auto
            max-w-full
            w-[--app-modal-width]
            rounded-lg
            bg-white
            p-5
            transition-all
            duration-300
            translate-y-[40px]
            lg:p-8
        ;
    }

    &.is-open {
        @apply 
            opacity-100
            pointer-events-auto
        ;

        .app-modal__body {
            @apply 
                translate-y-0
            ;
        }
    }
}
</style>