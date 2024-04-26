<script setup lang="ts">
    import {ref} from 'vue'
</script>

<template>
    <div>
        <h1>Pyramidum</h1>
        <h2 class="slogan">
            <em>Восстановить пароль</em>
        </h2>
        <div class="mb-3">
            <label class="form-label slogan fs-6" >Инструкция по восстановлению пароля отправлена.</label>
        </div>
        <div>
            <button @click="this.$router.push({name: 'Auth'})" class="btn btn-secondary"><- Вернуться</button>
        </div>
    </div>
</template>

<style>
    .btn {
        margin-bottom: 10px;
        margin-right: 10px;
    }
    .slogan {
        margin-bottom: 50px;
    }
</style>