import InfoCard from "@/components/cards/info-card";
import {
  BookMarked,
  CalendarArrowUp,
  Hammer,
  IndianRupee,
  SprayCan,
  Trash2,
} from "lucide-react";

export default function GarbageInfoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoCard
        title="Total Waste Collected"
        icon={<Trash2 />}
        info="250"
        desc="kilograms of waste collected"
        href="#"
      />
      <InfoCard
        title="Overflow Alerts"
        icon={<SprayCan />}
        info="4/58"
        desc="bins are full"
        href="#"
      />
      <InfoCard
        title="Bin Status"
        icon={<Hammer />}
        info="11/58"
        desc="bins require maintainance"
        href="#"
      />
    </div>
  );
}
