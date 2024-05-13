import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: ()=> ({
        user: {
            name: String,
            email: String,
            password: String
        }
       }
    ),
    actions: {
        isLogin(){
            let logged = localStorage.getItem('user-info');
            return logged
        },
        login(name, email, password){
            this.user.name = name
            this.user.email = email
            this.user.password = password
        }
    }
})
