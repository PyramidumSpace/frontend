<script>
  import { useTaskStore } from "../stores/Task.js"

  export default {
    setup() {
      const taskStore = useTaskStore()
      return { taskStore }
    },
    
    data() {
      return {
        // prioritySelected: "Low",
        priorityOptions: [
          { text: "Low", value: false },
          { text: "High", value: true },
        ],
        // taskStatusSelected: "Not started",
        taskStatusOptions: [
          { text: "Not started", value: 0 },
          { text: "In Progress", value: 1 },
          { text: "Done", value: 2 },
        ],
        urgencyOptions: [
          { text: "Urgent", value: true },
          { text: "Non urgent", value: false },
        ],
      }
    }
  }
</script>

<template>
  <div class="row">
    <div class="form-group">
      <label class="form-label" for="taskDescription">Task Description:</label>
      <textarea
          v-model="this.taskStore.text"
          class="form-control border border-secondary"
          name="taskDescription"
          id="taskDescription"
          placeholder="Enter Task Description..."
          rows="5"
          required
      >Some text</textarea>
    </div>
  </div>
  <div class="row">
    <div class="form-group col-12 col-sm-6 col-md-4 col-lg-3">
      <label class="form-label" for="priority">Priority Level:</label>
      <select
          v-model="this.taskStore.isImportant"
          class="form-select mb-2 priority"
          name="priority"
          required
      >
        <option
            class="priority"
            v-for="option in priorityOptions"
            :value="option.value"
        >{{ option.text }}</option>
      </select>
    </div>
    <div class="form-group col-12 col-sm-6 col-md-4 col-lg-3">
      <label class="form-label" for="urgency">Urgency:</label>
      <select
          v-model="this.taskStore.isUrgent"
          class="form-select mb-2"
          name="urgency"
          required
      >
        <option
            class="urgency"
            v-for="option in urgencyOptions"
            :value="option.value"
        >{{ option.text }}</option>
      </select>
    </div>
    <div class="form-group col-12 col-sm-6 col-md-4 col-lg-3">
      <label class="form-label" for="dateDue">Deadline:</label>
      <input
          v-model="this.taskStore.deadline"
          class="form-control"
          type="date"
          id="dateDue"
          placeholder="Select Task Deadline..."
          name="dateDue"
          required
      />
    </div>
    <div class="form-group col-12 col-sm-6 col-md-4 col-lg-3">
      <label class="form-label" for="weight">Weight:</label>
      <input
          v-model="this.taskStore.weight"
          name="weight"
          class="form-control"
          type="number"
      />
    </div>
  </div>
  <div class="row">
    <div class="form-group">
      <label class="form-label" for="status">Task Status:</label>
      <select
          v-model="this.taskStore.progressStatus"
          class="form-select mb-2 status"
          name="status"
          required
      >
        <option
            class="status"
            v-for="option in taskStatusOptions"
            :value="option.value"
        >{{ option.text }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
</style>
