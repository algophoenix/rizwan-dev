import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "secondary" | "accent";
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
    const variants = {
        default: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
        outline: "bg-background/50 border-border text-foreground/80 hover:bg-background/80 hover:border-primary/30 hover:text-primary",
        secondary: "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20",
        accent: "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};
