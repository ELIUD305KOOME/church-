import React from "react";

const services = [
  {
    icon: "fas fa-user-graduate",
    title: "Youth Empowerment",
    description:
      "Raising a generation grounded in truth and ignited by the Spirit.",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Community Outreach",
    description:
      "Serving with love, impacting lives, and bringing hope to the hopeless.",
  },
  {
    icon: "fas fa-money-bill-wave",
    title: "Community & Events",
    description:
      "Stay connected and be part of our vibrant church family through worship nights, prayer gatherings, and service projects that bring people together under the love of Christ.",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 bg-violet-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8"></h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-violet-800 p-6  border border-white shadow-md hover:shadow-xl transition duration-300"
            >
              <i
                className={`${service.icon} text-indigo-600 text-4xl mb-4`}
              ></i>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
