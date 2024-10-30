<script setup lang="ts">
import TodoList from "@/components/todo-list/TodoList.vue";
import AddTodoForm from "@/components/todo-list/AddTodoForm.vue";
import type { Todo } from "@shared/api/todos";

const MOCK_TODO: Todo[] = [
  {
    id: "1",
    title: "Todo 1",
    content: "Content 1",
    status: "not_started",
    created_at: new Date(),
    userId: "1",
  },
  {
    id: "2",
    title: "Todo 2",
    content: "Content 2",
    status: "in_progress",
    created_at: new Date(),
    userId: "1",
  },
  {
    id: "3",
    title: "Todo 3",
    content: "Content 3",
    status: "completed",
    created_at: new Date(),
    userId: "1",
  },
  {
    id: "4",
    title: "Todo 4",
    content: "Content 4",
    status: "completed",
    created_at: new Date(),
    userId: "1",
  },
];
</script>

<template>
  <div class="grid md:grid-cols-2 gap-10 h-full">
    <div class="grid place-items-center">
      <AddTodoForm />
    </div>

    <TodoList :data="MOCK_TODO" />
  </div>
</template>

<style scoped></style>
