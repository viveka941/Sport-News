import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="px-4 py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white mx-auto">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-orange-500">Our Blog</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 lg:w-2/3 mx-auto text-lg md:text-xl mb-8">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas. From helpful
          tips to tutorials, we provide everything you need to get started.
        </p>

        {/* Button */}
        <div>
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold text-lg rounded-full inline-flex items-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Learn More
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
