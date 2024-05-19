<script>
  import TaskBody from './TaskBody.vue';
  import TaskHeader from './TaskHeader.vue';

  export default{
    components:{
      TaskHeader,
      TaskBody
    },
  }
</script>

<template>
  <form @submit.prevent="" autocomplete=off>
    <TaskHeader />
    <TaskBody />
  </form>
</template>

<style scoped>
</style>
