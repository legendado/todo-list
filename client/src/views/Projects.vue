<template>
  <v-container fluid fill-height v-if="isLoggedIn">
    <v-layout align-center justify-center row wrap>
      <v-flex xs12>
        <h1>SIMPLE TODO LIST</h1>
        <h4>FROM RUBY GARAGE</h4>
      </v-flex>
      <v-flex xs12 sm8 md8 lg8 pa-3 ma-3>
        <v-card class="elevation-12" id="br">
          <!-- First toolbar -->
          <v-toolbar flat color="primary">
            <v-icon>far fa-file-alt</v-icon>
            <v-toolbar-title id="title">Name of project</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon>
                <v-icon size="14px">fas fa-pencil-alt</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon size="14px">fas fa-trash-alt</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <!-- Second toolbar -->
          <v-toolbar flat color="grey lighten-1">
            <v-icon id="plus">fas fa-plus</v-icon>
            <!-- <v-text-field
              background-color="white"
              placeholder="Start typing here to create a task..."
            ></v-text-field>-->
            <v-text-field 
              solo
              hide-details              
              label="add task"              
            ></v-text-field>
            <v-btn color="success"
            height="30px"
            >Add Task</v-btn>
          </v-toolbar>

          <v-card-test>
            <h1>test</h1>
          </v-card-test>
          <!-- <v-card-text>
            <v-form>
              <v-text-field
                type="text"
                prepend-icon="person"
                label="Email"
                required
                @input="setLoginEmail"
                :value="loginEmail"
              ></v-text-field>
              <v-text-field
                type="password"
                prepend-icon="lock"
                label="Password"
                required
                @input="setLoginPassword"
                :value="loginPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" @click="login">Login</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <wrong-route/>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import WrongRoute from "../components/WrongRoute.vue";

export default {
  components: {
    WrongRoute
  },
  computed: {
    ...mapGetters("Authentication", ["isLoggedIn"])
  }
};
</script>

<style scoped>
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
