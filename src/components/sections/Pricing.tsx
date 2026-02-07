"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const features = [
    'Full-Service Legal Advisory',
    'Multi-Disciplinary Expertise',
    'Specialized Practice Groups',
    'Global Legal Compliance',
    'Direct Partner Consultation',
    'Transparent Fee Structure'
];

export const Pricing: React.FC = () => {
    return (
        <section className="py-40 bg-black text-white selection:bg-white selection:text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left side info */}
                    <div className="space-y-8">
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Advisory Retainers</div>
                        <h2 className="text-5xl md:text-7xl font-serif max-w-sm leading-[1.1] tracking-tight">
                            Elite Counsel. Clear Fees.
                        </h2>
                        <p className="text-lg text-white/40 font-medium max-w-md">
                            We offer structured retainer plans designed to provide your business with the constant legal edge of an elite advisory team.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Monthly */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Monthly Retainer</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-serif font-medium">$1.5k</span>
                                    <span className="text-sm text-white/40">/month</span>
                                </div>
                                <p className="text-xs text-white/40 font-medium">Standard corporate legal support</p>
                            </div>

                            <Button variant="ghost" className="w-full h-14 border border-white/10 hover:bg-white/5">
                                Inquire about Retainer
                            </Button>

                            <ul className="space-y-4">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-[13px] font-medium text-white/60">
                                        <Check size={14} className="text-white/20" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Yearly */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Annual Advisory</div>
                                    <span className="bg-white/10 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest text-[#4ade80]">Save 15%</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-serif font-medium">$15k</span>
                                    <span className="text-sm text-white/40">/year</span>
                                </div>
                                <p className="text-xs text-white/40 font-medium">Strategic partnership for scaling firms</p>
                            </div>

                            <Button variant="primary" className="w-full h-14">
                                Secure Partnership
                            </Button>

                            <ul className="space-y-4">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-[13px] font-medium text-white/60">
                                        <Check size={14} className="text-white/20" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
