'use client'

import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between pt-1 px-1 md:px-10 w-full max-w-7xl z-50">
      <h1 className="text-2xl font-bold font-plaster tracking-wider hover:cursor-pointer transition-all hover:tracking-widest duration-700">Latte Heaven</h1>
      <div className="flex items-center justify-between  text-black font-plaster">
        <button
          onClick={() => {}}
          className="flex justify-between items-center py-4 px-2 transform hover:-translate-y-1 duration-700 hover:cursor-pointer"
        >
          Menu
        </button>
        <button
          onClick={() => {}}
          className="flex justify-between items-center py-4 px-2 transform hover:-translate-y-1 duration-700 hover:cursor-pointer"
        >
          News
        </button>
      </div>
    </div>
  );
}
