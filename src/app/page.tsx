import { ProjectGrid } from "../components/project-showcase/project-grid";
import { SkillSection } from "../components/skill-section";
import { TypingAnimation } from "../components/typing-animation";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-6 pt-20 md:p-8">
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
