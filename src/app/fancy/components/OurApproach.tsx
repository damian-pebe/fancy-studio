import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="px-6 pt-16 md:pt-16 bg-white flex flex-col items-center font-sans">
      <Badge>
        <div>
          <div className="flex items-center self-start">
            <span className="w-2 h-2 bg-white rounded-full mr-3" />
            <span className="tracking-widest text-sm text-white font-birthstone font-light">
              NUESTRA VISION
            </span>
          </div>
        </div>
      </Badge>

      <div className="max-w-4xl mt-10 text-right">
        <p className="text-lg text-gray-900 leading-relaxed">
          Impulsamos la belleza y confianza de cada persona con técnicas de
          vanguardia como el microblading, microshading y más, ofreciendo una
          experiencia única, profesional y personalizada.
        </p>
      </div>

      <div className="w-full flex  md:flex-row flex-col justify-center items-center gap-6 mt-10 md:my-10 font-lobster">
        <div className="flex flex-col items-center">
          <div className="relative w-[500px] h-[500px] mb-6 hover:translate-y-1 transition-all duration-700">
            <Image
              src={"/images/eyelashLift.jpg"}
              alt={"microshading"}
              fill
              className="object-cover rounded-sm hover:cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-medium mb-2 border-b border-black">
            microshading
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-[500px] h-[500px] mb-6 hover:translate-y-1 transition-all duration-700">
            <Image
              src={"/images/microblading_filter.png"}
              alt={"microblading"}
              fill
              className="object-cover rounded-sm hover:cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-medium mb-2 border-b border-black">
            microblading
          </h3>
        </div>
      </div>
    </section>
  );
}
