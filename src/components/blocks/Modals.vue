<template>
    <AppModal name="testModal">
		<div class="h2">Заголовок</div>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis enim quo at fugiat ab quaerat quas odit, tenetur suscipit esse placeat quidem delectus doloribus dolorum. Obcaecati quia tenetur molestiae aspernatur.
		</p>
	</AppModal>
	<AppModal name="callbackModal">
		<div class="h2">Напишите нам</div>
		<CallbackForm />
	</AppModal>
	<AppModal name="geoLocationModal">
		<div class="h2">Выберите город</div>
		<GeoLocationList />
	</AppModal>
	<AppModal 
		name="orderDetailsModal" 
		:width="1080"
	>
		<OrderDetails />
	</AppModal>
</template>