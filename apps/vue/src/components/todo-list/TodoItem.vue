<script setup lang="ts">
import { defineProps } from "vue";
import type { Todo } from "@shared/api/todos";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  todo: Todo;
};

const { todo } = defineProps<Props>();

const emit = defineEmits<{
  click: [Todo];
}>();

function handleClick() {
  emit("click", todo);
}
</script>

<template>
  <Card>
    <CardHeader class="p-3 cursor-pointer" @click="handleClick">
      <CardTitle class="text-lg">{{ todo.title }}</CardTitle>
    </CardHeader>
  </Card>
</template>
