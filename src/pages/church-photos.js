import React from "react";
import './church-photos.css'

const images = [
  "/image-100.jpg",
  "/image-200.jpg",
  "/image-300.jpg",
  "/image-400.jpg",
  "/image-500.jpg",
  "/image-600.jpg",
  "/image-700.jpg",
  "/image-800.jpg",
  "/image-900.png",
];

const ImageSlider = () => {
  const loopImages = [...images, ...images]; // duplicate for seamless scroll

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-4">
      {/* Sliding Images */}
      <div className="flex w-max animate-slide">
        {loopImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2"
            style={{ width: "clamp(120px, 25vw, 200px)" }} // responsive sizing
          >
            <img
              src={img}
              alt={`slider-${index}`}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover  shadow-md"
            />
          </div>
        ))}
      </div>

      {/* About Us Section */}
<div className="max-w-5xl mx-auto mt-[50px] bg-white shadow-lg  overflow-hidden mb-[50px] p-6 sm:p-10">
  <div className="flex flex-col   md:flex-row items-center md:items-start gap-6">
    
    {/* Rounded Image */}
    <img
      src="/founder.jpg"
      alt="Founder"
      className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-purple-800"
    />

    {/* Card Content */}
    <div className="text-center md:text-left">
      <h2 className="text-sm md:text-3xl font-bold text-gray-800 mb-4">
        Resident Pastor, Christ Worship Center International
      </h2>
      <p className="text-xs text-left md:text-lg text-purple-700 leading-relaxed">
        is the visionary leader and heart behind Christ Worship Center International. With a passion for worship and a deep calling to nurture a spiritually empowered community, she founded the ministry with a single mission — to draw hearts back to God through uncompromised worship and the Word.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default ImageSlider;