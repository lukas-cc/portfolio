"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Card = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div onClick={() => setIsFlipped(!isFlipped)} style={{ perspective: 1000 }}>
      <motion.div
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 360,
          transition: { duration: 0.8 },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative flex h-44 w-52 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary p-1"
      >
        <motion.div
          className="absolute flex h-[95%] w-[95%] items-center justify-center gap-8 rounded-lg bg-background p-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="absolute flex h-[95%] w-[95%] items-center justify-center gap-8 rounded-lg bg-background p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-center">{text}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
