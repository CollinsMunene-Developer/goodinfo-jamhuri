"use client";
import { LogoImg } from "@/public/assets/images/Images";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const goToLearnMore = () => {
    router.push("/learnmore");
  };
  const goToContact = () => {
    router.push("/ContactPage");
  };
  return (
    <div className="flex flex-col w-full md:flex-row items-center px-4 md:px-16 py-8 gap-8 md:gap-16 justify-between border-blue-400">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Image
          src={LogoImg}
          width={50}
          height={50}
          alt="logo"
          className="rounded-md"
        />
        <span className="text-lg font-extrabold text-purple-900">GoodInfo</span>
      </div>

      {/* Heading Section */}
      <div className="text-center md:text-left max-w-2xl">
        <h2 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-black via-red-600 to-green-600 text-transparent bg-clip-text">
          Happy Jamhuri Day, Kenya!
        </h2>
        <p className="mt-4 text-gray-700 text-lg text-center">
          Celebrating 60 Years of Independence and the Spirit of Unity!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
          onClick={goToLearnMore}
        >
          Learn More
        </button>
        <button className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition" onClick={goToContact}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
