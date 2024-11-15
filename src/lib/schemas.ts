import { z } from "zod";

export const requestFormSchema = z.object({
  author: z.string().min(1, "Author is required."),
  book_name: z.string().min(1, "Book title is required."),
  quantity: z.number().min(1, "Invalid quantity."),
  price: z.number().min(1, "Invalid price"),
  remarks: z.string(),
});

export const registerEventFormSchema = z.object({
  event_name: z.string().min(1, "Event name is required."),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address"),
  semester: z.string().min(1, "Semester is required."),
});
