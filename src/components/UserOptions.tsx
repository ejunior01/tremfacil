import { routers } from "@/lib/routers";
import Image from "next/image";
import Link from 'next/link'


interface UserOptionsProps {
    router: string,
    imageSrc: string,
    title: string,
    description: string
    color: "pink" | "blue"
}

const userOptionsColors: { [key: string]: string } = {
    blue: "bg-[#D8EEFF]",
    pink: "bg-[#FFECEF]"
}

export function UserOptions({ router, imageSrc, title, description, color }: UserOptionsProps) {

    const colorBackground = userOptionsColors[color]

    return (
        <Link href={router} className={`rounded-lg border text-card-foreground shadow-sm flex gap-4 h-44 p-4 items-center ${colorBackground} cursor-pointer relative overflow-hidden group `}>
            <div className="h-28 w-28 bg-white z-10 absolute -top-16 -right-16 rounded-full transition-all ease-linear duration-500 group-hover:scale-[20]"></div>
            <div className="flex items-center h-full w-48 z-20 justify-center relative">
                <Image
                    src={imageSrc}
                    alt=""
                    fill
                    quality={100}
                />
            </div>
            <header className="flex flex-col space-y-1.5 flex-1 p-0 z-20">
                <h3 className="leading-none tracking-tight text-2xl font-bold text-gray-500 ">{title}</h3>
                <p className="text-muted-foreground text-gray-300 text-sm">{description}</p>
            </header>
        </Link>
    )
}
