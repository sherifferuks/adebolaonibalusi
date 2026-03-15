'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function ContentCreationPortal() {
  const [approvals, setApprovals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchApprovals();
  }, []);

  const fetchApprovals = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/approvals/dashboard');
      if (res.ok) {
        const json = await res.json();
        setApprovals(json.data || []);
      }
    } catch (err) {
      console.error('Failed to load approvals', err);
    }
    setLoading(false);
  };

  const handleAction = async (id: number, action: 'approve' | 'reject') => {
    // Optimistic UI update
    setApprovals(prev => prev.filter(app => app.id !== id));
    
    try {
      await fetch('/api/approvals/dashboard', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action })
      });
    } catch (err) {
      console.error('Failed to resolve approval', err);
      // Revert on failure
      fetchApprovals();
    }
  };

  if (loading) return <div className="p-12 text-center text-gray-500">Loading pending tasks...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-serif text-brand-orange mb-8 pb-4 border-b border-gray-200">
        Content Approvals Portal
      </h1>

      {approvals.length === 0 ? (
        <div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-green-500 opacity-50" />
          <p>No pending approvals. You are all caught up!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {approvals.map((app) => (
            <div key={app.id} className="bg-white border text-black border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {app.type}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {new Date(app.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                {/* Topics Review Specifics */}
                {app.type === 'topics' && app.data?.output && (
                  <div className="prose prose-sm max-w-none prose-orange text-black">
                    <div dangerouslySetInnerHTML={{ __html: app.data.output.replace(/\\n/g, '<br/>') }} />
                  </div>
                )}

                {/* Full Content Review Specifics */}
                {app.type === 'content' && app.data && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Blog Title</h3>
                      <p className="text-lg font-serif">{app.data.blog_title}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Generated Blog Article</h3>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-black overflow-y-auto max-h-[300px]">
                        {app.data.blog_content?.substring(0, 1000)}...
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">LinkedIn Post</h3>
                        <div className="bg-blue-50 text-blue-900 p-4 rounded-lg text-sm whitespace-pre-wrap">
                          {app.data.linkedin_content}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Instagram Caption</h3>
                        <div className="bg-pink-50 text-pink-900 p-4 rounded-lg text-sm whitespace-pre-wrap">
                          {app.data.instagram_caption}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
                 <button 
                  onClick={() => handleAction(app.id, 'reject')}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium text-sm flex items-center gap-2 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                  Reject
                </button>
                <button 
                  onClick={() => handleAction(app.id, 'approve')}
                  className="px-6 py-2 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-md font-medium text-sm flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Approve & Resume Workflow
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
