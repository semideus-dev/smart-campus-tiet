import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Car, Icon, Scan } from "lucide-react";

interface ParkingCardProps {
  name: string;
  status: any;
}

export default function ParkingCard({ name, status }: ParkingCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-center border-2 border-dotted bg-muted text-muted-foreground",
        status && "border-purple-600 bg-purple-100 text-purple-600"
      )}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-2">
        {status ? <Scan /> : <Car />}
        <span className="capitalize tracking-tight">{status}</span>
      </CardContent>
    </Card>
  );
}
