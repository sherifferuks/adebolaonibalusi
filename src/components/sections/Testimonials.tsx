"use client";

import React from 'react';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-charcoal text-white overflow-hidden relative">
            {/* Decorative Gradient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-accent/20 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    {/* Quote Area */}
                    <div className="lg:col-span-3 space-y-10">
                        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-stone">
                            Partner & Founder Vision
                        </h2>
                        <blockquote className="space-y-8">
                            <p className="text-3xl md:text-5xl font-serif font-medium leading-[1.3]">
                                “At <span className="text-accent italic">Adebola, Onibalusi & Co.</span>, we operate as more than just legal counsel; we are strategic architects for our clients&apos; success, blending <span className="underline decoration-stone/40">classical law with modern innovation</span>.”
                            </p>
                            <footer className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-stone/20 overflow-hidden flex items-center justify-center border border-accent/30">
                                    <span className="text-2xl font-serif font-bold text-accent">AO</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-serif">Adebola Onibalusi</h4>
                                    <p className="text-stone font-medium text-sm tracking-wide uppercase">Managing Partner & Founder</p>
                                </div>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Right Side Callout */}
                    <div className="lg:col-span-2 bg-stone/10 backdrop-blur-md rounded-3xl p-10 border border-white/5 space-y-6">
                        <h3 className="text-2xl font-serif font-bold">The Innovation Edge</h3>
                        <p className="text-stone text-lg leading-relaxed">
                            We leverage proprietary legal-tech workflows to reduce processing times by up to 40% while maintaining absolute precision in every brief.
                        </p>
                        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                            <span className="text-accent font-bold text-3xl">98%</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-stone">Client Satisfaction<br />Rate Globally</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
