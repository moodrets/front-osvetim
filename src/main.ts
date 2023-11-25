// styles
import 'swiper/css'
import 'cooltipz-css'
import '@/styles/main.scss'

// scripts
import { initArticlesItemSlider } from '@/scripts/initSliders'

// vue imports
import { createApp } from 'vue'
import router from '@/routes'

// global components
import App from '@/App.vue'
import GeoPosition from '@/components/common/GeoPosition.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import Accordion from '@/components/common/Accordion.vue'
import Pagination from '@/components/common/Pagination.vue'
import MobileBurger from '@/components/common/MobileBurger.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import PasswordRecoveryForm from '@/components/forms/PasswordRecoveryForm.vue'

createApp(App)
    .component('LoginForm', LoginForm)
    .component('RegistrationForm', RegistrationForm)
    .component('PasswordRecoveryForm', PasswordRecoveryForm)
    .component('AppSearch', AppSearch)
    .component('GeoPosition', GeoPosition)
    .component('Accordion', Accordion)
    .component('Pagination', Pagination)
    .component('MobileBurger', MobileBurger)
    .component('Offcanvas', Offcanvas)
    .use(router)
    .mount('#app')

/** 
 * Раскоментить когда сайт будет на laravel
document.addEventListener('DOMContentLoaded', () => {
    initArticlesItemSlider()
})
*/