<template>
  <v-list-tile :key="task.id">
    <v-list-tile-action>
      <v-checkbox v-model="task.status" color="info darken-3"></v-checkbox>
    </v-list-tile-action>

    <span
      v-if="clicked? false : true"
      :class="task.status && 'grey--text' || 'text--primary'"
      class="ml-3"
      v-text="task.name"
    ></span>
    <v-text-field
      flat
      v-else
      solo
      hide-details
      autofocus
      :value="task.name" 
      @input="setNewTaskName"    
    ></v-text-field>

    <v-spacer v-if="!EditTask"></v-spacer>

    <v-btn v-if="!EditTask" icon class="btn" @click="test()">
      <v-icon size="14px">fas fa-pencil-alt</v-icon>
    </v-btn>

    <v-btn v-if="!EditTask" icon class="btn">
      <v-icon size="14px">fas fa-trash-alt</v-icon>
    </v-btn>
  </v-list-tile>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "OneTask",
  props: ["task"],
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    ...mapMutations("Projects", ["setEditTask, setNewTaskName", "setNewProjectName"]),
    // endEdit() {
    //   this.clicked = false;
    //   this.setEditTask(false);
    // },
    // editTask() {
    //   this.setNewTaskName(null);
    //   this.setNewTaskName(this.task.name);
    //   this.clicked = true;
    //   this.setEditTask(true);
    // },
    test(){
        // this.setNewProjectName("??")
        this.setNewTaskName("??")
    }
  },
  computed: {
    ...mapState("Projects", ["EditTask", "editTaskName"])
    
  }
};
</script>

<style>
</style>
