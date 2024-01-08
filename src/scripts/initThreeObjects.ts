import { routerPath } from '@/reactive/RouterPath'
import { ThreeLampScene } from '@/scripts/threeLampScene'

export function initThreeObjects() {

    const TABLET_BREAKPOINT = window.matchMedia("(max-width: 769px)")

    const headerRightLamp: Record<any, any> = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('.three-lamp--header-right'),
        modelInitialRotation: {
            x: -.6,
            z: -.4,
            y: 0
        }
    } as any)

    const headerLeftLamp: Record<any, any> = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('.three-lamp--header-left'),
        modelInitialRotation: {
            x: -.8,
            z: .4,
            y: 0
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.001,
            moreValue: [1, -1]
        }
    } as any)

    const mainBannerLamp: Record<any, any> = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('.three-lamp--banner-main'),
        modelInitialRotation: {
            x: 0.6,
            z: .4,
            y: 0
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.00054,
            moreValue: [0.7, -0.6]
        }
    } as any)

    const subscribeLeftLamp: Record<any, any> = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('.three-lamp--subscribe-left'),
        modelInitialRotation: {
            x: -3.6,
            z: -.4,
            y: 0
        },
        modelMoveAnimationSettings: {
            direction: 'left',
            axis: 'y',
            value: 0.00054,
            moreValue: [1, -1]
        }
    } as any)

    const subscribeRightLamp: Record<any, any> = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('.three-lamp--subscribe-right'),
        modelInitialRotation: {
            x: -.6,
            z: -.4,
            y: 0
        }
    } as any)

    const footerLamp: Record<any, any> = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('.three-lamp--footer'),
        modelInitialRotation: {
            x: TABLET_BREAKPOINT.matches ? 1.8 : -1.1,
            z: .4,
            y: 0
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.00054,
            moreValue: [0.7, -0.6]
        }
    } as any)

    let lastKnownScrollPosition = 0;
    let deltaY = 0;

    function moveThreeObjectsOnScroll(event: any) {
        let ticking = false;

        if (!ticking) {
            window.requestAnimationFrame(() => {

                deltaY = window.scrollY - lastKnownScrollPosition;
                lastKnownScrollPosition = window.scrollY;

                if (window.scrollY > 0) {
                    if (headerRightLamp.model) {
                        headerRightLamp.model.rotation.x -= deltaY * 0.0025
                    }

                    if (headerLeftLamp.model) {
                        headerLeftLamp.model.rotation.x += deltaY * 0.0016
                        headerLeftLamp.model.rotation.z += deltaY * 0.0018
                    }

                    if (mainBannerLamp.model) {
                        mainBannerLamp.model.rotation.x -= deltaY * 0.002
                    }

                    if (subscribeLeftLamp.model) {
                        subscribeLeftLamp.model.rotation.x -= deltaY * 0.002
                    }

                    // if (subscribeRightLamp.model) {
                    //     subscribeRightLamp.model.rotation.x -= deltaY * 0.00025
                    // }

                    if (footerLamp.model) {
                        footerLamp.model.rotation.x += deltaY * 0.002
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }

    document.removeEventListener('scroll', moveThreeObjectsOnScroll)
    document.addEventListener('scroll', moveThreeObjectsOnScroll)
}