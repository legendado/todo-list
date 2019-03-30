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
            <v-btn icon @click="log(task.id)">
              <v-icon size="14px">fas fa-pencil-alt</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action class="btn">
            <v-btn icon @click="log(task.id)">
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
  data() {
    return {
      tasks: [
        {
          id: 1,
          status: 0,
          name: "task1"
        },
        {
          id: 2,
          status: true,
          name: "task2"
        },
        {
          id: 3,
          status: 1,
          name: "task3"
        }
      ]
    };
  },
  methods: {
    show(task) {
      console.log(task);
    },
    log(name) {
      console.log(name);
    }
  }
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
