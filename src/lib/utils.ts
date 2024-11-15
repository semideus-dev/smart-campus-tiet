import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
