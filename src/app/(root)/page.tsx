"use client";

import PageHeader from "@/components/ui/page-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import DashboardCard from "@/components/cards/dashboard-card";
import { Megaphone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startInstantMeeting } from "@/lib/meeting/utils";
import { UserButton } from "@clerk/nextjs";
import WeatherModule from "./weather/page";
import { useEffect, useState } from "react";
import { getAnnouncements } from "@/lib/utils";

export default function Home() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    async function fetchAnnouncement() {
      try {
        const data = await getAnnouncements();
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    }

    fetchAnnouncement();
  }, []);
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <PageHeader header="Smart Campus - Thapar" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full bg-primary/10 h-fit py-1 text-sm text-center rounded-xl space-x-2 flex items-center justify-center">
        <Megaphone />
        <span>Announcements: {content}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full place-items-center gap-2">
        <DashboardCard title="Student Profile">
          <UserButton />
        </DashboardCard>
        <DashboardCard title="Group Meeting">
          <div className="w-fit p-2 rounded-full bg-primary text-white hover:rotate-12">
            <Button
              size="icon"
              className="p-0 w-fit h-fit flex items-center justify-center"
              onClick={() => startInstantMeeting()}
            >
              <Plus size={20} />
            </Button>
          </div>
        </DashboardCard>
      </div>
      <WeatherModule />
    </div>
  );
}
