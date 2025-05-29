"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src="/images/microblading.jpg"
          alt="Background"
          fill
          className="object-cover opacity-90"
        />
      </div>
      <div className="relative z-10 flex flex-col h-full w-full py-20 px-16 justify-between text-center md:text-start text-white font-careny">
        <p className="text-3xl md:text-5xl h-full tracking-wide">
          Fancy<sup>®</sup>Microblading
        </p>
        <div className="flex justify-between items-center md:mb-10 md:ml-5">
          <p className="text-5xl md:text-7xl tracking-wide w-full">
            Arte en cada trazo, elegancia en tu rostro
          </p>
          <div className="w-[70%] flex flex-col justify-center items-start">
            <p className="text-base md:text-lg tracking-wide w-full font-poppins mb-5">
              Donde cada trazo revela tu esencia. Cejas y pestañas que realzan tu belleza natural
            </p>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="group flex items-center gap-2 border border-black/30 rounded-full ml-5 px-4 py-2 text-base font-xl transition hover:-translate-y-1 duration-1000"
            >
              CONTACTANOS{" "}
              <ArrowUpRightIcon
                size={32}
                className="bg-white text-black rounded-full p-1 transition-all group-hover:-rotate-[360deg] duration-700"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
