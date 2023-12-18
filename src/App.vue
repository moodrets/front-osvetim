<template>
	<router-view />
	<Offcanvas 
		name="mobileMenu"
		class="lg:hidden"
	>
		<nav class="mb-8">
			<ul class="flex flex-col gap-2">
				<li><router-link :to="{name:'catalog'}" class="[&.is-active-link]:text-brand font-semibold hover:text-brand">Каталог</router-link></li>
				<li><router-link :to="{name:'about'}" class="[&.is-active-link]:text-brand font-semibold hover:text-brand">О нас</router-link></li>
				<li><router-link :to="{name:'articles'}" class="[&.is-active-link]:text-brand font-semibold hover:text-brand">Новости</router-link></li>
				<li><router-link :to="{name:'delivery-and-payment'}" class="[&.is-active-link]:text-brand font-semibold hover:text-brand">Доставка и оплата</router-link></li>
				<li><router-link :to="{name:'contacts'}" class="[&.is-active-link]:text-brand font-semibold hover:text-brand">Контакты</router-link></li>
			</ul>	
		</nav>
		<GeoPosition class="mb-8"></GeoPosition>
		<div>
			<a class="text-[20px] font-semibold leading-[1.1] tracking-[-0.8px]" href="tel:88126678226">
				8 (812) 667-82-26
			</a>
			<div class="flex items-center leading-[1.4] text-[12px] text-accent">
				<div class="svg-icon flex-none mr-1 w-[6px] h-[6px]">
					<svg><use xlink:href="#dot"></use></svg>
				</div>
				<div class="font-medium tracking-[0.24px]">10.00-20.00</div>
			</div>
		</div>
	</Offcanvas>
	<AppModal ref="testModal">
		<div class="h2">Заголовок</div>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis enim quo at fugiat ab quaerat quas odit, tenetur suscipit esse placeat quidem delectus doloribus dolorum. Obcaecati quia tenetur molestiae aspernatur.
		</p>
	</AppModal>
	<AppModal ref="callbackModal">
		<div class="h2">Напишите нам</div>
		<CallbackForm></CallbackForm>
	</AppModal>
	<SvgSprite />
</template>

<script setup lang="ts">
import SvgSprite from '@/components/blocks/SvgSprite.vue'
</script>