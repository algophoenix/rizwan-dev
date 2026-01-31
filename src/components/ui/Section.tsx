import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
};
