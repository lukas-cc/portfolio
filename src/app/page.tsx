import { ProjectGrid } from "../components/project-showcase/project-grid";
import { SkillSectionV2 } from "../components/skill-section-v2";
import { TypingAnimation } from "../components/typing-animation";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-6 pt-20 md:p-8">
      <TypingAnimation />
      <section className="flex w-full flex-col gap-4 md:w-2/3">
        <p className="text-center text-2xl">A full-stack software engineer.</p>
        <p className="text-center text-2xl">
          Currently working at E&V Technology.
        </p>
      </section>
      <div className="flex w-full flex-col items-center justify-center gap-20 pt-20 pb-20 md:pb-4">
        {/* <SkillSection /> */}

        <SkillSectionV2 />

        <ProjectGrid />
      </div>
    </main>
  );
}
