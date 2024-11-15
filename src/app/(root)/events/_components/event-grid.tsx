"use client";

import { getAllEvents } from "@/lib/events/utils";
import { useEffect, useState } from "react";
import EventCard from "./event-card";

interface Event {
  event_name: string;
  hosted_by: string;
  datetime: string;
}

export default function EventGrid() {
  const [eventData, setEventData] = useState<Event[]>([]);

  useEffect(() => {
    getAllEvents().then(setEventData);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:w-full md:grid-cols-4">
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          event_name={event.event_name}
          hosted_by={event.hosted_by}
          datetime={event.datetime}
        />
      ))}
    </div>
  );
}
