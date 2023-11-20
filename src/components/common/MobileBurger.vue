<template>
    <button type="button" class="rounded-icon" @click="offcanvasToggle">
        <div class="svg-icon w-8 h-8" v-if="offcanvasVisible">
            <svg><use xlink:href="#close"></use></svg>
        </div>
        <div class="svg-icon" v-else="offcanvasVisible">
            <svg><use xlink:href="#burger"></use></svg>
        </div>
    </button>
</template>

<script setup lang="ts">
import { offcanvasVisible, offcanvasToggle } from '@/reactive/Offcanvas';
</script>