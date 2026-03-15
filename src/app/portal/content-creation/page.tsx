'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface ApprovalItem {
  id: number;
  type: string;
  data: any;
  status: string;
  createdAt: string;
}

export default function ContentCreationPortal() {
  const [data, setData] = useState<{ pending: ApprovalItem[]; history: ApprovalItem[] }>({
    pending: [],
    history: []
  });
  const [loading, setLoading] = useState(true);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const fetchApprovals = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/approvals/dashboard');
      if (res.ok) {
        const json = await res.json();
        setData(json.data || { pending: [], history: [] });
      }
    } catch (error) {
      console.error('Failed to load approvals', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApprovals();
  }, []);

  const handleAction = async (id: number, action: 'approve' | 'reject', selection?: string) => {
    // Optimistic UI update for pending
    setData(prev => ({
      ...prev,
      pending: prev.pending.filter(app => app.id !== id)
    }));
    
    try {
      await fetch('/api/approvals/dashboard', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action, selection })
      });
      // Refresh to get history updated
      fetchApprovals();
    } catch (error) {
      console.error('Failed to resolve approval', error);
      fetchApprovals();
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="w-12 h-12 border-2 border-brand-orange/20 border-t-brand-orange rounded-full animate-spin" />
      <p className="text-white/40 font-light tracking-widest uppercase text-xs">Synchronizing Nodes...</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-16 animate-fade-in px-4">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-brand-orange rounded-full opacity-60" />
        <h1 className="text-4xl font-serif text-white mb-2 tracking-tight">Content Intelligence</h1>
        <p className="text-white/50 text-base font-light tracking-wide lg:max-w-2xl">
          Manage the end-to-end lifecycle of institutional content generation.
        </p>
      </div>

      {/* Pending Items Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Active Tasks</h2>
          <div className="h-px flex-1 bg-white/5" />
          {data.pending.length > 0 && (
            <span className="bg-brand-orange/20 text-brand-orange text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-orange/30">
              {data.pending.length} Action Required
            </span>
          )}
        </div>

        {data.pending.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-16 text-center group">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <CheckCircle2 className="w-10 h-10 text-green-500 animate-pulse" />
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Workspace Clear</h3>
            <p className="text-white/40 font-light tracking-wide">All pending content has been processed.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {data.pending.map((app) => (
              <div key={app.id} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl">
                <div className="bg-white/[0.03] px-8 py-5 border-b border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20">
                      <span className="text-brand-orange text-[10px] font-bold uppercase tracking-[0.2em]">
                        {app.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-white/30 font-medium tracking-tight uppercase">
                      <Clock className="w-3 h-3" />
                      Received {new Date(app.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Topic Selection UI */}
                  {app.type === 'topics' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-serif text-white mb-2">Select Primary Topic</h3>
                        <p className="text-white/40 text-sm font-light">Choose one topic to initiate high-fidelity manuscript generation.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {(app.data.topics || []).map((topic: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedTopicId(topic.id || topic.title || idx.toString())}
                            className={`flex items-start text-left p-6 rounded-2xl border transition-all duration-300 ${
                              selectedTopicId === (topic.id || topic.title || idx.toString())
                              ? 'bg-brand-orange/10 border-brand-orange text-white'
                              : 'bg-white/5 border-white/5 text-white/60 hover:bg-white/10 hover:border-white/10'
                            }`}
                          >
                            <div className={`mt-1 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-4 transition-colors ${
                               selectedTopicId === (topic.id || topic.title || idx.toString()) ? 'border-brand-orange' : 'border-white/20'
                            }`}>
                              {selectedTopicId === (topic.id || topic.title || idx.toString()) && <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />}
                            </div>
                            <div>
                              <h4 className="font-serif text-lg mb-1">{topic.title || topic}</h4>
                              {topic.description && <p className="text-xs font-light text-white/40 leading-relaxed">{topic.description}</p>}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content Preview UI */}
                  {app.type === 'content' && (
                    <div className="space-y-8">
                      <div className="relative">
                        <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.25em] mb-3">Institutional Blog Title</h3>
                        <p className="text-2xl font-serif text-white leading-tight tracking-tight">{app.data.blog_title}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.25em] mb-3">Manuscript Preview</h3>
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/10 text-sm font-light text-white/70 leading-relaxed overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-thumb-white/10">
                          {app.data.blog_content}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                         <div className="space-y-3">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-[#0077B5] uppercase tracking-[0.25em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0077B5]" />
                            LinkedIn Intelligence
                          </div>
                          <div className="bg-[#0077B5]/5 border border-[#0077B5]/10 p-5 rounded-2xl text-[13px] text-white/60 leading-relaxed whitespace-pre-wrap font-light tracking-wide min-h-[140px]">
                            {app.data.linkedin_content}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-[#E4405F] uppercase tracking-[0.25em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E4405F]" />
                            Instagram Narrative
                          </div>
                          <div className="bg-[#E4405F]/5 border border-[#E4405F]/10 p-5 rounded-2xl text-[13px] text-white/60 leading-relaxed whitespace-pre-wrap font-light tracking-wide min-h-[140px]">
                            {app.data.instagram_caption}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-8 py-6 bg-white/[0.03] border-t border-white/10 flex flex-col sm:flex-row justify-end gap-4">
                   <button 
                    onClick={() => handleAction(app.id, 'reject')}
                    className="px-6 py-3 text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-xl font-semibold text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                  >
                    <XCircle className="w-4 h-4" />
                    Discard
                  </button>
                  <button 
                    onClick={() => {
                      if (app.type === 'topics' && !selectedTopicId) {
                        alert('Please select a topic first.');
                        return;
                      }
                      handleAction(app.id, 'approve', app.type === 'topics' ? (selectedTopicId as string) : undefined);
                    }}
                    className="px-8 py-3 bg-white text-black hover:bg-brand-orange hover:text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-500 shadow-xl active:scale-95 group/btn"
                  >
                    <CheckCircle2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    {app.type === 'topics' ? 'Confirm Selection' : 'Authorize & Publish'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* History Archive Table */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Intelligence Archives</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/10">
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Date</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Subject / Content</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Platforms</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.history.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-12 text-center text-white/20 font-light italic">No archival entries found.</td>
                  </tr>
                ) : (
                  data.history.map((item) => (
                    <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group/row">
                      <td className="px-8 py-6 text-sm text-white/40 font-light">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-6">
                        <div className="max-w-md">
                          <p className="text-white font-serif text-base mb-1 truncate group-hover/row:text-brand-orange transition-colors">
                            {item.data.blog_title || item.data.selectedTopic || 'Selected Topic'}
                          </p>
                          <p className="text-[10px] text-white/20 uppercase tracking-widest">{item.type}</p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          {item.data.blog_content && (
                            <div title="Blog" className="p-1.5 rounded bg-white/5 border border-white/10 text-white/40"><Clock className="w-3.5 h-3.5" /></div>
                          )}
                          {item.data.linkedin_content && (
                            <div title="LinkedIn" className="p-1.5 rounded bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5]"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                          )}
                          {item.data.instagram_caption && (
                            <div title="Instagram" className="p-1.5 rounded bg-[#E4405F]/10 border border-[#E4405F]/20 text-[#E4405F]"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                          item.status === 'approved' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}


