"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Plane, Package, ShieldCheck, Leaf, Handshake, Droplets, Globe, FileText, BadgeCheck, ScrollText, Stamp, IdCard, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollFloat from "@/components/ScrollFloat";
import ExportMap from "@/components/ExportMap";
import LogoLoop from "@/components/LogoLoop";

export default function AboutPage() {
  const certifications = [
    {
      title: "Udyam (MSME) Registration Certificate",
      subtitle: "Micro, Small and Medium Enterprises registration",
      icon: Stamp,
    },
    {
      title: "GST Registration Certificate (Form GST REG-06)",
      subtitle: "Goods and Services Tax compliance",
      icon: BadgeCheck,
    },
    {
      title: "Bank Authorization Letter",
      subtitle: "Authorized banking and trade operations",
      icon: FileText,
    },
    {
      title: "Exporter Code (IEC) Certificate",
      subtitle: "Importer-Exporter Code registration",
      icon: ScrollText,
    },
    {
      title: "APEDA Registration-cum-Membership Certificate (RCMC)",
      subtitle: "Agricultural and Processed Food Products Export Development Authority",
      icon: Award,
    },
    {
      title: "FSSAI License",
      subtitle: "Food Safety and Standards Authority of India",
      icon: IdCard,
    },
  ];

  const certificationLoopItems = certifications.map((cert) => {
    const Icon = cert.icon;
    return {
      title: cert.title,
      node: (
        <div className="w-[320px] rounded-2xl border border-[#b7c6ad] bg-[#f3f8ef] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7f976f] hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#7f976f]/20 bg-[#2c3f16]/10 text-[#2c3f16]">
              <Icon className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-serif-display text-base text-[#2c3f16]">{cert.title}</h3>
              <p className="mt-1 line-clamp-1 text-xs text-[#48624a] font-light">{cert.subtitle}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end">
            <span className="inline-flex items-center rounded-full border border-[#2c3f16] bg-[#edf4e8] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#2c3f16] transition-colors duration-300 group-hover:bg-[#2c3f16] group-hover:text-[#fcf5e5]">
              View Document
            </span>
          </div>
        </div>
      ),
    };
  });

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

      {/* Vision and Mission Section */}
      <section className="py-20 bg-[#f7f3ec] relative overflow-hidden border-y border-[#e2dbc9]/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#a67c1c]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2c3f16]/10 blur-3xl" />
          <div className="absolute left-1/2 top-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2c3f16]/15 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              title="Our Vision & Mission"
              subtitle="A clear purpose guides every harvest, every shipment, and every partnership we build."
              centered
              titleClassName="text-[#2c3f16]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative rounded-3xl border border-[#e2dbc9]/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(44,63,22,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:rotate-[-0.5deg] hover:shadow-[0_26px_80px_rgba(44,63,22,0.14)] animate-fade-in-up will-change-transform">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2c3f16]/5 via-transparent to-transparent pointer-events-none" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2c3f16]/10 text-[#2c3f16] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#2c3f16]/15">
                <Globe className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#a67c1c] font-semibold transition-all duration-300 group-hover:tracking-[0.38em]">Our Vision</span>
              <h3 className="mt-3 font-serif-display text-3xl text-[#2c3f16] transition-transform duration-500 group-hover:translate-x-1">To be the most trusted name in premium rice exports worldwide.</h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed font-light text-[#48624a] transition-colors duration-300 group-hover:text-[#2f4632]">
                We envision a future where NeemSai Global is recognized for uncompromising quality, responsible sourcing, and a lasting connection between India’s farmlands and kitchens across the world.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e2dbc9]/70 bg-[#faf8f5] p-4 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:border-[#2c3f16]/20 hover:shadow-md group/stat">
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-[#48624a]/70 font-semibold">Reach</span>
                  <span className="mt-2 block font-serif-display text-2xl text-[#2c3f16] transition-transform duration-300 group-hover/stat:translate-x-1">30+ Countries</span>
                  <span className="text-sm text-[#48624a] font-light transition-colors duration-300 group-hover/stat:text-[#2c3f16]">Expanding trusted export routes globally.</span>
                </div>
                <div className="rounded-2xl border border-[#e2dbc9]/70 bg-[#faf8f5] p-4 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:border-[#2c3f16]/20 hover:shadow-md group/stat">
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-[#48624a]/70 font-semibold">Heritage</span>
                  <span className="mt-2 block font-serif-display text-2xl text-[#2c3f16] transition-transform duration-300 group-hover/stat:translate-x-1">40+ Years</span>
                  <span className="text-sm text-[#48624a] font-light transition-colors duration-300 group-hover/stat:text-[#2c3f16]">A legacy built on family expertise.</span>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-[#e2dbc9]/70 bg-[#2c3f16] p-8 shadow-[0_18px_60px_rgba(44,63,22,0.18)] transition-all duration-500 hover:-translate-y-3 hover:rotate-[0.5deg] hover:shadow-[0_26px_80px_rgba(44,63,22,0.22)] overflow-hidden animate-fade-in-up-delay-2 will-change-transform">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(166,124,28,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-2xl animate-pulse transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#fcf5e5] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-white/15">
                  <CheckCircle2 className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#d7b96a] font-semibold transition-all duration-300 group-hover:tracking-[0.38em]">Our Mission</span>
                <h3 className="mt-3 font-serif-display text-3xl text-[#fcf5e5] transition-transform duration-500 group-hover:translate-x-1">To deliver exceptional grains with integrity, consistency, and care.</h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed font-light text-[#c8d5c2] transition-colors duration-300 group-hover:text-[#edf4e8]">
                  We work to support farmers, protect grain quality at every stage, and create dependable export experiences that strengthen long-term relationships with our customers.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:bg-white/10 group/stat">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#d7b96a] font-semibold">Quality</span>
                    <span className="mt-2 block font-serif-display text-2xl text-[#fcf5e5] transition-transform duration-300 group-hover/stat:translate-x-1">12 Steps</span>
                    <span className="text-sm text-[#c8d5c2] font-light transition-colors duration-300 group-hover/stat:text-[#edf4e8]">Multi-stage inspection for every lot.</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 group/stat">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#d7b96a] font-semibold">Support</span>
                    <span className="mt-2 block font-serif-display text-2xl text-[#fcf5e5] transition-transform duration-300 group-hover/stat:translate-x-1">500+ Farmers</span>
                    <span className="text-sm text-[#c8d5c2] font-light transition-colors duration-300 group-hover/stat:text-[#edf4e8]">Partnerships that strengthen rural livelihoods.</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:bg-white/10 group/stat">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#d7b96a] font-semibold">Traceability</span>
                    <span className="mt-2 block font-serif-display text-2xl text-[#fcf5e5] transition-transform duration-300 group-hover/stat:translate-x-1">100%</span>
                    <span className="text-sm text-[#c8d5c2] font-light transition-colors duration-300 group-hover/stat:text-[#edf4e8]">Transparent handling from farm to port.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { label: "Premium Varieties", value: "15+", copy: "Carefully selected grain profiles for varied markets." },
              { label: "Countries Served", value: "30+", copy: "A growing distribution footprint across continents." },
              { label: "Farm Partners", value: "500+", copy: "Long-term relationships with independent growers." },
              { label: "Quality Checks", value: "12", copy: "A disciplined process that protects every shipment." },
            ].map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#d8e0c9]/80 bg-gradient-to-br from-[#fbf7f0] via-[#f4efe3] to-[#eef5e8] p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="block text-[10px] uppercase tracking-[0.28em] text-[#48624a]/70 font-semibold">{item.label}</span>
                <span className="mt-3 block font-serif-display text-3xl text-[#2c3f16]">{item.value}</span>
                <p className="mt-2 text-sm leading-relaxed font-light text-[#48624a]">{item.copy}</p>
              </div>
            ))}
          </div>
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

      {/* Certifications Section */}
      <section className="py-20 bg-[#faf8f5] border-t border-[#e2dbc9]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              title="Certifications & Registrations"
              subtitle="Official business and export credentials that support our operations and compliance standards."
              centered
              titleClassName="text-[#2c3f16]"
            />
          </div>

          <div className="rounded-3xl border border-[#b7c6ad]/80 bg-[#f3f8ef]/95 p-4 md:p-6 shadow-[0_18px_60px_rgba(44,63,22,0.08)] backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#b7c6ad]/70 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#a67c1c] font-semibold">Verified documents</p>
                <h3 className="mt-2 font-serif-display text-2xl text-[#2c3f16]">Credentials we keep current.</h3>
              </div>
              <span className="hidden rounded-full border border-[#2c3f16]/20 bg-[#dfead7] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2c3f16] md:inline-flex">
                Hover to explore
              </span>
            </div>

            <div className="h-[130px] md:h-[150px]">
              <LogoLoop
                logos={certificationLoopItems}
                speed={70}
                direction="left"
                gap={18}
                hoverSpeed={22}
                fadeOut
                fadeOutColor="#f3f8ef"
                scaleOnHover
                ariaLabel="NeemSai Global certifications"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="group rounded-2xl border border-[#b7c6ad]/80 bg-[#f7fbf4] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7f976f] hover:shadow-lg"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#7f976f]/20 bg-[#2c3f16]/10 text-[#2c3f16] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-serif-display text-lg text-[#2c3f16]">{cert.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed font-light text-[#48624a]">{cert.subtitle}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 rounded-full border border-[#2c3f16] bg-[#edf4e8] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#2c3f16] transition-all duration-300 hover:bg-[#2c3f16] hover:text-[#fcf5e5]"
                    >
                      View Document
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
