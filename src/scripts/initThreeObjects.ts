import { routerPath } from '@/reactive/RouterPath';
import { ThreeLampScene } from '@/scripts/threeLampScene';

export async function initThreeObjects() {
    function getElementOffsetTop(selector: string) {
        let offset = 0;
        let element = document.querySelector(selector);

        if (element) {
            offset = element.getBoundingClientRect().top + window.scrollY - element.getBoundingClientRect().height;
        }

        return offset;
    }

    const mainRightLamp: Record<any, any> = new ThreeLampScene({
        filePath: `${routerPath}models/lamp/lamp-draco.glb`,
        texturePath: `${routerPath}models/lamp/lamp-texture.jpg`,
        envImagePaths: [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
        ],
        renderElem: document.querySelector('.three-lamp--main-right'),
        modelInitialRotation: {
            x: 2.6,
            y: 0,
            z: 0.6,
        },
    } as any);

    const mainLeftLamp: Record<any, any> = new ThreeLampScene({
        filePath: `${routerPath}models/lamp/lamp-draco.glb`,
        texturePath: `${routerPath}models/lamp/lamp-texture.jpg`,
        envImagePaths: [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
        ],
        renderElem: document.querySelector('.three-lamp--main-left'),
        modelInitialRotation: {
            x: -0.4,
            z: 1.2,
            y: 1.2,
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.001,
            moreValue: [1, -1],
        },
    } as any);

    const mainBannerLamp: Record<any, any> = new ThreeLampScene({
        filePath: `${routerPath}models/lamp/lamp-draco.glb`,
        texturePath: `${routerPath}models/lamp/lamp-texture.jpg`,
        envImagePaths: [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
        ],
        renderElem: document.querySelector('.three-lamp--main-banner'),
        modelInitialRotation: {
            x: 3.5,
            y: 0,
            z: -0.6,
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.00054,
            moreValue: [0.7, -0.6],
        },
    } as any);

    const subscribeLeftLamp: Record<any, any> = new ThreeLampScene({
        filePath: `${routerPath}models/lamp/lamp-draco.glb`,
        texturePath: `${routerPath}models/lamp/lamp-texture.jpg`,
        envImagePaths: [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
        ],
        renderElem: document.querySelector('.three-lamp--subscribe-left'),
        modelInitialRotation: {
            x: -0.4,
            z: 1.2,
            y: 1.2,
        },
        modelMoveAnimationSettings: {
            direction: 'left',
            axis: 'y',
            value: 0.00054,
            moreValue: [1, -1],
        },
    } as any);

    const subscribeRightLamp: Record<any, any> = new ThreeLampScene({
        filePath: `${routerPath}models/lamp/lamp-draco.glb`,
        texturePath: `${routerPath}models/lamp/lamp-texture.jpg`,
        envImagePaths: [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
        ],
        renderElem: document.querySelector('.three-lamp--subscribe-right'),
        modelInitialRotation: {
            x: -2.8,
            y: 0,
            z: 0.6,
        },
    } as any);

    const footerLamp: Record<any, any> = new ThreeLampScene({
        filePath: `${routerPath}models/lamp/lamp-draco.glb`,
        texturePath: `${routerPath}models/lamp/lamp-texture.jpg`,
        envImagePaths: [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
        ],
        renderElem: document.querySelector('.three-lamp--footer'),
        modelInitialRotation: {
            x: 1.75,
            y: 0,
            z: -0.6,
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.00054,
            moreValue: [0.7, -0.6],
        },
    } as any);

    let lastKnownScrollPosition = 0;
    let deltaY = 0;
    let footerOffseTop = getElementOffsetTop('.js-app-footer');
    let subscribeBlockOffsetTop = getElementOffsetTop('.js-subscribe-block');

    function moveThreeObjectsOnScroll(event: any) {
        let ticking = false;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                deltaY = window.scrollY - lastKnownScrollPosition;
                lastKnownScrollPosition = window.scrollY;

                if (window.scrollY > 0) {
                    if (mainLeftLamp.model) {
                        mainLeftLamp.model.rotation.x += deltaY * 0.0016;
                        mainLeftLamp.model.rotation.z -= deltaY * 0.0018;
                    }

                    if (mainRightLamp.model) {
                        mainRightLamp.model.rotation.x -= deltaY * 0.0013;
                    }

                    if (mainBannerLamp.model) {
                        mainBannerLamp.model.rotation.x -= deltaY * 0.0013;
                    }

                    if (subscribeLeftLamp.model) {
                        subscribeLeftLamp.model.rotation.x -= deltaY * 0.0013;
                    }

                    if (subscribeRightLamp.model && window.scrollY > subscribeBlockOffsetTop) {
                        subscribeRightLamp.model.rotation.x -= deltaY * 0.002;
                    }

                    if (footerLamp.model && window.scrollY > footerOffseTop) {
                        footerLamp.model.rotation.x += deltaY * 0.0013;
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }

    document.removeEventListener('scroll', moveThreeObjectsOnScroll);
    document.addEventListener('scroll', moveThreeObjectsOnScroll);

    // !!! TEMP: function for demo
    function changeEnvImagesInterval(lampInstances: Record<any, any>[], interval: number = 4000) {
        const randomBetween = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        let cubeEnvImages = [
            `${routerPath}models/lamp/env-1.jpg`,
            `${routerPath}models/lamp/env-2.jpg`,
            `${routerPath}models/lamp/env-3.jpg`,
            `${routerPath}models/lamp/env-4.jpg`,
            `${routerPath}models/lamp/env-5.jpg`,
            `${routerPath}models/lamp/env-6.jpg`,
            `${routerPath}models/lamp/env-7.jpg`,
            `${routerPath}models/lamp/env-8.jpg`,
            `${routerPath}models/lamp/env-9.jpg`,
            `${routerPath}models/lamp/env-10.jpg`,
        ];

        let counter = 0;

        setInterval(() => {
            let imagePaths = [
                cubeEnvImages[randomBetween(0, 9)],
                cubeEnvImages[randomBetween(0, 9)],
                cubeEnvImages[randomBetween(0, 9)],
                cubeEnvImages[randomBetween(0, 9)],
                cubeEnvImages[randomBetween(0, 9)],
                cubeEnvImages[randomBetween(0, 9)],
            ];

            if (counter === cubeEnvImages.length) counter = 0;
            // @ts-ignore
            lampInstances.forEach((lamp) => {
                if (lamp.renderElem) {
                    lamp.setCubeTextureEnv(imagePaths);
                }
            });
            console.log('CUBE TEXTURE IMAGES:', imagePaths);
            counter++;
        }, interval);
    }

    if (new URLSearchParams(document.location.search).has('randomLampTexture')) {
        changeEnvImagesInterval(
            [mainRightLamp, mainLeftLamp, mainBannerLamp, subscribeLeftLamp, subscribeRightLamp, footerLamp],
            5000
        );
    }
}
