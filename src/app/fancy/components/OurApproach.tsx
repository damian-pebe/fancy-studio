import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="px-6 pt-16 md:py-16 bg-white flex flex-col items-center font-sans">
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
          We are a globally recognized boutique design agency, crafting
          strategic, high-quality solutions that amplify brand values. Our
          agile, independent team blends strategy, design, and innovation to
          deliver impactful results.
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
          <h3 className="text-2xl font-medium mb-2">microshading</h3>
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
          <h3 className="text-2xl font-medium mb-2">microblading</h3>
        </div>
      </div>
    </section>
  );
}
