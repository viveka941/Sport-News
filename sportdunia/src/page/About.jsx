import React from "react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-10 bg-black text-white px-4 text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          About Us
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          Learn more about our mission, values, and the team behind our success.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="py-12 px-4 lg:px-16">
        <h3 className="text-3xl font-semibold text-center mb-8">Who We Are</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
          We are a passionate team dedicated to providing the latest and most
          engaging content, including blogs, news, and articles. Our mission is
          to keep our readers informed and inspired by curating high-quality and
          trending topics from around the globe.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-12 px-4 lg:px-16">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
          Our mission is to connect people with knowledge, inspire creativity,
          and empower readers to stay ahead in an ever-changing world. We aim to
          deliver valuable content that resonates with diverse audiences.
        </p>
      </div>

      {/* Team Section */}
      <div className="py-12 px-4 lg:px-16">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full"></div>
            <h4 className="text-xl font-medium mt-4">John Doe</h4>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full"></div>
            <h4 className="text-xl font-medium mt-4">Jane Smith</h4>
            <p className="text-gray-600">Content Strategist</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full"></div>
            <h4 className="text-xl font-medium mt-4">Sam Wilson</h4>
            <p className="text-gray-600">Technical Lead</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-12 px-4 text-center">
        <h4 className="text-2xl font-semibold mb-4">Join Us</h4>
        <p className="text-lg text-gray-400 mb-6">
          Be a part of our journey and stay updated with our latest content.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
}
