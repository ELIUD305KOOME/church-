import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


const WatchUsLive = () => {
  return (
    <div className="max-w-full mx-auto bg-violet-800 py-10 lg:h-screen px-4 sm:px-6 lg:px-8">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1  lg:mt-[100px] md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col">
          {/* Main Display Image */}
          <div className="border w-90 overflow-hidden">
            <img
              src="/live--.jpg"
              alt="Live Stream Preview"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Live Stream Details Section */}
        {/* Live Stream Details Section */}
<div className="text-center">
  {/* Title */}
  <h1 className="text-4xl font-extrabold text-teal-100 mb-6">
    Watch Us Live
  </h1>

  {/* Description */}
  <p className="text-base text-blue-200 mb-8 max-w-md mx-auto">
    Join us live as we share insights, updates, and exclusive content. Don't miss out on the action!
  </p>

  {/* YouTube Icon Animation */}
  <div className="animate-pulse mb-10 flex justify-center items-center">
    <FontAwesomeIcon icon={faYoutube} size="4x" className="text-red-600" aria-hidden="true" />
  </div>

  {/* YouTube Channel Link */}
  <a
    href="https://www.youtube.com/@christworshipcenter3342"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-red-600 text-white font-semibold py-4 px-8  shadow-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    aria-label="Watch our live stream on YouTube"
  >
    <FontAwesomeIcon icon={faYoutube} size="sm" className="mr-2" />
    Watch Now
  </a>
</div>
      </div>
    </div>
  );
};

export default WatchUsLive;