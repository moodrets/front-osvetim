import { ref } from 'vue'

export interface IGeoLocation {
    city: string
}

export const locationsList = ref<IGeoLocation[]>([
    {city: 'Санкт-Петербург'},
    {city: 'Москва'},
    {city: 'Абакан'},
    {city: 'Архангельск'},
    {city: 'Астрахань'},
    {city: 'Барнаул'},
    {city: 'Белгород'},
    {city: 'Благовещенск'},
    {city: 'Великий Новгород'},
    {city: 'Владивосток'},
    {city: 'Владимир'},
    {city: 'Воронеж'},
    {city: 'Иваново'},
    {city: 'Ижевск'},
    {city: 'Иркутск'},
    {city: 'Йошкар-Ола'},
    {city: 'Казань'},
])

export const currentLocation = ref<IGeoLocation>(locationsList.value[0])