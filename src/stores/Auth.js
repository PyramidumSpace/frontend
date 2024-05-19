import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: ()=> ({
        user: {
            name: String,
            password: String
        }
       }
    ),
    actions: {
        isLogin(){
            return this.user.name != null
        },
        login(name, password){
            this.user.name = name
            this.user.password = password
        }
    }
})
