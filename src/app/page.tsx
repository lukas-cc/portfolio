import { TypeAnimation } from "react-type-animation";
import { ProjectGrid } from "../components/ProjectShowcase/ProjectGrid";
import { SkillSection } from "../components/SkillSection";
import { TypingAnimation } from "../components/TypingAnimation";

const Home = () => {
  return (
    <main className="mx-4 mb-8 mt-20 flex flex-col items-center justify-center gap-4">
      <TypingAnimation />
      <p className="text-center text-2xl">
        A frontend software engineer. Doing my masters in computer science at
        University of Hamburg.
      </p>
      <p className="text-center text-2xl">
        Currently working as a working student at E&V Technology.
      </p>

      <div className="mt-20 flex flex-col gap-20">
        <SkillSection />
        <ProjectGrid />
      </div>
    </main>
  );
};

export default Home;
