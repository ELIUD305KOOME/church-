import React from 'react';
// import ServiceList from './ServiceList';
// import ProductList from './ProductList'; // Ensure correct file name
import AboutUs from './ReviewsPage';
import Map from './Map';
import Card from './eliudcard';
import ImageSlider from "./church-photos"
import OurServices from "./church-services"
import ActiveSlider from "./church-data"
import Carousel from "./hero-better"

const HomePage = () => {
  return (
    <div className="relative w-full bg-blue-100 min-h-screen overflow-hidden">
  {/* Hero Section with Background Logo */}
  <section
  className="relative bg-cover bg-center py-24 sm:py-28 md:py-32 lg:py-48"
  style={{
    backgroundImage: "url('/hero-church.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "70vh",
  }}
> 
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>

  <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Text Content */}
      <div className=" lg:text-left flex-1">
        <h1 className="text-xm  md:text-5xl lg:text-6xl font-bold text-indigo-100 leading-tight mb-6">
          Welcome to Christ Worship Center International
        </h1>
        <p className="text-base text-sm text-left sm:text-lg md:text-xl text-gray-300 mb-8">
          We are more than a church — we are a vibrant community rooted in love, worship, and outreach. With hearts wide open and arms extended, we welcome all people into a life-transforming encounter with Jesus Christ. Our vision is to see lives changed, hope restored, and communities renewed through the power of God's presence and the warmth of family.
        </p>
        <div className="flex flex-col mt-6 items-start gap-6 ml-0">
  <a
    href="https://chat.whatsapp.com/your-group-link"  // Replace with your actual WhatsApp group link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-0 w-24 sm:w-32 md:w-40 text-xs sm:text-sm md:text-base border-4 border-rose-800 hover:bg-violet-800 hover:text-white text-blue-900 font-medium py-2 px-4  shadow transition duration-300 transform "
  >
    Join Us
  </a>
 </div>


      </div>

      {/* Big Logo Text */}
      <div className="flex-1 hidden md:block relative">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  WebkitTextStroke: "2px #fff", 
                  fontSize: "13rem", // Adjust size as needed
                  fontFamily: "'Roboto', sans-serif", // Modern font
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.1)", // Subtle base color
                  textShadow:
              "0px 10px 20px rgba(50, 11, 148, 0.8), 0px 20px 40px rgba(76, 87, 243, 0.6), 0px 30px 60px rgba(138, 156, 244, 0.4)",
          }}
        >
          CWCI
        </div>
      </div>
    </div>
  </div>
</section>



      <div className="flex flex-col bg-violet-800 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-8 bg-gray-100  shadow-md">
        {/* Text Section */}
        <div className="text-left max-w-md md:w-1/2 p-4 rounded-lg relative overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-white transform -skew-y-[20deg]"></div>

          {/* Content Layer */}
          <div className="relative">
            <p className="text-lg md:text-xl font-semibold text-blue-800 mb-2">
            A Church without boundaries
            </p>
            <p className="text-base md:text-lg text-gray-600">
            where everybody is somebody.
            </p>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center md:w-1/2 space-x-12">
         
          
          
        </div>
      </div>
      
      <ActiveSlider/>
      <Card/>
      <OurServices/>
      {/* Map Section */}

      <Map />
      <ImageSlider/>
      <Carousel/>
    </div>
  );
};

export default HomePage;