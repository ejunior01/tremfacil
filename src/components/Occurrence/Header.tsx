import CPTMLogo from "@/assets/cptm-logo.svg"
import Image from "next/image";


export function Header() {
    return (
        <div className="flex flex-row justify-between space-y-1.5 p-0">
            <div className="flex gap-2">
                <Image src={CPTMLogo} alt="" width={24} height={24} />
                <h3 className="text-2xl leading-none tracking-tight text-gray-500 font-bold">Berrini</h3>
            </div>
            <p className="text-sm text-muted-foreground text-[#00AA9E] font-bold">9 - Esmeralda</p>
        </div>
    )
}
