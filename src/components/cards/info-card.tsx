import { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  info: string;
  desc?: string;
  href: string;
  icon: ReactElement;
}

export default function InfoCard({
  title,
  info,
  desc,
  icon,
  href = "#",
}: InfoCardProps) {
  return (
    <Card className="transition-all duration-200 hover:scale-105">
      <Link href={href}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <span className="text-4xl font-light uppercase tracking-wide text-primary">
            {info}
          </span>
          <p className="text-sm tracking-tight text-muted-foreground">{desc}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
