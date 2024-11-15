import React from "react";
import WeatherHeading from "./_components/heading";
import WeatherInfoGrid from "./_components/info-grid";
import ReportForm from "./_components/report-form";

export default function WeatherModule() {
  return (
    <div className="space-y-8">
      <WeatherHeading />
      <WeatherInfoGrid />
      <ReportForm />
    </div>
  );
}
