"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SQRT_5000 = Math.sqrt(5000);

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    tech: string[];
    liveUrl?: string;
    githubUrl: string;
    gradient: string;
    image?: string;
}

interface ProjectCardProps {
    position: number;
    project: Project & { tempId: number };
    handleMove: (steps: number) => void;
    cardSize: number;
    onProjectClick: (slug: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    position,
    project,
    handleMove,
    cardSize,
    onProjectClick,
}) => {
    const isCenter = position === 0;

    const handleClick = () => {
        if (isCenter) {
            onProjectClick(project.slug);
        } else {
            handleMove(position);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 md:p-8 transition-all duration-500 ease-in-out overflow-hidden",
                isCenter
                    ? "z-10 bg-primary text-primary-foreground border-primary shadow-[0_0_60px_rgba(204,255,0,0.3)]"
                    : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter
                    ? "0px 8px 0px 4px hsl(var(--border))"
                    : "0px 0px 0px 0px transparent",
            }}
        >
            {/* Corner cut accent */}
            <span
                className={cn(
                    "absolute block origin-top-right rotate-45",
                    isCenter ? "bg-black/30" : "bg-border"
                )}
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2,
                }}
            />

            {/* Gradient overlay for non-center cards */}
            <div
                className={cn(
                    "absolute inset-0 opacity-20 transition-opacity duration-300",
                    isCenter ? "opacity-0" : ""
                )}
                style={{
                    background: `linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, transparent 60%)`,
                }}
            />

            {/* Project icon/tag area */}
            <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map((tech, i) => (
                    <span
                        key={i}
                        className={cn(
                            "px-3 py-1 text-xs font-medium rounded-full",
                            isCenter
                                ? "bg-black/20 text-primary-foreground"
                                : "bg-primary/20 text-primary"
                        )}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Project title */}
            <h3
                className={cn(
                    "text-lg sm:text-xl md:text-2xl font-bold mb-3 line-clamp-2",
                    isCenter ? "text-primary-foreground" : "text-foreground"
                )}
            >
                {project.title}
            </h3>

            {/* Project description */}
            <p
                className={cn(
                    "text-sm line-clamp-3 mb-4",
                    isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
                )}
            >
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className={cn(
                            "px-2 py-0.5 text-[10px] font-medium rounded-full",
                            isCenter
                                ? "bg-black/20 text-primary-foreground/90"
                                : "bg-muted text-muted-foreground"
                        )}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Click hint for center card */}
            {isCenter && (
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-xs text-primary-foreground/60 italic">
                        Click to view details →
                    </span>
                    <div className="flex gap-2">
                        {project.liveUrl && (
                            <ExternalLink className="w-4 h-4 text-primary-foreground/60" />
                        )}
                        <Github className="w-4 h-4 text-primary-foreground/60" />
                    </div>
                </div>
            )}

            {/* Project number indicator for non-center cards */}
            {!isCenter && (
                <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs text-muted-foreground italic">
                        Click to bring to focus
                    </span>
                </div>
            )}
        </div>
    );
};

interface StaggerProjectsProps {
    projects: Project[];
}

export const StaggerProjects: React.FC<StaggerProjectsProps> = ({ projects }) => {
    const [cardSize, setCardSize] = useState(365);
    const [projectsList, setProjectsList] = useState(
        projects.map((p, i) => ({ ...p, tempId: i }))
    );
    const router = useRouter();

    const handleMove = (steps: number) => {
        const newList = [...projectsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setProjectsList(newList);
    };

    const handleProjectClick = (slug: string) => {
        router.push(`/projects/${slug}`);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 600 }}
        >
            {/* Ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

            {projectsList.map((project, index) => {
                const position =
                    projectsList.length % 2
                        ? index - (projectsList.length + 1) / 2
                        : index - projectsList.length / 2;
                return (
                    <ProjectCard
                        key={project.tempId}
                        project={project}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                        onProjectClick={handleProjectClick}
                    />
                );
            })}

            {/* Navigation buttons */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-full",
                        "bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary",
                        "hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                    aria-label="Previous project"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-full",
                        "bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary",
                        "hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                    aria-label="Next project"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-4 text-xs text-muted-foreground hidden md:block">
                <span className="px-2 py-1 bg-card rounded border border-border mr-1">←</span>
                <span className="px-2 py-1 bg-card rounded border border-border mr-2">→</span>
                to navigate
            </div>
        </div>
    );
};
