import { Hero } from "../components/hero";
import { ProjectList } from "../components/project-list";
import { SkillSectionV2 } from "../components/skill-section-v2";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 pb-32 md:pb-24">
      <Hero />
      <ProjectList />
      <SkillSectionV2 />
    </main>
  );
}
