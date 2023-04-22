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
    <header className="sticky top-0 bg-base-100 py-5">
      <nav>
        <ul className="flex flex-wrap justify-center gap-12 text-2xl md:mr-10 md:justify-end md:gap-20 ">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="relative">
                <span
                  className={
                    currentPath === path
                      ? "relative cursor-pointer px-3 py-1"
                      : "delay-50 relative cursor-pointer px-3 py-1 transition ease-in-out hover:text-secondary"
                  }
                >
                  {name}
                  {currentPath === path ? (
                    <motion.div
                      layoutId="header"
                      transition={{ type: "spring", duration: 0.6 }}
                      className="absolute inset-0 z-[-1] rounded-md bg-neutral"
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
