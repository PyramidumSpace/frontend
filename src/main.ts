import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './styles/style.css'
import App from './App.vue'
import Auth from './components/Auth.vue'
import ResetPassword from './components/ResetPassword.vue'
import ResetPasswordSuccess from "./components/ResetPasswordSuccess.vue";
import Registration from './components/Registration.vue'
import Home from './components/Home.vue'
import Task from './components/TaskBody.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const router = createRouter({
    routes: [{
            path: '/',
            name: 'Auth',
            component: Auth
        },
        {
            path: '/resetpassword',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/success',
            name: 'ResetPasswordSuccess',
            component: ResetPasswordSuccess
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/task',
            name: 'Task',
            component: Task
        },
    ],
    history: createWebHistory()
})
createApp(App).use(createPinia()).use(router).use(VueAxios, axios).mount('#app')
