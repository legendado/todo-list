<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                type="text"
                prepend-icon="person"                
                label="Email"
                required
                @input="setLoginEmail"
              ></v-text-field>
              <v-text-field
                type="password"
                prepend-icon="lock"               
                label="Password"
                required
                @input="setLoginPassword"
              ></v-text-field>
              <v-alert
                color="error"
                icon="warning"
                outline
                :value="loginError"
                dismissible
                transition="scale-transition"
              >{{ loginError }}</v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Login",  
  methods: {
    ...mapMutations("Authentication", ["setLoginEmail", "setLoginPassword"]),
    ...mapActions("Authentication", ["login"])   
  },
  computed: {
    ...mapState("Authentication", ["loginEmail", "loginPassword", "loginError"])
  }
};
</script>

<style scope>
</style>
