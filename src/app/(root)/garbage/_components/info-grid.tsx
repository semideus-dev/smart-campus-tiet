"use client";
import InfoCard from "@/components/cards/info-card";
import { getBinData } from "@/lib/garbage/utils";
import {
  BookMarked,
  CalendarArrowUp,
  Hammer,
  IndianRupee,
  SprayCan,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Bin {
  sensor_id: number;
  location: string;
  status: string;
}

export default function GarbageInfoGrid() {
  const [binData, setBinData] = useState<Bin[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBinData();
        setBinData(data);

        // Calculate total waste collected (20 kg per bin)
        // const totalBins = data.length;
        // const overflowedBins = data.filter(
        //   (bin: any) => bin.status === "Overflowed"
        // ).length;

        // setTotalWasteCollected(totalBins * 20); // Each bin contributes 20 kg
        // setOverflowAlerts({ overflowed: overflowedBins, total: totalBins });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Total Waste Collected */}
      <InfoCard
        title="Total Waste Collected"
        icon={<Trash2 />}
        info={`${binData.length * 20}`}
        desc="kilograms of waste collected"
        href="#"
      />

      {/* Overflow Alerts */}
      <InfoCard
        title="Overflow Alerts"
        icon={<SprayCan />}
        info={`${
          binData.filter((bin: any) => bin.status === "Overflowed").length
        }/${binData.length}`}
        desc="bins are full"
        href="#"
      />
    </div>
  );
}
