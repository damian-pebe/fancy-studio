import type { Metadata } from "next";
import {
  Birthstone,
  Ephesis,
  Geist,
  Geist_Mono,
  Lobster,
  Plaster,
  Poppins,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const plaster = Plaster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plaster",
});

const ephesis = Ephesis({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ephesis',
})

const birthstone = Birthstone({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-birthstone',
})

export const metadata: Metadata = {
  title: "Fancyy Studio",
  description: "Donde tus cejas y pestañas encuentran la perfección",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} ${lobster.variable} ${poppins.variable} ${plaster.variable} ${ephesis.variable} ${birthstone.variable}
          antialiased bg-[#FAFAFA]`}
          >
       {/* <div
  className="fixed inset-0 z-40 pointer-events-none"
>
  <div className="w-full h-full  bg-transparent shadow-[inset_0_0_60px_10px_rgba(255,255,255,0.6),inset_0_0_180px_60px_rgba(255,255,255,0.4)]" />
</div> */}
        {children}
      </body>
    </html>
  );
}
