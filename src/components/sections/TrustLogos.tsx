"use client";

import React from 'react';

const logos = [
    'GLOBAL LAW ALLIANCE',
    'CHAMBERS & PARTNERS',
    'WORLD BANK GROUP',
    'UNICEF',
    'HARVARD BUSINESS REVIEW',
];

export const TrustLogos: React.FC = () => {
    return (
        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center">
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-stone mb-12">
                        Trusted By Global Institutions
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-40 hover:opacity-70 transition-opacity duration-500 grayscale">
                        {logos.map((logo) => (
                            <span key={logo} className="text-xl md:text-2xl font-serif font-black tracking-tighter text-charcoal">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
