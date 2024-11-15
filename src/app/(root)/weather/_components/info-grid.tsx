import InfoCard from "@/components/cards/info-card";
import {
  BookMarked,
  CalendarArrowUp,
  Droplets,
  IndianRupee,
  Thermometer,
  Wind,
} from "lucide-react";

export default function WeatherInfoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoCard
        title="Temperature"
        icon={<Thermometer />}
        info="28°C / 82.4°F"
        desc="Moderate"
        href="#"
      />
      <InfoCard
        title="Air Quality"
        icon={<Wind />}
        info="321"
        desc="Poor"
        href="#"
      />
      <InfoCard
        title="Humidity"
        icon={<Droplets />}
        info="60%"
        desc="chance of rain"
        href="#"
      />
    </div>
  );
}
