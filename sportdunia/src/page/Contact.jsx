import React from "react";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-10 bg-black text-white px-4 text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          We'd love to hear from you! Feel free to reach out for any inquiries
          or feedback.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 px-4 lg:px-16">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Get in Touch
        </h3>
        <form className="max-w-3xl mx-auto bg-gray-100 p-8 rounded shadow">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="bg-gray-100 py-12 px-4 lg:px-16">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Our Contact Details
        </h3>
        <div className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          <p className="mb-4">
            <strong>Address:</strong> 123 Main Street, Anytown, USA
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-500 hover:underline"
            >
              contact@example.com
            </a>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 px-4 lg:px-16">
        <h3 className="text-3xl font-semibold text-center mb-8">Find Us</h3>
        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0856806731663!2d-122.40179728467894!3d37.793781979756336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d113d497b%3A0x4baf68c4f4a3dba4!2sSalesforce+Tower!5e0!3m2!1sen!2sus!4v1616146312051!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border rounded"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
