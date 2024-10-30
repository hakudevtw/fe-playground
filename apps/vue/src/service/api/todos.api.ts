import type { CreateTodo } from "./todos.schema";

export const createTodo = async (todo: CreateTodo) => {
  const id = crypto.randomUUID();
  const created_at = new Date().toISOString();

  const newTodo = { ...todo, id, created_at };

  console.log(newTodo);
};
