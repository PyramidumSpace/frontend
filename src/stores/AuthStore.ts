import {defineStore} from 'pinia'

interface State {
    user: UserInfo | null
}

export const useAuthStore = defineStore('auth', {
    state: ():State => {
       return {
            user: {
                name: "",
                email: ""
            }
       }
    },
    actions: {
        isLogin(){
            let logged = localStorage.getItem('user-info');
            return logged
        }
    }
})

interface UserInfo {
    name: string
    email: string
}