<template>
  <v-list-tile :key="task.id">
    <v-list-tile-action>
      <v-checkbox v-model="status" color="info darken-3"></v-checkbox>
    </v-list-tile-action>

    <span
      v-if="clicked? false : true"
      :class="status && 'grey--text' || 'text--primary'"
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
      @input="setEditTaskName"
      @keyup.enter="save(true)"
      @keyup.esc="save(false)"
    ></v-text-field>

    <v-spacer v-if="!EditTask"></v-spacer>

    <v-btn v-if="!EditTask" icon class="btn" @click="editTask()">
      <v-icon size="14px">fas fa-pencil-alt</v-icon>
    </v-btn>

    <v-btn v-if="!EditTask" icon class="btn" @click="dropTask()">
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
      clicked: false,
      status: this.task.status
    };
  },
  methods: {
    ...mapMutations("Projects", [
      "setEditTask",
      "setEditTaskName",
      "setNewProjectName",
      "setStatus"
    ]),
    ...mapActions("Projects", ["updateTask", "updateStatus", "deleteTask"]),
    save(value) {
      if (value) {
        this.updateTask(this.task.id);
        this.task.name = this.editTaskName;
        this.setEditTaskName(null);
      }

      this.clicked = false;
      this.setEditTask(false);
    },
    editTask() {
      this.setEditTaskName(null);
      this.setEditTaskName(this.task.name);
      this.clicked = true;
      this.setEditTask(true);
    },
    editStatus() {
      this.setStatus(!this.task.status);
      this.updateStatus(this.task.id);
      this.task.status = !this.task.status;
    },
    dropTask() {
      this.deleteTask(this.task.id);
    },
    log() {
      console.log("log");
    }
  },
  computed: {
    ...mapState("Projects", ["EditTask", "editTaskName"])
  },
  watch: {
    status() {
      this.setStatus(this.status);
      this.updateStatus(this.task.id);
    }
  }
};
</script>

<style>
</style>
