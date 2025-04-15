import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

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

const DepartmentGrid = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:w-[900px]  mx-auto">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="group relative overflow-hidden  shadow-lg"
          >
            {/* Background Image */}
            <img
              src={dept.image}
              alt={dept.name}
              className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
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
            <RxArrowTopRight
              className="absolute bottom-4 right-4 w-[40px] h-[25px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-300"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentGrid;