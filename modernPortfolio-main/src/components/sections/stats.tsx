"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Counting number animation component
function CountingNumber({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / (duration * 1000), 1);

                // Easing function for smooth counting
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setDisplayValue(Math.floor(easeOutQuart * value));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setDisplayValue(value);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="font-mono">
            {displayValue}{suffix}
        </span>
    );
}

const statsData = [
    {
        label: "Accuracy",
        title: "Document\nExtraction Accuracy",
        value: 90,
        suffix: "%+",
        accent: true,
        icon: "chart"
    },
    {
        label: "Projects",
        title: "AI Projects\nDeployed",
        value: 5,
        suffix: "+",
        accent: false,
        icon: null
    },
    {
        label: "Experience",
        title: "Years of\nAI Experience",
        value: 2,
        suffix: "+",
        accent: false,
        icon: null
    },
    {
        label: "Performance",
        title: "Processing\nTime Reduced",
        value: 20,
        suffix: "%",
        accent: false,
        icon: null
    }
];

export function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="relative py-24 px-6 overflow-hidden">
            {/* Parallax background text */}
            <motion.div
                style={{ y }}
                className="absolute top-1/4 left-0 text-[15vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                NUMBERS
            </motion.div>

            <div className="max-w-5xl mx-auto">
                {/* Card Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border p-8 md:p-12"
                >
                    {/* Header */}
                    <div className="mb-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-2 text-muted-foreground text-sm mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            About me
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            My journey in<br />
                            <span className="text-primary">Numbers</span>
                        </motion.h2>
                    </div>

                    {/* Subtext */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-10"
                    >
                        <p className="text-muted-foreground">
                             Driven by impact, powered by intelligence
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className={`relative overflow-hidden rounded-2xl p-6 ${stat.accent
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card border border-border"
                                    }`}
                            >
                                {/* Label */}
                                <div className={`flex items-center gap-1.5 text-xs mb-2 ${stat.accent ? "text-primary-foreground/70" : "text-muted-foreground"
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${stat.accent ? "bg-primary-foreground" : "bg-primary"
                                        }`} />
                                    {stat.label}
                                </div>

                                {/* Title */}
                                <p className={`text-sm mb-4 whitespace-pre-line ${stat.accent ? "text-primary-foreground/90" : "text-foreground"
                                    }`}>
                                    {stat.title}
                                </p>

                                {/* Chart icon for first card */}
                                {stat.icon === "chart" && (
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 10 }}
                                                whileInView={{ height: 20 + Math.random() * 30 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.8 + i * 0.05,
                                                    type: "spring"
                                                }}
                                                className="w-2 bg-primary-foreground/30 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Number */}
                                <div className={`text-4xl md:text-5xl font-black font-mono ${stat.accent ? "text-primary-foreground" : "text-muted-foreground/50"
                                    }`}>
                                    <CountingNumber value={stat.value} suffix={stat.suffix} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
