<template>
  <!-- v-if="isLoggedIn" -->
  <v-container fluid fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12>
        <h1>SIMPLE TODO LIST</h1>
        <h4>FROM RUBY GARAGE</h4>
      </v-flex>

      <v-flex xs12 sm8 md8 lg8 pa-3 ma-3 v-for="element in projects" :key="element.project.id">
        <one-project :project="element.project" :tasks="element.task"></one-project>
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
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
import OneProject from "../components/OneProject.vue";
import router from "../router";

export default {
  components: {
    OneProject
  },
  computed: {
    ...mapGetters("Authentication", ["isLoggedIn"]),
    ...mapState("Projects", ["projects"])
  },
  methods: {
    ...mapMutations("Projects", ["setEditTask"]),
    ...mapActions("Projects", ["createProject", "getProjects"])
  },
  mounted() {
    if (!this.isLoggedIn) {
      router.push("/");
      return;
    }
    this.setEditTask(false);
    this.getProjects();
  }
};
</script>

<style scoped>
#plus {
  color: black;
}
</style>
