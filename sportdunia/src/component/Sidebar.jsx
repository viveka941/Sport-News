import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Sidebar() {
  const [popularBlogs, setPopularBlogs] = useState([]); // Fixed typo in state name

  useEffect(() => {
    async function fetchPopularBlogs() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=apple&from=2025-01-03&to=2025-01-03&sortBy=popularity&pageSize=30&apiKey=76068ab7e66447eab674c0f204102a77"
        );
        const data = await response.json();
        setPopularBlogs(data.articles || []); // Correctly set the `articles` array
        console.log(data);
      } catch (err) {
        console.error("Error fetching popular blogs", err);
      }
    }
    fetchPopularBlogs();
  }, []); // Added empty dependency array to run only once

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h3 className="text-2xl font-semibold mb-4">Latest Blogs</h3>
      {popularBlogs.length > 0 ? (
        popularBlogs.slice(5).map((blog, idx) => (
          <Link
            to={`${blog.url}`}
            target="_blank"
            key={idx}
            className="block mb-2 text-blue-500 hover:underline my-5 border-b-2 border-spacing-2 px-4"
          >
            <div className="mb-2">
              <p className="font-semibold text-slate-950 text-gray-800">
                {blog.title}
              </p>
              <p className="text-blue-500 hover:underline flex items-center mt-1">
                Read more{" "}
                <span className="ml-1">
                  <AiOutlineArrowRight />
                </span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>No popular blogs available.</p>
      )}
    </div>
  );
}
