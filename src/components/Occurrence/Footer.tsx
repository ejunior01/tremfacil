import { CalendarDays } from "lucide-react";

export function Footer() {
    return (
        <div className="flex pt-0 gap-2 justify-center items-center p-0">
            <CalendarDays color="#64748B" size={16} />
            <span className="text-gray-300 text-xs">Reportado há mais de 2 horas</span>
        </div>
    )
}
