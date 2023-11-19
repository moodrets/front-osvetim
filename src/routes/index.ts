import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

// views
import DefaultLayout from '@/layouts/Default.vue'
import Main from '@/views/Main.vue'
import PublicOffer from '@/views/PublicOffer.vue'
import DeliveryAndPayment from '@/views/DeliveryAndPayment.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
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
                component: Main,
            },
            {
                path: 'delivery-and-payment',
                name: 'delivery-and-payment',
                component: DeliveryAndPayment,
            },
            {
                path: 'contacts',
                name: 'contacts',
                component: Main,
            },
            {
                path: 'public-offer',
                name: 'public-offer',
                component: PublicOffer,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
});

export default router;