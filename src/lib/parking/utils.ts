import { BASE_URL } from "../utils";

export async function getParkingData() {
  const res = await fetch(`${BASE_URL}/parking-management/list`);
  if (!res.ok) {
    throw new Error(`Failed to fetch parking data: ${res.status}`);
  }
  return await res.json();
}
