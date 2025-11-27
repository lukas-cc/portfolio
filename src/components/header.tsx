"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
};

export const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="z-50 hidden w-full py-5 md:block">
      <nav>
        <div className="flex flex-wrap justify-center gap-12 text-2xl md:mr-10 md:justify-end md:gap-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path}>
                <span
                  className={
                    currentPath === path
                      ? "relative cursor-pointer px-3 py-1"
                      : "hover:text-primary relative cursor-pointer px-3 py-1 transition delay-50 ease-in-out"
                  }
                >
                  {name}
                  {currentPath === path ? (
                    <motion.div
                      layoutId="header"
                      transition={{ type: "spring", duration: 0.6 }}
                      className="absolute inset-0 z-[-1] rounded-md bg-zinc-700/60"
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
