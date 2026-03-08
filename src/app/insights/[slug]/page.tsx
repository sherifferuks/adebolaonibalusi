"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

const insightsData = {
    'corporate-mergers': {
        category: 'Corporate',
        title: 'Navigating the legal landscape of corporate mergers',
        date: 'Jan 24, 2026',
        readTime: '6 min read',
        image: '/img/insights/corporate-mergers.png',
        content: `
            <p>In an increasingly globalized economy, corporate mergers and acquisitions (M&A) have become a primary vehicle for growth, innovation, and market entry. However, the legal landscape surrounding these transactions is more complex than ever, requiring a sophisticated blend of regulatory foresight, strategic negotiation, and meticulous due diligence.</p>
            
            <h2>The Regulatory Challenge</h2>
            <p>Cross-border mergers are subject to a patchwork of international regulations, from antitrust laws to foreign investment screenings. Navigating this terrain requires not just a deep understanding of the law, but an appreciation for the political and economic climates in which these regulations operate. At Adebola, Onibalusi & Co., we prioritize strategic clarity from the outset, identifying potential hurdles before they become deal-breakers.</p>

            <blockquote>
                "Success in M&A isn't just about closing the deal—it's about ensuring the long-term viability and compliance of the newly formed entity in a landscape of ever-shifting global standards."
            </blockquote>

            <h2>Strategic Due Diligence</h2>
            <p>Traditional due diligence often focuses on financial and legal risks. While these remain critical, modern M&A requires a broader lens. We examine intellectual property portfolios, data privacy compliance, and ESG (Environmental, Social, and Governance) commitments. These factors often determine the true value of an acquisition and its potential for seamless integration.</p>

            <h2>Conclusion</h2>
            <p>As we look toward a new era of corporate growth, the role of legal counsel in M&A has evolved from mere transaction management to becoming a strategic partner in global success. Our approach combines the precision of legal expertise with the foresight of strategic advisory.</p>
        `
    },
    'litigation-research': {
        category: 'Litigation',
        title: 'Modern litigation: The evolving role of legal research',
        date: 'Jan 12, 2026',
        readTime: '4 min read',
        image: '/img/insights/litigation-research.png',
        content: `
            <p>The nature of litigation is undergoing a fundamental shift. No longer confined to purely adversarial roles, modern ligitators must operate as strategic analysts, leveraging data and advanced research to predict outcomes and craft more persuasive arguments.</p>

            <h2>Data-Driven Advocacy</h2>
            <p>The explosion of digital information has made legal research more demanding yet more potentially rewarding. Identifying precedent is only the beginning; understanding the nuances of how judges and jurisdictions approach specific issues can provide a decisive edge. Our firm invests heavily in the research methodologies required for high-stakes corporate litigation.</p>

            <h2>The Precision of Research</h2>
            <p>Precision is not just a virtue in research; it's a requirement for success. Whether it's white-collar defense or complex commercial disputes, the ability to find the 'needle in the haystack'—that one relevant fact or obscure precedent—often changes the entire trajectory of a case.</p>
        `
    },
    'regulatory-filings': {
        category: 'Governance',
        title: 'Regulatory frameworks in cross-border corporate filings',
        date: 'Dec 28, 2025',
        readTime: '8 min read',
        image: '/img/insights/regulatory-filings.png',
        content: `
            <p>Operating across borders brings immense opportunity and equally immense regulatory burden. Staying compliant requires a proactive approach to transparency and reporting.</p>

            <h2>Navigating Global Complexity</h2>
            <p>Each jurisdiction has its own set of requirements for corporate filings, from beneficial ownership disclosures to periodic financial reporting. A failure in one region can trigger investigations in another, leading to significant reputational and financial damage.</p>

            <h2>The Burden of Transparency</h2>
            <p>Modern regulatory frameworks are increasingly demanding. We advise our clients on building robust internal systems that automate compliance while maintaining the highest standards of accuracy and integrity.</p>
        `
    },
    'institutional-trust': {
        category: 'Strategic',
        title: 'The impact of institutional trust on legal outcomes',
        date: 'Dec 15, 2025',
        readTime: '5 min read',
        image: '/img/insights/institutional-trust.png',
        content: `
            <p>In the court of law and the court of public opinion, institutional trust is a currency. Its impact on legal outcomes, while often intangible, is significant.</p>

            <h2>Trust as a De-risking Agent</h2>
            <p>Companies with a track record of integrity and transparency often find more favorable environments during regulatory investigations or litigation. Trust is not built overnight; it's a strategic asset that must be nurtured through consistent adherence to ethical and legal standards.</p>
        `
    },
    'structural-mergers': {
        category: 'Corporate',
        title: 'Structural mergers and international legal compliance',
        date: 'Dec 05, 2025',
        readTime: '7 min read',
        image: '/img/insights/structural-mergers.png',
        content: `
            <p>When organizations reorganize, the legal structures must be as sound as the strategic ones. Ensuring compliance during structural mergers is a complex but necessary endeavor.</p>
        `
    },
    'digital-transformation': {
        category: 'Legal Tech',
        title: 'Digital transformation in the modern legal practice',
        date: 'Nov 20, 2025',
        readTime: '5 min read',
        image: '/img/insights/digital-transformation.png',
        content: `
            <p>The Adebola, Onibalusi & Co practice legacy is one of excellence and tradition, but also one of forward-looking innovation. Digital transformation is not just about tools; it's about the mindset of service delivery.</p>
        `
    }
};

