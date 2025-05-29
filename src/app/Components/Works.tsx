"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    image: "/images/microblading_filter2.png",
    title: "Lévrière Passion",
    description:
      "Luxury cosmetics that redefine elegance, empowering women with timeless beauty and sophistication",
    alt: "Lévrière Passion",
  },
  {
    id: 2,
    image: "/images/microblading2.jpg",
    title: "GiftGrove",
    description:
      "Handcrafted gift packaging that transforms every unboxing into an experience",
    alt: "GiftGrove",
  },
  {
    id: 3,
    image: "/images/microblading_filter.png",
    title: "Lévrière Passion",
    description:
      "Luxury cosmetics that redefine elegance, empowering women with timeless beauty and sophistication",
    alt: "Lévrière Passion",
  },
  {
    id: 4,
    image: "/images/microblading.jpg",
    title: "GiftGrove",
    description:
      "Handcrafted gift packaging that transforms every unboxing into an experience",
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
