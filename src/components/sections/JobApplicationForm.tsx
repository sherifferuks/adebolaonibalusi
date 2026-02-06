"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { sendWebhook } from '@/lib/webhooks';


export const JobApplicationForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Lawyer',
        linkedin: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await sendWebhook('https://n8n.your-domain.com/webhook/job-application', formData);
            setStatus('success');
            setFormData({ name: '', email: '', role: 'Lawyer', linkedin: '', message: '' });
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-white border border-dark/5 shadow-2xl rounded-[2.5rem] p-10 md:p-12 space-y-10">
            <div className="space-y-2">
                <h2 className="text-2xl font-serif font-medium text-dark tracking-tight">Application Portal</h2>
                <p className="text-sm text-dark/40 font-medium tracking-wide font-bold uppercase">Direct Submission</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-dark/40 ml-1">Full Name</label>
                        <input
                            required
                            type="text"
                            placeholder="Adebayo Onibalusi"
                            className="w-full bg-dark/5 border border-transparent focus:border-dark/10 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium transition-all outline-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-dark/40 ml-1">Email Address</label>
                        <input
                            required
                            type="email"
                            placeholder="example@ao-co.law"
                            className="w-full bg-dark/5 border border-transparent focus:border-dark/10 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium transition-all outline-none"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-dark/40 ml-1">Desired Role</label>
                    <select
                        aria-label="Select roles"
                        className="w-full bg-dark/5 border border-transparent focus:border-dark/10 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium transition-all outline-none appearance-none"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                        <option>Lawyer</option>
                        <option>Legal Researcher</option>
                        <option>Technical Analyst</option>
                        <option>Admin Specialist</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-dark/40 ml-1">LinkedIn Profile</label>
                    <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        className="w-full bg-dark/5 border border-transparent focus:border-dark/10 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium transition-all outline-none"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-dark/40 ml-1">Initial Brief / Cover Note</label>
                    <textarea
                        rows={4}
                        placeholder="Tell us about your background and why you're a fit..."
                        className="w-full bg-dark/5 border border-transparent focus:border-dark/10 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium transition-all outline-none resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    disabled={status === 'submitting'}
                    className="w-full h-16 text-dark bg-dark text-white rounded-2xl"
                >
                    {status === 'submitting' ? 'Submitting...' : 'Send Application'}
                </Button>

                {status === 'success' && (
                    <p className="text-center text-sm font-bold text-green-600 animate-fade-in tracking-wide uppercase">
                        Application Sent Successfully.
                    </p>
                )}
                {status === 'error' && (
                    <p className="text-center text-sm font-bold text-red-600 animate-fade-in tracking-wide uppercase">
                        Error sending application. Please try again.
                    </p>
                )}
            </form>
        </div>
    );
};
