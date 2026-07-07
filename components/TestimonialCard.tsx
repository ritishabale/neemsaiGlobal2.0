import { Star } from "lucide-react";
import Image from "next/image";
import BorderGlow from "@/components/BorderGlow";

export default function TestimonialCard({
  quote,
  name,
  role,
  stars,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
  image: string;
}) {
  return (
    <BorderGlow
      borderRadius={16}
      edgeSensitivity={30}
      glowColor="120 40% 40%"
      backgroundColor="#ffffff"
      glowRadius={30}
      glowIntensity={0.6}
      coneSpread={20}
      colors={["#2c3f16", "#2c3f16", "#a67c1c"]}
      className="min-w-[280px] md:min-w-[320px] max-w-sm h-full"
    >
      <article className="p-6 flex flex-col justify-between h-full w-full">
        <div>
          <p className="text-[#2c3f16] italic text-sm md:text-base leading-relaxed">“{quote}”</p>
          <div className="mt-4 flex gap-1 text-[#a67c1c]" aria-label={`${stars} stars`}>
            {Array.from({ length: stars }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-[#2c3f16]/10 flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-[#2c3f16]/20 bg-[#f7f3ec]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-[#2c3f16] text-sm md:text-base leading-tight">{name}</p>
            <p className="text-xs text-[#48624a] mt-1">{role}</p>
          </div>
        </div>
      </article>
    </BorderGlow>
  );
}
