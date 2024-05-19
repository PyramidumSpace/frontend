<script>
  export default {
    setup(){
      document.title = 'Восстановление доступа | Pyramidum'
    },
    
    data() {
      return {
        email: '',
        msg: ''
      }
    },
    
    methods: {
      isValid() {
        if (this.email === '') {
          this.msg = 'Пожалуйста, введите E-mail'
          return false
        }
        return true
      },
      
      async resetPassword() {
        if (this.isValid()) {
          // let protocol = this.hostStore.protocol
          // let host = this.hostStore.host
          // let port = this.hostStore.port
          // let url = `${protocol}://${host}:${port}/api/auth/reset-password`
          // ... send request to reset
          document.getElementById('')
        }
      },
      
      mounted() {
        document.title = 'Восстановление доступа | Pyramidum'
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
            <p class="text-secondary text-center">
              Мы отправим инструкцию по восстановлению пароля Вам на почту
            </p>
            <div class="row">
              <div class="col-12">
                <input class="form-control mb-3" type="email" placeholder="E-mail" v-model="email">
              </div>
            </div>
            <p class="text-center">
              <a @click="this.$router.push({name: 'Login'})" href="#" class="text-secondary">Войти</a> |
              <a @click="this.$router.push({name: 'Register'})" href="#" class="text-secondary">Создать аккаунт</a>
            </p>
            <div v-if="msg !== ''" class="font-pyramidum text-danger text-center mb-3">{{ msg }}</div>
            <div v-else class="d-none font-pyramidum text-danger text-center mb-3">{{ msg }}</div>
            <div class="d-flex justify-content-center mb-4">
              <input @click="this.resetPassword()" type="submit" class="btn btn-pyramidum rounded-pill fw-bold px-3" id="btn-reset-pwd" value="Восстановить пароль">
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
