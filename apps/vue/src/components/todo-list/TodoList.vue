<script setup lang="ts">
import { defineProps } from "vue";
import TodoItem from "./TodoItem.vue";
import type { Todo } from "@shared/api/todos";

type Props = {
  data: Todo[];
};

defineProps<Props>();

function handleTodoClick(todo: Todo) {
  console.log(todo);
}
</script>

<template>
  <div class="flex flex-col gap-4 border rounded-lg p-4 overflow-y-scroll">
    <TodoItem v-for="todo of data" :todo="todo" @click="handleTodoClick" />
  </div>
</template>
