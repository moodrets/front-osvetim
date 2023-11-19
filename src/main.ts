import { createApp } from 'vue'
import '@/styles/main.scss'
import router from '@/routes'

// global components
import App from '@/App.vue'
import GeoPosition from '@/components/common/GeoPosition.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import Accordion from '@/components/common/Accordion.vue'

createApp(App)
    .component('AppSearch', AppSearch)
    .component('GeoPosition', GeoPosition)
    .component('Accordion', Accordion)
    .use(router)
    .mount('#app')