<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <h3>Заголовок H3</h3>
            <h4>Заголовок H4</h4>
            <h5>Заголовок H5</h5>
            <h6>Заголовок H6</h6>
            <p class="text-style-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ea hic iste, ipsa quod delectus porro obcaecati odio odit ratione alias, nostrum voluptatum nisi aspernatur. Sit id nobis nesciunt neque.
            </p>
            <p class="text-style-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ea hic iste, ipsa quod delectus porro obcaecati odio odit ratione alias, nostrum voluptatum nisi aspernatur. Sit id nobis nesciunt neque.
            </p>
            <div class="flex items-center flex-wrap gap-3 mb-10">
                <a href="#" class="app-button app-button--primary">Кнопка</a>
                <a href="#" class="app-button app-button--secondary">Кнопка</a>
                <a href="#" class="app-button app-button--dark">Кнопка</a>
                <div class="p-3 bg-brand rounded-full">
                    <a href="#" class="app-button app-button--light">Кнопка на фоне</a>
                </div>
                <button class="app-button app-button--dark disabled">Кнопка</button>
            </div>
            <div class="font-bold mb-4">Округлые иконки</div>
            <div class="flex flex-wrap items-center gap-3 mb-10">
                
                <div class="rounded-icon">
                    <div class="svg-icon">
                        <svg><use xlink:href="#cart"></use></svg>
                    </div>
                </div>
                <div class="rounded-icon">
                    <div class="svg-icon">
                        <svg><use xlink:href="#user"></use></svg>
                    </div>
                </div>
                <div class="rounded-icon">
                    <div class="svg-icon">
                        <svg><use xlink:href="#heart-filled"></use></svg>
                    </div>
                </div>
            </div>
            <div class="font-bold mb-4">Округлые иконки на темном фоне</div>
            <div class="flex flex-wrap items-center gap-3 mb-10">
                <div class="flex flex-wrap items-center p-3 gap-3 bg-dark rounded-full">
                    <div class="rounded-icon rounded-icon--light">
                        <div class="svg-icon">
                            <svg><use xlink:href="#geo"></use></svg>
                        </div>
                    </div>
                    <div class="rounded-icon rounded-icon--light">
                        <div class="svg-icon">
                            <svg><use xlink:href="#close"></use></svg>
                        </div>
                    </div>
                    <div class="rounded-icon rounded-icon--light">
                        <div class="svg-icon">
                            <svg><use xlink:href="#heart"></use></svg>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="font-bold mb-4">Элементы форм</div>
            <div class="mb-4 max-w-[400px]">
                <input type="text" class="app-form-control" placeholder="Текстовое поле">
            </div>
            <div class="mb-4 max-w-[400px]">
                <input type="text" class="app-form-control is-error" placeholder="Текстовое поле">
            </div>
            <div class="mb-4 flex gap-4 items-center">
                <div class="app-checkmark">
                    <input type="radio" name="demo">
                    <div class="svg-icon">
                        <svg><use xlink:href="#radio"></use></svg>
                    </div>
                </div>
                <div class="app-checkmark">
                    <input type="radio" name="demo">
                    <div class="svg-icon">
                        <svg><use xlink:href="#radio"></use></svg>
                    </div>
                </div>
                <div class="app-checkmark">
                    <input type="checkbox">
                    <div class="svg-icon">
                        <svg><use xlink:href="#checkmark"></use></svg>
                    </div>
                </div>
                <div class="app-checkmark">
                    <input type="radio" checked name="demo2" disabled>
                    <div class="svg-icon">
                        <svg><use xlink:href="#radio"></use></svg>
                    </div>
                </div>
                <div class="app-checkmark">
                    <input type="checkbox" checked disabled>
                    <div class="svg-icon">
                        <svg><use xlink:href="#checkmark"></use></svg>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">

</script>