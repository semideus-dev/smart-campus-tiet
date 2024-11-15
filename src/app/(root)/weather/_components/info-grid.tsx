"use client";
import InfoCard from "@/components/cards/info-card";
import { getWeatherData } from "@/lib/weather/utils";
import { Droplets, Thermometer, Wind } from "lucide-react";
import { useEffect, useState } from "react";

export default function WeatherInfoGrid() {
  const [weatherData, setWeatherData] = useState<{
    temperature: number;
    air_quality: number;
    air_humidity: number;
  } | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const data = await getWeatherData();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeatherData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoCard
        title="Temperature"
        icon={<Thermometer />}
        info={weatherData ? weatherData.temperature : "N/A"}
        desc="Moderate"
        href="#"
      />
      <InfoCard
        title="Air Quality"
        icon={<Wind />}
        info={weatherData ? weatherData.air_quality : "N/A"}
        desc="Poor"
        href="#"
      />
      <InfoCard
        title="Humidity"
        icon={<Droplets />}
        info={weatherData ? weatherData.air_humidity : "N/A"}
        desc="chance of rain"
        href="#"
      />
    </div>
  );
}
