import { Section } from "../ui/Section";
import { GraduationCap } from "lucide-react";

export const Education = () => {
    return (
        <Section className="py-10">
            <div className="p-8 rounded-2xl border border-border/40 bg-surface/50 dark:bg-surface/10 backdrop-blur-md shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
                        <GraduationCap size={40} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-1 text-foreground">BE Computer Science</h2>
                        <p className="text-foreground/80 text-lg">Hindusthan College of Engineering</p>
                        <p className="text-muted-foreground mt-1 font-medium">CGPA 8.5 • Consistent Academic Excellence</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
