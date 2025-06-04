"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function DatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col flex-wrap items-start gap-2 @md:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm bg-black/30"
      />
    </div>
  )
}
