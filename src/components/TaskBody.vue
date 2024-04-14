<script></script>

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
        <label class="form-label" for="priority">Priority Level:</label
        ><select
          class="form-select mb-2 priority"
          name="priority"
          required=""
          style="background-color: white; color: black"
        >
          <option
            class="priority"
            value="p1"
            style="background-color: white; color: black"
          >
            Low
          </option>
          <option
            value="p2"
            class="priority"
            style="background-color: white; color: black"
          >
            Average
          </option>
          <option
            value="p3"
            class="priority"
            style="background-color: white; color: black"
          >
            High
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
        ><select
          class="form-select mb-2 status"
          name="status"
          id="status"
          required=""
          style="background-color: white; color: black"
        >
          <option
            class="status"
            value="s1"
            style="background-color: white; color: black"
          >
            Not started
          </option>
          <option
            class="status"
            value="s2"
            style="background-color: white; color: black"
          >
            In Progress
          </option>
          <option
            class="status"
            value="s3"
            style="background-color: white; color: black"
          >
            Done
          </option>
          <option
            class="status"
            value="s4"
            style="background-color: white; color: black"
          >
            Archived
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
