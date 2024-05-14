<script lang="ts">
import TaskComponent from './components/TaskComponent.vue';

export default{
  components:{
    TaskComponent
  }
}
</script>

<template>
  <router-view/>
  <TaskComponent />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
