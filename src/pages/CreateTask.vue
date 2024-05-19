<script>
  export default {
    // hack for component-dependent html tag 'body' styling
    beforeCreate: function() {
        document.body.className = 'dashboard'
        document.getElementById('app').className = 'dashboard'
    },
    
    setup() {
      document.title = 'Create Task | Pyramidum'
    },
    
    methods: {
      async createTask() {
      
      },
      mounted() {
        document.title = 'Create Task | Pyramidum'
      }
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-dashboard m-3">
      <div class="pyramidum-dashboard-header">
        <div class="pyramidum-dashboard-logo-wrapper">
          <div class="pyramidum-dashboard-logo m-2">
            PYRAMIDUM
          </div>
        </div>
        <div class="pyramidum-dashboard-nav my-2"></div>
      </div>
      <div class="pyramidum-dashboard-content flex-grow-1">
        <div class="pyramidum-dashboard-create-task-form-wrapper">
        </div>
      </div>
      <div class="pyramidum-dashboard-footer flex-wrap justify-content-center justify-content-sm-between mb-4">
        <a @click="this.createTask()" class="btn btn-pyramidum rounded-pill fw-bold px-3 my-1 my-sm-3" href="#">
          Создать задачу
        </a>
        <a @click="this.$router.push({name: 'Dashboard'})" class="btn btn-secondary btn-cancel rounded-pill fw-bold px-3 my-1 my-sm-3" href="#">
          Отмена
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/src/styles/style.css";
@import "/src/styles/dashboard.css";

.btn-cancel {
    font-family: var(--pyramidum-base-font-family), sans-serif;
}
</style>
