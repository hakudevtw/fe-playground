import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TodoListView from "@/views/TodoListView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/todo-list", component: TodoListView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
