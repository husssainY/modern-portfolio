"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/lib/data";
import { useRouter } from "next/navigation";
import { Github, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Folder from "@/components/ui/folder";
import { getLenis } from "@/components/smooth-scroll-provider";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const listWrapRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState<string>(
        portfolioData.projectCategories[0]
    );

    const activeProjects = portfolioData.projects.filter(
        (p) => p.category === activeCategory
    );

    // Header + folder grid reveal (runs once)
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".proj-header",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".proj-header",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".proj-folder",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: ".proj-folders",
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Animate the project list every time a folder is opened
    useEffect(() => {
        if (!listRef.current || !activeCategory) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".proj-active-head",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
            );

            if (listRef.current?.querySelector(".proj-empty")) {
                gsap.fromTo(
                    ".proj-empty",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
                );
            }

            gsap.utils.toArray<HTMLElement>(".proj-row").forEach((row) => {
                const line = row.querySelector<HTMLElement>(".proj-line");
                const num = row.querySelector<HTMLElement>(".proj-num");
                const info = row.querySelector<HTMLElement>(".proj-info");
                const img = row.querySelector<HTMLElement>(".proj-img");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 78%",
                        toggleActions: "play none none none",
                    },
                });

                if (line) {
                    tl.fromTo(
                        line,
                        { scaleX: 0 },
                        { scaleX: 1, duration: 0.9, ease: "power3.inOut" }
                    );
                }

                if (num) {
                    tl.fromTo(
                        num,
                        { opacity: 0, x: -20 },
                        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
                        "-=0.5"
                    );
                }

                if (info) {
                    tl.fromTo(
                        info,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                        "-=0.55"
                    );
                }

                if (img) {
                    tl.fromTo(
                        img,
                        { opacity: 0, y: 40, scale: 0.96 },
                        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
                        "-=0.65"
                    );
                }
            });

            if (listRef.current?.querySelector(".proj-final-line")) {
                gsap.fromTo(
                    ".proj-final-line",
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.9,
                        ease: "power3.inOut",
                        scrollTrigger: {
                            trigger: ".proj-final-line",
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, listRef);

        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, [activeCategory]);

    const handleFolderClick = (category: string) => {
        const closing = activeCategory === category;
        setActiveCategory(closing ? "" : category);

        if (!closing) {
            // Wait for the list to render, then scroll "into" the folder
            setTimeout(() => {
                const el = listWrapRef.current;
                if (!el) return;
                const lenis = getLenis();
                if (lenis) {
                    lenis.scrollTo(el, { offset: -90, duration: 1.1 });
                } else {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 80);
        }
    };

    return (
        <section ref={sectionRef} id="projects" className="relative py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="proj-header mb-10 md:mb-14">
                    <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-6">
                        Selected Work
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.88] tracking-tight">
                            Projects
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-[260px] leading-relaxed md:pb-2">
                            Real-world applications built with modern tech stacks and shipped to production.
                        </p>
                    </div>
                </div>

                {/* Category folders */}
                <div className="proj-folders grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-x-6 gap-y-14 pt-16 md:pt-20 pb-16 md:pb-24">
                    {portfolioData.projectCategories.map((category) => {
                        const categoryProjects = portfolioData.projects.filter(
                            (p) => p.category === category
                        );
                        const isActive = activeCategory === category;

                        return (
                            <div
                                key={category}
                                className={`proj-folder relative flex flex-col items-center hover:z-30 ${
                                    isActive ? "z-20" : "z-0"
                                }`}
                            >
                                <div className="h-[130px] flex items-end justify-center">
                                    <Folder
                                        size={1.3}
                                        color="#A78BFA"
                                        open={isActive}
                                        onClick={() => handleFolderClick(category)}
                                        items={categoryProjects.slice(0, 3).map((p) =>
                                            p.image ? (
                                                <img
                                                    key={p.slug}
                                                    src={p.image}
                                                    alt={p.title}
                                                    className="w-full h-full object-cover object-top pointer-events-none select-none"
                                                    draggable={false}
                                                />
                                            ) : null
                                        )}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleFolderClick(category)}
                                    className="mt-7 flex flex-col items-center gap-1.5 cursor-pointer group/label focus:outline-none"
                                >
                                    <span
                                        className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                                            isActive
                                                ? "text-primary"
                                                : "text-white group-hover/label:text-primary/80"
                                        }`}
                                    >
                                        {category}
                                    </span>
                                    <span className="font-mono text-[11px] text-muted-foreground tracking-widest select-none">
                                        {String(categoryProjects.length).padStart(2, "0")}{" "}
                                        {categoryProjects.length === 1 ? "project" : "projects"}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Active category projects */}
                <div ref={listWrapRef}>
                {activeCategory && (
                    <div ref={listRef} key={activeCategory}>
                        {/* Active category heading */}
                        <div className="proj-active-head flex items-baseline gap-4 mb-10 md:mb-12">
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                                {activeCategory}
                            </h3>
                            <span className="font-mono text-xs text-primary/40 tracking-widest select-none">
                                ({String(activeProjects.length).padStart(2, "0")})
                            </span>
                        </div>

                        {activeProjects.length === 0 ? (
                            <div className="proj-empty border-t border-b border-border py-20 text-center">
                                <p className="text-muted-foreground text-sm">
                                    Projects in this category are in the works — coming soon.
                                </p>
                            </div>
                        ) : (
                            <>
                                {activeProjects.map((project, index) => {
                                    const isEven = index % 2 !== 0;
                                    const num = String(index + 1).padStart(2, "0");

                                    return (
                                        <div key={project.slug} className="proj-row">
                                            {/* Reveal line */}
                                            <div className="proj-line h-px bg-border origin-left" />

                                            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 py-14 md:py-16">

                                                {/* Index number */}
                                                <div className="proj-num hidden md:block w-12 shrink-0 pt-1.5">
                                                    <span className="font-mono text-xs text-primary/30 tracking-widest select-none">
                                                        {num}
                                                    </span>
                                                </div>

                                                {/* Info */}
                                                <div
                                                    className={`proj-info flex-1 flex flex-col justify-between gap-10 ${
                                                        isEven ? "md:order-last" : ""
                                                    }`}
                                                >
                                                    <div>
                                                        {/* Tags */}
                                                        <div className="flex flex-wrap gap-2 mb-5">
                                                            {project.tags.map((tag, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="px-3 py-1 text-[11px] font-medium rounded-full border border-primary/25 text-primary/70 tracking-wide"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className="text-2xl md:text-[1.75rem] font-bold leading-snug mb-4 text-white">
                                                            {project.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    {/* Tech + Links */}
                                                    <div>
                                                        <div className="flex flex-wrap gap-2 mb-7">
                                                            {project.tech.map((tech, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="px-2.5 py-1 text-[11px] rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.07]"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <div className="flex items-center gap-3">
                                                            {project.liveUrl && (
                                                                <a
                                                                    href={project.liveUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black text-sm font-semibold hover:bg-primary/85 transition-all duration-200 group/btn"
                                                                >
                                                                    {project.liveUrl.includes("play.google.com") ? "Play Store" : "Live Demo"}
                                                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
                                                                </a>
                                                            )}
                                                            {project.githubUrl && (
                                                                <a
                                                                    href={project.githubUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                                                                >
                                                                    <Github className="w-3.5 h-3.5" />
                                                                    Code
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Image */}
                                                <div
                                                    className={`proj-img flex-1 w-full relative rounded-2xl overflow-hidden cursor-pointer group border border-white/[0.06] ${
                                                        isEven ? "md:order-first" : ""
                                                    }`}
                                                    style={{ aspectRatio: "16/10" }}
                                                    onClick={() => router.push(`/projects/${project.slug}`)}
                                                >
                                                    {project.image ? (
                                                        <>
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                                            />
                                                            {/* Hover overlay */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                                <span className="text-white text-sm font-medium flex items-center gap-1.5">
                                                                    View Details
                                                                    <ArrowUpRight className="w-4 h-4" />
                                                                </span>
                                                            </div>
                                                            {/* Subtle always-on vignette */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                                        </>
                                                    ) : (
                                                        <div className="w-full h-full bg-card flex items-center justify-center">
                                                            <span className="text-muted-foreground text-sm">No preview</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Final divider */}
                                <div className="proj-final-line h-px bg-border origin-left" />
                            </>
                        )}
                    </div>
                )}
                </div>
            </div>
        </section>
    );
}
