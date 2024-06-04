import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: ()=> ({
        header: "",
        text: "",
        external_images: [],
        isImportant: false,
        isUrgent: false,
        deadline: "",
        progressStatus: 0,
        ownerId: 0,
        parentId: "",
        possibleDeadline: "",
        weight: 0
    })
})
