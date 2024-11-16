import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAnnouncements = async () => {
  try {
    const res = await fetch(`${BASE_URL}/announcements-api/get_announcement`);
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch {
    return [];
  }
};

export const isUnderMaintainance = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_MAINTAINANCE}`);
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch {
    return true;
  }
};

export const parseDateTime = (datetime: string) => {
  try {
    // Create a Date object from the provided datetime string
    const dateObject = new Date(datetime);

    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid datetime");
    }

    // Format the date as "Tue, 11th Nov"
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = days[dateObject.getUTCDay()];
    const dayOfMonth = dateObject.getUTCDate();
    const month = months[dateObject.getUTCMonth()];

    // Add ordinal suffix to the day
    const ordinalSuffix = (day: number) => {
      if (day % 10 === 1 && day !== 11) return "st";
      if (day % 10 === 2 && day !== 12) return "nd";
      if (day % 10 === 3 && day !== 13) return "rd";
      return "th";
    };

    const formattedDate = `${dayOfWeek}, ${dayOfMonth}${ordinalSuffix(
      dayOfMonth
    )} ${month}`;

    // Format the time into 12-hour format with AM/PM
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

    return { date: formattedDate, time: formattedTime };
  } catch (error) {
    console.error("Error parsing datetime:", error);
    return null; // Return null or handle the error as needed
  }
};

export function formatAmount(num: number): string {
  const numString = num.toString();
  const [integerPart, decimalPart] = numString.split(".");

  // Format the integer part in the Indian numbering system
  const lastThreeDigits = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);

  const formattedInteger = otherDigits
    ? otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThreeDigits
    : lastThreeDigits;

  // Append the decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
