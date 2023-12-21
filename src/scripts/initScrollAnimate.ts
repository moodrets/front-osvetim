export function initScrollAnimate() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
            } else {
                entry.target.classList.remove('animate')
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    });

    document.querySelectorAll('[data-scroll]').forEach(el => {
        observer.observe(el);
    })
}