import { defineStore } from 'pinia';

export const useHostStore = defineStore('host',{
    state: ()=> ({
        ip: 'pyramidum.space'
    })
})