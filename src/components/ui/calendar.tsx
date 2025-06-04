"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("px-5 py-3 bg-zinc-950 text-white duration-1000 transition-all", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-white",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "default" }),
          "h-7 w-7 p-0 border-zinc-700"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1 mx-5 my-2",
        head_row: "flex",
        head_cell:
          "text-zinc-400 rounded-md w-8 font-normal text-[1rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-zinc-800 [&:has([aria-selected].day-outside)]:bg-zinc-800/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-white hover:bg-white/80"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#FAFAFA] text-lg text-white hover:bg-zinc-600 hover:text-white focus:bg-[#FAFAFA] focus:text-black ",
        day_today: "bg-zinc-800 text-white rounded-full",
        day_outside:
          "day-outside text-zinc-500 aria-selected:bg-zinc-800/50 aria-selected:text-zinc-400",
        day_disabled: "text-zinc-600 opacity-50",
        day_range_middle:
          "aria-selected:bg-zinc-800 aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4 text-white hover:text-black", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4 text-white hover:text-black", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
