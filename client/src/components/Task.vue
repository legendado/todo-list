<template>
  <v-hover>
    <v-list>
      <template v-for="task in tasks">
        <v-list-tile :key="task.id">
          <v-list-tile-action>
            <v-checkbox id="task.id" v-model="task.status"></v-checkbox>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title :key="task.name">{{ task.name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action class="btn">
            <v-btn icon>
              <v-icon size="14px">fas fa-pencil-alt</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action class="btn">
            <v-btn icon>
              <v-icon size="14px">fas fa-trash-alt</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-hover>
</template>

<script>
export default {
  name: "Task",
  props: ["tasks"] 
};
</script>

<style>
.v-list__tile .btn {
  display: none;
}

.v-list__tile:hover .btn {
  display: flex;
}
</style>
