<template>
    <main class="py-12 lg:py-20">
        <div class="centered">
            <Accordion>
                <template #title>Информация о доставке</template>
                <template #body>
                    <div class="grid gap-5 xl:grid-cols-2">
                        <div class="p-5 bg-neutral-100 rounded-lg flex items-start xl:p-8">
                            <div class="flex-none mr-5 w-11 h-11 rounded-full border border-neutral flex items-center justify-center font-semibold uppercase text-[16px]">1</div>
                            <div class="flex-1 min-w-0">
                                <div class="text-[20px] font-semibold mb-5 leading-[1.0] lg:text-[28px]">Курьерская доставка:</div>
                                <div class="mb-5">
                                    <div class="text-[16px] font-semibold mb-1.5 lg:text-[20px]">Доставка по Санкт-Петербургу(в пределах КАД):</div>
                                    <div class="text-style-base">
                                        500 ₽ — при заказе от 1 000 ₽ до 3 000 ₽<br>
                                        Бесплатно — при заказе от 3 000 ₽
                                    </div>
                                </div>
                                <div>
                                    <div class="text-[16px] font-semibold mb-1.5 lg:text-[20px]">Доставка по Ленинградской области:</div>
                                    <div class="text-style-base">
                                        1000 ₽ — при заказе от 1000 до 10 000 ₽<br>
                                        Бесплатно — при заказе от 10 000 ₽
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-5 bg-neutral-100 rounded-lg flex items-start xl:p-8">
                            <div class="flex-none mr-5 w-11 h-11 rounded-full border border-neutral flex items-center justify-center font-semibold uppercase text-[16px]">2</div>
                            <div class="flex-1 min-w-0">
                                <div class="text-[20px] font-semibold mb-5 leading-[1.0] lg:text-[28px]">Пункты выдачи СДЭК:</div>
                                <div class="mb-5">
                                    <div class="text-[16px] font-semibold mb-1.5 lg:text-[20px]">Доставка по Санкт-Петербургу(в пределах КАД):</div>
                                    <div class="text-style-base">
                                        Бесплатно — при заказе от 3 000 ₽
                                    </div>
                                </div>
                                <div>
                                    <div class="text-[16px] font-semibold mb-1.5 lg:text-[20px]">Доставка по России:</div>
                                    <div class="text-style-base">
                                        Бесплатно — при заказе от 10 000 ₽
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Accordion>
            <Accordion>
                <template #title>Пункты выдачи в вашем городе</template>
                <template #body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum eligendi aut modi facere id, libero sequi necessitatibus corporis debitis sapiente ipsa nam praesentium nisi cum delectus iure natus ullam.
                </template>
            </Accordion>
            <Accordion>
                <template #title>Информация об оплате</template>
                <template #body>
                    <div class="grid gap-5 xl:grid-cols-2">
                        <div class="p-5 bg-neutral-100 rounded-lg flex items-start xl:p-8">
                            <div class="flex-none mr-5 w-11 h-11 rounded-full border border-neutral flex items-center justify-center font-semibold uppercase text-[16px]">1</div>
                            <div class="flex-1 min-w-0">
                                <div class="text-[20px] font-semibold leading-[1.0] lg:text-[28px]">Оплата при получении наличными или картой</div>
                            </div>
                        </div>
                        <div class="p-5 bg-neutral-100 rounded-lg flex items-start xl:p-8">
                            <div class="flex-none mr-5 w-11 h-11 rounded-full border border-neutral flex items-center justify-center font-semibold uppercase text-[16px]">2</div>
                            <div class="flex-1 min-w-0">
                                <div class="text-[20px] font-semibold leading-[1.0] lg:text-[28px]">По предоплате на сайте через PayAnyWay</div>
                            </div>
                        </div>
                    </div>
                </template>
            </Accordion>
            <Accordion>
                <template #title>Возврат</template>
                <template #body>
                    <p>
                        Возврат товара возможен в течении 14 календарных дней со дня покупки (в соответствии со статьей 26.1. Закона "О защите прав потребителей"), при условии полного сохранения товарного вида (нет следов использования, не нарушена целостность и комплектность упаковки).
                    </p>
                    <p>
                        Возврат товара надлежащего качества возможен лишь при условии сохранения его потребительских свойств и товарного вида (отсутствие следов эксплуатации и носки, наличие оригинальной и неповрежденной упаковки и ярлыков).
                    </p>
                    <p>
                        Возврат осуществляется на основании заполненного заявления и товарного чека, подтверждающего факт и условия покупки.
                    </p>
                    <p>
                        Срок возврата денежных средств зависит от способа возврата и составляет не более 10 дней с даты поступления возвращенного товара на склад Продавца вместе с заполненным Покупателем заявлением на возврат.
                    </p>
                    <p>
                        Информация о гарантийном сроке на конкретную модель, предоставляемая производителем, прилагается к товару.
                    </p>
                    <p>
                        Товар с браком/неверной комплектации должен быть возвращен нам с оригинальными ярлыками и в оригинальной упаковке.
                    </p>
                    <p>
                        В случае возврата товара ненадлежащего качества, мы берем на себя расходы по пересылке товара обратно нам.
                    </p>
                    <p>
                        Если возвращаемый товар был предоплачен, возврат осуществляется на ту карту, с которой была предоплата или на тот qiwi кошелек, на который был выставлен счет.
                    </p>
                    <p>
                        Некоторые категории товаров не подлежат возврату и обмену, согласно постановлению Правительства РФ от 19 января 1998 г. №55.
                    </p>
                </template>
            </Accordion>
            <Accordion>
                <template #title>Реквизиты</template>
                <template #body>
                    <div class="lg:columns-2">
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Полное наименование:</div>
                            <div class="text-base">Общество с ограниченной ответственностью «Большой свет»</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Сокращенное наименование:</div>
                            <div class="text-base">ООО «Большой свет»</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Юридический адрес:</div>
                            <div class="text-base">194355, Российская Федерация, г. Санкт-Петербург, ул. Композиторов, д. 12, литер А, пом. 54-Н:</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Часы работыЦ:</div>
                            <div class="text-base">пн-пт 10:00–19:00; сб 12:00–18:00; воскресенье - выходной</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Почтовый адрес:</div>
                            <div class="text-base">194355, Российская Федерация, г. Санкт-Петербург, ул. Композиторов, д. 12, литер А, пом. 54-Н:</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Телефон/факс:</div>
                            <div class="text-base">8 (950) 007-04-14</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">ИНН/КПП:</div>
                            <div class="text-base">7802707654 / 780201001</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">ОГРН:</div>
                            <div class="text-base">1207800064746</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Расчётный счет:</div>
                            <div class="text-base">40702810155000046212</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Корреспондентский счет:</div>
                            <div class="text-base">30101810500000000653</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">БИК банка:</div>
                            <div class="text-base">044030653</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Банк:</div>
                            <div class="text-base">СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК г. Санкт-Петербург</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">Директор:</div>
                            <div class="text-base">Михайловская Ольга Андреевна (Действует на основании Устава)</div>
                        </div>
                        <div class="opacity-80 mb-3 lg:pr-5 lg:inline-block lg:w-full">
                            <div class="text-[20px] font-semibold">E-mail:</div>
                            <div class="text-base">info@sdlgroup.ru</div>
                        </div>
                    </div>
                </template>
            </Accordion>
        </div>
    </main>
</template>