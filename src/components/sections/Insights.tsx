import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getAllInsights } from '@/lib/insights';

export const Insights: React.FC = () => {
    // Get all insights and take the top 3
    const posts = getAllInsights().slice(0, 3);

    return (
        <section id="insights" className="py-32 bg-light text-dark border-t border-dark/5">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif max-w-xl leading-tight">
                            Latest from the firm
                        </h2>
                        <p className="text-lg text-dark/50 max-w-sm font-medium">
                            Exploring the nuances of international law and corporate strategy.
                        </p>
                    </div>
                    <Link href="/insights" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dark group border-b border-dark/10 pb-2 mb-2">
                        View all insights <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {posts.map((post) => (
                        <Link key={post.title} href={`/insights/${post.slug}`} className="group space-y-6 cursor-pointer">
                            <div className="aspect-[16/9] bg-dark/5 rounded-3xl overflow-hidden relative border border-dark/5">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30">{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-dark/20" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-serif font-medium leading-snug group-hover:text-dark/70 transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
