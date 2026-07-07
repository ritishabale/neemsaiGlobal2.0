"use client";

import { useState } from "react";
import { BadgeCheck, Globe2 } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'pune' | 'dubai'>('pune');

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionHeading title="A Legacy of Global Presence" subtitle="Our concierge export desk supports buyers across key markets." />

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-serif-display text-3xl">Global Headquarters</h2>
            <p className="mt-3 text-[#48624a]">Pune, Maharashtra, India</p>
            <p className="mt-2 text-[#48624a]">Direct Sales Head: Karishma Sanyal</p>
            <p className="text-[#48624a]">neemsaiglobal@gmail.com</p>
            <p className="text-[#48624a]">+91 9833613591</p>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setActiveTab('pune')}
                type="button"
                className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === 'pune'
                    ? 'bg-[#2c3f16] text-[#fcf5e5] border-[#2c3f16] shadow-md'
                    : 'bg-white text-[#2c3f16] border-[#e2dbc9] hover:bg-[#faf8f5]'
                }`}
              >
                Pune HQ (India)
              </button>
              <button
                onClick={() => setActiveTab('dubai')}
                type="button"
                className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === 'dubai'
                    ? 'bg-[#2c3f16] text-[#fcf5e5] border-[#2c3f16] shadow-md'
                    : 'bg-white text-[#2c3f16] border-[#e2dbc9] hover:bg-[#faf8f5]'
                }`}
              >
                Dubai Office (UAE)
              </button>
            </div>

            <div className="mt-4 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#e2dbc9] bg-[#faf8f5]">
              {activeTab === 'pune' ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14199614894!2d73.72287834789505!3d18.524616428784157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14d65141527%3A0x2cfd1124d0886b6a!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281313795!2d54.89783111453298!3d25.07638053744654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43403a5856b9%3A0x96e70478524d6d41!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </div>

          <div className="mt-6 border-t border-[#e2dbc9]/60 pt-4">
            <h3 className="font-semibold text-sm">Operational Hubs</h3>
            <ul className="mt-2 grid gap-1 text-sm text-[#48624a] sm:grid-cols-2">
              {[
                "Pune",
                "Dubai",
                "London",
                "Singapore",
              ].map((hub) => (
                <li key={hub}>• {hub}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6">
          <h2 className="font-serif-display text-3xl">Concierge Inquiry</h2>
          <p className="mt-2 text-[#48624a]">Share your procurement needs and our team will revert promptly.</p>
          <div className="mt-4">
            <InquiryForm type="full" />
          </div>
        </article>
      </section>

      <section className="mt-8 grid gap-3 rounded-xl bg-[#f1eadf] p-5 text-[#2c3f16] sm:grid-cols-2">
        <div className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-[#2c3f16]" /> Certified Export Partner</div>
        <div className="flex items-center gap-2"><Globe2 className="h-5 w-5 text-[#2c3f16]" /> Shipping to 120+ Countries</div>
      </section>
    </div>
  );
}
