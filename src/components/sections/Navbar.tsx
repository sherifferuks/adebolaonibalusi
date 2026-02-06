"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: 'Services', href: '#services', hasChildren: true },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
                scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-stone/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-serif font-bold tracking-tight text-charcoal">
                        AO<span className="text-accent">&</span>Co.
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className="text-charcoal/80 hover:text-accent font-medium transition-colors flex items-center gap-1"
                            >
                                {item.name}
                                {item.hasChildren && <ChevronDown size={14} />}
                            </Link>
                            {item.hasChildren && (
                                <div className="absolute top-full -left-4 mt-2 w-48 bg-white shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-stone/5">
                                    <div className="flex flex-col gap-1">
                                        <Link href="#" className="px-4 py-2 hover:bg-cream rounded-lg text-sm transition-colors">Corporate Law</Link>
                                        <Link href="#" className="px-4 py-2 hover:bg-cream rounded-lg text-sm transition-colors">Property Law</Link>
                                        <Link href="#" className="px-4 py-2 hover:bg-cream rounded-lg text-sm transition-colors">Dispute Resolution</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop Call to Action */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Us</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-charcoal p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "md:hidden absolute top-full left-0 w-full bg-cream border-t border-stone/10 shadow-lg px-6 py-8 transition-all duration-300",
                isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            )}>
                <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xl font-medium text-charcoal hover:text-accent"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-4">Contact Us</Button>
                </div>
            </div>
        </nav>
    );
};
