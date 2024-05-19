import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Index from './components/Index.vue'
import Login from "./components/Login.vue";
// import Auth from './components/Login.vue'
// import ResetPassword from './components/ResetPassword.vue'
// import ResetPasswordSuccess from "./components/ResetPasswordSuccess.vue";
// import Registration from './components/Register.vue'
// import Home from './components/Home.vue'
// import Task from './components/TaskComponent.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        /* {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },*/
    ],
    history: createWebHistory()
})
createApp(App).use(createPinia()).use(router).mount('#app')
