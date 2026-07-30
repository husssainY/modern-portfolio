"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";
import Link from "next/link";

const infoCards = [
    {
        icon: GraduationCap,
        title: "Education",
        subtitle: portfolioData.education.degree,
        meta: `${portfolioData.education.institution}\n${portfolioData.education.period}`,
    },
    {
        icon: Briefcase,
        title: "Current Role",
        subtitle: portfolioData.experience[0].title,
        meta: `${portfolioData.experience[0].company}\n${portfolioData.experience[0].period}`,
    },
    {
        icon: Award,
        title: "Certification",
        subtitle: "Gen AI for Everyone",
        meta: "DeepLearning.AI\nLangChain, CrewAI & AutoGen",
    },
];

export function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
            {/* Background text */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.02 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute top-20 left-1/2 -translate-x-1/2 text-[12vw] font-black whitespace-nowrap pointer-events-none select-none"
            >
                ABOUT ME
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/30 mb-4">
                        Introduction
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                        About Me
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                            {portfolioData.about.lead}
                        </p>
                        {portfolioData.about.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground leading-relaxed">
                                {paragraph.includes("WNS - VURAM") ? (
                                    <>
                                        Currently working at{" "}
                                        <span className="text-primary font-semibold">WNS - VURAM (Part of Capgemini)</span>{" "}
                                        {paragraph.split("WNS - VURAM (Part of Capgemini)")[1]}
                                    </>
                                ) : (
                                    paragraph
                                )}
                            </p>
                        ))}
                        <div className="pt-4">
                            <Link href="#contact">
                                <Button className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_10px_30px_rgba(204,255,0,0.3)] transition-all duration-300">
                                    Get in Touch
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <div className="space-y-5">
                        {infoCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                                <Card className="bg-card border-border hover:border-muted-foreground/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <card.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                                                <p className="text-muted-foreground mb-2">{card.subtitle}</p>
                                                <span className="text-sm text-muted-foreground/70 whitespace-pre-line leading-relaxed">
                                                    {card.meta}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
