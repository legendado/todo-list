<template>
  <v-card class="elevation-12" id="br">
    <project :project="project"></project>
    <v-toolbar flat color="grey lighten-1">
      <v-icon id="plus">fas fa-plus</v-icon>
      <v-text-field solo hide-details label="add task"></v-text-field>
      <v-btn color="success" height="30px">Add Task</v-btn>
    </v-toolbar>
    <v-card-text>
        <task :tasks="tasks"></task>
    </v-card-text>    
  </v-card>
</template>

<script>
import Project from "@/components/Project.vue";
import Task from "@/components/Task.vue";

export default {
  name: "OneProject",
  components: {
      Project,
      Task
  },
  props: ["project", "tasks"]  
};
</script>

<style scope>
#br {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
