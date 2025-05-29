"use client";
import React from "react";

export default function ShowcaseSection() {
  return (
    <section className="h-full pt-60 w-full flex flex-col justify-center items-center text-center px-4 py-16 bg-[#fcfbf7] text-black font-poppins relative">
      <div className="absolute mb-10 justify-between items-center w-full">
        <div className="absolute left-4 top-8 text-xl text-black/70">[01]</div>
        <div className="absolute right-4 top-8 text-xl text-black/70">
          ©2025
        </div>
      </div>
      <div className="flex flex-col h-full w-full justify-center items-center">
        <p className="uppercase flex flex-row text-sm tracking-[0.2em] text-black mb-2">
          ●<div className="text-gray-500">Showcase</div>
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold mb-6">
          Nuestros Trabajos
        </h1>

        <p className="max-w-xl text-sm md:text-base text-gray-700 leading-relaxed">
          Una selección exclusiva de diseños de microblading que realzan la
          belleza natural. Transformamos miradas con precisión artística y
          técnica experta, creando cejas perfectamente definidas que reflejan tu
          personalidad única.
        </p>
      </div>
      <div className="w-full px-2 h-[1px] mt-10 bg-black/20"></div>
    </section>
  );
}
