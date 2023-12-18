import { ref } from 'vue'

export interface IGeoLocation {
    city: string
}

export const locationsList = ref<IGeoLocation[]>([
    {city: 'Санкт-Петербург'},
    {city: 'Москва'},
    {city: 'Воронеж'},
    {city: 'Екатеринбург'},
])

export const currentLocation = ref<IGeoLocation>({
    city: 'Санкт-Петербург'
})