"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
    return (
        <section id="features" className="py-32 bg-light text-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left Column: Heading & Text */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
                                Strategic counsel <br />
                                for global enterprise
                            </h2>
                            <p className="text-xl text-dark/60 leading-relaxed font-medium max-w-lg">
                                From complex litigation to structural corporate advisory, we provide the deep-dive research and legal precision required for high-stakes decisions.
                            </p>
                        </div>

                        <Button variant="secondary" size="lg" className="h-16 px-8 gap-3 border-dark/10 bg-dark/5 hover:bg-dark/10 text-dark">
                            Our Practice Areas <ArrowRight size={18} />
                        </Button>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-20 border-l border-dark/10 pl-12">
                        <div className="space-y-2">
                            <div className="text-6xl font-serif text-dark tracking-tighter">15+</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Years of Excellence</div>
                        </div>
                        <div className="space-y-2 pl-8 border-l border-dark/10">
                            <div className="text-6xl font-serif text-dark tracking-tighter">250+</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Corporate Clients</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-6xl font-serif text-dark tracking-tighter">98%</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Litiagation Success</div>
                        </div>
                        <div className="space-y-2 pl-8 border-l border-dark/10">
                            <div className="text-6xl font-serif text-dark tracking-tighter">5</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Global Offices</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
