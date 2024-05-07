import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RootProps {
    children: ReactNode;
    className?: string
}

export function Root({ children, className }: RootProps) {
    return (
        <div
            className={
                cn("rounded-lg border bg-card text-card-foreground p-4 flex flex-col gap-4 border-[#E5E7EB] shadow-md",
                    className)}>
            {children}
        </div >
    )
}

