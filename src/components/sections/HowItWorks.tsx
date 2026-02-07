"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MoreHorizontal } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-32 bg-white text-dark">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif max-w-xl leading-tight">
                            Excellence in <br />
                            every detail
                        </h2>
                        <p className="text-lg text-dark/50 max-w-md font-medium">
                            Our practice is built on a foundation of rigorous research and strategic clarity. We manage every case with the precision required for global corporate success.
                        </p>
                    </div>
                    <Button variant="secondary" className="gap-2 px-6">
                        Firm Expertise <ArrowRight size={16} />
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Mobile Mockup */}
                    <div className="bg-[#F2F2F2] rounded-[3rem] p-12 flex items-center justify-center overflow-hidden">
                        <div className="relative w-72 h-[550px] bg-black rounded-[3rem] border-8 border-[#1a1a1a] shadow-2xl p-6 space-y-4">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                            <div className="pt-10 flex flex-col gap-3">
                                <div className="bg-white/10 rounded-2xl p-3 text-[10px] text-white/70">Practice Milestone</div>
                                <div className="bg-white/10 rounded-2xl p-3 text-[10px] text-white/70">Real Estate Acquisition, Lagos Office</div>
                                <div className="bg-white/20 rounded-2xl p-3 text-[11px] text-white font-medium self-end">Closing documents ready. Finalizing transfer.</div>
                                <div className="bg-white/10 rounded-2xl p-3 text-[10px] text-white/70 line-clamp-3">The luxury estate acquisition in Ikoyi is entering the final stage. All regulatory filings complete.</div>
                                <div className="bg-white/10 rounded-2xl p-3 text-[10px] text-white/70">Excellent. Notify the client.</div>
                            </div>
                            <div className="absolute bottom-10 left-6 right-6">
                                <Button className="w-full h-10 text-xs rounded-xl">Continue</Button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="bg-white border border-dark/5 shadow-2xl rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group">
                        {/* Grid lines background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

                        <div className="relative z-10 w-full space-y-6">
                            <div className="bg-white border border-dark/5 shadow-lg rounded-2xl p-6 flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">AO</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">Entertainment Advisory</h4>
                                    <p className="text-[10px] text-dark/40 font-bold uppercase tracking-widest">Active Talent Contract Review</p>
                                </div>
                                <MoreHorizontal size={16} className="text-dark/20" />
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex-grow h-px bg-dark/5 italic text-[10px] text-dark/20 flex items-center justify-center">reviewing production files</div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="text-xs font-medium">Finalize distribution rights</span>
                                </div>
                                <div className="flex items-center gap-3 ml-6 opacity-40">
                                    <div className="w-3 h-3 rounded-full border border-dark/20" />
                                    <span className="text-xs font-medium">Review arbitration brief</span>
                                </div>
                            </div>

                            <div className="bg-[#F9FAFB] border border-dark/5 rounded-2xl p-6 flex items-center gap-4 translate-x-12 opacity-80 scale-95">
                                <div className="w-10 h-10 bg-dark/5 rounded-full flex items-center justify-center text-dark/40 font-bold">AB</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">Arbitration Group</h4>
                                    <p className="text-[10px] text-dark/40 font-bold uppercase tracking-widest">Status: Tribunal Hearing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
