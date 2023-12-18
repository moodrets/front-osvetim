<template>
    <section class="partners-block pt-5 pb-20 md:pt-8">
        <div class="centered">
            <div class="mb-5 h-[1px] bg-neutral-alpha"></div>
            <div class="h1 mb-[60px] md:mb-[180px] xl:mb-[220px]">Партнеры</div>

            <div class="grid grid-cols-4 gap-2.5 md:gap-5 xl:grid-cols-6">
                <a 
                    v-for="(partner, partnerIndex) in partnersList"
                    :key="partnerIndex"
                    :href="partner.link"
                    class="px-3 py-5 flex items-center justify-center bg-neutral-100 transition-shadow hover:shadow-lg"
                >
                    <img class="mix-blend-multiply" :src="partner.img" alt="">
                </a>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { routerPath } from '@/reactive/RouterPath';

const partnersList: {
    link: string,
    img: string
}[] = [
    {
        link: '#',
        img: `${routerPath}partners/acolyt.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/artelamp.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/bogates.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/divinare.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/evoluce.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/led4u.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/lightstar.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/lofit.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/lumion.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/maytoni.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/modelux.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/novotech.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/acolyt.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/artelamp.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/bogates.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/divinare.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/evoluce.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/led4u.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/lightstar.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/lofit.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/lumion.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/maytoni.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/modelux.png`
    },
    {
        link: '#',
        img: `${routerPath}partners/novotech.png`
    },
]
</script>