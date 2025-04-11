import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-10 px-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        {/* <h1 className="text-4xl font-bold text-gray-800">Follow Us on Social Media</h1>
        <p className="text-lg text-gray-600 mt-2">Stay connected with us through our social platforms!</p> */}
      </header>

      {/* Social Media Links Section */}
      <section className="flex flex-col md:flex-row gap-4 w-full max-w-[90%]">
        {/* YouTube Card */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white p-8 sm:p-10 shadow-md flex flex-col items-center justify-center transition duration-300 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <img
            src="https://img.icons8.com/fluency/96/youtube-play.png"
            alt="YouTube Icon"
            className="w-20 h-20 mb-4"
          />
          <div className="animate-pulse flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} size="5x" className="text-white" aria-hidden="true" />
          </div>
        </a>

        {/* Facebook Card */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-8 sm:p-10 shadow-md flex flex-col items-center justify-center transition duration-300 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <img
            src="https://img.icons8.com/fluency/96/facebook-new.png"
            alt="Facebook Icon"
            className="w-20 h-20 mb-4"
          />
          <div className="animate-pulse flex justify-center items-center">
            <FontAwesomeIcon icon={faFacebook} size="5x" className="text-white" aria-hidden="true" />
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-8 sm:p-10 shadow-md flex flex-col items-center justify-center transition duration-300 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <img
            src="https://img.icons8.com/fluency/96/instagram-new.png"
            alt="Instagram Icon"
            className="w-20 h-20 mb-4"
          />
          <div className="animate-pulse flex justify-center items-center">
            <FontAwesomeIcon icon={faInstagram} size="5x" className="text-white" aria-hidden="true" />
          </div>
        </a>
      </section>
    </div>
  );
};

export default SocialMediaPage;