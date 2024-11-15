import InfoCard from "@/components/cards/info-card";
import { BookMarked, CalendarArrowUp, IndianRupee } from "lucide-react";

export default function LibraryInfoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoCard
        title="Inventory"
        icon={<BookMarked />}
        info="3,440"
        desc="books available at the library"
        href="/library/inventory"
      />
      <InfoCard
        title="Pending Requests"
        icon={<CalendarArrowUp />}
        info="4"
        desc="orders in queue"
        href="/library/pending-requests"
      />
      <InfoCard
        title="Library Budget"
        icon={<IndianRupee />}
        info="₹1,50,000"
        desc="amount remaining"
        href="#"
      />
    </div>
  );
}
