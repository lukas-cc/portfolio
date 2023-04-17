"use client";

import { motion } from "framer-motion";
import {
  NextIcon,
  ReactIcon,
  TypescriptIcon,
  MuiIcon,
  TailwindIcon,
} from "./icons";
import { HoverText } from "./HoverText";

export const SkillSection = () => {
  const iconArray = [
    <TypescriptIcon width={64} height={64} key={0} />,
    <ReactIcon width={64} height={64} key={1} />,
    <NextIcon width={160} height={120} key={2} />,
    <MuiIcon width={64} height={64} key={3} />,
    <TailwindIcon width={64} height={64} key={4} />,
  ];

  return (
    <div>
      <HoverText text={["My", "current", "tech", "stack:"]} />
      <div className="mx-8 mt-12 flex flex-wrap items-center justify-around gap-8 md:mt-0 md:flex-row md:justify-between md:gap-16">
        {iconArray.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 1.2, ease: "easeOut" }}
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
