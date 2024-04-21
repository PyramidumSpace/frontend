import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: { 
            name: "Pasha",
            email: "pasha@mail.ru"
        }
    })
})