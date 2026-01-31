import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { ThemeToggle } from "./ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl rounded-full border border-border/40 transition-all duration-300 backdrop-blur-md",
                    isScrolled ? "bg-background/80 shadow-lg shadow-primary/5 py-3" : "bg-transparent py-4 border-transparent"
                )}
            >
                <div className="flex items-center justify-between px-6">

                    <a href="#" className="text-lg font-bold tracking-tighter hover:text-primary transition-colors text-foreground">
                        MR<span className="text-primary">.</span>
                    </a>


                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>


                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <a href="/RIZWAN-S.pdf" target="_blank" rel="noopener noreferrer">
                            <MagneticButton className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-muted-foreground/20 transition-colors flex items-center gap-2">
                                Resume <Download size={16} />
                            </MagneticButton>
                        </a>
                    </div>


                    <div className="flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            className="text-foreground/90 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 pt-20"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="/RIZWAN-S.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 flex justify-center w-full">
                            <MagneticButton className="px-8 py-3 text-lg font-medium bg-foreground text-background rounded-full hover:bg-muted-foreground/20 transition-colors flex items-center gap-2">
                                Download Resume <Download size={20} />
                            </MagneticButton>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
