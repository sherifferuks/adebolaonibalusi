"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
    { name: 'Corporate & Commercial Law', href: '#corporate' },
    { name: 'Intellectual Property & IT', href: '#ip-it' },
    { name: 'Dispute Resolution & Litigation', href: '#dispute' },
    { name: 'Real Estate & Property Law', href: '#real-estate' },
    { name: 'Employment & Labor Relations', href: '#employment' },
    { name: 'Banking & Financial Services', href: '#banking' },
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-white border-y border-stone/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Intro */}
                <div className="space-y-8 sticky top-32">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                            A Superior Legal Partner <br />
                            <span className="text-stone">For Industry Leaders.</span>
                        </h2>
                        <p className="text-lg text-charcoal/70 leading-relaxed font-sans max-w-md">
                            We provide precise, scalable legal strategies designed for the modern business landscape. Our expertise spans all core areas of corporate and personal law.
                        </p>
                    </div>
                    <Button variant="outline" size="lg">
                        All Practice Areas
                    </Button>
                </div>

                {/* Right Side: Services Grid (Arrow Links) */}
                <div className="w-full">
                    <ul className="divide-y divide-stone/15">
                        {services.map((service) => (
                            <li key={service.name} className="group first:pt-0 last:pb-0">
                                <Link
                                    href={service.href}
                                    className="flex items-center justify-between py-8 transition-colors hover:text-accent"
                                >
                                    <span className="text-xl md:text-2xl font-serif font-medium group-hover:pl-2 transition-all duration-300">
                                        {service.name}
                                    </span>
                                    <div className="w-12 h-12 rounded-full border border-stone/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={20} />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
