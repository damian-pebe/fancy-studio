"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    image: "/images/microblading5.jpg",
    title: "Microblading ",
    description:
      "Técnica semipermanente que simula pelos reales en las cejas usando una pluma con microagujas para dar forma y definición natural.",
    alt: "Lévrière Passion",
  },
  {
    id: 2,
    image: "/images/microblading4.jpg",
    title: "Microshading ",
    description:
      "Método de sombreado semipermanente que crea un efecto de polvo suave en las cejas, ideal para lograr un look más maquillado y definido.",
    alt: "GiftGrove",
  },
  {
    id: 3,
    image: "/images/microblading2.jpg",
    title: "Laminado",
    description:
      "Tratamiento que alisa, peina y fija los vellos naturales de las cejas para darles una apariencia más uniforme, levantada y definida.",
    alt: "Lévrière Passion",
  },
  {
    id: 4,
    image: "/images/eyelashLift.jpg",
    title: "Lifting de Pestañas",
    description:
      "Procedimiento que riza y eleva las pestañas naturales desde la raíz, haciendo que se vean más largas y curvadas sin necesidad de extensiones.",
    alt: "GiftGrove",
  },
  {
    id: 5,
    image: "/images/eyelashextensions.jpg",
    title: "Extensiones",
    description:
      "Aplicación individual de fibras sintéticas sobre las pestañas naturales para lograr un look más voluminoso, largo y glamuroso.",
    alt: "Lévrière Passion",
  },
  {
    id: 6,
    image: "/images/microblading_tint.jpg",
    title: "Tinte",
    description:
      "Coloración semipermanente que intensifica el tono de las cejas o pestañas, aportando mayor definición y presencia sin maquillaje diario.",
    alt: "GiftGrove",
  },
];

export default function Works() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-20 bg-[#fcfbf7] text-black font-poppins">
      {products.map((product) => (
        <div key={product.id}>
          <div className="relative w-full h-[500px] mb-6 hover:translate-y-1 transition-all duration-700">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              className="object-cover rounded-sm hover:cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-medium mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-5">{product.description}</p>
          <button className="inline-flex items-center gap-2 border border-black px-5 py-2 text-sm rounded-full hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-700">
            LEARN MORE <ArrowUpRight size={16} />
          </button>
        </div>
      ))}
    </section>
  );
}
