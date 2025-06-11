import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import HeroComponent from "./components/HeroComponent";
import Trabajos from "./components/Trabajos";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <Navbar />
      <Hero />
      <Trabajos/>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src="/images/eyelashTinting.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50 animate-fadeInDown h-screen"
        />
      </div>
      <HeroComponent />
    </div>
  );
}
