"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const footerLinks = {
    Firm: [
        { name: 'Expertise', href: '/#features' },
        { name: 'Team', href: '/team' },
        { name: 'Insights', href: '/#insights' },
        { name: 'Careers', href: '/careers' },
        { name: 'Legal Portal', href: '/portal/kanban' },
    ],
    Company: [
        { name: 'About', href: '/about' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    Social: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Facebook', href: '#' },
    ]
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-32 selection:bg-white selection:text-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Contact Bar */}
                <div className="flex flex-wrap justify-between items-center gap-12 pb-24 border-b border-white/10">
                    {['hello@ao-co.law', 'Twitter', 'Facebook', 'LinkedIn'].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all group"
                        >
                            {item} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ))}
                </div>

                <div className="pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    {/* Brand Column */}
                    <div className="space-y-10 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-4 group">
                            <Image
                                src="/logo-white.png"
                                alt="Adebola, Onibalusi & Co."
                                width={180}
                                height={45}
                                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-sm text-white/40 leading-relaxed font-medium">
                            © COPYRIGHT 2026. ALL RIGHTS RESERVED BY ADEBOLA, ONIBALUSI & CO.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-8">
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">{title}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};