export default function InsightPost() {
    const params = useParams();
    const slug = params.slug as string;
    const post = insightsData[slug as keyof typeof insightsData];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white font-sans">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-serif">Post not found</h1>
                    <Link href="/insights" className="text-dark/50 hover:text-dark flex items-center gap-2 justify-center">
                        <ArrowLeft size={16} /> Back to insights
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-[#FDFCFB] selection:bg-black selection:text-white">
            {/* Elegant Header Section */}
            <header className="pt-44 pb-20 border-b border-dark/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <Link href="/insights" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40 hover:text-dark transition-colors group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to all insights
                        </Link>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <span className="px-3 py-1 bg-dark text-white text-[9px] font-bold uppercase tracking-widest rounded-full">{post.category}</span>
                                <div className="flex items-center gap-2 text-dark/40 text-[11px] font-medium tracking-wide">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2 text-dark/40 text-[11px] font-medium tracking-wide">
                                    <Clock size={14} />
                                    {post.readTime}
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark leading-[1.1] tracking-tight">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 font-ibm-plex">
                    <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden relative shadow-2xl border border-dark/5">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 pb-44">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="prose prose-xl font-ibm-plex text-dark/80 leading-relaxed space-y-8
                                       prose-headings:font-serif prose-headings:text-dark prose-headings:font-bold
                                       prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                                       prose-blockquote:border-l-4 prose-blockquote:border-dark prose-blockquote:pl-8 prose-blockquote:italic
                                       prose-blockquote:text-dark prose-blockquote:text-2xl prose-blockquote:font-serif prose-blockquote:my-16"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Brand Signature Banner */}
                        <div className="mt-44 p-12 md:p-20 rounded-[3rem] bg-black text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-hero-glow opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                            <div className="relative space-y-8 text-center">
                                <div className="flex flex-col items-center gap-6 text-center">
                                    <h3 className="text-2xl md:text-4xl font-serif font-light leading-tight">
                                        <span className="text-[#E45F2B]">new dawn.</span> <span className="italic">same promise.</span>
                                    </h3>
                                    <p className="text-white/40 text-sm max-w-sm font-ibm-plex leading-relaxed">
                                        Continuing the Adebola, Onibalusi & Co. legacy of excellence with every challenge we meet.
                                    </p>
                                    <Link href="/contact" className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-white text-black px-10 py-5 rounded-full hover:bg-[#E45F2B] hover:text-white transition-all duration-500">
                                        Consult with us <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Share (Aesthetics) */}
                        <div className="mt-32 pt-16 border-t border-dark/5 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30">Share this insight</span>
                                <div className="flex gap-4">
                                    <button title="Share this article" className="p-2 rounded-full border border-dark/10 text-dark/40 hover:text-dark hover:border-dark transition-all">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                            <Link href="/insights" className="text-sm font-bold uppercase tracking-widest text-dark border-b border-dark pb-1 text-xs">
                                Back to all insights
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
