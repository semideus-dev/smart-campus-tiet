import { z } from "zod";
import { reportFireFormSchema } from "../schemas";
import { BASE_URL } from "../utils";

export async function reportHazard({
  values,
}: {
  values: z.infer<typeof reportFireFormSchema>;
}) {
  const response = await fetch(`${BASE_URL}/fire-api/manual_report`, {
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
