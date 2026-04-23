"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const images = [
  "/Home_Banner.jpeg",
  "/Home_Banner-2.jpg",
  "/Home_Banner-3.png",
  "/Home_Banner-4.jpg",
  "/Home_Banner-6.avif",
  "/Home_Banner-7.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-190 overflow-hidden flex items-end">

      {/* SLIDER BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-[120px] flex">

        <Link href="/doctors" className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/10 border-r border-white/30 group">
          <div>
            <h3 className="text-white font-semibold">Find a Doctor</h3>
            <p className="text-white/80 text-sm">Unparalleled care from compassionate doctors</p>
          </div>
          <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500" />
        </Link>

        <Link href="/contact" className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/10 border-r border-white/30 group">
          <div>
            <h3 className="text-white font-semibold">Locate Us</h3>
            <p className="text-white/80 text-sm">Easily find our hospital location and directions.</p>
          </div>
          <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500" />
        </Link>

        <div className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/10 border-r border-white/30 group">
          <div>
            <h3 className="text-white font-semibold">Career with Unico</h3>
            <p className="text-white/80 text-sm">Comprehensive services tailored to your needs.</p>
          </div>
          <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500" />
        </div>

        <Link href="/contact" className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/10 border-r border-white/30 group">
          <div>
            <h3 className="text-white font-semibold">Book an Appointment</h3>
            <p className="text-white/80 text-sm">Custom health packages designed just for you.</p>
          </div>
          <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500" />
        </Link>

        <div className="w-[300px] bg-[#0090ca] text-white flex flex-col justify-center px-6">
          <h3 className="text-sm">Emergency Hotline</h3>
          <p className="text-2xl font-bold">096 77 66 77 66</p>
        </div>

      </div>

    </div>
  );
}