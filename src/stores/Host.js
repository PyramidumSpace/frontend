import { defineStore } from 'pinia';

export const useHostStore = defineStore('host', {
    state: ()=> ({
        protocol: 'http',
        host: '31.128.37.83',
        port: '80'
    })
})
