"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="bg-light min-h-screen pt-48 pb-32 text-dark selection:bg-dark selection:text-white">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                {/* Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dark/10 bg-dark/5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40">Get in touch</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.05] tracking-tight">
                            Let&apos;s talk <br />
                            <span className="italic">Legal Operations.</span>
                        </h1>
                    </div>
                    <p className="text-xl text-dark/60 leading-relaxed font-medium max-w-md">
                        Whether you&apos;re looking to automate your firm or need high-stakes corporate representation, we&apos;re here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Info */}
                    <div className="space-y-16">
                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <div className="w-12 h-12 rounded-2xl bg-dark/5 border border-dark/5 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Email Us</h3>
                                    <p className="text-2xl font-serif font-medium hover:text-dark/70 transition-colors">info@adebolaonibalusi.com</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-12 h-12 rounded-2xl bg-dark/5 border border-dark/5 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Visit Lagos</h3>
                                    <p className="text-2xl font-serif font-medium">Suite 11a, Ground floor, East Pavilion, Tafawa Balewa Square. Lagos Island. Lagos. Nigeria</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-12 h-12 rounded-2xl bg-dark/5 border border-dark/5 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-dark/40">Visit London</h3>
                                    <p className="text-2xl font-serif font-medium">Goodluck Hope, London E14</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-16 border-t border-dark/10">
                            <div className="flex items-center gap-12">
                                {['Twitter', 'LinkedIn', 'Facebook'].map(social => (
                                    <a key={social} href="#" className="text-sm font-bold uppercase tracking-widest text-dark/40 hover:text-dark transition-colors">{social}</a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Simple Contact Form */}
                    <div className="bg-white border border-dark/5 shadow-2xl rounded-[3rem] p-12 space-y-10">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-serif font-medium">Send a quick brief</h3>
                            <p className="text-sm text-dark/40 font-medium">Or email us directly — we respond within 12 hours.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full h-16 bg-dark/5 border border-transparent rounded-2xl px-8 font-medium outline-none focus:bg-white focus:border-dark/10 transition-all shadow-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full h-16 bg-dark/5 border border-transparent rounded-2xl px-8 font-medium outline-none focus:bg-white focus:border-dark/10 transition-all shadow-sm"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="How can we help?"
                                    className="w-full bg-dark/5 border border-transparent rounded-3xl px-8 py-6 font-medium outline-none focus:bg-white focus:border-dark/10 transition-all resize-none shadow-sm"
                                />
                            </div>
                            <Button className="w-full h-16 bg-dark text-white rounded-full text-lg">
                                Send Message <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
