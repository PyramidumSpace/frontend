
<template>
    <div>
        <h1>Pyramidum</h1>
        <h2 class="slogan">
            <em>Пришло время искоренить прокрастинацию...</em>
        </h2>
        <div>
            <form @submit.prevent="">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fs-6" >Логин:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="username" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">{{username_msg}}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label fs-6">Пароль:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" aria-describedby="passwordHelp">
                    <div id="passwordHelp" class="form-text button-bottom">{{password_msg}}</div>
                </div>
                <button @click="this.validation()" type="submit" class="btn btn-success">ВХОД</button>
                <div id="validationError" class="form-text">{{error}}</div>
            </form>
        </div>
        <div>
            <button @click="this.$router.push({name: 'Registration'})" class="btn btn-secondary">Регистрация</button>
            <button @click="this.$router.push({name: 'ResetPassword'})" class="btn btn-secondary">Забыли пароль?</button>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import { useHostStore } from "../stores/Host";
import { useAuthStore } from "../stores/AuthStore";
export default {
    setup() {
        const authStore = useAuthStore()
        const hostStore = useHostStore()
        return { hostStore, authStore }
    },
    data() {
        return {
            username: '',
            password: '',
            username_msg: '',
            password_msg: '',
            error: ''

        }
    },
    methods: {
        async validation() {
            this.username_msg = this.username === '' ? 'Пожалуйста, введите логин' : '';
            this.password_msg = this.password === '' ? 'Пожалуйста, введите пароль' : '';

            if (this.username !== '' && this.password !== '') {
                const res = await axios.post(`http://${this.hostStore.ip}/api/auth/register`, {
                    email: this.username,
                    password: this.password
                })
                console.warn(res)
                if (res.status == 200) {
                    this.authStore.login(this.username, this.password)
                    this.$router.push({ name: 'Home' })
                }
                else {
                    this.error = "Не правильно введен логин или пароль"
                }
            }
        }
    }
}
</script>

<style>
    .btn {
        margin-bottom: 10px;
        margin-right: 10px;
    }
    .slogan {
        margin-bottom: 50px;
    }
    .form-text {
        color: #dc3545;
    }
    .button-bottom {
        margin-bottom: 50px;
    }
</style>