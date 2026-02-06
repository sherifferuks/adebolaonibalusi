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
                                Legal Excellence <br />
                                at unmatched speed
                            </h2>
                            <p className="text-xl text-dark/60 leading-relaxed font-medium max-w-lg">
                                Our internal AI infrastructure allows us to process complex legal filings and conduct deep-dive research in a fraction of the time. You get superior results, faster.
                            </p>
                        </div>

                        <Button variant="secondary" size="lg" className="h-16 px-8 gap-3 border-dark/10 bg-dark/5 hover:bg-dark/10 text-dark">
                            Meet the Partners <ArrowRight size={18} />
                        </Button>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-20 border-l border-dark/10 pl-12">
                        <div className="space-y-2">
                            <div className="text-6xl font-serif text-dark tracking-tighter">+350%</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Efficiency Gained</div>
                        </div>
                        <div className="space-y-2 pl-8 border-l border-dark/10">
                            <div className="text-6xl font-serif text-dark tracking-tighter">+80%</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Filing Speed</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-6xl font-serif text-dark tracking-tighter">-70%</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Admin Latency</div>
                        </div>
                        <div className="space-y-2 pl-8 border-l border-dark/10">
                            <div className="text-6xl font-serif text-dark tracking-tighter">+30%</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Case Throughput</div>
                        </div>
                    </div>
                </div>

                {/* Integration Pill Placeholder */}
                <div className="mt-40 flex justify-center">
                    <div className="bg-white border border-dark/5 shadow-xl shadow-dark/5 px-10 py-5 rounded-3xl flex items-center gap-6">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Our Internal Edge</span>
                        <div className="flex items-center gap-6 opacity-60">
                            <span className="font-bold tracking-tighter">AI SEARCH</span>
                            <span className="font-bold tracking-tighter">DATA SYNC</span>
                            <span className="font-bold tracking-tighter">AUTO FILING</span>
                        </div>
                        <ArrowRight size={16} className="text-dark/40 ml-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};
