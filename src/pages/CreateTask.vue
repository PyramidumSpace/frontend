<script>
  import axios from 'axios'
  
  import CreateTaskForm from '../components/CreateTaskForm.vue';
  import {useAuthStore } from "../stores/Auth.js";
  import { useTaskStore } from '../stores/Task.js';
  import {projectConfig} from "../common/index.js";
  
  export default {
    components: {
      CreateTaskForm
    },
    
    // hack for component-dependent html tag 'body' styling
    // create task page "extends" dashboard page
    beforeCreate: function() {
        document.body.className = 'dashboard'
        document.getElementById('app').className = 'dashboard'
    },
    
    setup() {
      document.title = 'Create Task | Pyramidum'
      
      const userStore = useAuthStore()
      const taskStore = useTaskStore()
      return { userStore, taskStore }
    },
    
    methods: {
      isValid() {
        return true
      },
      
      async createTask() {
        if (this.isValid()) {
          let protocol = projectConfig.protocol
          let host = projectConfig.host
          let port = projectConfig.port
          let url = `${protocol}://${host}:${port}/api/tasks`
          
          let payload = {
            header: this.taskStore.header,
            text: this.taskStore.text,
            external_images: [],
            deadline: this.taskStore.deadline,
            progress_status: this.taskStore.progressStatus,
            is_important: this.taskStore.isImportant,
            is_urgent: this.taskStore.isUrgent,
            owner_id: this.userStore.user.id,
            parent_id: null,
            possible_deadline: this.taskStore.deadline,
            weight: this.taskStore.weight
          }
          
          console.log(payload)
          
          const res = await axios.post(url, payload).catch(function (error) {})
          
          console.debug(res)
          
          // we catch error and then check response and status
          // response must not be undefined
          if (res && res.status === 200) {
            this.$router.push({ name: 'Dashboard' })
          }
        }
      },
      
      mounted() {
        document.title = 'Create Task | Pyramidum'
      }
    }
  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-dashboard m-3">
      <div class="pyramidum-dashboard-header">
        <div class="pyramidum-dashboard-logo-wrapper">
          <div class="pyramidum-dashboard-logo m-2">
            PYRAMIDUM
          </div>
        </div>
        <div class="pyramidum-dashboard-nav my-2"></div>
      </div>
      <div class="pyramidum-dashboard-content flex-grow-1">
        <div class="pyramidum-dashboard-create-task-form-wrapper">
          <CreateTaskForm />
        </div>
      </div>
      <div class="d-flex align-center flex-wrap justify-content-center justify-content-sm-between mb-4">
        <a @click="this.createTask()" class="btn btn-pyramidum rounded-pill fw-bold px-3 my-1 my-sm-3 mx-2">
          Создать задачу
        </a>
        <a @click="this.$router.push({name: 'Dashboard'})" class="btn btn-secondary rounded-pill fw-bold px-3 my-1 my-sm-3 mx-2">
          Отмена
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/src/styles/style.css";
@import "/src/styles/dashboard.css";
</style>
