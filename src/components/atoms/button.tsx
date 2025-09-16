import {ReactNode} from "react";
import {cn} from "@/utils";

export function Button({variant = "neutral", className, children}: {
    variant?: 'primary' | 'neutral',
    className: string;
    children: ReactNode
}) {
    return <button
        className={cn('p-4 rounded-(--rounded-md) font-bold text-xl', variant === "neutral" && 'bg-foreground text-foreground-foreground', variant === "primary" && 'bg-primary text-primary-foreground', className)}>
        {children}
    </button>
}