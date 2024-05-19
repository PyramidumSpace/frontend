<script>
  import axios from 'axios'
  
  import {useHostStore} from '../stores/Host.js';
  import {useAuthStore} from '../stores/AuthStore.js';
  
  export default {
    setup(){
      document.title = 'Регистрация'
      
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
        document.title = 'Регистрация'
      }
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-register">
      <div class="pyramidum-register-picture-wrapper">
        <img src="/src/assets/img/pyramids.png" class="pyramidum-register-picture" alt="pyramidum">
      </div>
      <div class="pyramidum-register-form-wrapper">
        <div class="pyramidum-register-form">
          <div class="pyramidum-register-form-header mb-3">PYRAMIDUM</div>
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

.pyramidum-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pyramidum-register {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
}

.pyramidum-register-picture-wrapper {
    display: flex;
    justify-content: center;
    align-items: end;
}

.pyramidum-register-picture {
    width: 60%;
}

.pyramidum-register-form-wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pyramidum-register-form-header {
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

.pyramidum-register-form input {
    font-size: 1.25rem;
}

@media (min-width: 576px) {
    .pyramidum-register-form input {
        font-size: 1.25rem;
    }

    .pyramidum-register {
        width: 75%;
    }

    .pyramidum-register-form-header {
        font-size: 5.6vw;
    }
}

@media (min-width: 768px) {
    .pyramidum-register-picture-wrapper {
        justify-content: center;
        align-items: center;
    }

    .pyramidum-register-form-header {
        font-size: 4.2vw;
    }
}

@media (min-width: 992px) {
    .pyramidum-register-picture-wrapper {
        padding: 0;
    }
  
    .pyramidum-register-picture {
        width: 75%;
    }
    
    .pyramidum-register-form-wrapper {
        padding: 0;
    }
}

@media (min-width: 1200px) {

}
</style>
