<template>
  
    <v-card class="elevation-12" id="br">
      <!-- First toolbar -->
      <v-hover>
        <v-toolbar flat color="primary" slot-scope="{ hover }">
          <v-icon>far fa-file-alt</v-icon>
          <v-toolbar-title id="title">{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items v-if="hover">
            <v-btn icon>
              <v-icon size="14px">fas fa-pencil-alt</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon size="14px">fas fa-trash-alt</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-hover>

      <!-- Second toolbar -->
      <v-toolbar flat color="grey lighten-1">
        <v-icon id="plus">fas fa-plus</v-icon>
        <v-text-field solo hide-details label="add task"></v-text-field>
        <v-btn color="success" height="30px">Add Task</v-btn>
      </v-toolbar>

      <v-card-text>
        <task></task>
      </v-card-text>
    </v-card>
  
</template>

<script>
import Task from "@/components/Task";

export default {
  props: ["title", "id"],
  components: {
    Task
  }
};
</script>

<style scope>
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
