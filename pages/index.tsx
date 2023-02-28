import type { NextPage } from "next";
import { HoverText, SkillSection } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="mt-5">
        <nav>
          <ul className=" flex justify-end gap-20 mr-10 text-2xl">
            <a className="transition ease-in-out delay-50 hover:text-yellow-300 hover:scale-110 cursor-pointer">
              Home
            </a>
            <a className="transition ease-in-out delay-50 hover:text-yellow-300 hover:scale-110 cursor-pointer">
              About
            </a>
            <a className="transition ease-in-out delay-50 hover:text-yellow-300 hover:scale-110 cursor-pointer">
              Contact
            </a>
          </ul>
        </nav>
      </header>
      <main className="mt-10 mb-auto flex justify-center items-center flex-col gap-4">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
          Hello
        </h1>
        <p className="text-6xl text-cyan-300 my-5">I am Lukas</p>
        <HoverText text={["A", "frontend", "software", "engineer."]} />
        <SkillSection />
      </main>
      <footer>
        <p className="text-green-300"> Hallo </p>
      </footer>
    </div>
  );
};

export default Home;
