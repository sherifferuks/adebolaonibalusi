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

        const result = await sendWebhook('job-application', formData);

        if (result.success) {
            setStatus('success');
            setFormData({ name: '', email: '', role: 'Lawyer', linkedin: '', message: '' });
        } else {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-stone/10 border border-stone/5">
            {status === 'success' ? (
                <div className="text-center py-12 space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-charcoal">Application Received</h3>
                    <p className="text-stone font-medium">Thank you for your interest in AO & Co. Our team will review your application and get back to you shortly.</p>
                    <Button onClick={() => setStatus('idle')} variant="outline">Submit Another</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-stone ml-1">Full Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Adebola Onibalusi"
                                className="w-full bg-cream/50 border border-stone/20 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-colors text-charcoal font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-stone ml-1">Email Address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="adebola@example.com"
                                className="w-full bg-cream/50 border border-stone/20 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-colors text-charcoal font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-stone ml-1">Desired Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                aria-label="Select desired role"
                                className="w-full bg-cream/50 border border-stone/20 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-colors text-charcoal font-medium appearance-none"
                            >
                                <option>Associate Lawyer</option>
                                <option>Intern</option>
                                <option>Legal Researcher</option>
                                <option>Operations Manager</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-stone ml-1">LinkedIn Profile</label>
                            <input
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/in/..."
                                className="w-full bg-cream/50 border border-stone/20 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-colors text-charcoal font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-stone ml-1">Tell us about your expertise</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="How can you contribute to the firm?"
                            className="w-full bg-cream/50 border border-stone/20 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-colors text-charcoal font-medium resize-none"
                        />
                    </div>

                    {status === 'error' && (
                        <p className="text-accent text-sm font-medium text-center">Something went wrong. Please try again later.</p>
                    )}

                    <Button
                        type="submit"
                        className="w-full py-5 text-lg"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                    </Button>
                </form>
            )}
        </div>
    );
};
