import { routers } from "@/lib/routers";
import Image from "next/image";
import { MoveRight } from "lucide-react"
import Link from 'next/link'
import { Button } from "@/components/ui/Button";


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


    return (
        <Link href={router} className={`bg-transparent rounded-sm border shadow-sm flex flex-col gap-4 md:max-w-72 h-32 md:h-72 py-4 px-6 items-center cursor-pointer hover:shadow-lg transition-all duration-500 hover:bg-primary-foreground`}>
            <div className="flex items-center max-h-52 h-full w-36 z-20 justify-center relative ">
                <Image
                    src={imageSrc}
                    alt=""
                    fill
                    quality={100}
                />
            </div>
            <header className="flex flex-col space-y-1.5 flex-1 p-0 z-20 gap-1">
                <h3 className="leading-none tracking-tight text-lg font-bold">{title}</h3>
                <p className="text-xs">{description}</p>
            </header>
        </Link>
    )
}
