import { defineStore } from 'pinia';

export const useHostStore = defineStore('host',{
    state: ()=> ({
        ip: '31.128.37.83'
    })
})