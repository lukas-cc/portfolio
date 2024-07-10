import { ProjectGrid } from "../components/project-showcase/project-grid";
import { SkillSection } from "../components/skill-section";
import { TypingAnimation } from "../components/typing-animation";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-6 pt-20 md:p-8">
      <TypingAnimation />
      <section className="flex w-full flex-col gap-4 md:w-2/3">
        <p className="text-center text-2xl">
          A frontend software engineer. Doing my masters in computer science at
          the University of Hamburg.
        </p>
        <p className="text-center text-2xl">
          Currently working at E&V Technology.
        </p>
      </section>
      <div className="flex flex-col gap-20 pb-20 pt-20 md:pb-4">
        <SkillSection />
        <ProjectGrid />
      </div>
    </main>
  );
}
