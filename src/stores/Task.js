import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: ()=> ({
        header: "",
        text: "",
        external_images: [],
        isImportant: false,
        isUrgent: false,
        deadline: "2023-06-30T23:59:59Z",
        progressStatus: 0,
        ownerId: 0,
        parentId: "",
        possibleDeadline: "",
        weight: 0
    })
})
