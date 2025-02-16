import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateAndTime(date: string, time: string): string {
  const dateTimeString = combineDateTime(date, time);
  const dateTime = new Date(dateTimeString);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short", // Mon, Tue, etc.
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(dateTime);
}

// export function formatDateAndTimeForCalendar() {}
function combineDateTime(date: string, time: string): string {
  return `${date}T${time}:00`;
}

export function formatDateTime(date?: Date): string {
  if (!date) return "No date selected";
  return format(date, "EEEE, MMM d, yyyy");
}
