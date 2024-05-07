import { cn } from "@/lib/utils";
import { Construction, Ambulance, LockKeyhole } from "lucide-react"
import { ReactElement } from "react";


export interface TypeProps {
    eventType: "Accident" | "Roadblocked" | "Stationclosed"
    className?: string
}

interface Event {
    name: string;
    color: string;
    icon: ReactElement
}



interface Events {
    [key: string]: Event;
}


const events: Events = {
    Accident: {
        name: "Acidente",
        color: "red",
        icon: <Ambulance />

    },
    Roadblocked: {
        name: "Via interditada",
        color: "yellow",
        icon: <Construction />

    },
    Stationclosed: {
        name: "Estação fechada",
        color: "blue",
        icon: <LockKeyhole />
    }
}

interface Colors {
    [key: string]: string;
}

const colors: Colors = {
    red: "bg-[#D83D4E]",
    yellow: "bg-[#FFB020]",
    blue: "bg-[#403DD8]",
}


export function Type({ eventType, className }: TypeProps) {
    const reportEvent = events[eventType]
    const colorBgClasses = colors[reportEvent.color]

    return (
        <div
            className={
                cn("flex justify-center items-center gap-2 py-2 rounded-[2px] text-white",
                    className,
                    colorBgClasses)}>
            {reportEvent.icon}
            <h4>{reportEvent.name}</h4>
        </div >
    )

}

