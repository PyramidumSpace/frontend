<script setup lang="ts">
    import {ref} from 'vue'

    const username = ref('')
    const password = ref('')
</script>

<template>
    <div>
        <h1>{{"Pyramidum"}}</h1>
        <h2>
            <em>{{"Пришло время искоренить прокрастинацию..."}}</em>
        </h2>
        <form style="margin-bottom: 5px">
            <input
                    placeholder="логин"
                    v-model="username"
                    class="input"
                    type="text"
            >

        </form>
        <form style="margin-bottom: 25px">
            <input
                    placeholder="пароль"
                    v-model="password"
                    class="input"
                    type="password"
            >
        </form>
        <button style="height: 50px; width: 170px; background-color: darkcyan"
                @click="console.log(username); console.log(password);">{{"ВХОД"}}
        </button>
        <!--Необходима проверка на наличие уч. записи с указанными username и password в БД><-->
        <p>
            <button style="margin-right: 5px"
                    @click="console.log('to register page')">
                {{"Регистрация"}}
            </button>
            <button
                    @click="console.log('to reset password page')">
                {{"Забыли пароль?"}}
            </button>
        </p>
    </div>
</template>