import { ArrowDownRightIcon } from "lucide-react";
import React from "react";

export default function HeroContact() {
  return (
      <section className="text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-5xl md:text-7xl tracking-widest font-careny ">
              Contactanos
            </h2>
            <div className="group flex items-center border border-black/10 hover:cursor-pointer rounded-full p-2 transition-transform duration-500 hover:-translate-y-1">
              <ArrowDownRightIcon
                size={28}
                className="bg-white text-black rounded-full p-1 transition-transform duration-700 group-hover:rotate-[360deg]"
              />
            </div>
          </div>
          <div className="w-full px-2 h-[1px] bg-black/20"></div>

          <div className="border-t pt-8 font-poppins">
            <p className="text-3xl mb-4 font-serif">
              ¿Buscas realzar tu belleza natural?
            </p>
            <p className="hidden md:block ml-20 text-xl tracking-wider">
              En Fancy Studio nos especializamos en microblading y técnicas de
              belleza semipermanente para crear cejas perfectamente definidas y
              naturales. Nuestro equipo de expertos está dedicado a realzar tu
              belleza única con resultados duraderos y personalizados.
              Contáctanos hoy para una consulta y descubre cómo podemos ayudarte
              a lograr la apariencia que siempre has deseado.
            </p>
            <p className="md:hidden block ml-20 text-sm tracking-wider">
              En Fancy Studio nos especializamos en microblading y técnicas de
              belleza semipermanente para crear cejas perfectamente definidas y
              naturales.
            </p>
          </div>
        </div>
      </section>
  );
}
