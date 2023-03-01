import type { NextPage } from "next";
import { HoverText, SkillSection } from "../components";
import { TypingAnimation } from "../components/TypingAnimation";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col">
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
      <main className="mt-20 mb-auto flex flex-col items-center justify-center gap-4">
        <h1 className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-9xl font-bold text-transparent md:text-[180px]">
          Hello
        </h1>
        <TypingAnimation />
        <HoverText
          text={["Currently", "studying", "computer science", "@ UHH"]}
        />
        <HoverText text={["Technologies", "I", "use:"]} />
        <SkillSection />
      </main>
    </div>
  );
};

export default Home;
