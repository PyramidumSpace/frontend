import {defineStore} from 'pinia'

interface State {
    user: UserInfo | null
}

export const useAuthStore = defineStore('auth', {
    state: ():State => {
       return {
            user: null,
       }
    },
    actions: {
        isLogin(){
            let logged = localStorage.getItem('user-info');
            return logged
        },
        login(name, email, password){

        }
    }
})

interface UserInfo {
    name: string
    email: string
}