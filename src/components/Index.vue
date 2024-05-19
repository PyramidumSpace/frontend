<script>
  export default {
    setup() {
      document.title = 'Pyramidum'
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-index-hero">
      <div class="pyramidum-logo">PYRAMIDUM</div>
      <div class="pyramidum-slogan">
        Пришло время искоренить прокрастинацию...
      </div>
      <div class="pyramidum-goto-login">
        <a @click="this.$router.push({name: 'Login'})" class="btn btn-pyramidum rounded-pill fw-bold mt-4 px-3" >
          Приступим!
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/src/styles/style.css";

.pyramidum-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pyramidum-goto-login {
    font-family: var(--pyramidum-base-font-family), sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pyramidum-logo {
    font-family: var(--pyramidum-special-font-family), sans-serif;
    font-size: 10vw;
    font-weight: 900;
    text-align: center;
    background: var(--pyramidum-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--pyramidum-primary);
}

.pyramidum-slogan {
    font-family: var(--pyramidum-special-font-family), sans-serif;
    font-size: 5vw;
    font-weight: 900;
    text-align: center;
    background: var(--pyramidum-tertiary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--pyramidum-tertiary);
    word-spacing: 0.5rem;
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  
    .pyramidum-logo {
        font-size: 8vw;
    }
    
    .pyramidum-slogan {
        font-size: 3vw;
    }
}

@media (min-width: 1200px) {
}
</style>