import React, { useEffect, useRef, useState } from 'react';
// import './App.css'; // Assuming you're using Tailwind in your project

const images = [
  "/image-100.jpg",
  "/image-200.jpg",
  "/image-300.jpg",
  "/image-400.jpg",
  "/image-500.jpg",
  "/image-600.jpg",
  "/image-700.jpg",
//   "/image-800.jpg",
  "/image-900.png",
];

const Slide = ({ image, title, name, description }) => (
    <div
      className="absolute top-1/2 left-1/2 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out  shadow-2xl"
      style={{ backgroundImage: `url(${image})`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="absolute top-1/2 left-28 transform -translate-y-1/2 w-96 text-white">
        <div className="text-3xl text-rose-600 font-bold">{title}</div>
        <div className="text-xl mt-1 font-semibold">{name}</div>
        <p className="text-sm mt-2">{description}</p>
        <div className="mt-4 space-x-2">
          {/* <button className="bg-green-500 text-white px-4 py-2 rounded">join us</button>
          <button className="bg-white text-green-500 px-4 py-2 rounded">our-whatsapp-group</button> */}
        </div>
      </div>
    </div>
  );

const Carousel = () => {
  const [items, setItems] = useState(images);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const rotate = (direction) => {
    if (animating) return;
    setAnimating(true);

    setItems((prev) => {
      if (direction === 'next') {
        return [...prev.slice(1), prev[0]];
      } else {
        return [prev[prev.length - 1], ...prev.slice(0, -1)];
      }
    });

    setTimeout(() => setAnimating(false), 1000);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(() => rotate('next'), 7000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const slideDescriptions = [
    '', '', '', '', '', '', '', '', '', '', '',
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute  inset-0 z-10">
        <Slide
          image={items[0]}
          title="Gallery"
          name={slideDescriptions[images.indexOf(items[0])]}
        //   description="We are more than a church — we are a vibrant community rooted in love, worship, and outreach. With hearts wide open and arms extended, we welcome all people into a life-transforming encounter with Jesus Christ. Our vision is to see lives changed, hope restored, and communities renewed through the power of God's presence and the warmth of family."
        />
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <button onClick={() => rotate('prev')} className="bg-white text-purple-800 px-4 py-2 shadow">{'<'}</button>
      </div>
      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <button onClick={() => rotate('next')} className="bg-white text-black px-4 py-2  shadow">{'>'}</button>
      </div>

      {/* Progress bar animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 overflow-hidden">
        <div className="h-full bg-green-500 animate-[progress_7s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default Carousel;

/* Add this to your tailwind.config.js for animation if needed:
  extend: {
    keyframes: {
      progress: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
    },
    animation: {
      progress: 'progress 7s linear infinite',
    },
  },
*/
