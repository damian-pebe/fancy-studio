"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black ">
        <Image
          src="/images/microblading.jpg"
          alt="Background"
          fill
          className="object-cover opacity-70 animate-fadeInDown"
        />
      </div>
      <div className="relative z-10 flex flex-col h-full w-full pt-10 pb-48 md:py-20 px-5 md:px-16 justify-between text-start text-white font-careny">
        <p className="text-6xl md:text-5xl h-full tracking-wide animate-fadeInLeft">
          Fancy<sup>®</sup> <br className="block md:hidden"/>  Microblading
        </p>
        <div className="flex flex-col md:flex-row justify-between h-full md:h-min items-center mb-10 md:ml-5">
          <p className="text-3xl md:text-7xl text-center md:text-start tracking-wide w-full animate-fadeInLeft">
            Arte en cada trazo, elegancia en tu rostro
          </p>
          <div className="w-full md:w-[70%] flex flex-col justify-center items-start">
            <p className="hidden md:block text-base md:text-lg tracking-wide w-full font-poppins mb-5 animate-fadeInRight">
              Donde cada trazo revela tu esencia. Cejas y pestañas que realzan tu belleza natural
            </p>

            <button
              onClick={() => (window.location.href = "/agendar")}
              className="group flex justify-center items-center gap-2 border border-black/30 rounded-full ml-12 md:ml-5 px-4 py-2 text-3xl transition hover:-translate-y-1 duration-1000 animate-fadeInRight"
            >
              Agendar Cita{" "}
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
