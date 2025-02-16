import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 18; // Number of blogs per page

  // Fetch blogs
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-12-04&sortBy=publishedAt&apiKey=76068ab7e66447eab674c0f204102a77"
        );
        const data = await response.json();
        setBlogs(data.articles || []); // Extract `articles` array or set to empty array if undefined
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / pageSize);

  // Get the current page's blogs
  const currentBlogs = blogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Blog Categories</h2>
        {/* Add category filtering here if needed */}
      </div>

      {/* Blog Section with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* BlogCards Section */}
        <div className="flex-1">
          <BlogCards blogs={currentBlogs} />
        </div>
        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
