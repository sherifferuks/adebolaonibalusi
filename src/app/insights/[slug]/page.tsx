import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { getInsightBySlug, getAllInsights } from '@/lib/insights';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getAllInsights();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function InsightPost({ params }: PageProps) {
    const { slug } = await params;
    const post = getInsightBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#FDFCFB] selection:bg-black selection:text-white pb-32">
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
                            sizes="100vw"
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
