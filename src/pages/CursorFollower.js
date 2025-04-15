import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorFollower = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out motion
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-xl pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: "10px",
        transformOrigin: "center",
      }}
      animate={{
        scale: 1.2,
        rotate: 45,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    />
  );
};

export default CursorFollower;
