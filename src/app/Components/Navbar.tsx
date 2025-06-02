"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 w-full font-careny backdrop-blur-xl">
      <Link
        href="/"
        className="animate-fadeInLeft text-xl md:text-2xl tracking-wide hover:cursor-pointer"
      >
        FANCY<sup>®</sup>
      </Link>

      <div className="hidden md:flex gap-10 text-base md:text-lg text-black animate-flipInY">
        <Link
          href="/"
          className="transition-all hover:-translate-y-1 duration-1000"
        >
          NOSOTROS
        </Link>
        <Link
          href="/projects"
          className="transition-all hover:-translate-y-1 duration-1000"
        >
          TRABAJOS
        </Link>
        <Link
          href="/about"
          className="transition-all hover:-translate-y-1 duration-1000"
        >
          CONTACTANOS
        </Link>
      
      </div>

      <button
        onClick={() => (window.location.href = "/contact")}
        className="group flex items-center gap-2 border border-black/30 rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-1 duration-1000 animate-fadeInRight"
      >
        CONTACTANOS{" "}
        <ArrowUpRightIcon
          size={32}
          className="bg-black text-white rounded-full p-1 transition-all group-hover:-rotate-[360deg] duration-700"
        />
      </button>
    </nav>
  );
}
