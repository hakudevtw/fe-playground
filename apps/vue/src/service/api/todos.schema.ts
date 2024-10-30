import { z } from "zod";
import { Todo } from "@shared/api/todos";

export const CreateTodo = Todo.omit({ id: true, created_at: true, status: true, userId: true });
export type CreateTodo = z.infer<typeof CreateTodo>;
