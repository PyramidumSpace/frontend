import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: ()=> ({
        name: "",
        description: "",
        external_images: [],
        priorityLevel: false,
        urgency: false,
        deadline: 0,
        taskStatus: 0,
        owner_id: 0,
        parent_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        possible_deadline: 0,
        weight: 0
    })
})