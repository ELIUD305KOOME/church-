import React from 'react';

const Maping = () => {
  return (
    <div className="relative lg:mt-15 bg-violet-800 py-12">
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse items-start">
          <div className="relative h-96 w-full lg:w-2/3 border rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.759007810823!2d-77.1653445846499!3d39.169602179528084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b62c281db5eeb9%3A0xe0f949cd7fa3b0e3!2s7601%20Airpark%20Rd%20c%2C%20Gaithersburg%2C%20MD%2020879%2C%20USA!5e0!3m2!1sen!2sus!4v1712840200000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="church  Location"
            ></iframe>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Maping;
