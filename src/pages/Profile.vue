<template>
<form @submit.prevent="">
    <h3>Ваш Аккаунт</h3>
    <div>
        <label>Имя:</label>
        <div class="userData"> 
            <p v-if="!edit">{{ authStore.user.name }}</p>
            <p v-else> <input v-on:keyup.enter="OnEnter" class="inline-input" type="text" v-model="name"> </p>
            <button class="imageButton" @click="OnChangeName()">
                <img src="/pencil.svg" alt="pencil" class="pencil"/>
            </button>
            <p class="success2" v-if="nameSuccess==true">Ваше имя успешно изменено</p>
            <p class="error2" v-if="nameSuccess==false">Не удалось сменить имя</p>
        </div>
        <label>Почта:</label>
        <div class="userData">{{ authStore.user.email }}</div>
        <button v-if="!changePass" class="changeButton" @click="OnChangePass()">Изменить пароль</button>

    </div>
    <h2 v-if="changePass">Смена пароля</h2>
    <input v-if="changePass" type="password" v-model="passwordOld" placeholder="Введите старый пароль">
    <input v-if="changePass" type="password" v-model="passwordNew" placeholder="Введите новый пароль">
    <input v-if="changePass" type="password" v-model="passwordNew2" placeholder="Подтвердите пароль">
    <button v-if="changePass" class="changeButton" @click="handleSubmit()">Сменить</button>
    <p class="success" v-if="passSuccess==true">Ваш пароль успешно сменен</p>
    <p class="error" v-if="passSuccess==false">Не получилось сменить пароль</p>
</form>
</template>

<script>
import {useAuthStore} from "../stores/Auth.js";


export default {
    setup(){
        const authStore = useAuthStore()
        return { authStore }
    },
    data(){
        return{
            name: '',
            passwordOld:'',
            passwordNew: '',
            passwordNew2: '',
            changePass: false,
            edit: false,
            passSuccess: null,
            nameSuccess: null
        }
    },
    methods: {
        OnEnter: function(){
            this.edit = false;
            if (this.name != this.authStore.user.name){
                //отправить на бэк новое имя
                this.nameSuccess = true;
            }
            
        },
        OnChangePass(){
            this.changePass=true;
            this.passSuccess=null;
        },
        OnChangeName(){
            this.edit=true;
            this.nameSuccess=null;
        },
        isValid(){
            return this.passwordNew != ''
             && this.passwordOld!='' 
             && this.passwordNew2 == this.passwordNew2
        },
        handleSubmit(){
            this.changePass=false;
            if (this.isValid()){
                //отправить на бэк новый пароль
                this.passSuccess=true;
            }

        }
    }
}
</script>

<style scoped>
p{
    display: inline;
}
form {
    max-width: 600px;
    position: absolute;
    top: 30px;
    left: 40%;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}
h3 {
    color: #1a1818;
    font-size: 30px;
}
h2{
    color: #3d3939;
    font-size: 20px;
    margin-top: 30px;
}
.pencil{
    max-width: 20px;
}
.userData{
    font-size: 20px;
}
.changeButton {
    background: #1a1818;
    border: 0;
    margin-top: 40px;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}
.inline-input{
    display: inline-block;
    padding: 10px 6px;
    width: 150px;
    box-sizing: bordre-box;
    margin-top: 4px;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
.imageButton{
    background: #fff;
    margin-left: 15px;
    padding: 0px 0px 0px 0px;

}
.error {
    color: #ff0000;
    margin-top: 10px;
    margin-bottom: 0px;
    height: 20px;
    font-size: 0.8em;
    font-weight: bold;
}
.success{
    color: #41c70c;
    margin-top: 10px;
    margin-bottom: 0px;
    height: 20px;
    font-size: 0.8em;
    font-weight: bold;
}
.error {
    color: #ff0000;
    margin-top: 10px;
    margin-bottom: 0px;
    height: 20px;
    font-size: 0.6em;
    font-weight: bold;
}
.success2{
    color: #41c70c;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 0px;
    height: 20px;
    font-size: 0.6em;
    font-weight: bold;
}
label {
    color: #5c5959;
    display:inline-block;
    margin: 25px 0 10px;
    font-size: 12px;
    text-transform: uppercase;
}
input{
    display: block;
    padding: 10px 6px;
    width: 150px;
    box-sizing: bordre-box;
    margin-top: 10px;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

</style>