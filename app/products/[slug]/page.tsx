import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import InquiryForm from "@/components/InquiryForm";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";
import BorderGlow from "@/components/BorderGlow";
import { MapPin, Ruler, Droplet, Award, AlertTriangle, Trash2, Palette, Package, Layers, ShieldCheck } from "lucide-react";

function getSpecIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("source") || l.includes("state")) return <MapPin className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("length")) return <Ruler className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("moisture")) return <Droplet className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("broken")) return <Award className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("damaged") || l.includes("discolour")) return <AlertTriangle className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("foreign") || l.includes("matter")) return <Trash2 className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("colour") || l.includes("color")) return <Palette className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("packing") || l.includes("overseas")) return <Package className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("retail") || l.includes("package")) return <Layers className="h-4 w-4 text-[#a67c1c]" />;
  return <ShieldCheck className="h-4 w-4 text-[#a67c1c]" />;
}


export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Separate into short and long specs
  const longSpecs = product.technicalSpecs.filter(spec => 
    spec.label.toLowerCase().includes("source") || spec.label.toLowerCase().includes("retail")
  );
  const shortSpecs = product.technicalSpecs.filter(spec => 
    !spec.label.toLowerCase().includes("source") && !spec.label.toLowerCase().includes("retail")
  );
  const reorderedSpecs = [...shortSpecs, ...longSpecs];

  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm text-[#6b7f6d]">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / {product.name}
          </p>
          <h1 className="mt-3 font-serif-display text-5xl text-[#2c3f16]">{product.name}</h1>
          <p className="mt-3 text-[#2c3f16]">{product.tagline}</p>
          <p className="mt-4 text-[#48624a]">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
          <a href="#quote" className="mt-6 inline-flex rounded-full bg-[#2c3f16] px-6 py-3 font-semibold text-[#fcf5e5]">
            Request Quotation
          </a>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-2xl">
          <Image src={product.heroImage} alt={product.name} fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="text-center mb-10">
          <SectionHeading title="Technical Purity & Standards" centered />
          <div className="mt-2 w-24 h-[2px] bg-[#a67c1c] mx-auto"></div>
        </div>
        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reorderedSpecs.map((spec, i) => {
            const isLong = longSpecs.some(ls => ls.label === spec.label);
            return (
              <ScrollReveal 
                key={spec.label} 
                direction="up" 
                delay={i * 0.04}
                className={isLong ? "lg:col-span-2 sm:col-span-2 col-span-1" : "col-span-1"}
              >
                <BorderGlow
                  className="p-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg cursor-pointer group h-full"
                  borderRadius={12}
                  glowColor="40 80% 50%"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 border border-[#2c3f16]/10 group-hover:bg-[#2c3f16]/10 group-hover:border-[#2c3f16]/20 transition-all duration-300">
                      {getSpecIcon(spec.label)}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6b7f6d] font-semibold font-sans">{spec.label}</span>
                  </div>
                  <div className="mt-3 flex-grow">
                    <p className="font-serif-display text-base md:text-lg text-[#2c3f16] font-medium leading-snug group-hover:text-[#a67c1c] transition-colors duration-300">
                      {spec.value}
                    </p>
                  </div>
                  <div className="mt-3 w-full h-[1px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#2c3f16]/40 group-hover:via-[#a67c1c] group-hover:to-transparent transition-all duration-500 rounded" />
                </BorderGlow>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <SectionHeading title="Tailored Processing" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {product.processingVariants.map((variant, i) => (
            <ScrollReveal key={variant.name} direction="up" delay={i * 0.1}>
              <article className="overflow-hidden rounded-2xl border border-[#e2dbc9] bg-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-[#a67c1c]/50 group h-full cursor-pointer flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={variant.image} 
                    alt={variant.name} 
                    fill 
                    className="object-cover object-center transition-transform duration-750 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
                <div className="space-y-3 p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl text-[#2c3f16] group-hover:text-[#a67c1c] transition-colors duration-300">{variant.name}</h3>
                    <p className="text-[#48624a] text-sm leading-relaxed mt-2">{variant.description}</p>
                  </div>
                  <button className="mt-4 rounded-full border border-[#2c3f16] bg-transparent px-4 py-2 text-sm font-semibold text-[#2c3f16] transition-all duration-300 hover:bg-[#2c3f16] hover:text-[#fcf5e5] hover:shadow-md align-self-start w-fit">
                    Select Grade
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-[#2c3f16] px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-start">
          <div className="text-[#f7f3ec]">
            <h2 className="font-serif-display text-4xl">Global Supply Logistics</h2>
            <ul className="mt-4 space-y-2 text-[#d8d2c4]">
              <li>MOQ: {product.logistics.moq}</li>
              <li>Packaging: {product.logistics.packaging}</li>
              <li>Port of Loading: {product.logistics.port}</li>
              <li>Lead Time: {product.logistics.leadTime}</li>
              <li>Capacity: {product.logistics.capacity}</li>
            </ul>
          </div>
          <InquiryForm type="mini" />
        </div>
      </section>


    </div>
  );
}
