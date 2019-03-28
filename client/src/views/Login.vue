<template>
  <v-container fluid fill-height>
    <!-- <v-snackbar
      :color="color"
      absolute
      v-model="snackbar"
      :bottom="true"
      :right="true"
      :timeout="2000"
    >{{ text }}</v-snackbar> -->

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
                v-model="login"
                label="Login"
                required
              ></v-text-field>
              <v-text-field
                type="password"
                prepend-icon="lock"
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
    //   snackbar: false,
      login: "",
      password: ""
    };
  }
};
</script>

<style scope>
</style>
