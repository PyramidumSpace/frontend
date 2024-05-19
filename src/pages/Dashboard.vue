<script>
  export default {
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

</style>
