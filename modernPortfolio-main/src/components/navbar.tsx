"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll
            const sections = ["home", "projects", "skills", "experience", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Main Navigation - Single Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-auto"
            >
                <div className="flex items-center gap-1 bg-card/90 backdrop-blur-xl border border-border rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-lg shadow-black/20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        className="flex items-center px-3 sm:px-4 py-1 mr-1"
                    >
                        <span className="text-lg sm:text-xl font-bold text-[#A78BFA]">.Hussain</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href.slice(1)
                                    ? "bg-white text-black"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <Link href="#contact" className="hidden md:flex">
                        <Button
                            size="sm"
                            className={`rounded-full gap-1.5 px-4 lg:px-5 transition-all duration-300 ${activeSection === "contact"
                                ? "bg-white text-black hover:bg-gray-100"
                                : "bg-primary text-primary-foreground hover:bg-primary/90"
                                }`}
                        >
                            Contact
                            <ArrowUpRight className="w-4 h-4" />
                        </Button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 sm:p-2.5 rounded-full text-foreground hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-20 left-4 right-4 z-50 md:hidden"
                        >
                            <div className="bg-card/95 backdrop-blur-xl border border-border rounded-3xl p-5 shadow-2xl">
                                {/* Branding */}
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                                    <div>
                                        <span className="text-xl font-bold text-[#A78BFA]">.Hussain</span>
                                        <p className="text-xs text-muted-foreground">Gen AI Developer</p>
                                    </div>
                                </div>

                                {/* Navigation Links */}
                                <ul className="space-y-1">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * index }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center justify-between text-base font-medium rounded-xl p-4 transition-all duration-300 ${activeSection === link.href.slice(1)
                                                    ? "bg-primary text-primary-foreground"
                                                    : "text-foreground hover:bg-white/5"
                                                    }`}
                                            >
                                                {link.label}
                                                {activeSection === link.href.slice(1) && (
                                                    <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                                                )}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-4 pt-4 border-t border-border"
                                >
                                    <Link
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full text-base font-medium bg-primary text-primary-foreground rounded-xl p-4"
                                    >
                                        Contact Me
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center justify-center gap-4 mt-6"
                                >
                                    <a href="https://github.com/husssainY/" target="_blank" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohamed-munavar-hussain-y-876620206" target="_blank" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
