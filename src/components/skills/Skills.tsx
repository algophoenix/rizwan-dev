import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { SpotlightCard } from "../ui/SpotlightCard";
import { motion } from "framer-motion";
import { Database, Layout, Server, Settings } from "lucide-react";

export const Skills = () => {
    return (
        <Section id="skills">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground"
            >
                Technical <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Arsenal</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <SpotlightCard className="md:col-span-2 p-8 bg-surface border-border/20">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                            <Server size={32} />
                        </div>
                        <Badge variant="default">Backend Powerhouse</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Java Ecosystem</h3>
                    <p className="text-muted-foreground mb-6">
                        Architecting scalable microservices and robust APIs. Deep expertise in memory management and concurrency.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Java 17+", "Spring Boot", "Spring Security", "Hibernate/JPA", "Microservices", "REST APIs"].map(s => (
                            <Badge key={s} variant="outline" className="border-border/40 text-foreground/80">{s}</Badge>
                        ))}
                    </div>
                </SpotlightCard>


                <SpotlightCard className="p-8 bg-surface border-border/20">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                            <Layout size={32} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Modern Frontend</h3>
                    <p className="text-muted-foreground mb-6">
                        Creating responsive, interactive user experiences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"].map(s => (
                            <Badge key={s} variant="outline" className="border-border/40 text-foreground/80">{s}</Badge>
                        ))}
                    </div>
                </SpotlightCard>


                <SpotlightCard className="p-8 bg-surface border-border/20">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-accent/20 rounded-lg text-accent">
                            <Settings size={32} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">DevOps & Cloud</h3>
                    <p className="text-muted-foreground mb-6">
                        Streamlining deployment and CI/CD pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Docker", "Kubernetes", "AWS S3", "GitHub Actions", "Jenkins"].map(s => (
                            <Badge key={s} variant="outline" className="border-border/40 text-foreground/80">{s}</Badge>
                        ))}
                    </div>
                </SpotlightCard>


                <SpotlightCard className="md:col-span-2 p-8 bg-surface border-border/20">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                            <Database size={32} />
                        </div>
                        <Badge variant="secondary">Data Persistence</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Database Management</h3>
                    <p className="text-muted-foreground mb-6">
                        Optimizing schemas for performance and reliability.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["PostgreSQL", "Liquibase", "Redis", "SQL Optimization"].map(s => (
                            <Badge key={s} variant="outline" className="border-border/40 text-foreground/80">{s}</Badge>
                        ))}
                    </div>
                </SpotlightCard>
            </div>
        </Section>
    );
};
