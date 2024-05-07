import { OccurrenceForm } from "@/app/occurrence/OccurrenceForm";
import Image from "next/image";
import Barrier from "@/assets/barrier.png"

export default function Occurrence() {
    return (
        <main className="w-full md:w-3/6 m-auto p-4 flex flex-col gap-12 bg-[#FFECEF] rounded-sm box-border">
            <div className="flex w-full gap-2">
                <div className="flex items-center h-auto w-32 justify-center relative md:w-44 md:h-36">
                    <Image
                        src={Barrier}
                        alt=""
                        fill
                        quality={100}
                    />
                </div>
                <header className="flex flex-col space-y-1.5 flex-1 p-0">
                    <h3 className="leading-none tracking-tight text-xl font-bold  ">Relatar um problema em uma estação</h3>
                    <p className="text-muted-foreground text-gray-300 text-xs">Reporte problemas, atrasos ou outras questões relacionadas ao serviço de trem.</p>
                </header>
            </div>
            <OccurrenceForm />
        </main>
    )
}