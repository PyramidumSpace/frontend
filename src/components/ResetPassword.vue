<script setup lang="ts">
    import {ref} from 'vue'
</script>

<template>
    <div>
        <h1>Pyramidum</h1>
        <h2 class="slogan">
            <em>Восстановить пароль</em>
        </h2>
        <div>
            <form @submit.prevent="">
                <div class="mb-3">
                    <div>
                        <label for="exampleInputEmail1" class="form-label fs-6" >Мы отправим инструкцию по восстановлению пароля.</label>
                    </div>
                    <label for="exampleInputEmail1" class="form-label fs-6" >Логин:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="username" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text button-bottom">{{username_msg}}</div>
                </div>
                <button @click="this.validation()" type="submit" class="btn btn-success">Восстановить пароль</button>
            </form>
        </div>
        <div>
            <button @click="this.$router.push({name: 'Auth'})" class="btn btn-secondary"><- Вернуться</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ResetPassword',
        data() {
            return {
                username: ref(''),
                username_msg: ref(''),
            }
        },
        methods: {
            validation() {
                if (this.username == '') {
                    this.username_msg = 'Пожалуйста, введите логин';
                }
                else {
                    this.goToResetPasswordSuccess()
                }
            },
            goToResetPasswordSuccess() {
                //Отправка почтового сообщения
                this.$router.push({name: 'ResetPasswordSuccess'});
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