import { BASE_URL } from "../utils";

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
