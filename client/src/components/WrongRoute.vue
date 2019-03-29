<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex xs12>
        <v-alert :value="true" color="error" icon="warning">Oops.</v-alert>
      </v-flex>
      <v-flex>
        <v-btn color="primary" dark to="/">Go to home</v-btn>
      </v-flex>
    </v-layout>   
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
