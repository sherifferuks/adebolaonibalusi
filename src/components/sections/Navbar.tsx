"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Expertise', href: '#features' },
    { name: 'Partners', href: '/team' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '/careers' },
];

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
            }`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex items-center justify-between bg-dark/40 backdrop-blur-xl border border-white/10 px-6 sm:px-8 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''
                    }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <Image
                            src="/logo-white.png"
                            alt="Adebola, Onibalusi & Co."
                            width={240}
                            height={60}
                            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden lg:block text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-wide">
                            Contact
                        </Link>
                        <Button variant="primary" size="sm" className="hidden md:flex px-6 h-10 text-[13px]">
                            Get started
                        </Button>
                        <button
                            className="md:hidden text-white p-2"
                            aria-label="Toggle menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full px-6 pt-4">
                    <div className="bg-dark/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-xl font-medium text-white/70 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-white/10">
                            <Button className="w-full h-12">Get started</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
