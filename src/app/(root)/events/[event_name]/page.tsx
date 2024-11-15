import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PageHeader from "@/components/ui/page-header";
import { BASE_URL, parseDateTime } from "@/lib/utils";

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
  params: { event_name: string };
}) {
  const event = await fetchEventDetails(params.event_name);

  const { event_name, hosted_by, datetime, description } = event;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <PageHeader header={event_name} />
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
    </div>
  );
}
