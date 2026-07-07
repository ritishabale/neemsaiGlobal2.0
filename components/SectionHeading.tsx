import ScrollFloat from "./ScrollFloat";

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <ScrollFloat
        animationDuration={0.8}
        ease="back.out(1.5)"
        scrollStart="top bottom-=15%"
        scrollEnd="bottom center"
        stagger={0.015}
        containerClassName={`my-0 ${centered ? "mx-auto" : ""}`}
        textClassName="font-serif-display text-3xl text-[#2c3f16] md:text-4xl"
      >
        {title}
      </ScrollFloat>
      {subtitle ? <p className="mt-3 text-[#2c3f16]">{subtitle}</p> : null}
    </div>
  );
}
