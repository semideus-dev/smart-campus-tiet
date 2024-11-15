import { BASE_URL } from "../utils";

export async function getBinData() {
  const res = await fetch(`${BASE_URL}/garbage-api/all_sensors`);
  if (!res.ok) {
    throw new Error(`Failed to fetch garbage data: ${res.status}`);
  }
  return await res.json();
}
