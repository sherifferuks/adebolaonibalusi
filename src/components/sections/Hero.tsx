"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black selection:bg-white selection:text-black">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Strategic Legal Advisory & Litigation</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
                        Unwavering <br />
                        <span className="italic">Legal Authority</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
                        A full-service legal institution providing sophisticated multi-disciplinary counsel and strategic litigation for global enterprises across diverse industries.
                    </p>
                </motion.div>

                {/* CTA Group */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button variant="primary" size="lg" className="h-16 px-10 gap-3 text-sm">
                        Consult with AO & Co <ArrowRight size={20} />
                    </Button>
                    <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 italic">
                        {/* Strategic Advisory & Global Litigation */}
                        Practice Excellence Across Disciplines
                    </div>
                </motion.div>

                {/* Integration Logos Mockup */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="pt-20 flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale invert"
                >
                    <span className="text-2xl font-bold tracking-tighter">SALESFORCE</span>
                    <span className="text-2xl font-bold tracking-tighter">HUBSPOT</span>
                    <span className="text-2xl font-bold tracking-tighter">STRIPE</span>
                    <span className="text-2xl font-bold tracking-tighter">VERIZON</span>
                </motion.div>
            </div>

            {/* Subtle Gradient Transition at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent" />
        </section>
    );
};
