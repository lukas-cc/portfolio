import type { NextPage } from "next";
import { HoverText, ProjectGrid } from "../components/server";
import { SkillSection, TypingAnimation } from "../components/client";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <header className="mt-5">
        <nav>
          <ul className="flex flex-wrap justify-center gap-12 text-2xl md:mr-10 md:justify-end md:gap-20 ">
            <a className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-300">
              Home
            </a>
            <a className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-300">
              About
            </a>
            <a className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-300">
              Contact
            </a>
          </ul>
        </nav>
      </header>
      <main className="mb-auto mt-20 flex flex-col items-center justify-center gap-4">
        <h1 className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-9xl font-bold text-transparent md:text-[180px]">
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
            "@ UHH",
          ]}
        />
        <section className="mt-10 flex flex-col gap-32">
          <SkillSection />

          <ProjectGrid />
        </section>
      </main>
    </div>
  );
};

export default Home;
