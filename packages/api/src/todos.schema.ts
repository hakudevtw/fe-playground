import { z } from "zod";

export const Status = z.union([z.literal("active"), z.literal("completed")]);
export type Status = z.infer<typeof Status>;

export const Todo = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  completed: z.boolean(),
  status: Status,
  due_date: z.date(),
  userId: z.string(),
});
export type Todo = z.infer<typeof Todo>;
