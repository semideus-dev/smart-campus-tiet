import { BASE_URL } from "../utils";

export async function getWeatherData() {
  const res = await fetch(`${BASE_URL}/weather-api/data`);
  if (!res.ok) {
    throw new Error(`Failed to fetch weather data: ${res.status}`);
  }
  return await res.json();
}
