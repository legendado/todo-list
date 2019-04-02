<template>
  <v-card class="elevation-12" id="br">
    <project :project="project"></project>
    <v-toolbar flat color="grey lighten-1">
      <v-icon id="plus">fas fa-plus</v-icon>
      <v-text-field
        solo
        hide-details
        label="Start typing here to create a task..."
        v-model="taskName"
        @keyup.enter="addTask()"
      ></v-text-field>
      <v-btn @click="addTask()" color="success" height="30px">Add Task</v-btn>
    </v-toolbar>

    <task :tasks="tasks"></task>
  </v-card>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Project from "@/components/Project.vue";
import Task from "@/components/Task.vue";

export default {
  methods: {
    ...mapMutations("Projects", ["setNewTaskName"]),
    ...mapActions("Projects", ["createTask"]),
    addTask() {
      if (this.taskName === "") {
        return;
      }
      this.setNewTaskName(this.taskName);
      this.taskName = ""
      this.createTask(this.project.id);
    }
  },
  data() {
    return {
      taskName: ""
    };
  },
  computed: {
    ...mapState("Projects", ["newTaskName"])
  },
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
