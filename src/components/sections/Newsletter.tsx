"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
    return (
        <section className="py-40 bg-black text-white selection:bg-white selection:text-black overflow-hidden relative">
            <div className="absolute inset-0 bg-hero-glow opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">
                    <div className="space-y-6 max-w-2xl">
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Newsletter</div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
                            Strategic <span className="italic">Insights.</span> <br />
                            Directly to you.
                        </h2>
                        <p className="text-lg text-white/40 font-medium max-w-md mx-auto">
                            Join our community of global business leaders and receive exclusive legal analysis twice a month.
                        </p>
                    </div>

                    <div className="w-full max-w-xl">
                        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full h-20 bg-white/5 border border-white/10 rounded-full px-10 text-lg font-medium outline-none focus:bg-white/10 focus:border-white/20 transition-all placeholder:text-white/20"
                            />
                            <div className="absolute right-3 top-3 bottom-3">
                                <Button className="h-full px-8 rounded-full bg-white text-black hover:bg-white/90 transition-all gap-3">
                                    Subscribe <ArrowRight size={18} />
                                </Button>
                            </div>
                        </form>
                        <p className="mt-6 text-[10px] uppercase tracking-widest text-white/20 font-bold">
                            {/* By subscribing, you agree to our privacy policy and legal notices */}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
