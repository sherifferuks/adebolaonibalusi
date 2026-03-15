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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Global Portal Top Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex items-center gap-6">
              <Link href="/portal" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-brand-orange text-white flex items-center justify-center font-serif font-bold group-hover:bg-brand-orange/90 transition-colors">
                  AO
                </div>
                <span className="font-serif font-medium text-lg text-gray-900 hidden sm:block">
                  Internal Portal
                </span>
              </Link>
              
              {/* Only show the 'Back to Hub' link if we are INSIDE an app */}
              {pathname !== '/portal' && (
                <div className="hidden sm:flex items-center pl-6 border-l border-gray-200">
                  <Link 
                    href="/portal" 
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-orange transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Back to Hub
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
            
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
