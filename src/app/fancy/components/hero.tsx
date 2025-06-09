"use client"
import { ArrowDown, ArrowUpRightIcon } from "lucide-react";
import React from "react";

export default function HeroComponent() {
  return (
    <div className="px-2 w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl mt-20 mx-auto flex justify-between items-center">
        <div className="text-4xl md:text-5xl tracking-wide font-careny text-black">
          Acerca de FANCY<sup>®</sup>
        </div>
        <ArrowUpRightIcon
          size={48}
          className="bg-black text-white rounded-full p-1 transition-all hover:cursor-pointer hover:-rotate-[360deg] duration-700"
        />
      </div>
      <div className="w-full max-w-6xl mx-auto px-2 h-[1px] mt-10 bg-black"></div>

    <div className="w-full max-w-4xl mt-20 mx-auto flex justify-between items-center">
    <div className="text-black text-sm md:text-xl leading-relaxed font-poppins">
        <span className="md:hidden text-center">
            Somos FANCY®, un estudio especializado en microblading y técnicas avanzadas de belleza. 
            Nos destacamos en la creación de cejas perfectamente definidas y extensiones de pestañas.
        </span>
        <span className="hidden md:block">
            Somos FANCY®, un estudio especializado en microblading y técnicas avanzadas de belleza. 
            Nos destacamos en la creación de cejas perfectamente definidas, powder brows, shading, y 
            extensiones de pestañas. Nuestro equipo de artistas expertos utiliza las técnicas más 
            innovadoras y seguras para realzar tu belleza natural. Ya sea que busques un look natural 
            o dramático, en FANCY® transformamos tus características faciales con precisión y arte.
        </span>
    </div>
    </div>
<button
  onClick={() => {
    window.scrollTo({
      top: 1680, 
      behavior: 'smooth'
    });
  }}
  className="text-white tracking-widest my-32 font-careny group flex items-center gap-2 border border-black/30 bg-black/20 rounded-full px-4 py-2 text-base font-medium transition hover:-translate-y-1 duration-1000 animate-fadeInRight"
>
  Donde nos Encontramos{" "}
  <ArrowDown
    size={32}
    className="bg-black text-white rounded-full p-1 transition-all group-hover:-rotate-[360deg] duration-700"
  />
</button>
    </div>
  );
}
