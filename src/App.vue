<template>
	<router-view />
	<MobileMenu />
	<Modals />
	<SvgSprite />
</template>

<script setup lang="ts">
import SvgSprite from '@/components/blocks/SvgSprite.vue'
import Modals from '@/components/blocks/Modals.vue'
import MobileMenu from '@/components/common/MobileMenu.vue'
</script>