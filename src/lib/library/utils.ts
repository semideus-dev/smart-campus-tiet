import { BASE_URL } from "@/lib/utils";
import { z } from "zod";
import { requestFormSchema } from "../schemas";

export const getBudgetData = async () => {
  const res = await fetch(`${BASE_URL}/api/get-budget`);
  if (!res.ok) {
    throw new Error(`Failed to fetch budget data: ${res.status}`);
  }
  return await res.json();
};
export const getAllBooks = async () => {
  const res = await fetch(`${BASE_URL}/api/get-all-books`);
  if (!res.ok) {
    throw new Error(`Failed to fetch all books: ${res.status}`);
  }
  return await res.json();
};

export const getBookCount = async () => {
  const res = await fetch(`${BASE_URL}/api/book-count`);
  if (!res.ok) {
    throw new Error(`Failed to fetch all books: ${res.status}`);
  }
  return await res.json();
};

export async function addBookRequest({
  values,
}: {
  values: z.infer<typeof requestFormSchema>;
}) {
  const response = await fetch(`${BASE_URL}/api/add-item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("Failed to submit the form");
  }
}
