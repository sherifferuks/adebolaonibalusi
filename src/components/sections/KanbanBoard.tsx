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
                icon={<Plus size={16} className="text-white" />}
                tasks={getTasksByStatus('todo')}
                onUpdateTask={(id) => updateTaskStatus(id, 'progress')}
            />

            {/* Column: In Progress */}
            <BoardColumn
                title="In Progress"
                icon={<Clock size={16} className="text-white" />}
                tasks={getTasksByStatus('progress')}
                onUpdateTask={(id) => updateTaskStatus(id, 'done')}
            />

            {/* Column: Done */}
            <BoardColumn
                title="Completed"
                icon={<CheckCircle2 size={16} className="text-white" />}
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
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{title}</h3>
                </div>
                <span className="text-[10px] font-bold text-white/30 bg-white/5 px-2 py-0.5 rounded-full">{tasks.length}</span>
            </div>

            <div className="space-y-4">
                {tasks.map((task) => (
                    <motion.div
                        key={task.id}
                        layoutId={task.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-surface border border-white/5 p-6 rounded-[2rem] space-y-4 group cursor-pointer hover:border-white/20 transition-all shadow-2xl"
                        onClick={() => onUpdateTask(task.id)}
                    >
                        <div className="flex items-start justify-between">
                            <span className={cn(
                                "text-[9px] uppercase tracking-[0.15em] font-bold border px-2 py-0.5 rounded-full",
                                task.priority === 'High' ? "border-white/20 text-white" :
                                    task.priority === 'Medium' ? "border-white/5 text-white/60" : "border-white/5 text-white/30"
                            )}>
                                {task.priority} Priority
                            </span>
                            <button className="text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Task options">
                                <MoreVertical size={16} />
                            </button>
                        </div>
                        <p className="font-serif text-lg text-white leading-snug">{task.title}</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-bold text-white">
                                    {task.assignee.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-[11px] font-medium text-white/50 tracking-wide">{task.assignee}</span>
                            </div>
                            <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">Due +2d</span>
                        </div>
                    </motion.div>
                ))}
                {tasks.length === 0 && (
                    <div className="h-40 border border-dashed border-white/5 rounded-[2rem] flex items-center justify-center text-white/10 text-xs font-bold uppercase tracking-[0.2em]">
                        No Tasks
                    </div>
                )}
            </div>
        </div>
    );
};
