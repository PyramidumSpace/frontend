import { defineStore } from 'pinia';

export const useHostStore = defineStore('host', {
    state: ()=> ({
        protocol: 'http',
        host: 'localhost',
        port: '6969'
        /* host: '31.128.37.83',
        port: '80'*/
    })
})
