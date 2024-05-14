<script>
import { useTaskStore } from "../store/Task";

export default {
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
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
    };
  },
};
</script>

<template>
  <form class="">
    <div class="row">
        <label class="form-label" for="taskDescription">Task Description:</label
        ><textarea
          class="form-control border border-secondary"
          name="taskDescription"
          id="taskDescription"
          required=""
          placeholder="Enter Task Description..."
          cols="30"
          rows="5"
          v-model="this.taskStore.description"
        >
Some text</textarea
        >
    </div>
    <div class="row">
      <div class="form-group col">
        <label class="form-label" for="priority">Priority Level:</label>
        <select
          v-model="this.taskStore.priorityLevel"
          class="form-select mb-2 priority"
          name="priority"
          required=""
          style="background-color: white; color: black"
        >
          <option
            class="priority"
            style="background-color: white; color: black"
            v-for="option in priorityOptions"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group col">
        <label class="form-label" for="priority">Urgency:</label>
        <select
          v-model="this.taskStore.urgency"
          class="form-select mb-2 priority"
          name="priority"
          required=""
          style="background-color: white; color: black"
        >
          <option
            class="priority"
            style="background-color: white; color: black"
            v-for="option in urgencyOptions"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label class="form-label" for="dateDue">Deadline:</label
        ><input
          v-model="this.taskStore.deadline"
          class="form-control"
          type="number"
          id="dateDue"
          placeholder="Select Task Deadline..."
          required=""
          name="dateDue"
          data-secured="true"
          value="2024-03-06"
        />
      </div>
    </div>
    <div class="row">
      <div class="form-group col-md-3">
        <label class="form-label" for="status">Task Status:</label>
        <select
          v-model="this.taskStore.taskStatus"
          class="form-select mb-2 status"
          name="status"
          required=""
          style="background-color: white; color: black"
        >
          <option
            class="status"
            style="background-color: white; color: black"
            v-for="option in taskStatusOptions"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
