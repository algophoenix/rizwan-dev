import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { Code, Coffee, Globe } from "lucide-react";

export const About = () => {
    return (
        <Section id="about" className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                    <div className="relative bg-black/40 dark:bg-black/40 bg-white/40 backdrop-blur-xl border border-border/40 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-border/40 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-3 font-mono text-sm text-foreground/80">
                            <p><span className="text-primary">class</span> <span className="text-yellow-400 dark:text-yellow-400 text-yellow-600">Developer</span> <span className="text-foreground">{`{`}</span></p>
                            <p className="pl-4">name: <span className="text-green-400 dark:text-green-400 text-green-600">'Mohammed Rizwan S'</span>,</p>
                            <p className="pl-4">role: <span className="text-green-400 dark:text-green-400 text-green-600">'Full-Stack Engineer'</span>,</p>
                            <p className="pl-4">location: <span className="text-green-400 dark:text-green-400 text-green-600">'Bangalore'</span>,</p>
                            <p className="pl-4">traits: <span className="text-foreground">{`['Creative', 'Analytical', 'Driven']`}</span>,</p>
                            <p className="pl-4">coffeeLevel: <span className="text-blue-400 dark:text-blue-400 text-blue-600">Infinity</span></p>
                            <p className="text-foreground">{`}`}</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-6 -right-6 p-4 bg-secondary/10 backdrop-blur-md rounded-xl border border-border/40 text-secondary"
                    >
                        <Code size={32} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -bottom-6 -left-6 p-4 bg-accent/10 backdrop-blur-md rounded-xl border border-border/40 text-accent"
                    >
                        <Globe size={32} />
                    </motion.div>
                </motion.div>


                <div className="relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>
                            I am a <span className="text-foreground font-medium">Software Engineer</span> with over 3 years of experience in building high-performance applications.
                            My journey is defined by a passion for solving complex engineering challenges using <span className="text-primary font-medium">Java Spring Boot</span> and <span className="text-secondary font-medium">React</span>.
                        </p>
                        <p>
                            Specializing in backend architecture, I design robust REST APIs and microservices while ensuring seamless frontend integration.
                            I embrace Cloud-native & DevOps practices, leveraging <span className="text-foreground">Docker, Kubernetes, and AWS</span> to deliver scalable solutions.
                        </p>
                        <p>
                            Beyond code, I am a problem solver who thrives in collaborative environments (Agile/Scrum), always aiming to bridge the gap between technical complexity and user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 mt-8"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full border border-border/40">
                            <Coffee size={18} className="text-yellow-400 dark:text-yellow-400 text-yellow-600" />
                            <span className="text-sm text-foreground">Coffee Enthusiast</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full border border-border/40">
                            <Globe size={18} className="text-blue-400 dark:text-blue-400 text-blue-600" />
                            <span className="text-sm text-foreground">Tech Explorer</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
