<template>
    <form @submit.prevent="">
        <h3>Регистрация</h3>
    
        <label>Имя:</label>
        <input type="text" v-model="name" placeholder="Введите Ваше имя">
        <div className="error">{{ nameError }}</div>
    
        <label>Почта:</label>
        <input type="email" v-model="email" placeholder="Введите Вашу почту">
        <p className="error">{{ emailError }}</p>
    
        <label>Пароль:</label>
        <input type="password" v-model="password" placeholder="Придумайте пароль">
        <p className="error">{{ passwordError }}</p>
    
        <button @click="handleSubmit()">Отправить</button>
        <p className="error">{{ regError }}</p>
    
    </form>
    </template>
    
    <script lang="ts">
    import axios from 'axios'
    import {useHostStore} from "../stores/Host.js";
    export default{
        setup(){
            const hostStore = useHostStore()
            return { hostStore }
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                emailError: '',
                passwordError: '',
                nameError: '',
                regError: ''
            }
        },
        methods: {
            isValid(){
                this.emailError = this.email.length > 0 ? 
                '' : 'Это поле не должно быть пустым';
                this.passwordError = this.password.length > 0 ?
                '' : 'Это поле не должно быть пустым';
                this.nameError = this.name.length > 0 ?
                '' : 'Это поле не должно быть пустым';
                return !this.passwordError && !this.emailError && !this.nameError
            },
            async sendToBackEnd(){
                const res = await axios.post(`http://${this.hostStore.ip}/api/auth/register`,{
                    email : this.email,
                    password : this.password
                })

                console.warn(res)
                if (res.status == 200){

                    this.$router.push({name: 'Home'})
                } else {
                    this.regError = 'Не удалось зарегистрировать'
                }

            },
            handleSubmit(){
                if(this.isValid()){
                    this.sendToBackEnd()
                }
            }
        }
    }
    </script>
    
    <style scoped>
    form {
        max-width: 600px;
        margin: 30px auto;
        background: #fff;
        text-align: left;
        padding: 20px;
        border-radius: 10px;
    }
    
    h3 {
        color: #1a1818;
        font-size: 30px;
    }
    
    label {
        color: #aaa;
        display:inline-block;
        margin: 25px 0 10px;
        font-size: 12px;
        text-transform: uppercase;
    }
    
    input, select {
        display: block;
        padding: 10px 6px;
        width: 250px;
        box-sizing: bordre-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0 ;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        background: #eee;
    }
    
    button {
        background: #1a1818;
        border: 0;
        margin-top: 50px;
        padding: 10px 20px;
        color: white;
        border-radius: 20px;
    }
    
    .submit {
        text-align: center;
    }
    
    .error {
        color: #ff0000;
        margin-top: 0px;
        margin-bottom: 0px;
        height: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
    </style>