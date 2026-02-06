"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Box, Search, FileText, Database } from 'lucide-react';

const detailedFeatures = [
    {
        title: 'Manages Case objects',
        description: 'Organize and adjust contacts, corporate filing stages, and litigation—all in one place.',
        icon: <Box size={20} className="text-dark/40" />
    },
    {
        title: 'Searches for filings',
        description: 'Seamlessly access any legal document related to any client or corporate entity.',
        icon: <Search size={20} className="text-dark/40" />
    },
    {
        title: 'Adds legal notes',
        description: 'Add remarks, edit data fields, and include extra information in case transactions.',
        icon: <FileText size={20} className="text-dark/40" />
    },
    {
        title: 'Pulls and manages data',
        description: 'Create, modify, and pull up tasks and data; we support all default & custom fields.',
        icon: <Database size={20} className="text-dark/40" />
    }
];

export const VideoShowcase: React.FC = () => {
    return (
        <section className="py-32 bg-white text-dark">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                {/* Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                        See AO & Co in action
                    </h2>
                    <div className="space-y-6">
                        <p className="text-lg text-dark/50 font-medium leading-relaxed">
                            Say goodbye to clunky legal workflows. Just text or talk—our AI updates everything for you. Fast, simple, no extra steps.
                        </p>
                    </div>
                </div>

                {/* Video/Demo Mockup */}
                <div className="relative aspect-video bg-[#0A0B10] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-hero-glow opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-dark border-b-[10px] border-b-transparent ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-12">
                        <Button variant="outline" className="h-12 border-white/20 text-white gap-2 mt-4 backdrop-blur-md">
                            Get to know AO & Co <ArrowRight size={16} />
                        </Button>
                    </div>
                </div>

                {/* 4-Column Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-dark/5 pt-24">
                    {detailedFeatures.map((feature) => (
                        <div key={feature.title} className="space-y-6">
                            <div className="flex items-center gap-4">
                                {feature.icon}
                                <h3 className="text-[13px] font-bold uppercase tracking-widest">{feature.title}</h3>
                            </div>
                            <p className="text-sm text-dark/50 font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                    <div className="pt-8">
                        <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-dark group border-b border-dark/10 pb-2">
                            Explore features <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper for Link import logic if needed
const Link = ({ href, children, className }: { href: string, children: React.ReactNode, className: string }) => (
    <a href={href} className={className}>{children}</a>
);
