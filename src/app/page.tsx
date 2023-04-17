import { HoverText, ProjectGrid } from "../components/server";
import { SkillSection, TypingAnimation } from "../components/client";

const Home = () => {
  return (
    <div className="flex flex-col">
      <main className="mb-auto mt-20 flex flex-col items-center justify-center gap-4">
        <h1 className="bg-gradient-to-r from-warning to-primary bg-clip-text text-9xl font-bold text-transparent transition delay-100 md:text-[180px]">
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
            "@",
            "UHH.",
          ]}
        />
        <HoverText
          text={[
            "Currently",
            "working",
            "as",
            "a",
            "working student",
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
    </div>
  );
};

export default Home;
