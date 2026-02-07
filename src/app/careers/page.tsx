"use client";

import React from 'react';
import { JobApplicationForm } from '@/components/sections/JobApplicationForm';

export default function CareersPage() {
    return (
        <div className="bg-light min-h-screen pt-48 pb-24 selection:bg-dark selection:text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left Side: Copy */}
                    <div className="space-y-12 animate-fade-in group">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dark/10 bg-dark/5">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40">Join our elite team</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif font-medium text-dark leading-[1.1] tracking-tight">
                                Help Us Define <br />
                                <span className="italic">the Future of Law</span>
                            </h1>
                            <p className="text-xl text-dark/60 leading-relaxed font-medium max-w-xl">
                                We are looking for exceptional minds to join our Lagos and London offices. Whether you&apos;re an established practitioner or a brilliant researcher, we have a place for you.
                            </p>
                        </div>

                        <div className="space-y-10 pt-10 border-t border-dark/10">
                            <div className="flex gap-8">
                                <div className="text-dark/20 font-serif text-4xl font-medium">01</div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold uppercase tracking-widest text-dark">Expert Practice</h3>
                                    <p className="text-dark/50 font-medium">We prioritize excellence in legal practice and strategic research—you get to work with the best.</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="text-dark/20 font-serif text-4xl font-medium">02</div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold uppercase tracking-widest text-dark">Global Excellence</h3>
                                    <p className="text-dark/50 font-medium">Work on high-stakes international corporate disputes. We focus on intellectual depth and strategic victory.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="sticky top-40">
                        <JobApplicationForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
