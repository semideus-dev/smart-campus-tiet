"use client";
import React, { useEffect, useState } from "react";
import ParkingHeading from "./_components/heading";
import ParkingCard from "./_components/parking-card";
import { getParkingData } from "@/lib/parking/utils";

interface ParkingSpot {
  sensor_id: string;
  parking_status: string;
}

export default function ParkingModule() {
  const [parkingData, setParkingData] = useState<ParkingSpot[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getParkingData();
        setParkingData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="space-y-8">
      <ParkingHeading />
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-semibold capitalize">Main Parking Area</h1>
        <div className="grid grid-cols-2 gap-4 rounded-lg border p-4 md:grid-cols-4">
          {parkingData.map((spot, index) => (
            <ParkingCard
              name={`MP${spot.sensor_id}`}
              key={index}
              status={spot.parking_status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
