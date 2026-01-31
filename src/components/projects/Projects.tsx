import { Section } from "../ui/Section";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
    return (
        <Section id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground"
            >
                Featured Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <SpotlightCard className="flex flex-col h-full transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-surface border-border/20">
                    <div className="h-48 w-full bg-gradient-to-br from-gray-900 to-gray-800 border-b border-white/10 flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors z-10" />
                        <img
                            src="/APRC.png"
                            alt="APRC Internal Tool"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">APRC Internal Tool</h3>
                        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                            A comprehensive internal operational dashboard designed to streamline workflow management and resource allocation.
                            <br /><br />
                            Engineered a robust React frontend integrated with AWS S3 for secure document handling. The solution automated manual reporting processes, reducing administrative overhead by 40% and improving data accuracy across the organization.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Java", "Spring Boot", "React", "AWS S3", "PostgreSQL"].map(t => (
                                <Badge key={t} variant="secondary">{t}</Badge>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-foreground/80 transition-colors text-muted-foreground">
                                <Github size={16} /> Private Repo
                            </a>
                        </div>
                    </div>
                </SpotlightCard>


                <SpotlightCard className="flex flex-col h-full transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20 bg-surface border-border/20">
                    <div className="h-48 w-full bg-gradient-to-br from-gray-900 to-gray-800 border-b border-white/10 flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors z-10" />
                        <img
                            src="/BALLY-Main.png"
                            alt="Bally Project"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">Bally E-Commerce</h3>
                        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                            A high-performance e-commerce platform for the luxury fashion brand Bally, serving thousands of daily active users.
                            <br /><br />
                            Developed critical backend microservices using Spring Boot and optimized database queries with Hibernate to handle high-concurrency traffic during sales events. Implemented responsive UI components ensuring a seamless shopping experience across all devices.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Spring Data JPA", "Hibernate", "React", "Redux", "MySQL"].map(t => (
                                <Badge key={t} variant="accent">{t}</Badge>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <a href="https://bally.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors text-foreground/80">
                                <ExternalLink size={16} /> Visit Website
                            </a>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </Section>
    );
};
