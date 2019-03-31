<template>
  <!-- v-if="isLoggedIn" -->
  <v-container fluid fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12>
        <h1>SIMPLE TODO LIST</h1>
        <h4>FROM RUBY GARAGE</h4>
      </v-flex>

      <v-flex xs12 sm8 md8 lg8 pa-3 ma-3 v-for="project in projects" :key="project.id">
        <project :project="project"></project>
      </v-flex>

      <v-flex xs12>
        <v-btn color="primary" @click="createProject()">
          <v-icon id="plus">fas fa-plus</v-icon>Add new project
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Project from "../components/Project.vue";
import router from "../router";

export default {
  components: {
    Project
  },
  computed: {
    ...mapGetters("Authentication", ["isLoggedIn"]),
    ...mapState("Projects", ["projects"]),
    ...mapState("Tasks", ["allTasks"])
  },
  methods: {
    ...mapActions("Projects", ["createProject", "fetchProjects"])
  },
  mounted() {
    if (!this.isLoggedIn) {
      router.push("/login");
      return;
    }
    this.fetchProjects();
  }
};
</script>

<style scoped>
#plus {
  color: black;
}
</style>
