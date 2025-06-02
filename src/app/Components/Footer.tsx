import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { facebook, instagram, tiktok } from "@/Environment/SocialsLinks";

export default function Footer() {
  return (
    <footer className="bg-[#fefcf9] text-[#121212] font-poppins ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-8 py-20 pt-20 text-sm">
        <div className="space-y-4">
          <p className="text-gray-600">Conozcanos</p>
          <div className="flex items-center gap-1">
            <div className="group flex items-center border border-black/10 hover:cursor-pointer rounded-full p-2 transition-transform duration-500 hover:-translate-y-1">
              <ArrowUpRightIcon
                size={28}
                className="bg-black text-white rounded-full p-1 transition-transform duration-700 group-hover:rotate-[360deg]"
              />
            </div>
            <p className="text-lg font-light">FANCY.STUDIO@GMAIL.COM</p>
          </div>
          <p className="text-lg font-light">(+52) 33 22 05 26 92</p>
        </div>

        <div className="space-y-2 flex flex-col gap-2">
          <p className="text-gray-600">Nos Encontramos</p>
          <p>Fancy Studio</p>
          <p>Guadalajara, Jalisco</p>
          <p>México</p>
        </div>

        <div className="space-y-2 flex flex-col gap-2">
          <p className="text-gray-600">Redes Sociales</p>
          <Link
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 duration-700 transition-all"
          >
            TikTok
          </Link>
          <Link
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 duration-700 transition-all"
          >
            Instagram
          </Link>
          <Link
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 duration-700 transition-all"
          >
            Facebook
          </Link>
        </div>

        <div className="space-y-2 flex flex-col gap-2">
          <p className="text-gray-600">Menu</p>
          <Link
            href="/nosotros"
            className="hover:opacity-60 duration-700 transition-all"
          >
            Nosotros
          </Link>
          <Link
            href="/trabajos"
            className="hover:opacity-60 duration-700 transition-all"
          >
            Trabajos
          </Link>
          <Link
            href="/contactanos"
            className="hover:opacity-60 duration-700 transition-all"
          >
            Contactanos
          </Link>
        </div>
      </div>

      <div className="pb-14 text-center text-[12vw] md:text-[10vw] leading-none font-careny">
        Fancy<sup>®</sup> Microblading
      </div>
    </footer>
  );
}
