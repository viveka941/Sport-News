import React from "react";

export default function Service() {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-10 bg-black text-white px-4 text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Our Service Page
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          Discover our wide range of professional services tailored to meet your
          needs.
        </p>
      </div>

      {/* Services Overview Section */}
      <div className="py-12 px-4 lg:px-16 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              description:
                "Build modern and responsive websites with the latest technologies.",
              icon: "🌐",
            },
            {
              title: "Digital Marketing",
              description:
                "Grow your business with data-driven marketing strategies.",
              icon: "📈",
            },
            {
              title: "Graphic Design",
              description:
                "Create stunning visuals and designs for your brand.",
              icon: "🎨",
            },
            {
              title: "Mobile App Development",
              description:
                "Develop user-friendly mobile applications for iOS and Android.",
              icon: "📱",
            },
            {
              title: "SEO Services",
              description:
                "Improve your search engine rankings with expert SEO services.",
              icon: "🔍",
            },
            {
              title: "Cloud Solutions",
              description:
                "Leverage the power of cloud computing for your business.",
              icon: "☁️",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded shadow text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-12 px-4 lg:px-16 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-lg mb-6">
          Let’s work together to create something amazing.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
