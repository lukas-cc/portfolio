import type { NextPage } from "next";
import { useEffect } from "react";
import { NextIcon, ReactIcon } from "../components/icons/";
import { ClockTimer } from "../components/icons/Clock";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home: NextPage = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    hidden: { opacity: 0, scale: 0 },
  };

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
      <main className="mt-10 mb-auto flex justify-center items-center flex-col gap-4">
        <h1 className="text-8xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
          Hello.
        </h1>
        <p className="text-4xl font-mono text-cyan-300 my-5">I am Lukas</p>
        <p className="text-2xl">I am 22 years old</p>
        <p className="text-2xl">
          A frontend software engineer. Currently doing my masters in computer
          science in Hamburg.
        </p>
        <section>
          <div className="h-96 bg-red-100"></div>
          <div className="h-96 bg-red-200"></div>
          <motion.div
            className="flex justify-between items-center gap-10"
            ref={ref}
            initial="hidden"
            animate={control}
            variants={boxVariant}
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
