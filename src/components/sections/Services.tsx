"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const practiceAreas = [
    'Litigation & Appellate Practice',
    'Corporate Compliance & Finance',
    'Real Estate & Properties',
    'Banking & Finance Law',
    'Acquisition & Winding up',
    'Arbitration',
    'Government & Regulatory Compliance',
    'Labour & Employment Law',
    'Entertainment Law'
];

export const Services: React.FC = () => {
    return (
        <section id="features" className="py-32 bg-light text-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left Column: Heading & Text */}
                    <div className="space-y-12 lg:sticky lg:top-32">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
                                Broad-spectrum <br />
                                <span className="italic">legal expertise</span>
                            </h2>
                            <p className="text-xl text-dark/60 leading-relaxed font-medium max-w-lg">
                                We provide sophisticated counsel across a diverse range of legal disciplines, ensuring strategic clarity for complex challenges in global enterprise and private interests.
                            </p>
                        </div>

                        <Button variant="secondary" size="lg" className="h-16 px-8 gap-3 border-dark/10 bg-dark/5 hover:bg-dark/10 text-dark">
                            View all practices <ArrowRight size={18} />
                        </Button>
                    </div>

                    {/* Right Column: Practice Areas List */}
                    <div className="space-y-4">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-dark/30 mb-8 ml-2">Our Dedicated Practice Groups</div>
                        <div className="grid grid-cols-1 gap-4">
                            {practiceAreas.map((area, index) => (
                                <div
                                    key={area}
                                    className="group flex items-center justify-between p-8 rounded-3xl bg-white border border-dark/5 hover:border-dark/20 transition-all hover:translate-x-2 cursor-default"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-serif italic text-dark/20 tracking-tighter">0{index + 1}</span>
                                        <h3 className="text-xl font-medium tracking-tight text-dark/80 group-hover:text-dark transition-colors">{area}</h3>
                                    </div>
                                    <ArrowRight size={20} className="text-dark/0 group-hover:text-dark/40 transition-all -translate-x-4 group-hover:translate-x-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
