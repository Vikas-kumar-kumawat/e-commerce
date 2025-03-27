import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";

// Import Images
import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";

const Insta = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  const images = [insta1, insta2, insta3, insta4, insta5];

  return (
    <div className="w-full py-16 bg-gray-100 flex flex-col justify-center items-center">
      {/* Section Header */}
      <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800 mb-4">
        Follow Us on <span className="text-purple-600">Instagram</span>
      </h2>
      <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 mb-8">
        Shop directly from our latest Instagram posts.
      </p>

      {/* Instagram Images Grid */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 lg:px-20"
      >
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <img
              src={img}
              alt={`Instagram ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-lg font-semibold bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                <FaInstagram className="text-xl" /> Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Button */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
      >
        Follow Us <FaInstagram className="inline ml-2 text-xl" />
      </a>
    </div>
  );
};

export default Insta;
