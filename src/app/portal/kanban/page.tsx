"use client";

import React from 'react';
import { KanbanBoard } from '@/components/sections/KanbanBoard';
import { Button } from '@/components/ui/Button';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';

export default function KanbanPortalPage() {
    return (
        <div className="bg-black min-h-screen pt-48 pb-24 selection:bg-white selection:text-dark">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
                {/* Portal Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/5 pb-16">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Operations Hub</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight tracking-tight">Internal Portal</h1>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
                        <Button variant="ghost" size="sm" className="bg-white/10 rounded-full h-10 w-10 p-0 text-white"><LayoutGrid size={18} /></Button>
                        <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-white/30"><List size={18} /></Button>
                    </div>
                </div>

                {/* Filters/Search Bar */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={18} />
                        <input
                            placeholder="Search legal briefs, filings..."
                            className="w-full pl-14 pr-8 h-14 bg-white/5 border border-white/10 rounded-full focus:bg-white/10 focus:border-white/20 outline-none transition-all font-medium text-white shadow-2xl"
                        />
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <Button variant="secondary" size="md" className="flex-1 md:flex-none h-14 rounded-full gap-2 border-white/5">
                            <Filter size={16} /> Filters
                        </Button>
                        <Button size="md" className="flex-1 md:flex-none h-14 px-8 rounded-full">New Task</Button>
                    </div>
                </div>

                {/* The Kanban Board */}
                <KanbanBoard />
            </div>
        </div>
    );
}
