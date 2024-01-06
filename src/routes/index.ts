import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { routerPath } from '@/reactive/RouterPath'
import { offcanvasClose } from '@/composables/useOffcanvas'
import { initScrollAnimate } from '@/scripts/initScrollAnimate'
import { initThreeObjects } from '@/scripts/initThreeObjects'

// views
import DefaultLayout from '@/layouts/Default.vue'
import Main from '@/views/Main.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/404.vue'
import Styles from '@/views/Styles.vue'
import Contacts from '@/views/Contacts.vue'
import PublicOffer from '@/views/PublicOffer.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import DeliveryAndPayment from '@/views/DeliveryAndPayment.vue'
import ArticlesList from '@/views/ArticlesList.vue'
import ArticlesItem from '@/views/ArticlesItem.vue'
import Login from '@/views/Login.vue'
import PasswordRecovery from '@/views/PasswordRecovery.vue'
import Registration from '@/views/Registration.vue'
import Cart from '@/views/Cart.vue'
import Order from '@/views/Order.vue'
import OrdersHistory from '@/views/OrdersHistory.vue'
import OrderSuccess from '@/views/OrderSuccess.vue'
import PersonalData from '@/views/PersonalData.vue'
import PersonalPassword from '@/views/PersonalPassword.vue'
import Favorites from '@/views/Favorites.vue'
import Catalog from '@/views/Catalog.vue'
import ProductView from '@/views/ProductView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: routerPath,
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'main',
                component: Main,
            },
            {
                path: 'about',
                name: 'about',
                component: About,
            },
            {
                path: 'login',
                name: 'login',
                component: Login,
            },
            {
                path: 'registration',
                name: 'registration',
                component: Registration,
            },
            {
                path: 'password-recovery',
                name: 'password-recovery',
                component: PasswordRecovery,
            },
            {
                path: 'catalog',
                name: 'catalog',
                component: Catalog,
            },
            {
                path: 'catalog/:id',
                name: 'product-item',
                component: ProductView,
            },
            {
                path: 'articles',
                name: 'articles',
                component: ArticlesList,
            },
            {
                path: 'articles/:id',
                name: 'articles-item',
                component: ArticlesItem,
            },
            {
                path: 'delivery-and-payment',
                name: 'delivery-and-payment',
                component: DeliveryAndPayment,
            },
            {
                path: 'contacts',
                name: 'contacts',
                component: Contacts,
            },
            {
                path: 'public-offer',
                name: 'public-offer',
                component: PublicOffer,
            },
            {
                path: 'privacy-policy',
                name: 'privacy-policy',
                component: PrivacyPolicy,
            },
            {
                path: 'favorites',
                name: 'favorites',
                component: Favorites,
            },
            {
                path: 'cart',
                name: 'cart',
                component: Cart,
            },
            {
                path: 'order',
                name: 'order',
                component: Order,
            },
            {
                path: 'orders-history',
                name: 'orders-history',
                component: OrdersHistory,
            },
            {
                path: 'order-success',
                name: 'order-success',
                component: OrderSuccess,
            },
            {
                path: 'personal-data',
                name: 'personal-data',
                component: PersonalData,
            },
            {
                path: 'personal-password',
                name: 'personal-password',
                component: PersonalPassword,
            },
            {
                path: 'styles',
                name: 'styles',
                component: Styles,
            }
        ]
    },
    // 404
    {
        path: '/:pathMatch(.*)*',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: NotFound,
                name: 'not-found',
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'is-active-link',
    scrollBehavior() {
        return { top: 0 }
    },
});

router.beforeEach(() => {
    offcanvasClose()
})

router.afterEach(() => {
    setTimeout(() => {
        initScrollAnimate()
        initThreeObjects()
    }, 100)
})

export default router