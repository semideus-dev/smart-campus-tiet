import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { parseDateTime } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event_name: string;
  hosted_by: string;
  datetime: string;
}

export default function EventCard({
  event_name,
  hosted_by,
  datetime,
}: EventCardProps) {
  const router = useRouter();
  const isPastEvent = new Date(datetime) < new Date();

  const handleCardClick = () => {
    if (!isPastEvent) {
      router.push(`/events/${event_name}`);
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`flex h-[200px] flex-col justify-between border-2 transition-all duration-200 ${
        isPastEvent
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-105 cursor-pointer border-b-primary"
      }`}
    >
      <CardHeader className="flex flex-col p-4">
        <CardTitle className="text-3xl font-medium">{event_name}</CardTitle>
        <span className="text-sm italic">by {hosted_by}</span>
      </CardHeader>
      <CardContent className="mt-5 flex items-center justify-between px-4 py-2 font-medium text-muted-foreground">
        <span>{parseDateTime(datetime)?.date}</span>
        <span
          className={`h-fit rounded-xl p-0 px-3 text-sm text-primary-foreground ${
            isPastEvent ? "bg-muted-foreground text-muted" : "bg-primary"
          }`}
        >
          {parseDateTime(datetime)?.time}
        </span>
      </CardContent>
    </Card>
  );
}
