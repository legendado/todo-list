<template>
  <v-hover>
    <v-toolbar dense flat color="primary" slot-scope="{ hover }">
      <v-icon>far fa-file-alt</v-icon>
      <v-toolbar-title id="title">
        <span v-if="cliecked? false : true">{{ project.name }}</span>
        <v-text-field
          v-else
          solo
          hide-details
          autofocus
          :value="project.name"
          @input="setNewProjectName"
          @keyup.enter="save(true)"
          @keyup.esc="save(false)"
        ></v-text-field>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="hover">
        <v-btn v-if="!isEditProject" icon @click="editProjecName()" v-show="!isEditProject">
          <v-icon size="14px">fas fa-pencil-alt</v-icon>
        </v-btn>
        <v-btn v-if="!isEditProject" icon @click="deleteProj()" v-show="!isEditProject">
          <v-icon size="14px">fas fa-trash-alt</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-hover>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Project",
  props: ["project"],
  data() {
    return {
      cliecked: false
    };
  },
  methods: {
    ...mapActions("Projects", ["updateProject", "deleteProject"]),
    ...mapMutations("Projects", ["setNewProjectName", "setIsEditProject"]),
    editProjecName() {
      this.setNewProjectName(null);
      this.setNewProjectName(this.project.name);
      this.cliecked = !this.cliecked;
      this.setIsEditProject(true);
    },
    save(value) {
      if (value) {
        this.updateProject(this.project.id);
        this.project.name = this.newProjectName;
      }
      this.setNewProjectName(null);
      this.cliecked = !this.cliecked;
      this.setIsEditProject(false);
    },
    deleteProj() {
      this.deleteProject(this.project.id);
    }
  },
  computed: {
    ...mapState("Projects", ["newProjectName", "isEditProject"])
  }
};
</script>

<style scope>
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
