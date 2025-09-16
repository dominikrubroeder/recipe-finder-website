import {cn} from "@/utils";
import {ReactNode} from "react";

export function Marker({className, children}: { className?: string, children: ReactNode }) {
    return <span className={cn('relative', className)}>
        <span className="absolute rounded -left-1 right-0 bottom-0 h-2/4 bg-primary/30 z-0"/>
        <span className="z-10 relative">{children}</span>
    </span>
}