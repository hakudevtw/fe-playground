<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { createTodo } from "@/service/api/todos.api";
import { CreateTodo } from "@/service/api/todos.schema";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";

const formSchema = toTypedSchema(CreateTodo);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  createTodo(values);
});
</script>

<template>
  <div class="rounded-lg border p-4 w-full">
    <form class="grid space-y-3" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Todo Title" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="content">
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Todo Content" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Submit </Button>
    </form>
  </div>
</template>
