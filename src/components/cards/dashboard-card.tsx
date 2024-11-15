import { ReactElement, ReactNode } from "react";
import { Card, CardFooter, CardTitle } from "../ui/card";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
}

export default function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <Card className="h-[250px] w-[300px] my-10 flex flex-col justify-between p-4 rounded-xl border-2 border-b-primary">
      <CardTitle>{title}</CardTitle>
      <CardFooter className="flex p-0 w-full justify-end">
        <div className="w-fit p-2 rounded-full bg-primary text-white hover:rotate-12">
          {children}
        </div>
      </CardFooter>
    </Card>
  );
}
