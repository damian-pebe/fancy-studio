import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ShowcaseSection from "./Components/Showcase";
import Works from "./Components/Works";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between text-black">
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Works/>
      <Testimonials/>
    </div>
  );
}
