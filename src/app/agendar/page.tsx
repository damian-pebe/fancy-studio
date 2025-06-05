import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import DatePicker from "./Components/DatePicker";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src="/images/microblading6.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50 animate-fadeInDown"
        />
      </div>
      <DatePicker/>
    </div>
  );
}
