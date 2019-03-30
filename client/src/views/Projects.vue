<template>
  <!-- v-if="isLoggedIn" -->
  <v-container fluid fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12>
        <h1>SIMPLE TODO LIST</h1>
        <h4>FROM RUBY GARAGE</h4>
      </v-flex>
      <project/>
      <v-flex xs12>
        <v-btn color="primary">
          <v-icon id="plus">fas fa-plus</v-icon>Add new project
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Project from "../components/Project.vue";
import router from "../router";

export default {
  components: {
    Project
  },
  computed: {
    ...mapGetters("Authentication", ["isLoggedIn"])
  },
  mounted() {
    if (!this.isLoggedIn) {
      router.push("/login");
    }
  }
};
</script>

<style scoped>
#plus {
  color: black;
}
</style>
