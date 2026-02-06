"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-cream">
            {/* Background Graphic Element (Subtle Gradient Prism) */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] opacity-20 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-accent to-teal rounded-full animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-8 animate-fade-in">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-[1.1]">
                            <span className="block italic font-normal text-accent/90">Trust</span>
                            Through Precision <br />
                            <span className="text-stone">Legal Excellence.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed font-sans">
                            Adebola, Onibalusi & Co. provides elite legal services powered by cutting-edge research and automation. We don&apos;t just practice law; we innovate it.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Button size="lg" className="group">
                            Our Services
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="ghost" size="lg" className="hover:text-accent">
                            View Case Studies
                        </Button>
                    </div>

                    {/* Trust/Recognition Area (Inspired by Suso) */}
                    <div className="pt-12 border-t border-stone/20">
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-stone mb-6">
                            Recognized For Excellence In
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center opacity-60">
                            <span className="text-sm font-bold text-charcoal italic tracking-tight underline">Corporate Law Monthly</span>
                            <span className="text-sm font-bold text-charcoal tracking-widest">LEGAL500</span>
                            <span className="text-sm font-bold text-charcoal uppercase border border-charcoal/30 px-2 py-0.5">Global Elite</span>
                        </div>
                    </div>
                </div>

                {/* Visual Element (Adapted from Suso Prism) */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <div className="absolute inset-0 border-[3px] border-accent/20 rotate-45 rounded-3xl" />
                        <div className="absolute inset-4 border-[2px] border-teal/20 -rotate-12 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-accent/10 backdrop-blur-3xl rounded-full flex items-center justify-center p-8">
                                <div className="w-full h-full border border-accent/40 rounded-full flex items-center justify-center">
                                    <span className="text-5xl font-serif font-bold text-accent">AO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
