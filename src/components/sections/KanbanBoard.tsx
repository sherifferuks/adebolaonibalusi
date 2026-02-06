"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Plus, MoreVertical, Clock, CheckCircle2 } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Task {
    id: string;
    title: string;
    priority: 'High' | 'Medium' | 'Low';
    assignee: string;
    status: 'todo' | 'progress' | 'done';
}

const initialTasks: Task[] = [
    { id: '1', title: 'Review Corporate Merger Brief', priority: 'High', assignee: 'Jane Smith', status: 'todo' },
    { id: '2', title: 'Draft IP License Agreement', priority: 'Medium', assignee: 'John Doe', status: 'progress' },
    { id: '3', title: 'Filing for Patent #882', priority: 'Low', assignee: 'Sarah West', status: 'done' },
];

export const KanbanBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const getTasksByStatus = (status: Task['status']) => tasks.filter(t => t.status === status);

    const updateTaskStatus = (id: string, newStatus: Task['status']) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {/* Column: To Do */}
            <BoardColumn
                title="To Do"
                icon={<Plus size={18} className="text-accent" />}
                tasks={getTasksByStatus('todo')}
                onUpdateTask={(id) => updateTaskStatus(id, 'progress')}
            />

            {/* Column: In Progress */}
            <BoardColumn
                title="In Progress"
                icon={<Clock size={18} className="text-teal" />}
                tasks={getTasksByStatus('progress')}
                onUpdateTask={(id) => updateTaskStatus(id, 'done')}
            />

            {/* Column: Done */}
            <BoardColumn
                title="Completed"
                icon={<CheckCircle2 size={18} className="text-stone" />}
                tasks={getTasksByStatus('done')}
                onUpdateTask={() => { }} // No next status
            />
        </div>
    );
};

const BoardColumn = ({ title, tasks, icon, onUpdateTask }: {
    title: string,
    tasks: Task[],
    icon: React.ReactNode,
    onUpdateTask: (id: string) => void
}) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="font-bold text-charcoal tracking-wide">{title}</h3>
                </div>
                <span className="text-xs font-bold text-stone bg-stone/5 px-2 py-0.5 rounded-full">{tasks.length}</span>
            </div>

            <div className="space-y-4">
                {tasks.map((task) => (
                    <motion.div
                        key={task.id}
                        layoutId={task.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-stone/5 space-y-4 group cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => onUpdateTask(task.id)}
                    >
                        <div className="flex items-start justify-between">
                            <span className={cn(
                                "text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md",
                                task.priority === 'High' ? "bg-accent/10 text-accent" :
                                    task.priority === 'Medium' ? "bg-teal/10 text-teal" : "bg-stone/10 text-stone"
                            )}>
                                {task.priority} Priority
                            </span>
                            <button className="text-stone opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Task options">
                                <MoreVertical size={16} />
                            </button>
                        </div>
                        <p className="font-serif font-bold text-charcoal leading-snug">{task.title}</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                                    {task.assignee.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-xs font-medium text-stone">{task.assignee}</span>
                            </div>
                            <span className="text-[10px] text-stone font-bold uppercase tracking-tighter">Due in 2 days</span>
                        </div>
                    </motion.div>
                ))}
                {tasks.length === 0 && (
                    <div className="h-32 border-2 border-dashed border-stone/10 rounded-2xl flex items-center justify-center text-stone text-sm font-medium">
                        Empty
                    </div>
                )}
            </div>
        </div>
    );
};
