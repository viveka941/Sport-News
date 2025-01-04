import React from "react";
import { Link } from "react-router-dom";

export default function BlogCards({ blogs }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    }).format(date);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <Link
          to={`/blog/${index}`} // Example: Add a route for individual blog details
          key={index}
          className="block p-4 bg-white rounded shadow hover:shadow-lg transition"
        >
          <div>
            <img
              src={blog.urlToImage}
              alt={blog.title}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold">{blog.title}</h3>
          <p className="mt-1 text-gray-600 text-sm">{`Author: ${blog.author}`}</p>
          <p className="mt-1 text-gray-600 text-sm">
            {formatDate(blog.publishedAt)}
          </p>
          <p className="mt-1 text-gray-600 text-sm">{blog.description}</p>
        </Link>
      ))}
    </div>
  );
}
