import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample Reviews
const reviews = [
  {
    name: "Emily Johnson",
    rating: 4.5,
    review:
      "This product is absolutely amazing! The quality exceeded my expectations, and the service was top-notch. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Smith",
    rating: 5,
    review:
      "Superb experience! Fast shipping and the product was exactly as described. Will definitely shop here again!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Brown",
    rating: 4,
    review:
      "Great value for the price. The product is fantastic, but I think the packaging could be slightly improved.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

// Generate star ratings
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex text-yellow-400 text-2xl justify-center"
    >
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </motion.div>
  );
};

const CustomerReviews = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-yellow-400 mb-2"
      >
        ⭐ Customer Reviews
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 text-xl mb-8"
      >
        Real feedback from our happy customers
      </motion.p>

      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <Slider {...settings} ref={sliderRef} className="w-full">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-10 rounded-lg shadow-xl text-center flex flex-col items-center gap-6"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-md"
              />
              <h3 className="text-2xl font-semibold">{review.name}</h3>
              {renderStars(review.rating)}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 text-lg italic max-w-2xl"
              >
                "{review.review}"
              </motion.p>
            </motion.div>
          ))}
        </Slider>

        <div className="absolute -bottom-12 flex gap-6">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-yellow-400 text-gray-900 p-4 rounded-full shadow-md hover:bg-yellow-500 transition transform hover:scale-110"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-yellow-400 text-gray-900 p-4 rounded-full shadow-md hover:bg-yellow-500 transition transform hover:scale-110"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
