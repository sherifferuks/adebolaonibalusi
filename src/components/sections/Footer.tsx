import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
                    {/* Logo & Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <span className="text-3xl font-serif font-bold tracking-tight text-white">
                            AO<span className="text-accent">&</span>Co.
                        </span>
                        <p className="text-stone text-sm leading-relaxed max-w-xs">
                            A professional and responsive legal practice delivering excellence through tradition and technology.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-widest font-bold text-accent">Practice Areas</h4>
                        <ul className="space-y-3 text-stone font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">Corporate Law</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Property Law</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Dispute Resolution</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Employment Law</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-widest font-bold text-accent">Company</h4>
                        <ul className="space-y-3 text-stone font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">The Team</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog & News</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6 text-stone text-sm">
                        <h4 className="text-sm uppercase tracking-widest font-bold text-accent">Contact</h4>
                        <div className="space-y-4 font-medium">
                            <p>123 Legal Avenue,<br />Central Business District</p>
                            <p>info@aoco.legal</p>
                            <p>+234 800 000 0000</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-stone text-[10px] uppercase font-bold tracking-[0.2em]">
                    <p>© 2026 Adebola, Onibalusi & Co. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
