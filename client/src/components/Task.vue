<template>
  <v-hover>
    <v-slide-y-transition class="py-0" group tag="v-list">
      <template v-for="(task, i) in tasks">
        <v-divider :key="`${i}-tdivider`"></v-divider>
        <one-task :task="task" :key="task.id"></one-task>
      </template>
    </v-slide-y-transition>
  </v-hover>
</template>

<script>
import OneTask from "@/components/OneTask";

export default {
  name: "Task",
  components: {
    OneTask
  },
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
