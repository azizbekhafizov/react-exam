import React from "react";
import bg from "../assets/images/Banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="min-h-[500px] xl:min-h-[650px] flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-black lg:bg-black/40" />

        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-sans text-white mb-4 leading-tight">
            Big Summer <span className="font-bold">Sale</span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>

          <Link
            to="/shop"
            className="inline-block w-full sm:w-[190px] h-[55px] leading-[55px] bg-transparent text-white border border-white rounded-[8px] text-center transition hover:bg-white hover:text-black"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
