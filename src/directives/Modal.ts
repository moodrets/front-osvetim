function clickHandler(binding: Record<string, any>, event: Event) {
    event.preventDefault()
    if (binding.value.ref) {
        let modalRef = binding.instance.$root.$refs[binding.value.ref]
        modalRef?.onOpen()
    }
}

export default {
    mounted(el: HTMLElement, binding: any) {
        el.addEventListener('click', clickHandler.bind(undefined, binding))
    },
    unmounted(el: HTMLElement, binding: any) {
        el.removeEventListener('click', clickHandler.bind(undefined, binding))
    }
}