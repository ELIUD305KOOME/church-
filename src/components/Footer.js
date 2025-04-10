import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white text-purple-800 py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Column 1: About the Church */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xs font-bold mb-4">About Christ Worship Center</h3>
            <p className="text-xs leading-relaxed">
              Christ Worship Center International is a vibrant, spirit-led church committed to preaching the Gospel of Jesus Christ, transforming lives through prayer, worship, and the Word of God. Join us as we grow in faith and reach out to the world.
            </p>
          </div>
          {/* Column 3: Social Media */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xs font-bold mb-4">Connect With Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com/cwcintchurch/photos?_rdc=1&_rdr#" className="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@christworshipcenter3342" className="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 border-t border-gray-300 pt-4 text-center">
          <p className="text-xs">&copy; {new Date().getFullYear()} Christ Worship Center International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
