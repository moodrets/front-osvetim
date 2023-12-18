// styles
import 'swiper/css'
import 'cooltipz-css'
import '@/styles/main.scss'

// scripts
import { 
    initArticlesItemSlider,
    initNotFoundPageSlider,
    initProductItemSlider,
    initSlideshow
} from '@/scripts/initSliders'

// vue imports
import { createApp } from 'vue'
import router from '@/routes'

// vue directives
import ScrollToDirective from '@/directives/ScrollTo'
import ModalDirective from '@/directives/Modal'

// vue global components
import App from '@/App.vue'
import Details from '@/components/common/Details.vue'
import GeoLocation from '@/components/common/GeoLocation.vue'
import GeoLocationList from '@/components/common/GeoLocationList.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import Accordion from '@/components/common/Accordion.vue'
import AppTabs from '@/components/common/AppTabs.vue'
import Pagination from '@/components/blocks/Pagination.vue'
import AppSort from '@/components/common/AppSort.vue'
import MobileMenuBurger from '@/components/common/MobileMenuBurger.vue'
import MobileFiltersBurger from '@/components/common/MobileFiltersBurger.vue'
import CountButtons from '@/components/common/CountButtons.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'
import AppModal from '@/components/common/AppModal.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import PasswordRecoveryForm from '@/components/forms/PasswordRecoveryForm.vue'
import OrderForm from '@/components/forms/OrderForm.vue'
import PersonalDataForm from '@/components/forms/PersonalDataForm.vue'
import PersonalPasswordForm from '@/components/forms/PersonalPasswordForm.vue'
import CallbackForm from '@/components/forms/CallbackForm.vue'

createApp(App)
    .directive('scroll-to', ScrollToDirective)
    .directive('modal-call', ModalDirective)
    .component('Details', Details)
    .component('CountButtons', CountButtons)
    .component('LoginForm', LoginForm)
    .component('CallbackForm', CallbackForm)
    .component('RegistrationForm', RegistrationForm)
    .component('PasswordRecoveryForm', PasswordRecoveryForm)
    .component('OrderForm', OrderForm)
    .component('PersonalDataForm', PersonalDataForm)
    .component('PersonalPasswordForm', PersonalPasswordForm)
    .component('AppSearch', AppSearch)
    .component('GeoLocation', GeoLocation)
    .component('GeoLocationList', GeoLocationList)
    .component('Accordion', Accordion)
    .component('AppTabs', AppTabs)
    .component('Pagination', Pagination)
    .component('AppSort', AppSort)
    .component('MobileFiltersBurger', MobileFiltersBurger)
    .component('MobileMenuBurger', MobileMenuBurger)
    .component('Offcanvas', Offcanvas)
    .component('AppModal', AppModal)
    .use(router)
.mount('#app')

/** 
 * Раскоментить когда сайт будет на laravel
document.addEventListener('DOMContentLoaded', () => {
    initArticlesItemSlider()
    initNotFoundPageSlider()
    initProductItemSlider()
    initSlideshow()
})
*/