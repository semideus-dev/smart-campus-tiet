"use client";

import { useEffect, useState } from "react";

import InfoCard from "@/components/cards/info-card";
import { BookMarked, CalendarArrowUp, IndianRupee } from "lucide-react";
import { getAllBooks, getBookCount, getBudgetData } from "@/lib/library/utils";
import { formatAmount } from "@/lib/utils";
import { HashLoader } from "react-spinners";

export default function LibraryInfoGrid() {
  const [budgetData, setBudgetData] = useState<{ Budget: number } | null>(null);
  const [bookCount, setBookCount] = useState<{
    book_count: number;
    requested_book_count: number;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [budget, bookCount] = await Promise.all([
          getBudgetData(),
          getBookCount(),
        ]);
        setBudgetData(budget);
        setBookCount(bookCount);
      } catch {
        console.error("Error fetching data");
      }
    }

    fetchData();
  });
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoCard
        title="Inventory"
        icon={<BookMarked />}
        info={
          bookCount ? (
            bookCount.book_count
          ) : (
            <HashLoader color="#9333ea" size={20} className="m-4" />
          )
        }
        desc="books available at the library"
        href="/library/inventory"
      />
      <InfoCard
        title="Pending Requests"
        icon={<CalendarArrowUp />}
        info={
          bookCount ? (
            bookCount.requested_book_count
          ) : (
            <HashLoader color="#9333ea" size={20} className="m-4" />
          )
        }
        desc="orders in queue"
        href="/library/pending-requests"
      />
      <InfoCard
        title="Library Budget"
        icon={<IndianRupee />}
        info={
          budgetData ? (
            `₹${formatAmount(budgetData.Budget)}`
          ) : (
            <HashLoader color="#9333ea" size={20} className="m-4" />
          )
        }
        desc="amount remaining"
        href="#"
      />
    </div>
  );
}
