<script>
  import axios from 'axios'
  
  import { useHostStore } from '../stores/Host.js';
  import { useAuthStore } from '../stores/AuthStore.js';
  
  export default {
    setup() {
      document.title = 'Авторизация'
      
      const authStore = useAuthStore()
      const hostStore = useHostStore()
      return {authStore, hostStore}
    },
    
    data() {
      return {
        username: '',
        password: '',
        msg: ''
      }
    },
    
    methods: {
      isValid() {
        if (this.username === '') {
          this.msg = 'Пожалуйста, введите логин'
          return false
        }
        if (this.password === '') {
          this.msg = 'Пожалуйста, введите пароль'
          return false
        }
        this.msg = ''
        return true
      },
      
      async login() {
        if (this.isValid()) {
          let protocol = this.hostStore.protocol
          let host = this.hostStore.host
          let port = this.hostStore.port
          let url = `${protocol}://${host}:${port}/api/auth/login`
          
          const res = await axios.post(url, {
            email: this.username,
            password: this.password
          }).catch(function (error) {})
          
          console.warn(res)
          
          // we catch error and then check response and status
          // response must not be undefined
          if (res && res.status === 200) {
            this.authStore.login(this.username, this.password)
            this.$router.push({ name: 'Home' })
          } else {
            this.msg = 'Не правильно введен логин или пароль'
          }
        }
      }
    },
    
    mounted() {
      document.title = 'Авторизация'
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-login">
      <div class="pyramidum-login-picture-wrapper">
        <img src="/src/assets/img/pyramids.png" class="pyramidum-login-picture" alt="pyramidum">
      </div>
      <div class="pyramidum-login-form-wrapper">
        <div class="pyramidum-login-form">
          <div class="pyramidum-login-form-header mb-3">PYRAMIDUM</div>
          <form @submit.prevent="" autocomplete=off>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="email" placeholder="E-mail" v-model="username">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="password" placeholder="Пароль" v-model="password">
              </div>
            </div>
            <p class="text-secondary text-center">
              <a href="#" class="text-secondary">Восстановить доступ</a> |
              <a @click="this.$router.push({name: 'Register'})" href="#" class="text-secondary">Регистрация</a>
            </p>
            <div v-if="msg !== ''" class="font-pyramidum text-danger text-center mb-3">{{ msg }}</div>
            <div v-else class="d-none font-pyramidum text-danger text-center mb-3">{{ msg }}</div>
            <div class="d-flex justify-content-center mb-4">
              <input @click="this.login()" type="submit" class="btn btn-pyramidum rounded-pill fw-bold px-3" id="btn-login" value="Авторизоваться">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "/src/styles/style.css";

.pyramidum-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pyramidum-login {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
}

.pyramidum-login-picture-wrapper {
    display: flex;
    justify-content: center;
    align-items: end;
}

.pyramidum-login-picture {
    width: 60%;
}

.pyramidum-login-form-wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pyramidum-login-form-header {
    font-family: var(--pyramidum-special-font-family), sans-serif;
    font-size: 7vw;
    font-weight: 900;
    text-align: center;
    background: var(--pyramidum-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--pyramidum-primary);
}

.pyramidum-login-form input {
    font-size: 1.25rem;
}

@media (min-width: 576px) {
    .pyramidum-login-form input {
        font-size: 1.25rem;
    }

    .pyramidum-login {
        width: 75%;
    }

    .pyramidum-login-form-header {
        font-size: 5.6vw;
    }
}

@media (min-width: 768px) {
    .pyramidum-login-picture-wrapper {
        justify-content: center;
        align-items: center;
    }

    .pyramidum-login-form-header {
        font-size: 4.2vw;
    }
}

@media (min-width: 992px) {
    .pyramidum-login-picture-wrapper {
        padding: 0;
    }
  
    .pyramidum-login-picture {
        width: 75%;
    }
    
    .pyramidum-login-form-wrapper {
        padding: 0;
    }
}

@media (min-width: 1200px) {

}
</style>