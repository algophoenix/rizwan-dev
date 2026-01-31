import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, LayoutTemplate } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen opacity-40 animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />

            <div className="container relative z-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">


                <div className="flex-1 text-center md:text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center md:justify-start mb-6"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-border/40 rounded-full backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-foreground/80 font-medium">Bangalore, India | Open to Opportunities</span>
                        </div>
                    </motion.div>


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground"
                    >
                        Building Scalable
                        <br />
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            Systems with Precision
                        </span>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                    >
                        Full-Stack Engineer specializing in <span className="text-foreground font-medium">Java Spring Boot</span> & <span className="text-foreground font-medium">React</span>.
                        Transforming complex requirements into seamless digital experiences.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                    >
                        <MagneticButton className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]">
                            Explore Work <ArrowRight size={20} />
                        </MagneticButton>
                        <a href="#contact">
                            <MagneticButton className="px-8 py-4 bg-foreground/5 hover:bg-foreground/10 border border-border/40 backdrop-blur-md text-foreground rounded-full font-semibold transition-all">
                                Contact Me
                            </MagneticButton>
                        </a>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12 flex justify-center md:justify-start gap-8 text-muted-foreground grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <Code2 size={40} className="hover:text-primary transition-colors" />
                        <Database size={40} className="hover:text-secondary transition-colors" />
                        <LayoutTemplate size={40} className="hover:text-accent transition-colors" />
                    </motion.div>
                </div>


                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-shrink-0 relative w-64 h-64 md:w-96 md:h-96 group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative w-full h-full rounded-full ring-2 ring-border/20 overflow-hidden bg-foreground/5 backdrop-blur-sm flex items-center justify-center">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = '<span class="text-6xl">👨‍💻</span>';
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
