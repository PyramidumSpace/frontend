<script>
import TaskBody from './TaskBody.vue';
import TaskHeader from './TaskHeader.vue';
import SaveTaskButton from './SaveTaskButton.vue';

export default{
  components:{
    TaskHeader,
    TaskBody,
    SaveTaskButton
  },
}
</script>
<template>
    <div>
        <div id="center">
            <TaskHeader />
        </div>
        <TaskBody />
        <SaveTaskButton />
    </div>
    </template>
<style>
#center{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>