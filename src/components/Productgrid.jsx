import React, { useEffect } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdAddShoppingCart } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../export";

const Productgrid = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full lg:px-[20] px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-6">
      {/* Header */}
      <div data-aos="zoom-in" data-aos-delay="100" className="font-semibold text-xl text-purple-600">
        Browse Collections
      </div>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-black font-bold text-[40px] text-center leading-[50px]"
      >
        Trending Products
      </h1>

      {/* Product Grid */}
      <div data-aos="fade-up" data-aos-delay="100" className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
          >
            {/* Product Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-[200px] h-auto mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            {/* Product Info */}
            <h2 className="text-lg font-medium text-gray-500">{item.category}</h2>
            <h1 className="text-2xl font-semibold text-black">{item.name}</h1>
            <h1 className="text-xl font-bold text-yellow-500">{item.price}</h1>

            {/* Rating Stars */}
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FaRegHeart
                className="text-gray-500 hover:text-red-500 transition-all duration-200 text-xl cursor-pointer hover:scale-125"
              />
              <MdOutlineRemoveRedEye
                className="text-gray-500 hover:text-blue-500 transition-all duration-200 text-xl cursor-pointer hover:scale-125"
              />
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-300 active:scale-95">
              <MdAddShoppingCart className="text-lg" /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-8 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 active:scale-95">
        View More
      </button>
    </div>
  );
};

export default Productgrid;
