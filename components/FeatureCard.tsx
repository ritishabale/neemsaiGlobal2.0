import GlareHover from "./GlareHover";

export default function FeatureCard({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="#ffffff"
      borderRadius="1rem"
      borderColor="#e2dbc9"
      glareColor="#2c3f16"
      glareOpacity={0.15}
      glareSize={200}
      transitionDuration={600}
      className="p-6 text-left flex flex-col items-start justify-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md h-full"
    >
      <div className="mb-4 text-[#2c3f16]">{icon}</div>
      <p className="text-sm font-semibold text-[#a67c1c]">{number}</p>
      <h3 className="mt-2 font-serif-display text-2xl text-[#2c3f16]">{title}</h3>
      <p className="mt-2 text-[#48624a]">{description}</p>
    </GlareHover>
  );
}
