import React from 'react'
import BlogPage from '../component/BlogPage';

export default function Blog() {
  return (
    <div>
      <div className="py-10  bg-black text-white px-4 text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Our Blog Page
        </h2>
      </div>
      <div className="max-w-7xl mx-auto"><BlogPage/></div>
    </div>
  );
}
