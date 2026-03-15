'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, LogOut } from 'lucide-react';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Don't show the dashboard nav on the login page itself
  if (pathname === '/portal/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    // A simple client-side logout just clears the cookie by expiring it
    document.cookie = "portal_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/portal/login';
  };

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans">
      {/* Global Portal Top Nav */}
      <header className="fixed top-0 w-full z-50 py-6 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-3 rounded-full pointer-events-auto">
          
          <div className="flex items-center gap-6">
            <Link href="/portal" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/logomark.png" 
                  alt="AO Logomark" 
                  className="w-full h-full object-contain brightness-100"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-medium text-base text-white leading-tight">
                  Internal Systems
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">
                  Secure Node
                </span>
              </div>
            </Link>
            
            {/* Navigation vertical divider */}
            <div className="hidden sm:block w-px h-6 bg-white/10 mx-2" />

            {/* Back to Hub - only if sub-page */}
            {pathname !== '/portal' && (
              <Link 
                href="/portal" 
                className="flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-brand-orange transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard Hub
              </Link>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-[12px] font-semibold text-white/40 hover:text-red-500 transition-colors uppercase tracking-tight"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area - with top padding for fixed header */}
      <main className="flex-1 w-full max-w-7xl mx-auto pt-32 pb-16 px-6 lg:px-8 relative z-10">
        {children}
      </main>
      
      {/* Background radial glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,80,0,0.05)_0%,transparent_50%)] pointer-events-none" />
    </div>
  );
}

