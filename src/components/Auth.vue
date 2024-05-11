<script setup lang="ts">
    import {ref} from 'vue'
</script>

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
            </form>
        </div>
        <div>
            <button @click="this.$router.push({name: 'Registration'})" class="btn btn-secondary">Регистрация</button>
            <button @click="this.$router.push({name: 'ResetPassword'})" class="btn btn-secondary">Забыли пароль?</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                username: ref(''),
                password: ref(''),
                username_msg: ref(''),
                password_msg: ref('')
            }
        },
        methods: {
            validation() {
                this.username_msg = this.username === '' ? 'Пожалуйста, введите логин' : '';
                this.password_msg = this.password === '' ? 'Пожалуйста, введите пароль' : '';

                if (this.username !== '' && this.password !== '') {
                    // Запрос к БД. Переход к пользовательскому окну
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