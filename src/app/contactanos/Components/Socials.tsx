import {
  facebook,
  instagram,
  tiktok,
  whatsapp,
} from "@/Environment/SocialsLinks";
import Link from "next/link";
import React from "react";
import { Whatsapp, Facebook, Instagram, Tiktok } from "react-bootstrap-icons";
export default function Socials() {
  const items = [
    {
      icon: <Whatsapp />,
      color: "whatsapp",
      label: "WhatsApp",
      link: whatsapp,
    },
    {
      icon: <Facebook />,
      color: "facebook",
      label: "Facebook",
      link: facebook,
    },
    {
      icon: <Instagram />,
      color: "instagram",
      label: "Instagram",
      link: instagram,
    },
    { icon: <Tiktok />, color: "tiktok", label: "Tiktok", link: tiktok },
  ];

  return (
    <div className="flex flex-col justify-between items-center max-w-5xl w-full h-full">
      {/* <div className="w-full text-center justify-center items-center px-10 uppercase flex flex-row text-sm text-white mb-2 md:w-min md:text-start">
        <span className="mr-2">●</span>
        <div className="text-white w-full">Redes Sociales</div>
      </div> */}
      <div className="relative h-full w-full">
        <GlassIcons items={items} className="custom-class" />
      </div>
    </div>
  );
}

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  link: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  whatsapp: "linear-gradient(45deg, hsl(138, 76%, 45%), hsl(138, 76%, 35%))", // Official WhatsApp green
  facebook: "linear-gradient(45deg, hsl(221, 44%, 61%), hsl(221, 44%, 31%))", // Facebook blue gradient
  instagram:
    "linear-gradient(45deg, hsl(309, 100%, 50%), hsl(359, 80%, 55%), hsl(37, 100%, 50%))", // Instagram pink, orange, and yellow
  tiktok: "linear-gradient(hsl(0, 0%, 20%), hsl(0, 0%, 10%))", // Dark gradient for X (Twitter)
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div
      className={`w-full gap-x-10 gap-y-20 flex flex-wrap justify-center items-center px-16 md:pl-[32rem] overflow-visible isolate ${
        className || ""
      }`}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group/item ${
            item.customClass || ""
          }`}
        >
          {/* Back layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover/item:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover/item:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center text-white"
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          {/* Label */}
          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover/item:opacity-100 group-hover/item:[transform:translateY(20%)] text-white">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};
