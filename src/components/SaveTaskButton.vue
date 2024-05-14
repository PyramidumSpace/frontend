<template>
  <button class="saveTaskButton" role="button" @click=saveTask()>
    Save task
  </button>
</template>

<script>
import axios from 'axios'
import { useTaskStore } from "../store/Task";


export default{
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
  methods:{
    async saveTask(){
      let result = await axios.post(`http://31.128.37.83/api/tasks`, {
        header: this.taskStore.name,
        text: this.taskStore.description,
        deadline: this.taskStore.deadline,
        progress_status: this.taskStore.taskStatus,
        is_urgent: this.taskStore.urgency,
        is_important: this.taskStore.priorityLevel,
        external_images: [],
        owner_id: 0,
        parent_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        possible_deadline: 0,
        weight: 0
      })
      console.warn(result.data)
    }
  }
}
</script>
<style scoped>
.saveTaskButton {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.saveTaskButton:hover,
.saveTaskButton:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.saveTaskButton:hover {
  transform: translateY(-1px);
}

.saveTaskButton:active {
  background-color: #f0f0f1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>
