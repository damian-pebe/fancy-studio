import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Trabajos() {
  const experience = [
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
  return (
    <div className="bg-[#FAFAFA] w-full h-full">
        <div className="w-full flex flex-col items-center justify-center mt-20 gap-3">
          <h1 className="text-center w-full text-8xl font-careny font-bold bg-gradient-to-bl from-black via-zinc-600 to-gray-100 bg-clip-text text-transparent">
            Nuestros Trabajos
          </h1>

          <p className="text-base text-gray-600 font-poppins font-extralight group-hover:translate-y-1 duration-700 text-center">
            Colección seleccionada de nuestros trabajos más destacados realizados con dedicación y profesionalismo
          </p>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-0.5 w-52 bg-black/70 rounded-sm my-3" />
          </div>
        </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-20 bg-[#fcfbf7] text-black font-poppins">
        {experience.map((product) => (
          <div key={product.id} className="group">
            <div className="relative w-full h-[500px] mb-6 group-hover:translate-y-1 transition-all duration-700">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover rounded-sm group-hover:cursor-pointer"
              />
            </div>
            <div className="w-full flex justify-between items-center px-5">
            <h3 className="text-2xl font-medium mb-2 group-hover:translate-x-4 transition-all duration-700">{product.title}</h3>
            <div className="flex group-hover:-translate-x-4 transition-all duration-700">
                {[...Array(5)].map((_, index) => (
                <Star key={index} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
            </div>
            </div>
            
           
          </div>
        ))}
      </section>
    </div>
  );
}
