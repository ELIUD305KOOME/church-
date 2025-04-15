import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";

// Sample data for departments
const departments = [
  {
    name: "Praise and Worship Department",
    image: "/sunday-worship.jpg",
    whatsappLink: "https://chat.whatsapp.com/HRGroupLink",
  },
  {
    name: "Intercessory Department",
    image: "/sunday.jpeg",
    whatsappLink: "https://chat.whatsapp.com/ITGroupLink",
  },
  {
    name: "Children Department",
    image: "/youth.jpg",
    whatsappLink: "https://chat.whatsapp.com/MarketingGroupLink",
  },
  {
    name: "Women Department",
    image: "/womens-.jpg",
    whatsappLink: "https://chat.whatsapp.com/FinanceGroupLink",
  },
  {
    name: "Men’s Department",
    image: "/image-100.jpg",
    whatsappLink: "https://chat.whatsapp.com/MarketingGroupLink",
  },
];

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

const DepartmentGrid = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Departments
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:w-[900px] mx-auto">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden shadow-lg rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <motion.img
              src={dept.image}
              alt={dept.name}
              className="w-full h-70 object-cover group-hover:scale-110 transition-transform duration-300"
              whileInView={{ scale: 1.05 }}
              transition={springTransition}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity"
              transition={springTransition}
            />

            {/* Content */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={springTransition}
            >
              <h1 className="text-lg sm:text-xl font-bold">{dept.name}</h1>
              <a
                href={dept.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
              >
                Join Group
              </a>
            </div>

            {/* Animated Arrow */}
            <motion.div
              className="absolute bottom-4 right-4"
              whileInView={{ rotate: 45 }}
              transition={springTransition}
            >
              <RxArrowTopRight className="w-[40px] h-[25px] text-white group-hover:text-blue-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentGrid;
