import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import { BASE_URL, parseDateTime } from "@/lib/utils";
import RegisterEventForm from "../_components/register-event-form";
import AttendeesList from "../_components/attendees-list";

async function fetchEventDetails(event_name: string) {
  const res = await fetch(`${BASE_URL}/events-api/get-event/${event_name}`, {
    cache: "no-store", // Prevent caching if data updates frequently
  });

  if (!res.ok) {
    throw new Error("Failed to fetch event details");
  }

  return res.json();
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ event_name: string }>;
}) {
  const { event_name } = await params;

  const event = await fetchEventDetails(event_name);

  const { event_name: name, hosted_by, datetime, description } = event;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <PageHeader header={name} />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/events">Events</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{event_name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Description</h3>
          <p>{description}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Date and Time</h3>
          <p>
            {parseDateTime(datetime)?.date} at {parseDateTime(datetime)?.time}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Hosted by</h3>
          <p>{hosted_by}</p>
        </div>
      </div>

      <RegisterEventForm currentEvent={event_name} />
      <AttendeesList currentEvent={event_name} />
    </div>
  );
}
