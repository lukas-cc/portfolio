"use client";

import { motion } from "framer-motion";
import {
  NextIcon,
  ReactIcon,
  TypescriptIcon,
  TailwindIcon,
  MuiIcon,
} from "./icons";

export const SkillSection = () => {
  const iconArray = [
    <TypescriptIcon width={80} height={80} key={0} />,
    <ReactIcon width={80} height={80} key={1} />,
    <NextIcon width={160} height={80} key={2} />,
    <TailwindIcon width={80} height={80} key={3} />,
    <MuiIcon width={80} height={80} key={4} />,
  ];

  return (
    <div className="p-8">
      <p className="pb-4 text-center text-2xl">My current tech stack:</p>
      <div className="pt-16 flex flex-wrap justify-center gap-10 lg:gap-20 w-full">
        {iconArray.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.6, duration: 1.5, ease: "easeOut" }}
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
