"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    image: "/images/microblading6.jpg",
    quote:
      "El resultado del microblading superó todas mis expectativas. Mi rostro luce más definido y natural.",
    name: "Carolina S.",
    role: "Cliente Satisfecha",
  },
  {
    image: "/images/microblading7.jpg",
    quote:
      "La atención profesional y el ambiente del estudio son excepcionales. Recomiendo totalmente sus servicios.",
    name: "Isabella M.",
    role: "Cliente Feliz",
  },
  {
    image: "/images/microblading8.jpg",
    quote:
      "Gracias al microblading, mi rutina diaria es mucho más rápida. Los resultados son increíbles.",
    name: "Valentina R.",
    role: "Cliente Satisfecha",
  },
  {
    image: "/images/microblading9.jpg",
    quote:
      "La precisión y el cuidado en cada detalle me impresionaron. Es una inversión que vale totalmente la pena.",
    name: "Daniela G.",
    role: "Cliente Feliz",
  },
  {
    image: "/images/microblading10.jpg",
    quote:
      "Mi experiencia fue extraordinaria desde el inicio hasta el final. Los resultados son justo lo que buscaba.",
    name: "Patricia L.",
    role: "Cliente Satisfecha",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[index];

  return (
    <div className="flex flex-col items-center justify-between h-full w-full bg-[#fefcf9]">
      <p className="uppercase flex flex-row text-sm tracking-[0.2em] text-black mb-2">
        ●<span className="ml-2 text-gray-500">Testimonial</span>
      </p>

      <section className="bg-[#fefcf9] text-[#121212] py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4 }}
              className="w-full md:w-1/2 h-[450px]"
            >
              <div className="relative w-full h-[450px]">
                <Image
                  src={testimonial.image}
                  alt="Client testimonial"
                  fill
                  className="rounded-md object-cover shadow-md hover:cursor-crosshair hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2 transition-all duration-1000"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={"text-" + index}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4 }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <Link
                  href="/"
                  className="text-xl md:text-2xl tracking-wide hover:cursor-pointer font-careny"
                >
                  FANCY<sup>®</sup>
                </Link>
                <div className="text-sm text-right">
                  <span className="text-black flex flex-row mx-2 gap-2 items-center justify-between">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} fill="000000" />
                      ))}
                  </span>
                </div>
              </div>

              <p className="text-2xl md:text-3xl font-light leading-snug">
                “{testimonial.quote}”
              </p>

              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handlePrev}
                  className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all hover:-translate-y-2 duration-700"
                >
                  <ChevronLeft />{" "}
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all hover:-translate-y-2 duration-700"
                >
                  <ChevronRight />{" "}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
