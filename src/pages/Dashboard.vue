<script>
  import axios from 'axios'
  import { projectConfig } from '../common/index.js';
  import { useAuthStore } from '../stores/Auth.js';

  export default {
    // hack for component-dependent html tag 'body' styling
    beforeCreate: function() {
        document.body.className = 'dashboard'
        document.getElementById('app').className = 'dashboard'
    },
    
    setup() {
      document.title = 'Dashboard | Pyramidum'

      const authStore = useAuthStore()
      return {authStore}
    },
    
    data() {
      return {
        tasks: []
        // tasks: [
        //   {
        //     name: "Подготовка к К/р по ОТУ",
        //     description: "Прорешать на медии задания прошлых лет, спросить у Георгия конспект",
        //     external_images: [],
        //     priorityLevel: true,
        //     urgency: true,
        //     deadline: "20.05.2024",
        //     taskStatus: 1,
        //     owner_id: 0,
        //     parent_id: "",
        //     possible_deadline: "",
        //     weight: 4
        //   },
        //   {
        //     name: "Сделать дз по теоркоду",
        //     description: "Задания 24.5, 24.15, 25.2",
        //     external_images: [],
        //     priorityLevel: true,
        //     urgency: true,
        //     deadline: "20.05.2024",
        //     taskStatus: 2,
        //     owner_id: 0,
        //     parent_id: "",
        //     possible_deadline: "",
        //     weight: 8
        //   },
        //   {
        //     name: "Сделать таску по УППРПО",
        //     description: "Реализовать CI/CD сервиса для гражданина стейтходера",
        //     external_images: [],
        //     priorityLevel: true,
        //     urgency: false,
        //     deadline: "21.05.2024",
        //     taskStatus: 0,
        //     owner_id: 0,
        //     parent_id: "",
        //     possible_deadline: "",
        //     weight: 8
        //   },
        //   {
        //     name: "Проект по ТООИ",
        //     description: "Написать распознаватель капч на питоне (мэйби использовать нейросетку)",
        //     external_images: [],
        //     priorityLevel: false,
        //     urgency: false,
        //     deadline: "21.05.2024",
        //     taskStatus: 2,
        //     owner_id: 0,
        //     parent_id: "",
        //     possible_deadline: "",
        //     weight: 12
        //   },
        //   {
        //     name: "СР по праву",
        //     description: "Написать анализ гражданского иска по договору на оказание услуг по разработке ПО с приложением договора и иска",
        //     external_images: [],
        //     priorityLevel: true,
        //     urgency: true,
        //     deadline: "24.05.2024",
        //     taskStatus: 2,
        //     owner_id: 0,
        //     parent_id: "",
        //     possible_deadline: "",
        //     weight: 4
        //   },
        // ]
      }
    },
    
    methods: {
      noTasks() {
        if (this.tasks === undefined)
          return true
        if (this.tasks === null)
          return true
        if (this.tasks.length === 0)
          return true
        return false
      },

      async loadData(){
        let protocol = projectConfig.protocol
        let host = projectConfig.host
        let port = projectConfig.port
        let url = `${protocol}://${host}/api/tasks?user_id=${this.authStore.user.id}`

        let result = await axios.get(url);
        console.warn(result)
        this.tasks=result.data.tasks;
      }
      

    },

    async mounted() {
        document.title = 'Dashboard | Pyramidum';
        this.loadData()
      }

  }
</script>

<template>
  <div class="pyramidum-container">
    <div class="pyramidum-dashboard">
      <div class="pyramidum-dashboard-header">
        <div class="pyramidum-dashboard-logo-wrapper">
          <div class="pyramidum-dashboard-logo m-2">
            PYRAMIDUM
          </div>
        </div>
        <div class="pyramidum-dashboard-nav my-2"></div>
      </div>
      <div class="pyramidum-dashboard-content flex-grow-1">
        <div v-if="noTasks()" class="pyramidum-dashboard-tasks">
          <div  class="pyramidum-dashboard-no-tasks">
            У Вас нет задач
          </div>
        </div>
        <div v-else class="pyramidum-dashboard-tasks-list">
          <div class="pyramidum-dashboard-task" v-for="task in this.tasks">
            <div class="pyramidum-dashboard-task-header">
              {{ task.header }}
            </div>
            <div class="pyramidum-dashboard-task-content">
              <div class="pyramidum-dashboard-task-main">
                <div class="pyramidum-dashboard-task-description">
                  {{ task.text }}
                </div>
              </div>
              <div class="pyramidum-dashboard-task-attributes">
                <div class="pyramidum-dashboard-task-prioriy">
                  <div v-if="task.is_important" class="badge text-bg-danger">High</div>
                  <div v-else class="badge text-bg-success">Low</div>
                </div>
                <div class="pyramidum-dashboard-task-urgency">
                  <div v-if="task.is_urgent" class="badge text-bg-danger">Urgent</div>
                  <div v-else class="badge text-bg-success">Non urgent</div>
                </div>
                <div class="pyramidum-dashboard-task-deadline">
                  <div class="badge text-bg-dark">{{ task.deadline }}</div>
                </div>
                <div class="pyramidum-dashboard-task-weight">
                  <div class="badge text-bg-warning">{{ task.weight }}</div>
                </div>
                <div class="pyramidum-dashboard-task-status">
                  <div v-if="task.progress_status === 0" class="badge text-bg-secondary">Not started</div>
                  <div v-else-if="task.progress_status === 1" class="badge text-bg-warning">In Progress</div>
                  <div v-else-if="task.progress_status === 2" class="badge text-bg-success">Done</div>
                  <div v-else class="badge text-bg-danger">Unknown</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pyramidum-dashboard-footer justify-content-center">
        <a @click="this.$router.push({name: 'CreateTask'})" class="btn btn-pyramidum rounded-pill fw-bold px-3">
          + Создать задачу
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/src/styles/style.css";
@import "/src/styles/dashboard.css";

.pyramidum-dashboard-tasks, .pyramidum-dashboard-tasks-list {
    width: 100%;
    border: 1px solid var(--pyramidum-light-grey);
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
}

.pyramidum-dashboard-tasks-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: none;
    padding: 0;
}

.pyramidum-dashboard-tasks-list:last-child {
    margin-bottom: 5rem;
}

.pyramidum-dashboard-task {
    border: 1px solid var(--pyramidum-light-grey);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
}

.pyramidum-dashboard-task-header {
    font-family: var(--pyramidum-base-font-family), sans-serif;
    font-weight: 900;
}

.pyramidum-dashboard-task-description {
    font-family: var(--pyramidum-base-font-family), sans-serif;
}

.pyramidum-dashboard-task-attributes {
    display: flex;
    flex-wrap: wrap;
}

.pyramidum-dashboard-task-attributes > div {
    font-family: var(--pyramidum-base-font-family), sans-serif;
    margin-right: 0.5rem;
}

.pyramidum-dashboard-no-tasks {
    font-family: var(--pyramidum-special-font-family), sans-serif;
    font-size: 3vw;
    font-weight: 900;
    text-align: center;
    background: var(--pyramidum-tertiary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--pyramidum-tertiary);
    word-spacing: 0.5rem;
}

.pyramidum-dashboard-footer {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding-bottom: .5rem;
    padding-top: .5rem;
}

@media (min-width: 768px) {
    .pyramidum-dashboard-no-tasks {
        font-size: 2.5vw;
    }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}

</style>
