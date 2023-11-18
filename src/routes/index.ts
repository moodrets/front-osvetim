import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

// views
import DefaultLayout from '@/layouts/Default.vue'
import Home from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'main',
            },
            {
                path: 'catalog',
                component: Home,
                name: 'catalog',
            },
            {
                path: 'about',
                component: Home,
                name: 'about',
            },
            {
                path: 'articles',
                component: Home,
                name: 'articles'
            },
            {
                path: 'delivery-and-payment',
                component: Home,
                name: 'delivery_and_payment'
            },
            {
                path: 'contacts',
                component: Home,
                name: 'contacts'
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;