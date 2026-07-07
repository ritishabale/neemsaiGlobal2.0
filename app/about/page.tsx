"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Plane, Package, ShieldCheck, Leaf, Handshake, Droplets } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollFloat from "@/components/ScrollFloat";
import ExportMap from "@/components/ExportMap";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative py-16 flex flex-col items-center text-center px-6 md:px-10 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto z-10">
          <span className="text-xs uppercase tracking-widest text-[#2c3f16] font-semibold mb-4 block">
            ESTABLISHED HERITAGE
          </span>
          <ScrollFloat
            animationDuration={0.8}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-center block"
            textClassName="font-serif-display text-5xl md:text-6xl text-[#2c3f16] leading-tight mb-6"
          >
            Harvesting Excellence Across Generations
          </ScrollFloat>
          <p className="mt-4 font-serif-display text-lg text-[#48624a] italic max-w-2xl mx-auto leading-relaxed">
            From the sun-drenched fields of the Indo-Gangetic plains to the global dining tables, NeemSai Global represents a legacy of artisanal rice cultivation and uncompromising quality.
          </p>
        </div>
        
        <div className="mt-12 w-full max-w-7xl h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-[#e2dbc9]/60 relative bg-[#f7f3ec]">
          <Image
            src="/images/about-hero.png"
            alt="Rice paddies terraces sunrise"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-20 bg-[#fdfcfb] border-y border-[#e2dbc9]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-[#f7f3ec]">
                <Image
                  src="/images/legacy-bowls.jpg"
                  alt="A premium assortment of white, brown, and wild rice in wooden bowls with natural grain stalks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#2c3f16]/5 rounded-full blur-3xl -z-0" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="space-y-6">
            <h2 className="font-serif-display text-4xl text-[#2c3f16]">Our Legacy: Roots in Tradition</h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#2c3f16] to-transparent mb-6" />
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              For over four decades, the foundations of NeemSai Global have been built upon the wisdom of traditional farming passed down through generations. What began as a local family initiative has flourished into a global hallmark of agricultural mastery.
            </p>
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              We don't just export rice; we export a heritage of patience, expertise, and the deep-seated belief that nature's finest gifts deserve the utmost respect throughout their journey from soil to soul.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block font-serif-display text-4xl text-[#a67c1c] font-semibold">40+</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#48624a]/70">Years of Heritage</span>
              </div>
              <div>
                <span className="block font-serif-display text-4xl text-[#a67c1c] font-semibold">15+</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#48624a]/70">Premium Varieties</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Reach Section (Bento Grid) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-12">
          <h2 className="font-serif-display text-4xl text-[#2c3f16] mb-4">A Global Network of Excellence</h2>
          <p className="text-[#48624a] max-w-xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Connecting the finest harvests to over 30 countries across five continents.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Bento Item 1: Map */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-white shadow-md border border-[#e2dbc9]/60">
            <div className="p-8 h-full flex flex-col">
              <h3 className="font-serif-display text-2xl text-[#2c3f16] mb-2">Our Export Map</h3>
              <p className="text-[#48624a] text-sm mb-6 leading-relaxed font-light">
                A strategic logistics network ensuring freshness across oceans. Click or hover on hotspots to locate company setups.
              </p>
              <div className="flex-grow">
                <ExportMap />
              </div>
            </div>
          </div>

          {/* Bento Item 2: Quality */}
          <div className="md:col-span-2 rounded-2xl bg-[#2c3f16] text-[#f7f3ec] p-8 flex flex-col justify-center relative overflow-hidden border border-[#2c3f16] shadow-md group">
            <div className="absolute top-4 right-4 opacity-10 transition-transform duration-500 group-hover:scale-110">
              <ShieldCheck className="h-28 w-28 text-[#2c3f16]" />
            </div>
            <h3 className="font-serif-display text-2xl text-[#fcf5e5] mb-4 z-10">Uncompromising Standards</h3>
            <p className="text-[#98b5a3] text-sm leading-relaxed font-light z-10">
              Every grain undergoes a 12-stage quality check, from moisture content analysis to grain length verification, meeting international ISO and HACCP certifications.
            </p>
          </div>

          {/* Bento Item 3: Logistics */}
          <div className="rounded-2xl bg-[#fdfcfb] p-8 flex flex-col items-start border border-[#e2dbc9]/60 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#2c3f16]/10 flex items-center justify-center mb-6">
              <Plane className="h-6 w-6 text-[#2c3f16]" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2c3f16] mb-2">Swift Transit</h4>
            <p className="text-[#48624a] text-xs leading-relaxed font-light">Real-time tracking for every shipment.</p>
          </div>

          {/* Bento Item 4: Packaging */}
          <div className="rounded-2xl bg-[#fdfcfb] p-8 flex flex-col items-start border border-[#e2dbc9]/60 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#2c3f16]/10 flex items-center justify-center mb-6">
              <Package className="h-6 w-6 text-[#2c3f16]" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2c3f16] mb-2">Artisanal Packing</h4>
            <p className="text-[#48624a] text-xs leading-relaxed font-light">Customized moisture-proof premium packaging.</p>
          </div>
        </div>
      </section>

      {/* Sustainable Sourcing Section */}
      <section className="py-20 bg-[#2c3f16] text-[#f7f3ec] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="white" strokeWidth={0.5}></path>
            <path d="M0 80 C 30 20 60 20 100 80" fill="transparent" stroke="white" strokeWidth={0.5}></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#98b5a3] font-semibold block">STEWARDSHIP</span>
            <h2 className="font-serif-display text-4xl text-[#fcf5e5]">Sustainable Sourcing, Ethical Growth</h2>
            <p className="text-[#98b5a3] text-sm md:text-base leading-relaxed font-light">
              Sustainability isn't a trend for us; it's a responsibility we owe to the earth that sustains us. We partner with over 500 small-scale farmers, providing them with organic fertilizers and water-efficient irrigation training.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4 text-sm font-light text-[#98b5a3]">
                <Leaf className="h-5 w-5 text-[#2c3f16] shrink-0" />
                <span>Zero-waste milling processes</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-[#98b5a3]">
                <Handshake className="h-5 w-5 text-[#2c3f16] shrink-0" />
                <span>Fair-trade pricing and farmer welfare programs</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-[#98b5a3]">
                <Droplets className="h-5 w-5 text-[#2c3f16] shrink-0" />
                <span>Advanced water conservation techniques</span>
              </li>
            </ul>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ScrollReveal direction="up" delay={0}>
                <div className="rounded-xl overflow-hidden h-64 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-1.jpg"
                    alt="Golden ripe rice crop stalks at sunset"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.15}>
                <div className="rounded-xl overflow-hidden h-40 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-4.jpg"
                    alt="White cargo truck being loaded with agricultural harvest on farm"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="pt-12 space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="rounded-xl overflow-hidden h-40 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-2.png"
                    alt="Lab technician in mask and gloves verifying grain quality under microscope"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.25}>
                <div className="rounded-xl overflow-hidden h-64 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-3.png"
                    alt="Modern state of the art automated grain processing and sorting machines"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#fdfcfb] rounded-2xl p-12 text-center border border-[#e2dbc9]/60 shadow-md relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#a67c1c]/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#2c3f16] mb-4">
              Partner with the Best in Rice Export
            </h2>
            <p className="text-[#48624a] text-sm md:text-base mb-8 max-w-lg mx-auto font-light leading-relaxed">
              Join our network of global distributors and bring the taste of heritage to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-[#2c3f16] text-[#fcf5e5] px-8 py-4 font-semibold hover:bg-[#233212] hover:shadow-lg transition duration-300 rounded-lg text-xs uppercase tracking-wider font-semibold"
              >
                Download Catalog
              </a>
              <Link
                href="/contact"
                className="border border-[#2c3f16] text-[#2c3f16] px-8 py-4 font-semibold hover:bg-[#2c3f16]/5 transition duration-300 rounded-lg text-xs uppercase tracking-wider font-semibold"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
