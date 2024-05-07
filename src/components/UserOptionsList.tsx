import { UserOptions } from "@/components/UserOptions";
import Handler from "@/assets/handle.png"
import Barrier from "@/assets/barrier.png"
import { routers } from "@/lib/routers";


export function UserOptionsList() {
    return (
        <ul className="flex flex-col gap-3 md:grid md:grid-cols-2">
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
                description="Reporte problemas, atrasos ou outras questões relacionadas ao serviço de trem."
                color="pink" />
        </ul>
    )
}
