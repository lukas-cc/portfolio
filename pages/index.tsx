import type { NextPage } from "next";
import { NextIcon, ReactIcon } from "../components/icons/";
import { LazyShow } from "../components/LazyShow";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="mt-5">
        <nav>
          <ul className=" flex justify-end gap-20 mr-10 text-2xl">
            <a className="transition ease-in-out delay-50 hover:text-yellow-300 hover:scale-110">
              Home
            </a>
            <a className="transition ease-in-out delay-50 hover:text-yellow-300 hover:scale-110">
              About
            </a>
            <a className="transition ease-in-out delay-50 hover:text-yellow-300 hover:scale-110">
              Contact
            </a>
          </ul>
        </nav>
      </header>
      <main className="mt-10 mb-auto flex justify-center items-center flex-col">
        <h1 className="text-8xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
          Hello.
        </h1>
        <h2 className="text-4xl font-mono text-cyan-300 my-5">I am Lukas</h2>
        <section>
          <LazyShow>
            <div className="flex justify-between items-center gap-10">
              <NextIcon />
              <ReactIcon />
            </div>
          </LazyShow>
        </section>
      </main>
      <footer>
        <p className="text-green-300"> Hallo </p>
      </footer>
    </div>
  );
};

export default Home;
