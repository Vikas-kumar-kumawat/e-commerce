
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Search, User, Moon, Sun, Menu } from "lucide-react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 shadow-md transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold cursor-pointer text-indigo-600"
        >
          ShopEasy
        </motion.h1>

        {/* Search Bar */}
        <div className="hidden md:flex bg-gray-200 px-4 py-2 rounded-lg w-1/3">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Shop", "Deals", "About", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, color: "#4f46e5" }}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-600 transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Icons & Dark Mode */}
        <div className="flex items-center space-x-4">
          <motion.button whileHover={{ scale: 1.2 }}>
            <Search className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }}>
            <User className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-100 p-4 text-center"
        >
          {["Home", "Shop", "Deals", "About", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block py-2 hover:text-indigo-600"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
