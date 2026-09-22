"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Weather App",
    description: "A minimalistic weather app.",
    href: "https://weather-app-lukas-cc.vercel.app/",
    image: "/weather-app.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Spotify Clone",
    description: "A clone of the Spotify web player.",
    href: "https://spotify-clone-lukas-cc.vercel.app/",
    image: "/spotify.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "NextAuth",
      "TanStack Query",
      "Jotai",
      "Spotify API",
    ],
  },
  {
    title: "Stock.io",
    description: "Browse through stock market data.",
    href: "https://stockio.vercel.app/",
    image: "/stock-io.png",
    status: "In progress",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Recharts",
      "Yahoo Finance",
    ],
  },
];

// Most-used first, so the shared foundation leads the row.
const allTech = [...new Set(projects.flatMap((p) => p.stack))].sort(
  (a, b) =>
    projects.filter((p) => p.stack.includes(b)).length -
    projects.filter((p) => p.stack.includes(a)).length,
);

export const ProjectList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [pinnedTech, setPinnedTech] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const selectedTech = hoveredTech ?? pinnedTech;
  const activeStack = active !== null ? projects[active].stack : [];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-4 md:px-8"
    >
      <h2 className="pb-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Projects
      </h2>
      <div className="flex flex-wrap gap-2 pb-8" aria-label="Filter by tech">
        {allTech.map((tech) => {
          const isSelected = selectedTech === tech;
          const isInActiveProject = activeStack.includes(tech);
          return (
            <button
              key={tech}
              type="button"
              aria-pressed={pinnedTech === tech}
              onClick={() => setPinnedTech(pinnedTech === tech ? null : tech)}
              onPointerEnter={(e) =>
                e.pointerType === "mouse" && setHoveredTech(tech)
              }
              onPointerLeave={() => setHoveredTech(null)}
              className={cn(
                "focus-visible:ring-ring rounded-md border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:ring-1 focus-visible:outline-none active:scale-[0.98]",
                isSelected
                  ? "border-primary bg-primary text-primary-foreground"
                  : isInActiveProject
                    ? "border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground border-border",
              )}
            >
              {tech}
            </button>
          );
        })}
      </div>
      <div
        ref={listRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActive(null)}
        className="relative"
      >
        <ul className="divide-border divide-y border-y">
          {projects.map((project, i) => {
            const isDimmed =
              selectedTech !== null && !project.stack.includes(selectedTech);
            return (
              <li
                key={project.title}
                onPointerEnter={(e) =>
                  e.pointerType === "mouse" && setActive(i)
                }
                className={cn(
                  "transition-opacity duration-300",
                  isDimmed && "opacity-30",
                )}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group focus-visible:ring-ring grid gap-4 py-8 focus-visible:ring-1 focus-visible:outline-none md:grid-cols-2 md:items-center md:py-10"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="group-hover:text-primary text-3xl font-semibold tracking-tight transition-colors md:text-5xl">
                      {project.title}
                    </h3>
                    {project.status ? (
                      <span className="text-muted-foreground font-mono text-xs">
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <p className="text-muted-foreground max-w-[40ch] md:text-lg">
                        {project.description}
                      </p>
                      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className={cn(
                              "transition-colors",
                              tech === selectedTech
                                ? "text-primary"
                                : "text-muted-foreground/70",
                            )}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ArrowTopRightIcon className="size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <Image
                    src={project.image}
                    alt=""
                    width={2980}
                    height={1980}
                    sizes="90vw"
                    className="h-auto w-full rounded-xl border border-white/10 md:hidden"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <motion.div
          aria-hidden
          style={{ x: reduce ? x : springX, y: reduce ? y : springY }}
          className="pointer-events-none absolute top-0 left-0 z-10 hidden md:block"
        >
          <AnimatePresence>
            {active !== null ? (
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative aspect-[3/2] w-[320px] translate-x-6 -translate-y-[calc(100%+1.5rem)] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-zinc-950/80"
              >
                {projects.map((project, i) => (
                  <Image
                    key={project.image}
                    src={project.image}
                    alt=""
                    fill
                    sizes="320px"
                    className={`object-cover transition-opacity duration-300 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
