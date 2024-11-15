import { z } from "zod";
import { BASE_URL } from "../utils";
import { registerEventFormSchema } from "../schemas";

export async function getAllEvents() {
  const response = await fetch(`${BASE_URL}/events-api/get-all-events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const events = await response.json();

  // Sort events by datetime, newest first
  return events.sort((a: { datetime: string }, b: { datetime: string }) => {
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });
}

export async function addAttendee({
  values,
}: {
  values: z.infer<typeof registerEventFormSchema>;
}) {
  const response = await fetch(`${BASE_URL}/events-api/register-for-event`, {
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

export async function getAttendees(event_name: string) {
  const response = await fetch(
    `${BASE_URL}/events-api/get-all-attendees/${event_name}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch attendees");
  }
  return response.json();
}
