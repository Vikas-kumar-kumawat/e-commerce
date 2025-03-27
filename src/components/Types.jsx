import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Import Banners
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const banners = [
  { img: banner1, title: "Wireless Devices" },
  { img: banner2, title: "Wired Earbuds" },
  { img: banner3, title: "Smart Watches" },
];

function Types() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 gap-10">
      {banners.map((banner, index) => (
        <motion.div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 200}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col justify-center items-end p-10 rounded-lg bg-cover bg-center shadow-md hover:shadow-2xl transition-all duration-300"
          style={{
            backgroundImage: `url(${banner.img})`,
            minHeight: "300px",
          }}
        >
          {/* Discount Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="border-2 border-yellow-300 text-yellow-300 px-5 py-2 rounded-xl text-lg font-semibold bg-black/50"
          >
            50% OFF
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-white text-end leading-tight mt-4"
          >
            {banner.title.split(" ")[0]} <br /> {banner.title.split(" ")[1]}
          </motion.h1>

          {/* Shop Now Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-5 py-2 text-lg font-semibold bg-yellow-300 text-black rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
          >
            Shop Now
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}

export default Types;
