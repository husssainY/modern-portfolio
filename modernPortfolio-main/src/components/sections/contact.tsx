"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, Linkedin, Github, Send, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contactCards = [
    {
        icon: Phone,
        label: "Phone",
        value: portfolioData.phone,
        href: `tel:${portfolioData.phone}`,
    },
    {
        icon: Mail,
        label: "Email",
        value: portfolioData.email,
        href: `mailto:${portfolioData.email}`,
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "munavar-hussain",
        href: portfolioData.linkedin,
    },
    {
        icon: Github,
        label: "GitHub",
        value: "munavarhussain",
        href: portfolioData.github,
    },
];

export function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        if (formRef.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
                .then(
                    () => {
                        setSubmitStatus("success");
                        setIsSubmitting(false);
                        if (formRef.current) formRef.current.reset();
                    },
                    (error) => {
                        console.error("FAILED...", error.text);
                        setSubmitStatus("error");
                        setIsSubmitting(false);
                    },
                );
        }
    };

    // Parallax for background text
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 overflow-hidden"
        >
            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/4 right-0 text-[12vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                CONTACT ME
            </motion.div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                        Contact <span className="text-muted-foreground font-light italic">For Work</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Have a project in mind? Let&apos;s discuss how we can collaborate
                    </p>
                </motion.div>

                {/* Main Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="bg-card/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border p-5 md:p-8 lg:p-12 mb-6 md:mb-8"
                >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Form - Shows second on mobile */}
                        <div className="order-2 md:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-5 md:mb-8"
                            >
                                <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
                                <p className="text-muted-foreground text-sm">
                                    Fill out the form and I&apos;ll get back to you within 24 hours.
                                </p>
                            </motion.div>

                            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm md:text-base text-foreground placeholder:text-muted-foreground"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm md:text-base text-foreground placeholder:text-muted-foreground"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows={3}
                                        required
                                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm md:text-base text-foreground placeholder:text-muted-foreground resize-none"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_20px_40px_rgba(204,255,0,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        <Send className="w-5 h-5" />
                                    </Button>
                                    {submitStatus === "success" && (
                                        <p className="mt-4 text-purple-500 text-center font-medium">
                                            Message sent successfully!
                                        </p>
                                    )}
                                    {submitStatus === "error" && (
                                        <p className="mt-4 text-red-500 text-center font-medium">
                                            Failed to send message. Please try again.
                                        </p>
                                    )}
                                </motion.div>
                            </form>
                        </div>

                        {/* Contact Info - Shows first on mobile */}
                        <div className="space-y-3 md:space-y-6 order-1 md:order-2">
                            {contactCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1,
                                        type: "spring"
                                    }}
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                >
                                    <Link
                                        href={card.href}
                                        target={card.href.startsWith("http") ? "_blank" : undefined}
                                        className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            <card.icon className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                                                {card.label}
                                            </span>
                                            <span className="block text-foreground font-medium truncate text-sm md:text-base">
                                                {card.value}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7,
                                    type: "spring"
                                }}
                                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/10"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div>
                                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                                        Location
                                    </span>
                                    <span className="block text-foreground font-medium">
                                        Bangalore, India
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        Prefer a quick message?
                    </p>
                    <Link href={`mailto:${portfolioData.email}`}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full gap-2 px-8 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            Email me directly
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
