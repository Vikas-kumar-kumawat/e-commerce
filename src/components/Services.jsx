import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing icons
import payment from "../assets/payment.png";
import shipping from "../assets/shipping.png";
import refund from "../assets/return.png";
import gift from "../assets/gift.png";

const services = [
  { img: shipping, title: "World-wide Shipping", desc: "Get your orders delivered anywhere globally!" },
  { img: payment, title: "Super Fast Payment", desc: "Secure & instant transactions with us!" },
  { img: refund, title: "Refund Policy", desc: "Easy returns & refunds, no hassle!" },
  { img: gift, title: "Amazing Gift on Buy", desc: "Exciting rewards with every purchase!" },
];

export const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 lg:py-[50px] py-[80px] grid lg:grid-cols-4 grid-cols-1 gap-10 text-center">
      {services.map((service, index) => (
        <motion.div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
        >
          {/* Icon with Animation */}
          <motion.img
            src={service.img}
            alt={service.title}
            className="w-[100px] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />

          {/* Title */}
          <motion.h1
            className="font-semibold text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {service.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-500 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            {service.desc}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};
