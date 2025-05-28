"use client";
import { StarIcon } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-10 py-8 text-center font-poppins gap-10 ">
      <div className="inline-block bg-[#ffe6c4] text-base rounded-full px-4 py-2 mb-4 shadow hover:cursor-grab transform hover:-translate-y-1 duration-1000">
        Google:
        <span className="ml-1 text-black text-sm gap-x-5">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon
              key={i}
              width={15}
              height={15}
              fill="black"
              className="inline-block"
            />
          ))}
        </span>
        <span className="ml-2 font-semibold">(4.9)</span>
      </div>

      <h1 className="text-5xl font-bold mt-3 mb-4">Brewed to perfection</h1>
      <p className="text-base text-gray-700 mb-8">
        Your perfect spot for coffee, pastries, and more.
      </p>

      <SpotlightButton
        className="custom-spotlight-card"
        spotlightColor="rgba(255, 255, 255, 0.6)"
      ></SpotlightButton>
    </div>
  );
}

import { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!buttonRef.current || isFocused) return;

    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-xl font-careny shadow-2xl shadow-black/40 hover:shadow-black/70 relative rounded-full bg-black text-white font-semibold py-5 px-10 transition-all transform hover:-translate-y-2 duration-1000 hover:tracking-widest ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out rounded-full"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      Explore menu
    </button>
  );
};
