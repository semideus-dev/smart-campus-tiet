import PageHeader from "@/components/ui/page-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { SignOutButton, UserProfile } from "@clerk/nextjs";

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
      <SignOutButton />
      <div className="flex w-full items-center justify-center">
        <UserProfile routing="hash" />
      </div>
    </div>
  );
}
