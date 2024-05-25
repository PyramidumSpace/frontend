import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: ()=> ({
        name: "",
        description: "",
        external_images: [],
        priorityLevel: false,
        urgency: false,
        deadline: "",
        taskStatus: 0,
        owner_id: 0,
        parent_id: "",
        possible_deadline: "",
        weight: 0
    })
})
