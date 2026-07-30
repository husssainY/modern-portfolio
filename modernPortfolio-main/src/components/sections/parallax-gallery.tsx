"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
    "/agentops.png",
    "/bank-recon.png",
    "/doc-extraction.png",
    "/energy-mgmt.png",
    "/process-mining.png",
    "/analytics.png",
];

export function ParallaxGallery() {
    const gallery = useRef<HTMLDivElement>(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        resize();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <section className="relative w-full bg-black text-white overflow-hidden">
            <div className="font-geist flex h-[60vh] items-center justify-center gap-2">
                <div className="grid content-start justify-items-center gap-6 text-center">
                    <p className="text-[#A78BFA] text-xs font-semibold tracking-[0.3em] uppercase">
                        Portfolio
                    </p>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.88] tracking-tight">
                        Work I&apos;ve Shipped
                    </h2>
                    <span className="relative max-w-[18ch] text-xs uppercase leading-tight text-muted-foreground after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white/40 after:to-transparent after:content-['']">
                        keep scrolling to explore the projects
                    </span>
                </div>
            </div>

            <div
                ref={gallery}
                className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw] justify-center"
            >
                <Column images={[images[0], images[1]]} y={y} />
                <Column images={[images[2], images[3]]} y={y2} />
                <Column images={[images[4], images[5]]} y={y3} />
            </div>
        </section>
    );
}

type ColumnProps = {
    images: string[];
    y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
    return (
        <motion.div
            className="relative -top-[45%] flex h-full w-1/4 min-w-[200px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
            style={{ y }}
        >
            {images.map((src, i) => (
                <div
                    key={i}
                    className="relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.06]"
                >
                    <img
                        src={src}
                        alt="Project preview"
                        className="pointer-events-none h-full w-full object-cover"
                    />
                </div>
            ))}
        </motion.div>
    );
};
