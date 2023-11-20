<template>
    <div class="app-pagination flex justify-center items-center gap-3">
        <a href="#" class="rounded-icon">
            <div class="svg-icon rotate-90">
                <svg><use xlink:href="#arrow-down"></use></svg>
            </div>
        </a>
        <div class="flex items-center justify-center flex-wrap gap-3">
            <a href="#" class="app-pagination__item font-bold px-2 text-brand hover:text-brand">1</a>
            <a href="#" class="app-pagination__item font-bold px-2 hover:text-brand">2</a>
            <a href="#" class="app-pagination__item font-bold px-2 hover:text-brand">3</a>
            <a href="#" class="app-pagination__item font-bold px-2 hover:text-brand">4</a>
            <a href="#" class="app-pagination__item font-bold px-2 hover:text-brand">5</a>
        </div>
        <a href="#" class="rounded-icon">
            <div class="svg-icon -rotate-90">
                <svg><use xlink:href="#arrow-down"></use></svg>
            </div>
        </a>
    </div>
</template>