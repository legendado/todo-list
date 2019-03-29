<template>
  <v-container fluid fill-height v-if="!isLoggedIn">
    <v-snackbar
      :color="color"
      absolute
      v-model="snackbar"
      :bottom="true"
      :right="true"
      :timeout="2000"
    >{{ text }}</v-snackbar>

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12" id="br">
          <v-toolbar color="primary" dark dense>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                type="text"
                prepend-icon="person"
                label="Login"
                required
                :rules="loginRules"
                @input="setRegisterLogin"
              ></v-text-field>
              <v-text-field
                type="text"
                prepend-icon="email"
                :rules="emailRules"
                label="E-mail"
                required
                @input="setRegisterEmail"
              ></v-text-field>
              <v-text-field
                type="password"
                prepend-icon="lock"
                :rules="passRules"
                :counter="32"
                label="Password"
                required
                @input="setRegisterPassword"
              ></v-text-field>
              <v-text-field
                type="password"
                prepend-icon="lock"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                label="Confirm password"
                required
              ></v-text-field>
              <v-alert
                color="error"
                icon="warning"
                outline
                :value="registerError"
                dismissible
                transition="scale-transition"
              >{{ registerError }}</v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="valid? register() : validError()">Register</v-btn>
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
  name: "Register",
  components: {
    WrongRoute
  },
  data() {
    return {
      confirmPassword: "",
      valid: false,
      snackbar: false,
      text: "",
      color: "",
      passRules: [
        v => !!v || "Password is required",
        v =>
          (v.length <= 32 && v.length >= 8) ||
          "Password must be less than 32 and more than 8 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      confirmPasswordRules: [
        v => !!v || "Passwrod doesn't match.",
        v => v == this.registerPassword || "Passwrod doesn't match."
      ],
      loginRules: [v => !!v || "Login is required"]
    };
  },
  methods: {
    ...mapMutations("Authentication", [
      "setRegisterEmail",
      "setRegisterPassword",
      "setRegisterLogin"
    ]),
    ...mapActions("Authentication", ["register"]),
    validError() {
      this.text = `Please, valid the information.`;
      this.color = "error";
      this.snackbar = true;
    }
  },
  computed: {
    ...mapState("Authentication", [
      "registerEmail",
      "registerPassword",
      "registerLogin",
      "registerError"
    ]),
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