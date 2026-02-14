"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Scale, Gavel, Globe, Users, Building2, Landmark, GraduationCap, HeartHandshake } from 'lucide-react';

const practiceAreas = [
    {
        title: "Litigation & Appellate Practice",
        icon: Gavel,
        description: "Representation of clients in complex commercial and civil disputes before trial and appellate courts, with a strong emphasis on effective advocacy and strategic case management."
    },
    {
        title: "Corporate & Commercial Law",
        icon: Building2,
        description: "Advisory services on corporate governance, regulatory compliance, mergers and acquisitions, joint ventures, restructuring, and general commercial transactions."
    },
    {
        title: "Government & Regulatory Affairs / Compliance",
        icon: Landmark,
        description: "Advising on regulatory compliance, government relations, sector-specific regulations, and engagement with regulatory authorities and public institutions."
    },
    {
        title: "Financial & Regulatory Compliance",
        icon: Scale,
        description: "Legal support relating to banking, finance, corporate compliance, and adherence to applicable financial and regulatory frameworks."
    },
    {
        title: "Technology, IT Contracts & SaaS",
        icon: Globe,
        description: "Drafting and negotiating IT contracts, software licensing, SaaS agreements, data protection structures, and regulatory compliance for technology-driven enterprises."
    },
    {
        title: "Dispute Resolution & Arbitration",
        icon: Shield,
        description: "Resolution of disputes through arbitration and alternative dispute resolution mechanisms, in addition to conventional litigation."
    },
    {
        title: "Real Estate & Property Law",
        icon: Building2,
        description: "Advising on property acquisitions, leasing, development projects, land documentation, and property-related disputes."
    },
    {
        title: "Employment & Labour Law",
        icon: Users,
        description: "Advisory and representation on employment contracts, labour relations, workplace disputes, and regulatory compliance."
    },
    {
        title: "Probate, Wills & Estate Planning",
        icon: GraduationCap,
        description: "Advising individuals and families on estate planning, asset protection, will preparation, and estate administration."
    },
    {
        title: "Family Law, Matrimonial Causes & Divorce",
        icon: HeartHandshake,
        description: "Advising and representing clients in family law matters, including divorce proceedings, matrimonial disputes, custody, and ancillary reliefs."
    },
    {
        title: "Pro Bono Practice",
        icon: HeartHandshake,
        description: "In furtherance of access to justice and professional responsibility, the Firm undertakes pro bono matters where legal intervention serves the public interest."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#D9532A15_0%,transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8">About the Firm</h2>
                        <h1 className="text-5xl md:text-7xl font-serif font-light mb-12 max-w-4xl leading-[1.1]">
                            Innovative. Strategic. <br />
                            <span className="italic text-white/60">Client-Focused.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Core Narrative */}
            <section className="py-32 bg-zinc-950/30">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-8">
                        <div className="space-y-6 md:space-y-8 text-white/70 text-lg md:text-xl leading-relaxed md:leading-loose max-w-2xl font-medium">
                            <p>
                                Adebola, Onibalusi & Co. is a leading law firm established in 1987, with its principal office in Lagos, Nigeria. For over four decades, the Firm has provided high-quality legal services to corporate and private clients, distinguished by sound judgment, rigorous advocacy, and a deep understanding of Nigeria’s legal and regulatory environment.
                            </p>
                            <p>
                                Our practice combines strong litigation and appellate capability with comprehensive advisory services across commercial, regulatory, and compliance matters. We are recognised for delivering clear, practical, and strategic legal solutions that align with our clients’ commercial objectives.
                            </p>
                        </div>

                        <div className="mt-24 space-y-16">
                            <div>
                                <h3 className="text-2xl font-serif mb-6 text-white">Our Practice Philosophy</h3>
                                <div className="space-y-6 text-white/60 font-light leading-relaxed">
                                    <p>
                                        The Firm is guided by a commitment to professional excellence, integrity, and client service. We approach every matter with careful analysis, strategic foresight, and meticulous attention to detail.
                                    </p>
                                    <p>
                                        Adebola, Onibalusi & Co. maintains a global outlook and routinely acts for international clients requiring reliable local counsel in Nigeria, as well as Nigerian clients engaged in cross-border transactions, disputes, and regulatory engagements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 border-b border-white/5 pb-6">Our Diverse Clientele</h3>
                            <ul className="space-y-4">
                                {[
                                    "Multinational corporations",
                                    "Small to medium-scale enterprises",
                                    "Private Individuals",
                                    "Financial institutions & Banks",
                                    "Technology companies",
                                    "Public sector bodies",
                                    "High-net-worth individuals"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-medium group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D9532A50] group-hover:bg-[#D9532A] transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-white/40 leading-relaxed italic pt-4">
                                Our ability to serve both corporate and private clients reflects the Firm&apos;s breadth, experience, and adaptability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Grid */}
            <section className="py-32 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-24 text-center max-w-3xl mx-auto">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-light">Core Practice Areas</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {practiceAreas.map((area, index) => (
                            <div
                                key={index}
                                className="p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-3xl transition-all duration-500 group flex flex-col h-full"
                            >
                                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/[0.03] group-hover:bg-[#D9532A20] transition-colors">
                                    <area.icon size={24} className="text-white/60 group-hover:text-[#D9532A] transition-colors" />
                                </div>
                                <h4 className="text-xl font-serif mb-4 group-hover:translate-x-1 transition-transform">{area.title}</h4>
                                <p className="text-sm text-white/50 leading-relaxed font-light mt-auto">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8">The AO & Co. Advantage</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-12">
                            Why Choose <br /> Our Firm
                        </h3>
                        <div className="space-y-6 border-l border-white/10 pl-8">
                            {[
                                "A strong and established litigation and appellate practice",
                                "Depth in regulatory, compliance, and advisory",
                                "A reputation for sound judgment and strategy",
                                "Experience acting for international and cross-border clients",
                                "Commitment to professionalism and ethical standards"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <ArrowRight size={18} className="text-[#D9532A] group-hover:translate-x-2 transition-transform" />
                                    <p className="text-lg font-light text-white/70">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="p-12 border border-white/5 bg-white/[0.02] rounded-[40px] relative z-10 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D9532A10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <p className="text-2xl font-serif italic text-white/80 leading-relaxed relative z-20">
                                &quot;The Firm combines experience with focus, ensuring that each matter receives partner-level attention and is handled with diligence, precision, and care.&quot;
                            </p>
                            <div className="mt-12 flex items-center gap-6 relative z-20">
                                <div className="h-px flex-grow bg-white/10" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Adebola, Onibalusi & Co.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white text-black rounded-[60px] mx-6 mb-6">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-serif mb-12 italic">Let&apos;s discuss your <br /> requirements.</h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform group"
                    >
                        Schedule a Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
}
