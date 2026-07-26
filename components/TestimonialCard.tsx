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
      glowColor="135 48% 36%"
      backgroundColor="#eef8ef"
      glowRadius={30}
      glowIntensity={0.6}
      coneSpread={20}
      colors={["#1f5f3a", "#2b7a4b", "#4fa46d"]}
      className="min-w-[280px] md:min-w-[320px] max-w-sm h-full"
    >
      <article className="p-6 flex flex-col justify-between h-full w-full bg-gradient-to-b from-[#f1fbf2] to-[#e7f6e9]">
        <div>
          <p className="text-[#1f5f3a] italic text-sm md:text-base leading-relaxed">“{quote}”</p>
          <div className="mt-4 flex gap-1 text-[#2f8c54]" aria-label={`${stars} stars`}>
            {Array.from({ length: stars }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-[#1f5f3a]/15 flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-[#1f5f3a]/20 bg-[#daf1df]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-[#1f5f3a] text-sm md:text-base leading-tight">{name}</p>
            <p className="text-xs text-[#2b6b4a] mt-1">{role}</p>
          </div>
        </div>
      </article>
    </BorderGlow>
  );
}
