"use client";

import React from 'react';
import { JobApplicationForm } from '@/components/sections/JobApplicationForm';

export default function CareersPage() {
    return (
        <div className="bg-cream min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side: Copy */}
                    <div className="space-y-10 animate-fade-in group">
                        <div className="space-y-6">
                            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-stone">
                                Join our elite team
                            </h2>
                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal leading-tight">
                                Help Us Define the <br />
                                <span className="text-accent underline decoration-stone/20 decoration-8 underline-offset-8">Future of Law.</span>
                            </h1>
                            <p className="text-xl text-charcoal/70 leading-relaxed font-sans max-w-xl">
                                We are looking for exceptional minds to join our Lagos and London offices. Whether you&apos;re an established practitioner or a brilliant researcher, we have a place for you.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-stone/20">
                            <div className="flex gap-6">
                                <div className="text-accent font-serif text-4xl font-bold">01.</div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-charcoal">Innovation First</h3>
                                    <p className="text-stone">We use AI-driven research and automation to empower our lawyers, not replace them.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-accent font-serif text-4xl font-bold">02.</div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-charcoal">Global Reach</h3>
                                    <p className="text-stone">Work on high-stakes international corporate disputes and transactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <JobApplicationForm />
                </div>
            </div>
        </div>
    );
}
