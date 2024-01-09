"use client";

import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = () => {
  return (
    <div className="flex h-44 w-full flex-col">
      <TypeAnimation
        sequence={["Hi", 100, "Hi, I", 100, "Hi, I am", 100, "Hi, I am Lukas."]}
        wrapper="h1"
        cursor={false}
        speed={1}
        className="bg-gradient-to-r from-primary via-secondary to-pink bg-clip-text text-center text-7xl font-bold text-transparent md:text-8xl lg:text-9xl"
      />
    </div>
  );
};
