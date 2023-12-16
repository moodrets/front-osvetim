import { ref } from "vue";

export const offcanvasVisibleState = ref<Record<string, boolean>>({})

export function offcanvasToggle(offcanvasName: string) {
    if (offcanvasVisibleState.value[offcanvasName] !== undefined) {
        offcanvasVisibleState.value[offcanvasName] = !offcanvasVisibleState.value[offcanvasName]
        document.body.classList[offcanvasVisibleState.value[offcanvasName] === true ? 'add' : 'remove']('overflow-hidden')
    }
}

export function offcanvasClose(offcanvasName?: string) {
    if (offcanvasName && offcanvasVisibleState.value[offcanvasName] !== undefined) {
        offcanvasVisibleState.value[offcanvasName] = false
        return
    }

    for (const state in offcanvasVisibleState.value) {
        offcanvasVisibleState.value[state] = false
    }

    document.body.classList.remove('overflow-hidden')
}