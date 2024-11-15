"use client";

import PageHeader from "@/components/ui/page-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import DashboardCard from "@/components/cards/dashboard-card";
import { Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startInstantMeeting } from "@/lib/meeting/utils";

export default function Home() {
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
      <div className="grid grid-cols-1 md:grid-cols-4 w-full place-items-center gap-2">
        <DashboardCard title="Student Profile">
          <Edit size={20} />
        </DashboardCard>
        <DashboardCard title="Group Meeting">
          <Button
            size="icon"
            className="p-0 w-fit h-fit flex items-center justify-center"
            onClick={() => startInstantMeeting()}
          >
            <Plus size={20} />
          </Button>
        </DashboardCard>
      </div>
    </div>
  );
}
