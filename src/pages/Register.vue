<script>
  import axios from 'axios'
  
  import {useHostStore} from '../stores/Host.js';
  import {useAuthStore} from '../stores/Auth.js';
  
  export default {
    setup(){
      document.title = 'Регистрация | Pyramidum'
      
      const hostStore = useHostStore()
      const authStore = useAuthStore()
      return { hostStore, authStore }
    },
    
    data() {
      return {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        msg: ''
      }
    },
    methods: {
      isValid() {
        if (this.name === '') {
          this.msg = 'Пожалуйста, введите имя пользователя'
          return false
        }
        if (this.email === '') {
          this.msg = 'Пожалуйста, введите E-mail'
          return false
        }
        if (this.password === '') {
          this.msg = 'Пожалуйста, введите пароль'
          return false
        }
        if (this.repeatPassword !== this.password) {
          this.msg = 'Пароли не совпадают'
          return false
        }
        this.msg = ''
        return true
      },
      
      async register() {
        if (this.isValid()) {
          let protocol = this.hostStore.protocol
          let host = this.hostStore.host
          let port = this.hostStore.port
          let url = `${protocol}://${host}:${port}/api/auth/register`
          
          const res = await axios.post(url, {
            email: this.email,
            password: this.password
          }).catch(function (error) {})
          
          console.warn(res)
          
          // we catch error and then check response and status
          // response must not be undefined
          if (res && res.status === 200) {
            this.authStore.login(this.email, this.password)
            this.$router.push({name: 'Home'})
          } else {
            this.msg = 'Не удалось зарегистрироваться'
          }
        }
      },
      
      mounted() {
        document.title = 'Регистрация | Pyramidum'
      }
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-auth">
      <div class="pyramidum-auth-picture-wrapper">
        <img src="/src/assets/img/pyramids.png" class="pyramidum-auth-picture" alt="pyramidum">
      </div>
      <div class="pyramidum-auth-form-wrapper">
        <div class="pyramidum-auth-form">
          <div class="pyramidum-auth-form-header mb-3">PYRAMIDUM</div>
          <form @submit.prevent="" autocomplete=off>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="text" placeholder="Имя" v-model="name">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="email" placeholder="E-mail" v-model="email">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="password" placeholder="Пароль" v-model="password">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="password" placeholder="Повторите пароль" v-model="repeatPassword">
              </div>
            </div>
            <p class="text-center">
              <a @click="this.$router.push({name: 'Login'})" class="text-secondary">Войти</a> |
              <a @click="this.$router.push({name: 'ResetPassword'})" class="text-secondary">Восстановить доступ</a>
            </p>
            <div v-if="msg !== ''" class="font-pyramidum text-danger text-center mb-3">{{ msg }}</div>
            <div v-else class="d-none font-pyramidum text-danger text-center mb-3">{{ msg }}</div>
            <div class="d-flex justify-content-center mb-4">
              <input @click="this.register()" type="submit" class="btn btn-pyramidum rounded-pill fw-bold px-3" id="btn-register" value="Вперёд!">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    
<style scoped>
@import "/src/styles/style.css";
@import "/src/styles/auth.css";
</style>
