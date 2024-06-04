<script>
  import { useMotivatorStore } from "../stores/Motivator.js";
  
  export default {
    beforeCreate: function() {
        document.body.className = 'dashboard'
        document.getElementById('app').className = 'dashboard'
    },
    
    setup() {
      document.title = 'PIRAMIDA | Pyramidum'
      
      const motivatorStore = useMotivatorStore()
      return { motivatorStore }
    },
    
    methods: {
      toggleMotivator() {
        this.motivatorStore.isActive = !this.motivatorStore.isActive
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
      <div class="pyramidum-motivator">
        <div class="pyramidum-motivator-picture-wrapper">
          <img src="/src/assets/img/motivator.jpg" class="pyramidum-motivator-picture" alt="your progress">
        </div>
      </div>
      <div class="pyramidum-dashboard-footer">
        <div class="pyramidum-motivator-progress justify-content-center my-3">
          Ваш прогресс: {{ this.motivatorStore.progress / this.motivatorStore.maxProgress * 100 }}%
        </div>
        <div class="pyramidum-dashboard-footer-buttons justify-content-center">
          <a v-if="this.motivatorStore.isActive" @click="this.toggleMotivator()" class="btn btn-pyramidum rounded-pill fw-bold px-3 mx-2">
            Отдыхать...
          </a>
          <a v-else @click="this.toggleMotivator()" class="btn btn-pyramidum rounded-pill fw-bold px-3 mx-2">
            Ботать!
          </a>
          <a @click="this.$router.push({name: 'Dashboard'})" class="btn btn-pyramidum rounded-pill fw-bold px-3 mx-2">
            К задачам
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/src/styles/style.css";
@import "/src/styles/dashboard.css";

.pyramidum-dashboard-footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding-bottom: .5rem;
    padding-top: .5rem;
}

.pyramidum-motivator {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.pyramidum-motivator-progress {
    font-family: var(--pyramidum-special-font-family), sans-serif;
    font-size: 1.5rem;
}

.pyramidum-motivator-picture {
    width: 100%;
}
</style>
