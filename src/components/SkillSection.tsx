"use client";

import { motion } from "framer-motion";
import { NextIcon, ReactIcon, TypescriptIcon, TailwindIcon } from "./icons";

export const SkillSection = () => {
  const iconArray = [
    <TypescriptIcon width={80} height={80} key={0} />,
    <ReactIcon width={80} height={80} key={1} />,
    <NextIcon width={180} height={80} key={2} />,
    <TailwindIcon width={80} height={80} key={3} />,
  ];

  return (
    <div>
      <p className="mb-4 text-center text-2xl">My current tech stack:</p>
      <div className="mx-16 mt-16 flex flex-wrap items-center justify-around gap-8 md:flex-row md:justify-between">
        {iconArray.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.6, duration: 1.5, ease: "easeOut" }}
            className=""
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.05, ease: "easeInOut" }}
            >
              {icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
