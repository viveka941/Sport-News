import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">About Us</h6>
            <p className="text-sm">
              We provide the latest blogs, articles, and news updates to keep
              you informed about trending topics worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h6>
            <p className="text-sm">
              Email: Sportsdunia@yourwebsite.com <br />
              Phone: +123 456 7890 <br />
              Address: 123 Blog Street, City, Country
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 mt-10 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
