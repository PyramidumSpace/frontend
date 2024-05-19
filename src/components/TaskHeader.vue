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
  <div class="col">
    <div class="form-group row-md-2">
      <label class="form-label" for="taskName">Task name:</label
      ><input
        class="form-control border border-secondary"
        type="text"
        id="taskName"
        placeholder="Enter Task Name..."
        name="taskName"
        required=""
        data-secured="true"
        v-model="this.taskStore.name"
      />
    </div>
  </div>

</template>

<style scoped>
.col{
  width: 400px;
}
</style>
