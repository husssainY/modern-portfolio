"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// React Icons imports for real skill icons
import {
    SiPython,
    SiAmazon,
    SiDocker,
    SiPostgresql,
    SiMongodb,
    SiTableau,
    SiOpenai,
} from "react-icons/si";
import { FaCloud, FaDatabase, FaRobot, FaBrain, FaMicrochip } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

// Define all skills with their icons and categories
const allSkills = [
    // AI/ML Skills
    { name: "LangChain", icon: FaRobot, category: "AI/ML", color: "#1C3C3C" },
    { name: "AutoGen", icon: FaBrain, category: "AI/ML", color: "#FF6B35" },
    { name: "LangGraph", icon: GiArtificialIntelligence, category: "AI/ML", color: "#7B2D8B" },
    { name: "CrewAI", icon: FaRobot, category: "AI/ML", color: "#F7931E" },
    { name: "Multi-Agent Systems", icon: FaMicrochip, category: "AI/ML", color: "#00D4FF" },
    { name: "LLM Integration", icon: SiOpenai, category: "AI/ML", color: "#412991" },
    { name: "Prompt Engineering", icon: FaBrain, category: "AI/ML", color: "#10B981" },
    { name: "RAG Systems", icon: FaRobot, category: "AI/ML", color: "#F59E0B" },
    { name: "MCP", icon: FaMicrochip, category: "AI/ML", color: "#6366F1" },

    // Cloud & AWS Skills
    { name: "AWS Bedrock", icon: SiAmazon, category: "Cloud", color: "#FF9900" },
    { name: "AWS Lambda", icon: SiAmazon, category: "Cloud", color: "#FF9900" },
    { name: "Amazon S3", icon: SiAmazon, category: "Cloud", color: "#FF9900" },
    { name: "DynamoDB", icon: SiAmazon, category: "Cloud", color: "#FF9900" },
    { name: "OpenSearch", icon: FaDatabase, category: "Cloud", color: "#005EB8" },
    { name: "Serverless", icon: FaCloud, category: "Cloud", color: "#FD5750" },
    { name: "Event-Driven", icon: FaCloud, category: "Cloud", color: "#3F8624" },

    // Development Skills
    { name: "Python", icon: SiPython, category: "Dev", color: "#3776AB" },
    { name: "OCR", icon: FaMicrochip, category: "Dev", color: "#E91E8C" },
    { name: "Document Processing", icon: FaDatabase, category: "Dev", color: "#795548" },
    { name: "ML Integration", icon: FaBrain, category: "Dev", color: "#9C27B0" },
    { name: "Rule-based Logic", icon: FaMicrochip, category: "Dev", color: "#607D8B" },

    // Data Skills
    { name: "SQL", icon: SiPostgresql, category: "Data", color: "#4169E1" },
    { name: "Power BI", icon: FaDatabase, category: "Data", color: "#F2C811" },
    { name: "Tableau", icon: SiTableau, category: "Data", color: "#E97627" },
    { name: "Data Analytics", icon: FaDatabase, category: "Data", color: "#2196F3" },
    { name: "MongoDB", icon: SiMongodb, category: "Data", color: "#47A248" },
];

// Animation variants for staggered entrance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax for background elements
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
        >
            {/* Animated background gradient */}
            <motion.div
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
            />

            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/4 left-0 text-[15vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                AI MASTERY
            </motion.div>

            {/* Floating orbs for ambiance */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        AI <span className="text-muted-foreground font-light italic">Arsenal</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Proficient in cutting-edge AI frameworks, <br className="hidden sm:block" />
                        cloud platforms, and intelligent automation tools.
                    </p>
                </motion.div>

                {/* Skills Grid - Pill-shaped cards like the reference */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
                >
                    {allSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 17 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative"
                        >
                            {/* Skill Card - Pill shape with icon */}
                            <div className="relative flex flex-col items-center justify-center p-6 rounded-[2rem] bg-gradient-to-b from-gray-900/80 to-gray-950/90 border border-gray-800/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300 hover:border-gray-700/80 h-full min-h-[140px]">
                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                                    }}
                                />

                                {/* Icon container with glow */}
                                <motion.div
                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 mb-3"
                                >
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300"
                                        style={{
                                            boxShadow: `0 0 20px ${skill.color}30`,
                                        }}
                                    >
                                        <skill.icon
                                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Skill name */}
                                <h4 className="relative z-10 text-sm font-semibold text-white/90 text-center group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </h4>

                                {/* Category label */}
                                <span className="relative z-10 mt-1 text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300 uppercase tracking-wider">
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom stats or summary */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 text-center"
                >
                    {[
                        { label: "AI/ML Tools", count: allSkills.filter(s => s.category === "AI/ML").length },
                        { label: "Cloud Tools", count: allSkills.filter(s => s.category === "Cloud").length },
                        { label: "Dev Tools", count: allSkills.filter(s => s.category === "Dev").length },
                        { label: "Data Tools", count: allSkills.filter(s => s.category === "Data").length },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -5 }}
                            className="px-8 py-4 rounded-2xl bg-card/50 backdrop-blur border border-border/50"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="block text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
                            >
                                {stat.count}+
                            </motion.span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
