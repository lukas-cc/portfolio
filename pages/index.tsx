import type { NextPage } from "next";
import { NextIcon, ReactIcon } from "../components/icons/";
import { motion } from "framer-motion";
import { HoverText } from "../components/HoverText";

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
        <section>
          <div className="h-96 bg-red-100"></div>
          <div className="h-96 bg-red-200"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-between items-center gap-10"
          >
            <NextIcon width={160} height={120} />
            <ReactIcon width={64} height={64} />
          </motion.div>
        </section>
      </main>
      <footer>
        <p className="text-green-300"> Hallo </p>
      </footer>
    </div>
  );
};

export default Home;
