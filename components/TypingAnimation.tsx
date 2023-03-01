import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = () => {
  return (
    <div className="flex gap-4">
      <p className="my-5 text-5xl text-cyan-300">I am Lukas:</p>
      <TypeAnimation
        sequence={["frontend software engineer", 1000, "student", 1000]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        speed={1}
        className="my-5 text-5xl text-cyan-300"
      />
    </div>
  );
};
