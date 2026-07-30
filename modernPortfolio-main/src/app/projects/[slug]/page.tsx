"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Banknote, GraduationCap, Building2, Factory, Truck, Stethoscope, MessageCircle, Music, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projectIcons = [Banknote, GraduationCap, Building2, Factory, Truck, Stethoscope, MessageCircle, Music, ShoppingCart];

export default function ProjectDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    // Find the project by slug
    const projectIndex = portfolioData.projects.findIndex(
        (p) => p.slug === slug
    );
    const project = portfolioData.projects[projectIndex] as any;

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The project you're looking for doesn't exist.
                    </p>
                    <Button onClick={() => router.push("/#projects")} variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Button>
                </div>
            </div>
        );
    }

    const Icon = projectIcons[projectIndex] || Stethoscope;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                {/* Background gradient */}
                <div
                    className={cn(
                        "absolute inset-0 opacity-20",
                        `bg-gradient-to-br ${project.gradient}`
                    )}
                />

                {/* Ambient glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Back button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            onClick={() => router.push("/#projects")}
                            variant="ghost"
                            className="mb-8 hover:bg-primary/10 hover:text-primary"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Button>
                    </motion.div>

                    {/* Project header */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <Badge
                                        key={i}
                                        variant="outline"
                                        className="border-primary/50 text-primary"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                {project.title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-4">
                                {project.liveUrl && (
                                    <Link href={project.liveUrl} target="_blank">
                                        <Button
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(204,255,0,0.3)]"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            {project.liveUrl.includes("play.google.com") ? "View on Play Store" : "View Live Demo"}
                                        </Button>
                                    </Link>
                                )}
                                {project.githubUrl && (
                                    <Link href={project.githubUrl} target="_blank">
                                        <Button variant="outline" className="hover:border-primary hover:text-primary">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Source Code
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </motion.div>

                        {/* Right: Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative"
                        >
                            {/* Tablet/iPad mockup */}
                            <div className="relative mx-auto w-[320px] md:w-[450px]">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative w-full aspect-[4/3] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[24px] md:rounded-[32px] p-2 md:p-3 shadow-2xl shadow-black/50 border border-gray-700/50 overflow-hidden"
                                >
                                    {/* Camera notch (iPad style - small circle) */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full z-20" />

                                    {/* Screen with Project Image */}
                                    <div
                                        className={cn(
                                            "w-full h-full rounded-[16px] md:rounded-[24px] overflow-hidden relative",
                                            !project.image && `bg-gradient-to-br ${project.gradient}`
                                        )}
                                    >
                                        {project.image ? (
                                            <>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                                {/* Subtle gradient overlay at bottom */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                            </>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Icon className="w-24 h-24 text-primary/60" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Floating tech badges */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                    className="absolute -right-2 md:-right-16 top-1/4 flex flex-col gap-2"
                                >
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{
                                                duration: 2,
                                                delay: i * 0.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="px-4 py-2 bg-card/90 backdrop-blur rounded-lg border border-border shadow-lg"
                                        >
                                            <span className="text-sm font-medium text-primary">
                                                {tech}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Technologies <span className="text-muted-foreground font-light italic">Used</span>
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {project.tech.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <span className="text-primary font-bold text-lg">
                                            {tech.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                                        {tech}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Key <span className="text-muted-foreground font-light italic">Features</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Feature cards based on project tags */}
                            {project.tags.map((tag, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: i * 0.1 }}
                                    className="p-8 bg-gradient-to-br from-card to-card/50 rounded-3xl border border-border hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{tag}</h3>
                                    <p className="text-muted-foreground">
                                        Built with modern best practices and scalable architecture to
                                        ensure high performance and maintainability.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Interested in this project?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Check out the live demo or explore the source code on GitHub.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.liveUrl && (
                                <Link href={project.liveUrl} target="_blank">
                                    <Button
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(204,255,0,0.3)]"
                                    >
                                        <ExternalLink className="mr-2 h-5 w-5" />
                                        {project.liveUrl.includes("play.google.com") ? "View on Play Store" : "View Live Demo"}
                                    </Button>
                                </Link>
                            )}
                            {project.githubUrl && (
                                <Link href={project.githubUrl} target="_blank">
                                    <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary">
                                        <Github className="mr-2 h-5 w-5" />
                                        View on GitHub
                                    </Button>
                                </Link>
                            )}
                            <Button
                                size="lg"
                                variant="ghost"
                                onClick={() => router.push("/#projects")}
                                className="hover:text-primary"
                            >
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Back to Projects
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
