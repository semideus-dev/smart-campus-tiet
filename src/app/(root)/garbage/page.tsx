import React from "react";
import GarbageHeading from "./_components/heading";
import GarbageInfoGrid from "./_components/info-grid";

export default function GarbageModule() {
  return (
    <div className="space-y-8">
      <GarbageHeading />
      <GarbageInfoGrid />
    </div>
  );
}
