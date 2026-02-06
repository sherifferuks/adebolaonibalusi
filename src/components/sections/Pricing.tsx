"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const features = [
    'Any case management integration',
    'WhatsApp, Telegram, & SMS',
    'All language support',
    'Voice messaging for briefs',
    'No setup fee',
    'All features unlocked'
];

export const Pricing: React.FC = () => {
    return (
        <section className="py-40 bg-black text-white selection:bg-white selection:text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left side info */}
                    <div className="space-y-8">
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Pricing</div>
                        <h2 className="text-5xl md:text-7xl font-serif max-w-sm leading-[1.1] tracking-tight">
                            Start for free, grow with us.
                        </h2>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Monthly */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Monthly</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-serif font-medium">$500</span>
                                    <span className="text-sm text-white/40">/month</span>
                                </div>
                                <p className="text-xs text-white/40 font-medium">Full legal operations support monthly</p>
                            </div>

                            <Button variant="ghost" className="w-full h-14 border border-white/10 hover:bg-white/5">
                                Buy Monthly
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
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Yearly</div>
                                    <span className="bg-white/10 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest">Save 20%</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-serif font-medium">$4,800</span>
                                    <span className="text-sm text-white/40">/year</span>
                                </div>
                                <p className="text-xs text-white/40 font-medium">Billed annually for max efficiency</p>
                            </div>

                            <Button variant="primary" className="w-full h-14">
                                Buy Yearly
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
