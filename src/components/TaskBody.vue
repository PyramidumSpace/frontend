<script>
export default {
  data() {
    return {
      // prioritySelected: "Low",
      priorityOptions: [
        { text: "Low", value: "p1" },
        { text: "Average", value: "p2" },
        { text: "High", value: "p3" },
      ],
      // taskStatusSelected: "Not started",
      taskStatusOptions: [
        { text: "Not started", value: "s1" },
        { text: "In Progress", value: "s2" },
        { text: "Done", value: "s3" },
        { text: "Archived", value: "s4" },
      ],
    };
  },
};
</script>

<template>
  <form class="border p-2 bg-light card">
    <div class="row">
      <div class="form-group col-md-3">
        <label class="form-label" for="taskDescription">Task Description:</label
        ><textarea
          class="form-control border border-secondary"
          name="taskDescription"
          id="taskDescription"
          required=""
          placeholder="Enter Task Description..."
          cols="30"
          rows="5"
        >
Some text</textarea
        >
      </div>
    </div>
    <div class="row">
      <div class="form-group col">
        <label class="form-label" for="priority">Priority Level:</label>
        <select
          v-model="selected"
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
      <div class="form-group col-md-3">
        <label class="form-label" for="dateDue">Deadline:</label
        ><input
          class="form-control"
          type="date"
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
        <label class="form-label" for="status">Task Status:</label
        >
        <select
          v-model="selected"
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
      <div class="form-group col-md-3">
        <label class="form-label" for="dateCreated">Creation date:</label
        ><input
          class="form-control"
          type="date"
          id="dateCreated"
          placeholder="Loading..."
          name="dateCreated"
          disabled=""
          value="2024-03-28"
        />
      </div>
    </div>
  </form>
</template>

<style></style>
