<script setup lang="ts">
import TodoList from "@/components/todo-list/TodoList.vue";
import { ref } from "vue";

const todos = ref(["todo1", "todo2", "todo3"]);
</script>

<template>
  <div class="grid grid-cols-2 gap-4 h-full">
    <div></div>
    <TodoList @bar="(t) => {}" />
    <ul>
      <li v-for="(todo, index) in todos">{{ todo }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
