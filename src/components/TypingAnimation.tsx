"use client";

import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = () => {
  return (
    <div className="flex h-44 w-4/5 flex-col md:h-fit md:w-fit md:flex-row md:gap-4">
      <p className="my-5 text-center text-5xl text-primary">I am Lukas:</p>
      <TypeAnimation
        sequence={["developer", 1500, "student", 1500, "24 years old", 1500]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
        speed={1}
        className="my-5 text-center text-5xl text-primary"
      />
    </div>
  );
};
