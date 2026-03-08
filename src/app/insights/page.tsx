"use client";

import React from 'react';
import { ArrowRight, Search } from 'lucide-react';

const insights = [
    {
        category: 'Corporate',
        title: 'Navigating the legal landscape of corporate mergers',
        excerpt: 'A comprehensive guide on the complexities of cross-border mergers and acquisitions in the current regulatory environment.',
        date: 'Jan 24, 2026',
        readTime: '6 min read'
    },
    {
        category: 'Litigation',
        title: 'Modern litigation: The evolving role of legal research',
        excerpt: 'How advanced research methodologies are redefining strategy and outcomes in high-stakes courtroom battles.',
        date: 'Jan 12, 2026',
        readTime: '4 min read'
    },
    {
        category: 'Governance',
        title: 'Regulatory frameworks in cross-border corporate filings',
        excerpt: 'Understanding the shifting compliance requirements for multinational enterprises operating in emerging markets.',
        date: 'Dec 28, 2025',
        readTime: '8 min read'
    },
    {
        category: 'Strategic',
        title: 'The impact of institutional trust on legal outcomes',
        excerpt: 'Exploring why corporate reputation and institutional integrity are becoming decisive factors in legal precedents.',
        date: 'Dec 15, 2025',
        readTime: '5 min read'
    },
    {
        category: 'Corporate',
        title: 'Structural mergers and international legal compliance',
        excerpt: 'Best practices for ensuring seamless transition and compliance during complex structural reorganizations.',
        date: 'Dec 05, 2025',
        readTime: '7 min read'
    },
    {
        category: 'Legal Tech',
        title: 'Digital transformation in the modern legal practice',
        excerpt: 'How the AO & Co Practice Legacy is embracing technology to deliver sophisticated counsel more efficiently.',
        date: 'Nov 20, 2025',
        readTime: '5 min read'
    }
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Dark Header Section */}
            <section className="bg-black text-white pt-44 pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-8 max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/70">Knowledge Base</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif font-light leading-[1.05] tracking-tight">
                            Strategic <span className="italic">Insights.</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed font-sans mt-4">
                            Exploring the nuances of international law, corporate governance, and the strategic foresight required for global enterprise success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Filter Bar (Aesthetics) */}
                    <div className="flex flex-wrap items-center justify-between gap-8 pb-16 border-b border-dark/5 mb-16">
                        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                            {['All', 'Corporate', 'Litigation', 'Governance', 'Strategic'].map((cat) => (
                                <button key={cat} className={`text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${cat === 'All' ? 'text-dark border-b-2 border-dark pb-1' : 'text-dark/40 hover:text-dark'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative group hidden sm:block">
                            <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-dark/20 group-focus-within:text-dark transition-colors" />
                            <input
                                type="text"
                                placeholder="Search insights..."
                                className="bg-transparent border-none pl-8 text-sm font-medium focus:ring-0 placeholder:text-dark/20 w-48 transition-all duration-500 focus:w-64"
                            />
                        </div>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {insights.map((insight, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="space-y-8">
                                    <div className="aspect-[16/10] bg-dark/5 rounded-[2rem] overflow-hidden relative border border-dark/5">
                                        <div className="absolute inset-0 bg-hero-glow opacity-0 group-hover:opacity-20 transition-all duration-700" />
                                        <div className="absolute inset-0 flex items-center justify-center text-dark/5 italic font-serif text-4xl select-none group-hover:scale-110 transition-transform duration-700">Insight</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-dark/40">{insight.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-dark/20" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30 font-serif italic">{insight.date}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight group-hover:text-dark/70 transition-all duration-300">
                                            {insight.title}
                                        </h3>
                                        <p className="text-dark/50 text-sm leading-relaxed font-medium line-clamp-2">
                                            {insight.excerpt}
                                        </p>
                                        <div className="pt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-dark/60 pointer-events-none">
                                            {insight.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination/Load More (Aesthetics) */}
                    <div className="mt-32 flex justify-center">
                        <button className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-dark group border border-dark/10 px-12 py-6 rounded-full hover:bg-black hover:text-white transition-all duration-500">
                            Load more insights <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
