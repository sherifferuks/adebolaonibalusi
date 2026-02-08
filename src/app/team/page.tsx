"use client";

import React from 'react';
import NextImage from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Twitter, Linkedin, Mail } from 'lucide-react';

const founders = [
    {
        name: 'Adebola Onibalusi',
        role: 'Managing Partner',
        description: 'Specializing in corporate strategy and high-stakes litigation within international legal frameworks.',
        image: null // No image provided yet
    },
    {
        name: 'Kemi Onibalusi',
        role: 'Senior Partner',
        description: 'Lead of corporate advisory and dispute resolution, bringing meticulous attention to complex regulatory matters.',
        image: '/team/kemi.png'
    },
    {
        name: 'Olumide Onibalusi',
        role: 'Senior Partner',
        description: 'Lead of global litigation and corporate advisory, blending legal expertise with strategic foresight.',
        image: null // No image provided yet
    }
];

export default function TeamPage() {
    return (
        <main className="bg-black min-h-screen pt-32 md:pt-48 pb-20 md:pb-32 text-white selection:bg-white selection:text-black">
            <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
                {/* Header Section */}
                <div className="space-y-6 md:space-y-8 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Our Leadership</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium leading-[1.1] md:leading-[1.05] tracking-tight">
                        The minds behind <br />
                        <span className="italic">AO & Co.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
                        We are a team of lawyers and legal experts dedicated to providing exceptional counsel for the modern enterprise.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {founders.map((member) => (
                        <div key={member.name} className="group space-y-6 md:space-y-8 bg-surface border border-white/5 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-white/20 transition-all shadow-2xl">
                            <div className="aspect-[4/5] bg-dark/20 rounded-2xl md:rounded-3xl overflow-hidden relative">
                                {member.image && (
                                    <NextImage
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                )}
                                {/* Overlay to match brand aesthetic */}
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                                <div className="absolute inset-0 bg-hero-glow opacity-20 pointer-events-none" />
                                {!member.image && (
                                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-serif text-6xl">AO</div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-3xl font-serif font-medium">{member.name}</h3>
                                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">{member.role}</p>
                                </div>
                                <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium">
                                    {member.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full border border-white/10">
                                    <Linkedin size={16} className="text-white/40 group-hover:text-white transition-colors" />
                                </Button>
                                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full border border-white/10">
                                    <Twitter size={16} className="text-white/40 group-hover:text-white transition-colors" />
                                </Button>
                                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full border border-white/10">
                                    <Mail size={16} className="text-white/40 group-hover:text-white transition-colors" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join the Team CTA */}
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-32 text-center space-y-8 md:space-y-12 text-dark">
                    <h2 className="text-3xl md:text-7xl font-serif leading-tight tracking-tight">
                        Join our elite <br />
                        legal team
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button variant="primary" size="lg" className="h-14 md:h-16 px-8 md:px-10 gap-3 bg-dark text-white rounded-full text-sm md:text-base">
                            View open roles <ArrowRight size={18} className="md:w-5 md:h-5" />
                        </Button>
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-dark/30 italic">
                            {/* // Lagos & London offices */}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
