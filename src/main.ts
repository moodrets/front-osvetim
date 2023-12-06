// styles
import 'swiper/css'
import 'cooltipz-css'
import '@/styles/main.scss'

// scripts
import { 
    initArticlesItemSlider,
    initNotFoundPageSlider,
    initProductItemSlider
} from '@/scripts/initSliders'

// vue imports
import { createApp } from 'vue'
import router from '@/routes'

// vue directives
import ScrollToDirective from '@/directives/scrollTo'

// vue global components
import App from '@/App.vue'
import GeoPosition from '@/components/common/GeoPosition.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import Accordion from '@/components/common/Accordion.vue'
import AppTabs from '@/components/common/AppTabs.vue'
import Pagination from '@/components/blocks/Pagination.vue'
import AppSort from '@/components/common/AppSort.vue'
import MobileBurger from '@/components/common/MobileBurger.vue'
import CountButtons from '@/components/common/CountButtons.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import PasswordRecoveryForm from '@/components/forms/PasswordRecoveryForm.vue'
import OrderForm from '@/components/forms/OrderForm.vue'
import PersonalDataForm from '@/components/forms/PersonalDataForm.vue'
import PersonalPasswordForm from '@/components/forms/PersonalPasswordForm.vue'

createApp(App)
    .directive('scroll-to', ScrollToDirective)
    .component('CountButtons', CountButtons)
    .component('LoginForm', LoginForm)
    .component('RegistrationForm', RegistrationForm)
    .component('PasswordRecoveryForm', PasswordRecoveryForm)
    .component('OrderForm', OrderForm)
    .component('PersonalDataForm', PersonalDataForm)
    .component('PersonalPasswordForm', PersonalPasswordForm)
    .component('AppSearch', AppSearch)
    .component('GeoPosition', GeoPosition)
    .component('Accordion', Accordion)
    .component('AppTabs', AppTabs)
    .component('Pagination', Pagination)
    .component('AppSort', AppSort)
    .component('MobileBurger', MobileBurger)
    .component('Offcanvas', Offcanvas)
    .use(router)
    .mount('#app')

/** 
 * Раскоментить когда сайт будет на laravel
document.addEventListener('DOMContentLoaded', () => {
    initArticlesItemSlider()
    initNotFoundPageSlider()
    initProductItemSlider()
})
*/