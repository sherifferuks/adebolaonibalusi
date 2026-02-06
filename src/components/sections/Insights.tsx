"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
    {
        category: 'Legal Tech',
        title: 'How AO & Co uses AI to expedite corporate mergers',
        date: 'Jan 24, 2026'
    },
    {
        category: 'Litigation',
        title: 'Automation in the courtroom: A new era for researchers',
        date: 'Jan 12, 2026'
    },
    {
        category: 'Privacy',
        title: 'Handling cross-border data in automated legal filings',
        date: 'Dec 28, 2025'
    }
];

export const Insights: React.FC = () => {
    return (
        <section id="insights" className="py-32 bg-light text-dark border-t border-dark/5">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif max-w-xl leading-tight">
                            Latest from the firm
                        </h2>
                        <p className="text-lg text-dark/50 max-w-sm font-medium">
                            Exploring the intersection of international law and operational technology.
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dark group border-b border-dark/10 pb-2 mb-2">
                        View all insights <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {posts.map((post) => (
                        <div key={post.title} className="group space-y-6 cursor-pointer">
                            <div className="aspect-[16/9] bg-dark/5 rounded-3xl overflow-hidden relative border border-dark/5">
                                <div className="absolute inset-0 bg-hero-glow opacity-0 group-hover:opacity-10 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center text-dark/5 italic font-serif text-3xl">Insight</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30">{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-dark/20" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-serif font-medium leading-snug group-hover:text-dark/70 transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
