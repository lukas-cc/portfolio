import { motion } from "framer-motion";

export const LazyShow = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="lazy-div"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};
