import CPTMLogo from "@/assets/cptm-logo.svg"
import Image from "next/image";


export function OccorrenceNotification() {
    return (
        <div className="border-b grid grid-cols-[50px_1fr_1fr] items-center px-2 py-3 justify-between">
            <Image
                src={CPTMLogo}
                alt=""
                width={32}
                height={32}
                quality={100}
            />
            <div className="flex flex-col gap-1">
                <h3 className="text-lg leading-none tracking-tight font-bold">Berrini</h3>
                <p className="text-sm font-medium">9 - Esmeralda</p>
            </div>
            <div className="justify-self-end">
                <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                <span className="text-xs text-right">22/10/25 18:24:23</span>
            </div>
        </div>
    )
}