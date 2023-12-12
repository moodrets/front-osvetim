import { ref } from 'vue';
import { routerPath } from '@/reactive/RouterPath';

export interface IProductItem {
    id: number,
    img: string,
    name: string,
    article: string,
    price: string,
    priceOld: string,
    addClass?: string
}

export const productListFavorites = ref<IProductItem[]>([
    {
        id: 1,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'lg:col-span-2'
    },
    {
        id: 2,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 4,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 5,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 6,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 7,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 8,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽'
    },
    {
        id: 9,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'lg:col-span-2'
    },
    {
        id: 10,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
])

export const productListFromCollection = ref<IProductItem[]>([
    {
        id: 1,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 2,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'lg:col-span-2'
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
])

export const productListFromCategory = ref<IProductItem[]>([
    {
        id: 1,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 2,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
])

export const productListSale = ref<IProductItem[]>([
    {
        id: 1,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'md:col-span-2'
    },
    {
        id: 2,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 4,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 5,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 6,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 7,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
])

export const productListNewItems = ref<IProductItem[]>([
    {
        id: 1,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 2,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
        addClass: 'md:col-span-2 md:row-start-1 lg:row-auto'
    },
    {
        id: 3,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 4,
        img: `${routerPath}img/product-pic-4.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 5,
        img: `${routerPath}img/product-pic-1.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 6,
        img: `${routerPath}img/product-pic-2.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
    {
        id: 7,
        img: `${routerPath}img/product-pic-3.png`,
        article: 'Divinare',
        name: 'Встраиваемый светильник Giorgetta 1769',
        price: '990 ₽',
        priceOld: '1990 ₽',
    },
])