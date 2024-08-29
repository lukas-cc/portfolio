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

export const Footer = () => {
  const currentPath = usePathname();

  return (
    <footer className="fixed bottom-0 block w-full py-5 backdrop-blur-sm md:top-0 md:hidden">
      <nav>
        <ul className="flex flex-wrap justify-center gap-12 text-2xl md:mr-10 md:justify-end md:gap-20">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path}>
                <span
                  className={
                    currentPath === path
                      ? "relative cursor-pointer px-3 py-1"
                      : "delay-50 relative cursor-pointer px-3 py-1 transition ease-in-out hover:text-primary"
                  }
                >
                  {name}
                  {currentPath === path ? (
                    <motion.div
                      layoutId="footer"
                      transition={{ type: "spring", duration: 0.6 }}
                      className="absolute inset-0 z-[-1] rounded-md bg-zinc-700/60"
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};
