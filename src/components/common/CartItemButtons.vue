<template>
    <div class="flex items-center gap-4 select-none">
        <div class="flex items-center gap-4">
            <div class="rounded-icon text-dark text-[16px] font-bold" @click.stop.prevent="decrease">-</div>
            <div class="text-[20px] font-bold text-center min-w-[22px]">{{ state.count }}</div>
            <div class="rounded-icon text-dark text-[16px] font-bold" @click.stop.prevent="increase">+</div>
        </div>
        <div class="flex items-center gap-2 ml-auto">
            <div class="rounded-icon">
                <div class="svg-icon">
                    <svg><use xlink:href="#heart-filled"></use></svg>
                </div>
            </div>
            <div class="rounded-icon">
                <div class="svg-icon">
                    <svg><use xlink:href="#close"></use></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
    count: 1
})

function increase() {
    state.count++
}

function decrease() {
    if (state.count > 1) {
        state.count--
    }
}
</script>