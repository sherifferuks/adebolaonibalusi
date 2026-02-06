"use client";

import React from 'react';
import { KanbanBoard } from '@/components/sections/KanbanBoard';
import { Button } from '@/components/ui/Button';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';

export default function KanbanPortalPage() {
    return (
        <div className="bg-cream min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
                {/* Portal Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-2">
                        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-stone">Operations Hub</h2>
                        <h1 className="text-4xl font-serif font-bold text-charcoal">Internal Task Management</h1>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-stone/5">
                        <Button variant="ghost" size="sm" className="bg-cream text-accent"><LayoutGrid size={18} /></Button>
                        <Button variant="ghost" size="sm"><List size={18} /></Button>
                    </div>
                </div>

                {/* Filters/Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                        <input
                            placeholder="Search legal briefs, filings..."
                            className="w-full pl-12 pr-6 py-3 bg-white border border-stone/10 rounded-xl focus:border-accent outline-none transition-colors font-medium text-charcoal shadow-sm"
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button variant="outline" size="sm" className="flex-1 md:flex-none gap-2">
                            <Filter size={16} /> Filters
                        </Button>
                        <Button size="sm" className="flex-1 md:flex-none">New Task</Button>
                    </div>
                </div>

                {/* The Kanban Board */}
                <KanbanBoard />
            </div>
        </div>
    );
}
