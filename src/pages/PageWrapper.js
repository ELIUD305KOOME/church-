// src/components/PageWrapper.js
import { motion } from 'framer-motion';

const variants = {
  initial: (direction) => ({
    x: direction === 'left' ? 300 : -300,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  exit: (direction) => ({
    x: direction === 'left' ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.6 },
  }),
};

const PageWrapper = ({ children, direction = 'left' }) => {
  return (
    <motion.div
      className="w-full h-full"
      variants={variants}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
