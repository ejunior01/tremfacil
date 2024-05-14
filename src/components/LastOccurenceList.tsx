"use client"

import { OccorrenceNotification } from "@/components/OccorrenceNotification"


export function LastOccurrenceList() {
  return (
    <aside className="h-full max-h-screen flex flex-col gap-1 px-5 py-4">
      <div className="flex justify-between mb-6 items-center">
        <h2 className="text-lg font-bold">Últimas ocorrências</h2>
      </div>
      <ul className="flex gap-2 flex-col overflow-auto h-full" >
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
        <OccorrenceNotification />
      </ul>
    </aside>
  )
}