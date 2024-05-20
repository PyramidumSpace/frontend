import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: ()=> ({
        user: {
            email: String,
            password: String
        }
       }
    ),
    actions: {
        isLogin(){
            return this.user.email != null
        },
        login(email, password){
            this.user.email = email
            this.user.password = password
        }
    }
})
