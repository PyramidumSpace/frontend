<script>
  import {useTaskStore} from "../stores/Task.js"

  export default{
    setup(){
      const taskStore = useTaskStore()
      return {taskStore}
    }
  }
</script>

<template>
  <div class="row">
    <div class="form-group">
      <label class="form-label" for="taskName">Task name:</label>
      <input
          v-model="this.taskStore.header"
          class="form-control border border-secondary"
          type="text"
          id="taskName"
          placeholder="Enter Task Name..."
          name="taskName"
          required
      />
    </div>
  </div>

</template>

<style scoped>
</style>
