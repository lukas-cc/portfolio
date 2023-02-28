import { motion } from "framer-motion";
import {
  NextIcon,
  ReactIcon,
  TypescriptIcon,
  MuiIcon,
  TailwindIcon,
} from "./icons";

export const SkillSection = () => {
  return (
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
        <TypescriptIcon width={64} height={64} />
        <ReactIcon width={64} height={64} />
        <NextIcon width={160} height={120} />
        <MuiIcon width={64} height={64} />
        <TailwindIcon width={64} height={64} />
      </motion.div>
    </section>
  );
};
