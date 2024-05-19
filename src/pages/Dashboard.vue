<script>
  export default {
    // hack for component-dependent html tag 'body' styling
    beforeCreate: function() {
        document.body.className = 'dashboard'
        document.getElementById('app').className = 'dashboard'
    },
    
    setup() {
      document.title = 'Dashboard | Pyramidum'
    },
    
    methods: {
      mounted() {
        document.title = 'Dashboard | Pyramidum'
      }
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-dashboard">
      <div class="pyramidum-dashboard-header">
        <div class="pyramidum-dashboard-logo-wrapper">
          <div class="pyramidum-dashboard-logo m-2">
            PYRAMIDUM
          </div>
        </div>
        <div class="pyramidum-dashboard-nav my-2"></div>
      </div>
      <div class="pyramidum-dashboard-content flex-grow-1">
        <div class="pyramidum-dashboard-tasks">
          <div class="pyramidum-dashboard-no-tasks">
            У Вас нет задач
          </div>
        </div>
      </div>
      <div class="pyramidum-dashboard-footer justify-content-center mb-4">
        <a @click="this.$router.push({name: 'CreateTask'})" class="btn btn-pyramidum rounded-pill fw-bold px-3 my-3" href="#">
          + Создать задачу
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/src/styles/style.css";
@import "/src/styles/dashboard.css";

.pyramidum-dashboard-tasks {
    width: 100%;
    border: 1px solid var(--pyramidum-light-grey);
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: 1.5rem;
}

.pyramidum-dashboard-no-tasks {
    font-family: var(--pyramidum-special-font-family), sans-serif;
    font-size: 3vw;
    font-weight: 900;
    text-align: center;
    background: var(--pyramidum-tertiary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--pyramidum-tertiary);
    word-spacing: 0.5rem;
}

@media (min-width: 768px) {
    .pyramidum-dashboard-no-tasks {
        font-size: 2.5vw;
    }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}

</style>
