import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-900 text-gray-300 py-12"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
            <p className="text-gray-400">
              We are the leading e-commerce platform providing high-quality products at unbeatable prices. Shop with confidence!
            </p>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 transition cursor-pointer">FAQs</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Order Tracking</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Payment Methods</li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">My Account</h2>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 transition cursor-pointer">Login</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Register</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Wishlist</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Order History</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-purple-400 text-xl" />
              <p>123 E-commerce St, New York, USA</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdPhone className="text-purple-400 text-xl" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdEmail className="text-purple-400 text-xl" />
              <p>support@shop.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter & Social Media */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-xl font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-black outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <FaFacebookF className="text-xl hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer transition" />
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer transition" />
          </motion.div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex space-x-6 text-white text-3xl"
          >
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          &copy; 2025 ShopEase. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
