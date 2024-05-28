import { UserOptions } from "@/components/UserOptions";
import Handler from "@/assets/handle.png"
import Barrier from "@/assets/barrier.png"
import { routers } from "@/lib/routers";
import { cn } from "@/lib/utils";


export function UserOptionsList({ className }: { className?: string }) {
    return (
        <ul className={cn("flex gap-8 flex-1", className)}>
            <UserOptions
                router={routers.status}
                imageSrc={Handler.src}
                title="Visualizar Status por Estação"
                description="Veja o status atualizado de uma estação específica."
                color="blue">
            </UserOptions>
            <UserOptions
                router={routers.occurrence}
                imageSrc={Barrier.src}
                title="Relatar um problema em uma estação"
                description="Reporte problemas, atrasos ou outras questões relacionadas ao serviço de trens."
                color="pink" />
        </ul>
    )
}
