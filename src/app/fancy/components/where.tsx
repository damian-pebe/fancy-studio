"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Lugar() {
  return (
    <section className="px-6 pt-16 md:py-16 bg-white flex flex-col items-center font-sans">
      <Badge>
        <div>
          <div className="flex items-center self-start">
            <span className="w-2 h-2 bg-white rounded-full mr-3" />
            <span className="tracking-widest text-sm text-white font-birthstone font-light">
              DONDE NOS ENCONTRAMOS
            </span>
          </div>
        </div>
      </Badge>

      <div className="max-w-4xl mt-10 text-right">
        <p className="text-lg text-gray-900 leading-relaxed">
          Nos encontramos ubicados en el corazón de la ciudad, ofreciendo un
          espacio acogedor y profesional para todos nuestros servicios de
          belleza. Visítanos y descubre por qué somos tu mejor opción.
        </p>
      </div>

      <div className="w-full flex  md:flex-row flex-col justify-center items-center gap-6 mt-10 md:my-10 font-lobster">
        <div className="flex flex-col items-center">
          <div className="relative w-[500px] h-[500px] mb-6 hover:translate-y-1 transition-all duration-700">
            <Image
              src={"/images/location.jpg"}
              alt={"Fachada del local"}
              fill
              className="object-cover rounded-sm hover:cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-medium mb-2">Nuestra ubicación</h3>
          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/Y3bjCwJCmoP62J5WA", "_blank")
            }
            className="inline-flex items-center gap-2 border border-black px-5 py-2 text-sm rounded-full hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-700"
          >
            Ver Ubicacion <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-[500px] h-[500px] mb-6 hover:translate-y-1 transition-all duration-700">
            <Image
              src={"/images/inside.jpg"}
              alt={"Interior del local"}
              fill
              className="object-cover rounded-sm hover:cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-medium mb-2">Nuestro espacio</h3>
          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/Y3bjCwJCmoP62J5WA", "_blank")
            }
            className="inline-flex items-center gap-2 border border-black px-5 py-2 text-sm rounded-full hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-700"
          >
            Ver Galeria <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
