import { Section } from "../ui/Section";
import { Trophy, CheckCircle } from "lucide-react";

export const Achievements = () => {
    return (
        <Section className="py-10">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-foreground">
                <Trophy className="text-yellow-400" /> Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-border/40 bg-surface/50 dark:bg-surface/10 backdrop-blur-md hover:bg-surface/80 dark:hover:bg-surface/20 transition-all duration-300 shadow-sm hover:shadow-md hover:border-yellow-500/30 group">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-lg group-hover:scale-110 transition-transform">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1 text-foreground">Hackathon Winner</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Secured 1st Prize in the company-wide innovation hackathon. Developed a rapid prototype for a new client onboarding system that reduced manual data entry by 50%.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-border/40 bg-surface/50 dark:bg-surface/10 backdrop-blur-md hover:bg-surface/80 dark:hover:bg-surface/20 transition-all duration-300 shadow-sm hover:shadow-md hover:border-green-500/30 group">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg group-hover:scale-110 transition-transform">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1 text-foreground">Production Stability</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Diagnosed and resolved critical production memory leaks. Optimized JVM parameters and query performance, resulting in a 99.9% system uptime over 6 months.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
