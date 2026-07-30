"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingPaths } from "@/components/ui/background-paths";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const [isRevealed, setIsRevealed] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll-based trigger - once scrolled past threshold, reveal permanently
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            // Once scrolled past 100px, reveal the content and keep it revealed
            if (latest > 100 && !isRevealed) {
                setIsRevealed(true);
            }
        });

        return () => unsubscribe();
    }, [scrollY, isRevealed]);

    return (
        <section id="home" ref={sectionRef} className="relative">
            {/* Hero container */}
            <div className="relative flex flex-col items-center pt-28 sm:pt-32 pb-16 min-h-screen">

                {/* Floating Paths Animation - Behind phone */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>

                {/* Phone Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] px-4"
                >
                    {/* Realistic iPhone Frame */}
                    <div className="relative">
                        {/* Left Side Buttons - Volume Up, Volume Down */}
                        <div className="absolute -left-[3px] top-[80px] sm:top-[100px] w-[3px] h-[25px] sm:h-[30px] bg-gray-700 rounded-l-sm" />
                        <div className="absolute -left-[3px] top-[115px] sm:top-[140px] w-[3px] h-[45px] sm:h-[55px] bg-gray-700 rounded-l-sm" />
                        <div className="absolute -left-[3px] top-[168px] sm:top-[205px] w-[3px] h-[45px] sm:h-[55px] bg-gray-700 rounded-l-sm" />

                        {/* Right Side Button - Power */}
                        <div className="absolute -right-[3px] top-[130px] sm:top-[160px] w-[3px] h-[60px] sm:h-[75px] bg-gray-700 rounded-r-sm" />

                        {/* Phone Frame - Thick visible border */}
                        <div className="relative w-full bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-[45px] sm:rounded-[50px] md:rounded-[55px] p-[10px] sm:p-[12px] shadow-2xl shadow-black/70 border-[3px] border-gray-700">

                            {/* Dynamic Island */}
                            <div className="absolute top-6 sm:top-7 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-7 sm:h-8 bg-black rounded-full z-30" />

                            {/* Screen - The actual display */}
                            <div className="relative w-full bg-black rounded-[35px] sm:rounded-[40px] md:rounded-[45px] overflow-hidden">

                                {/* Screen Content Container */}
                                <div className="relative min-h-[580px] sm:min-h-[650px] md:min-h-[720px]">

                                    {/* ===== BACKGROUND: Profile Image (positioned high so hair is near top) ===== */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/qq.png"
                                                alt={portfolioData.name}
                                                fill
                                                className="object-cover object-top scale-[1.15] translate-y-[10%]"
                                                priority
                                            />
                                        </div>
                                    </motion.div>

                                    {/* ===== TOP SECTION: Hello and Name (overlaid on image) ===== */}
                                    <div className="relative z-20 pt-16 sm:pt-18 px-6 sm:px-8">
                                        {/* Gradient for text readability */}
                                        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/90 to-transparent -z-10" />

                                        {/* Hello Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="flex items-center gap-2 mb-4"
                                        >
                                            <span className="text-xl sm:text-2xl">👋</span>
                                            <span className="text-white text-sm sm:text-base font-medium">Hello</span>
                                        </motion.div>

                                        {/* Name */}
                                        <motion.h1
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white font-[family-name:var(--font-poppins)] text-left"
                                        >
                                            {portfolioData.name.split(" ")[0]}
                                        </motion.h1>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.45 }}
                                            className="text-5xl sm:text-6xl md:text-7xl font-light text-white/90 font-[family-name:var(--font-poppins)] text-center -ml-6 sm:-ml-8"
                                        >
                                            {portfolioData.name.split(" ")[1]}
                                        </motion.h2>
                                    </div>

                                    {/* ===== BOTTOM SECTION: Details Overlay (revealed on scroll) ===== */}
                                    {/* This overlays only the lower portion, keeping upper half of face visible */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{
                                            opacity: isRevealed ? 1 : 0,
                                            y: isRevealed ? 0 : 100
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-x-0 bottom-0 z-30"
                                        style={{
                                            maxHeight: isRevealed ? '55%' : '0',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {/* Background with slight transparency to show face behind */}
                                        <div className="bg-black/95 backdrop-blur-sm h-full">
                                            {/* Home Indicator Line */}
                                            <div className="w-24 sm:w-28 h-1 bg-white/50 rounded-full mx-auto mt-4 mb-4" />

                                            {/* Content */}
                                            <div className="px-6 sm:px-8 pb-8">
                                                {/* Role and Social Icons Row */}
                                                <div className="flex items-center justify-between w-full mb-5">
                                                    <div className="text-left">
                                                        <p className="text-white/70 text-sm sm:text-base">I&apos;m a <span className="text-white font-medium">Gen AI Developer</span></p>
                                                    </div>
                                                    <div className="flex gap-2 sm:gap-3">
                                                        <Link href={portfolioData.github} target="_blank" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-600">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                                                        </Link>
                                                        <Link href={portfolioData.linkedin} target="_blank" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-600">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                                        </Link>
                                                        <Link href={`mailto:${portfolioData.email}`} className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-600">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Tagline */}
                                                <div className="mb-4">
                                                    <p className="text-white text-lg sm:text-xl font-medium leading-snug">
                                                        I don&apos;t just build <span className="text-[#A78BFA]">models.</span>
                                                    </p>
                                                    <p className="text-white text-lg sm:text-xl font-medium leading-snug">
                                                        I engineer <span className="text-[#A78BFA]">intelligent agents,</span>
                                                    </p>
                                                    <p className="text-white text-lg sm:text-xl font-medium leading-snug">
                                                        that <span className="text-[#A78BFA]">think, act & deliver.</span>
                                                    </p>
                                                </div>

                                                {/* Stats */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="flex text-[#A78BFA]">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        ))}
                                                    </div>
                                                    <span className="text-white/70 text-sm">Global Clients</span>
                                                </div>

                                                {/* CTA Buttons */}
                                                <div className="flex gap-3 mb-4">
                                                    <Link href="#projects">
                                                        <Button size="default" className="rounded-full gap-2 px-4 sm:px-5 text-sm bg-primary text-[#A78BFA]-foreground hover:bg-primary/90 transition-all duration-300">
                                                            Get Started
                                                            <ArrowUpRight className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <Link href="#projects">
                                                        <Button size="default" variant="outline" className="rounded-full px-4 sm:px-5 text-sm border-gray-500 text-white hover:bg-gray-800 transition-all duration-300">
                                                            My Works
                                                        </Button>
                                                    </Link>
                                                </div>

                                                {/* Bottom row */}
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-2 text-white/60 text-xs">
                                                        <Globe className="w-3.5 h-3.5" />
                                                        <span>Based in <span className="text-white font-medium">Bangalore</span></span>
                                                    </div>
                                                    <Link href="#contact" className="flex items-center gap-1 text-white/60 text-xs hover:text-white transition-colors">
                                                        Contact me
                                                        <ArrowUpRight className="w-3 h-3" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
