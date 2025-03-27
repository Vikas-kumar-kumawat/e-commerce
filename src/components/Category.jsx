import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Import Images
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";

const categories = [
  { img: cat1, name: "Speakers" },
  { img: cat2, name: "Suit Case" },
  { img: cat3, name: "Ear Buds" },
  { img: cat4, name: "CD Disk" },
  { img: cat5, name: "Camera" },
];

function Category() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      id="category"
      className="w-full bg-gradient-to-b from-gray-100 to-gray-300 px-5 lg:px-20 py-[30px] flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-gray-500 font-semibold text-lg">Favourite Items</h1>
        <h1 className="text-4xl font-bold text-black mt-2">Popular Categories</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          View All
        </motion.button>
      </motion.div>

      {/* Category Items */}
      <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-20">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black/10 rounded-full hover:bg-black/20 transition-all"></div>
            </div>
            <h1 className="text-xl font-semibold mt-3 text-black hover:text-purple-600 transition-all duration-200">
              {category.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Category;
