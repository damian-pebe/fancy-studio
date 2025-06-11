"use client"
import { ArrowDown } from 'lucide-react'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center text-white space-y-6 px-4">
        <h1 className="text-8xl font-bold animate-fade-in-down font-careny mb-28">
          Trabajos Anteriores
        </h1>
        <p className="text-xl text-black/80 max-w-2xl mx-auto animate-fade-in font-poppins">
          Explora nuestra colección de proyectos realizados. Cada trabajo refleja nuestra pasión por la excelencia.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => (window.scrollTo({
                top: 800,
                behavior: "smooth",
              }))}
            className="tracking-widest group justify-center flex items-center gap-2 border bg-black/20  border-black/30 rounded-full px-4 py-2 font-birthstone text-4xl transition hover:-translate-y-1 duration-1000 animate-fadeInRight"
          >
            Ver Trabajos{" "}
            <ArrowDown
              size={48}
              className="bg-black text-white rounded-full p-1 transition-all group-hover:-rotate-[360deg] duration-700 "
            />
          </button>
        </div>
      </div>
    </div>
  )
}
