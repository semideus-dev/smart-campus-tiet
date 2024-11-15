import React from "react";
import EventsHeading from "./_components/heading";
import EventGrid from "./_components/event-grid";

export default function EventsModule() {
  return (
    <div className="space-y-8">
      <EventsHeading />
      <EventGrid />
    </div>
  );
}
