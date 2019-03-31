<template>
  <v-card class="elevation-12" id="br">
    <!-- First toolbar -->
    <v-hover>
      <v-toolbar flat color="primary" slot-scope="{ hover }">
        <v-icon>far fa-file-alt</v-icon>
        <v-toolbar-title id="title">
          <span v-if="!isEditProject">{{ project.name }}</span>
          <v-text-field
            v-else
            solo
            hide-details
            autofocus
            :value="project.name"
            @input="setNewProjectName"
            @keyup.enter="save()"
          ></v-text-field>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="hover">
          <v-btn icon @click="editProjecName()" v-show="!isEditProject">
            <v-icon size="14px">fas fa-pencil-alt</v-icon>
          </v-btn>
          <v-btn icon @click="deleteProj()" v-show="!isEditProject">
            <v-icon size="14px">fas fa-trash-alt</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-hover>

    <!-- Second toolbar -->
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
import { mapMutations, mapState, mapActions } from "vuex";
import Task from "@/components/Task";
import LoginVue from "../views/Login.vue";

export default {
  props: ["project"],
  data() {
    return {
      isEditProject: false,
      tasks: [
        {
          id: 1,
          status: 0,
          name: 'task1'
        }
      ]
    };
  },
  components: {
    Task
  },
  methods: {
    ...mapActions("Projects", [
      "updateProject",
      "fetchProjects",
      "deleteProject"
    ]),
    ...mapMutations("Projects", ["setNewProjectName"]),
    editProjecName() {
      this.setNewProjectName(null);
      this.setNewProjectName(this.project.name);
      this.isEditProject = !this.isEditProject;
    },
    save() {
      this.updateProject(this.project.id);
      this.project.name = this.newProjectName;
      this.setNewProjectName(null);
      this.isEditProject = !this.isEditProject;
    },
    deleteProj() {
      this.deleteProject(this.project);
    }
  },
  computed: {
    ...mapState("Projects", ["newProjectName", "projects"])
  }
};
</script>

<style scope>
#br {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
#title {
  color: white;
}
#plus {
  color: green;
  margin-right: 15px;
}
#btn {
  padding: 0;
  margin: 0;
}
</style>
