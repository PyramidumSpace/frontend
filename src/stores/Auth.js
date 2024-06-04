import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: ()=> ({
        user: {
            id : 0,
            email: "",
            password: ""
        }
       }
    ),
    actions: {
        isLogin(){
            return this.user.email != null
        },
        login(id, email, password){
            this.user.id = id
            this.user.email = email
            this.user.password = password
        }
    }
})
