import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import deal from "../assets/deal-bg.jpg";

function Banner() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px]">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="relative w-full h-[350px] rounded-lg bg-cover bg-center flex justify-center items-center overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
        style={{ backgroundImage: `url(${deal})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-lg"></div>

        {/* Content Section */}
        <div className="relative text-center text-white px-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl font-semibold text-yellow-300 tracking-wide drop-shadow-lg"
          >
            Everyday Shopping
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-5xl font-bold mt-2 drop-shadow-2xl"
          >
            Deal of The Day
          </h1>

          {/* CTA Button */}
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-6 px-6 py-3 bg-yellow-400 text-black text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-2xl active:scale-95"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
