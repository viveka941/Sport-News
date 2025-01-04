import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div>
      {/* Category Section */}
      <div>Page Category</div>

      {/* Blog Section */}
      <div>
        <BlogCards blogs={blogs} />
      </div>

      {/* Pagination Section */}
      <div>Pagination</div>
    </div>
  );
}
