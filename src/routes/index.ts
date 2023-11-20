import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { offcanvasClose } from "@/reactive/Offcanvas";

// views
import DefaultLayout from '@/layouts/Default.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/404.vue'
import Contacts from '@/views/Contacts.vue'
import PublicOffer from '@/views/PublicOffer.vue'
import DeliveryAndPayment from '@/views/DeliveryAndPayment.vue'
import ArticlesList from '@/views/ArticlesList.vue'
import ArticlesItem from '@/views/ArticlesItem.vue'

const routerBase = import.meta.env.MODE === 'development' ? '/' : '/front-osvetim/'

const routes: RouteRecordRaw[] = [
    {
        path: routerBase,
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'main',
                component: Main,
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