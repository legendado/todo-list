<template>
  <v-toolbar app absolute>
    <v-toolbar-title>TODO List</v-toolbar-title>
    <v-spacer></v-spacer>    
    <v-toolbar-items class="hidden-sm-and-down"> 
      <v-btn flat to="/login" v-if="!isLoggedIn">
        <v-icon size="20px" class="mr-1">power_settings_new</v-icon>Login
      </v-btn>
      <v-btn flat to="/register" v-if="!isLoggedIn">
        <v-icon size="20px" class="mr-1">perm_identity</v-icon>Register
      </v-btn>
      <v-btn flat v-if="isLoggedIn" @click="logout">
        <v-icon size="20px" class="mr-1">exit_to_app</v-icon>Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('Authentication', [
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions('Authentication', [
      'logout'
    ])
  }
};
</script>

<style>
</style>
