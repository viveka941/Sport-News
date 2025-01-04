import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid gap-10 row-gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">About Us</h6>
            <p className="text-sm leading-relaxed">
              We provide the latest blogs, articles, and news updates to keep
              you informed about trending topics worldwide. Stay connected and
              explore more with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <i className="fab fa-facebook mr-2"></i> Facebook
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <i className="fab fa-twitter mr-2"></i> Twitter
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <i className="fab fa-instagram mr-2"></i> Instagram
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h6>
            <p className="text-sm leading-relaxed">
              <span className="block">Email: Sportsdunia@yourwebsite.com</span>
              <span className="block">Phone: +123 456 7890</span>
              <span className="block">
                Address: 123 Blog Street, City, Country
              </span>
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
    </footer>
  );
}
