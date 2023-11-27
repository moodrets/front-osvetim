import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { offcanvasClose } from "@/reactive/Offcanvas";
import { routerPath } from "@/reactive/RouterPath";

// views
import DefaultLayout from '@/layouts/Default.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/404.vue'
import Contacts from '@/views/Contacts.vue'
import PublicOffer from '@/views/PublicOffer.vue'
import DeliveryAndPayment from '@/views/DeliveryAndPayment.vue'
import ArticlesList from '@/views/ArticlesList.vue'
import ArticlesItem from '@/views/ArticlesItem.vue'
import Login from '@/views/Login.vue'
import PasswordRecovery from '@/views/PasswordRecovery.vue'
import Registration from '@/views/Registration.vue'
import Cart from '@/views/Cart.vue'
import Order from '@/views/Order.vue'
import Styles from '@/views/Styles.vue'

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
                path: 'login',
                name: 'login',
                component: Login,
            },
            {
                path: 'password-recovery',
                name: 'password-recovery',
                component: PasswordRecovery,
            },
            {
                path: 'registration',
                name: 'registration',
                component: Registration,
            },
            {
                path: 'catalog',
                name: 'catalog',
                component: Main,
            },
            {
                path: 'about',
                name: 'about',
                component: Main,
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
                component: PublicOffer,
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
                path: 'styles',
                name: 'styles',
                component: Styles,
            },
        ]
    },
    // 404
    {
        // path: "/:pathMatch(.*)*",
        path: "/:notFound",
        name: 'not-found',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: NotFound
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

export default router;