import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer id="contact" className="py-20 relative overflow-hidden bg-background">
            <div className="container px-6 mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-foreground">
                    Let's <span className="text-primary">Connect</span>.
                </h2>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="https://www.linkedin.com/in/rizwan-s-a017aa309/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-surface/50 border border-border hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all text-foreground">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:rizwan.aiexpert@gmail.com" className="p-4 rounded-full bg-surface/50 border border-border hover:bg-secondary/20 hover:text-secondary hover:scale-110 transition-all text-foreground">
                        <Mail size={24} />
                    </a>
                    <a href="https://github.com/algophoenix" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-surface/50 border border-border hover:bg-surface hover:text-foreground hover:scale-110 transition-all text-foreground">
                        <Github size={24} />
                    </a>
                </div>

                <div className="text-muted-foreground text-sm">
                    &copy; 2026 Mohammed Rizwan S. All rights reserved. <br />
                </div>
            </div>


            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none blur-3xl" />
        </footer>
    );
};
