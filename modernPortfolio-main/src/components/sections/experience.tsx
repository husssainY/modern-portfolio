"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useRef } from "react";
import FlowFieldBackground from "@/components/ui/flow-field-background";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax for background text
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const bgTextOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.03, 0.03, 0]);

    // Floating elements animation
    const floatY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <section
            ref={containerRef}
            id="experience"
            className="relative py-24 md:py-40 px-6 overflow-hidden"
        >
            {/* Animated gradient orbs */}
            <motion.div
                style={{ y: floatY }}
                className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            />

            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY, x: bgTextX, opacity: bgTextOpacity }}
                className="absolute top-1/4 -left-20 text-[15vw] font-black whitespace-nowrap pointer-events-none select-none text-white -z-10"
            >
                EXPERIENCE
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header with enhanced styling */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring", stiffness: 80 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Career Journey</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                        Work <span className="text-muted-foreground font-light italic">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My professional journey building intelligent AI systems
                    </p>
                </motion.div>

                {/* Experience Cards with Flow Field Animation */}
                <div className="space-y-8">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 60
                            }}
                            className="relative group"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

                            {/* Main Experience Card */}
                            <motion.div
                                whileHover={{ y: -8, transition: { duration: 0.3, type: "spring" } }}
                                className="relative bg-card/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-2xl shadow-black/20"
                            >
                                {/* Flow Field Background Animation */}
                                <FlowFieldBackground
                                    color="#A78BFA"
                                    trailOpacity={0.08}
                                    particleCount={300}
                                    speed={0.6}
                                    backgroundColor="17, 17, 17"
                                    className="opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                />

                                {/* Content overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/80 to-transparent pointer-events-none" />

                                {/* Card content */}
                                <div className="relative z-10 p-8 md:p-12">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                                        <div>
                                            {/* Role pill with icon */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-5 shadow-lg shadow-primary/20"
                                            >
                                                <Briefcase className="w-4 h-4" />
                                                <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                                                {exp.title}
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text"
                                            >
                                                {exp.company}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                                className="text-muted-foreground text-lg font-mono"
                                            >
                                                {exp.period}
                                            </motion.p>
                                        </div>

                                        {/* Animated company logo */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 via-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-xl"
                                        >
                                            <span className="text-3xl font-black text-primary">
                                                {exp.company.includes("WNS") ? "WV" : exp.company.includes("Tech") ? "TV" : exp.company.slice(0, 2).toUpperCase()}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Highlights Grid with staggered animation */}
                                    <div className="grid md:grid-cols-2 gap-5">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <motion.div
                                                key={hIndex}
                                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 0.6 + hIndex * 0.12,
                                                    type: "spring",
                                                    stiffness: 100
                                                }}
                                                whileHover={{
                                                    scale: 1.03,
                                                    y: -4,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="group/card relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                                            >
                                                {/* Subtle gradient overlay on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                                <div className="relative z-10">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                                                        <h4 className="font-bold text-foreground text-lg">
                                                            {highlight.title}
                                                        </h4>
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {highlight.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Education Card with Flow Field */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 60
                        }}
                        className="relative group"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

                        <motion.div
                            whileHover={{ y: -8, transition: { duration: 0.3, type: "spring" } }}
                            className="relative bg-card/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl shadow-black/20"
                        >
                            {/* Flow Field Background - Blue theme */}
                            <FlowFieldBackground
                                color="#3b82f6"
                                trailOpacity={0.08}
                                particleCount={200}
                                speed={0.5}
                                backgroundColor="17, 17, 17"
                                className="opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/80 to-transparent pointer-events-none" />

                            <div className="relative z-10 p-8 md:p-12">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-5 border border-blue-500/30"
                                        >
                                            <GraduationCap className="w-4 h-4" />
                                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                            Education
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className="text-2xl md:text-3xl font-bold mb-2"
                                        >
                                            {portfolioData.education.degree}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            className="text-muted-foreground text-lg"
                                        >
                                            {portfolioData.education.institution}
                                        </motion.p>
                                    </div>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                                        className="text-blue-400 font-mono text-xl px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20"
                                    >
                                        {portfolioData.education.period}
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
