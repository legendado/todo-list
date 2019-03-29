<template>
  <v-container fluid fill-height v-if="!isLoggedIn">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12" id="br">
          <v-toolbar dark color="primary" dense>
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
  <v-container v-else>
    <wrong-route />
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import WrongRoute from '../components/WrongRoute.vue'

export default {
  name: "Login", 
  components: {
    WrongRoute
  },
  methods: {
    ...mapMutations("Authentication", ["setLoginEmail", "setLoginPassword"]),
    ...mapActions("Authentication", ["login"])   
  },
  computed: {
    ...mapState("Authentication", ["loginEmail", "loginPassword", "loginError"]),
     ...mapGetters('Authentication', [
      'isLoggedIn'
    ])
  }
};
</script>

<style scoped>
#br {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
