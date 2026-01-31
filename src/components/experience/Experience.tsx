import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "O2F Info Solutions (Client: Société Générale)",
        role: "Software Engineer",
        period: "06/2024 – Present",
        description: "Key member of the core engineering team serving a major investment banking client. Responsible for modernizing legacy systems and building cloud-native banking applications.",
        achievements: [
            "Implemented robust CI/CD pipelines using Jenkins, reducing deployment times by 30%.",
            "Managed Kubernetes clusters for high-availability microservices deployments.",
            "Optimized backend performance for high-volume transaction processing systems."
        ],
        tags: ["Java", "Spring Boot", "React", "K8s", "Jenkins"]
    },
    {
        company: "Realkey Software Solution",
        role: "Software Engineer",
        period: "03/2023 – 06/2024",
        description: "Full-stack developer for a suite of enterprise web solutions. Played a pivotal role in the complete software development lifecycle from requirement gathering to production deployment.",
        achievements: [
            "Facilitated Agile/Scrum ceremonies, improving team velocity and sprint planning.",
            "Handled complex database migrations using Liquibase with zero data loss.",
            "Developed responsive React frontends consuming RESTful APIs."
        ],
        tags: ["Full Stack", "Liquibase", "React", "Agile", "SQL"]
    }
];

export const Experience = () => {
    return (
        <Section id="experience">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground"
            >
                Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
            </motion.h2>

            <div className="relative max-w-3xl mx-auto">

                <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative flex items-center justify-between mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-col md:flex-row pl-12 md:pl-0`}
                    >

                        <div className="absolute left-0 top-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_0_4px_rgba(99,102,241,0.2)] z-10" />

                        <div className="w-full md:w-[45%] text-left">
                            <div className="bg-surface/50 dark:bg-surface/10 border border-border/40 p-6 rounded-2xl hover:bg-surface/80 dark:hover:bg-surface/20 transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 group">
                                <div className="flex items-center gap-2 text-primary mb-2 text-sm font-semibold uppercase tracking-wider">
                                    <Briefcase size={16} /> {exp.period}
                                </div>
                                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                                <h4 className="text-muted-foreground mb-4 font-medium">{exp.company}</h4>
                                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                                <ul className="list-disc list-inside text-sm text-foreground/60 mb-6 space-y-1">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary/10 text-secondary font-medium border border-secondary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block w-full md:w-[45%]" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
