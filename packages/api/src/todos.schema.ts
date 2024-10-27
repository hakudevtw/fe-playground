import { z } from "zod";

export const Status = z.enum(["not_started", "in_progress", "completed"]).default("not_started");
export type Status = z.infer<typeof Status>;

export const Todo = z.object({
  id: z.string(),
  title: z.string(),
  content: z.optional(z.string()),
  status: Status,
  due_date: z.optional(z.date()),
  userId: z.string(),
});
export type Todo = z.infer<typeof Todo>;
