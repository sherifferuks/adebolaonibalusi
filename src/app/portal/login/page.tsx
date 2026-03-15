'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PortalLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      if (res.ok) {
        router.push('/portal');
        router.refresh();
      } else {
        setError('Verification failed. Please try again.');
      }
    } catch {
      setError('A system error occurred. Please contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      
      <div className="w-full max-w-md relative z-20">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm group hover:border-brand-orange/50 transition-colors duration-500">
            <Lock className="w-8 h-8 text-white/50 group-hover:text-brand-orange transition-colors" />
          </div>
          <h1 className="text-4xl font-serif text-white mb-3 tracking-tight">Portal Access</h1>
          <p className="text-white/40 font-light tracking-wide text-center uppercase text-[11px]">
            Adebola, Onibalusi & Co. Internal Systems
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[12px] font-medium text-white/50 uppercase tracking-widest">
                  Secure Password
                </label>
                <div className="flex items-center gap-1.5 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <ShieldCheck className="w-3 h-3 text-brand-orange" />
                  <span className="text-[10px] text-white">End-to-End Encrypted</span>
                </div>
              </div>
              
              <div className="relative group/input">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-brand-orange/50 transition-all text-lg font-light tracking-widest"
                  placeholder="••••••••••••"
                  autoFocus
                  required
                />
              </div>
            </div>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                <p className="text-red-400 text-xs font-medium">{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full group/btn relative bg-white text-black py-4 rounded-2xl font-semibold tracking-tight overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors">
                {isLoading ? 'Verifying...' : (
                  <>
                    Grant Access
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-[11px] text-white/20 space-y-1">
          <p>© 2026 Adebola, Onibalusi & Co.</p>
          <p>Restricted Access - Internal Personnel Only</p>
        </div>
      </div>
    </div>
  );
}

