import { createApp } from 'vue'
import '@/styles/main.scss'
import router from '@/routes'

// global components
import App from '@/App.vue'
import GeoPosition from '@/components/common/GeoPosition.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import Accordion from '@/components/common/Accordion.vue'
import Pagination from '@/components/common/Pagination.vue'
import MobileBurger from '@/components/common/MobileBurger.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'

createApp(App)
    .component('AppSearch', AppSearch)
    .component('GeoPosition', GeoPosition)
    .component('Accordion', Accordion)
    .component('Pagination', Pagination)
    .component('MobileBurger', MobileBurger)
    .component('Offcanvas', Offcanvas)
    .use(router)
    .mount('#app')