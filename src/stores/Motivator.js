import { defineStore } from 'pinia'

export const useMotivatorStore = defineStore('motivator', {
    state: ()=> ({
        isActive: false,
        progress: 99,
        maxProgress: 100
    })
})
