import { routerPath } from '@/reactive/RouterPath'
import { ThreeLampScene } from '@/scripts/threeLampScene'

export function initThreeObjects() {
    const headerRightLamp = new ThreeLampScene({
        texturePath: `${routerPath}models/demo-model/textrures/`,
        filePath: `${routerPath}models/demo-model/file2.fbx`,
        renderElem: document.querySelector('#header-lamp-right'),
        modelInitialRotation: {
            x: -.6,
            z: -.4,
            y: 0
        }
    } as any)
}