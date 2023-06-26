import { HoverText, ProjectGrid } from "../components/server";
import { SkillSection, TypingAnimation } from "../components/client";

const Home = () => {
  return (
    <main className="mx-4 mb-8 mt-20 flex flex-col items-center justify-center gap-4">
      <h1 className="bg-gradient-to-r from-warning to-primary bg-clip-text text-9xl font-bold text-transparent md:text-[180px]">
        Hello
      </h1>
      <TypingAnimation />
      <HoverText
        text={[
          "A",
          "frontend",
          "software",
          "engineer.",
          "Doing",
          "my",
          "masters",
          "in",
          "computer",
          "science",
          "at",
          "University",
          "of",
          "Hamburg.",
        ]}
      />
      <HoverText
        text={[
          "Currently",
          "working",
          "as",
          "a",
          "working",
          "student",
          "at",
          "E&V",
          "Technology.",
        ]}
      />
      <div className="mt-20 flex flex-col gap-20">
        <SkillSection />
        <ProjectGrid />
      </div>
    </main>
  );
};

export default Home;
