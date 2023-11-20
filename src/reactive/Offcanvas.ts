import { ref } from "vue";

export const offcanvasVisible = ref<boolean>(false)

export function offcanvasToggle() {
    offcanvasVisible.value = !offcanvasVisible.value
    document.body.classList[offcanvasVisible.value ? 'add' : 'remove']('overflow-hidden')
}

export function offcanvasClose() {
    offcanvasVisible.value = false
}