import React from "react";
import vivek from "../assets/vivek.jpg";

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
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            {/* Placeholder for Profile Picture */}
            <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full">
              <img
                src={vivek}
                alt="Vivek Kumar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h4 className="text-xl font-medium mt-4">Vivek Kumar Chaurasiya</h4>
            <p className="text-gray-600">MCA Student & Full Stack Developer</p>

            {/* About Vivek */}
            <div className="mt-4 text-left">
              <h5 className="text-lg font-semibold">Education</h5>
              <p className="text-gray-600">
                Vivek Kumar Chaurasiya is pursuing an MCA at Lovely Professional
                University (LPU) and holds a BCA degree from Gorakhpur, Uttar
                Pradesh.
              </p>

              <h5 className="text-lg font-semibold mt-4">Skills</h5>
              <p className="text-gray-600">
                Proficient in Java, Java Swing, MySQL, mangoDB, React.js, HTML,
                CSS, JavaScript, Bootstrap, and more.
              </p>

              <h5 className="text-lg font-semibold mt-4">Projects</h5>
              <ul className="list-disc list-inside text-gray-600">
                <li>Villa Blog (CRUD functionality, MERN stack)</li>
                <li>
                  Travel and Tourism Management System (Java Swing, MySQL)
                </li>
                <li>Responsive Weather App (HTML, CSS, JavaScript, API)</li>

                <li>School Management System for Classes 0-10</li>
                <li>Rent Out Decor Items for Parties</li>

                <li>
                  Cloud Storage Project (File upload and timer-based link
                  generation)
                </li>
              </ul>

              <h5 className="text-lg font-semibold mt-4">Interests</h5>
              <p className="text-gray-600">
                Vivek is passionate about learning new technologies, improving
                communication skills, and exploring creative ventures like
                starting a YouTube channel.
              </p>
            </div>
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
