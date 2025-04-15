import React from "react";
import { motion } from 'framer-motion';

const springTransition = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  damping: 12,
  delay,
});

const Card = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/hero-.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-xl mx-auto text-center px-4">
        {/* Medium image */}
        <div className="relative">
          {/* Medium-sized image */}
          <motion.img
            src="/pattern.jpg"
            alt="Medium"
            className="mx-auto w-[600px] h-auto shadow-lg rounded-lg"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={springTransition(0.2)}
            onError={(e) => {
              e.target.src = "/fallback-pattern.jpg";
            }}
          />


          {/* Smaller image overlapping bottom */}
          <img
            src="/church-time-table.jpg"
            alt="Small"
            className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[250px] h-auto border-4 border-white shadow-md "
            onError={(e) => {
              e.target.src = "/fallback-church.jpg"; // Fallback image in case of error
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;