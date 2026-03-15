import Link from 'next/link';
import { PenSquare, Bot, FileText, ArrowRight } from 'lucide-react';

// This is the main directory of internal apps
export default function PortalHub() {
  const apps = [
    {
      id: 'content-creation',
      name: 'Content Approvals',
      description: 'Review and approve AI-generated legal articles, LinkedIn posts, and Instagram content from n8n.',
      icon: PenSquare,
      color: 'bg-orange-50 text-brand-orange',
      href: '/portal/content-creation',
      status: 'Active'
    },
    {
      id: 'future-app-1',
      name: 'Client Onboarding',
      description: 'Automated workflow for processing new client intake forms and generating engagement letters.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600',
      href: '#',
      status: 'Coming Soon'
    },
    {
      id: 'future-app-2',
      name: 'Legal Research Assistant',
      description: 'Query the internal knowledge base and Nigerian case law securely.',
      icon: Bot,
      color: 'bg-purple-50 text-purple-600',
      href: '#',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
       <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-brand-orange rounded-full opacity-60" />
        <h1 className="text-4xl font-serif text-white mb-3 tracking-tight">Master Command</h1>
        <p className="text-white/50 text-lg font-light tracking-wide lg:max-w-2xl">
          Welcome to the central intelligence hub of Adebola, Onibalusi & Co. 
          Select a node to begin operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app) => {
          const Icon = app.icon;
          const isActive = app.status === 'Active';
          
          return (
            <Link 
              key={app.id} 
              href={isActive ? app.href : '#'}
              className={`group relative flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-[2rem] border transition-all duration-500 p-8 overflow-hidden ${
                isActive 
                ? 'border-white/10 hover:border-brand-orange/50 hover:bg-white/[0.08] cursor-pointer' 
                : 'border-dashed border-white/5 opacity-40 cursor-default'
              }`}
            >
              {/* Card accent glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-orange/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${isActive ? 'text-brand-orange' : 'text-white/20'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg border backdrop-blur-md ${
                  isActive 
                  ? 'border-brand-orange/20 bg-brand-orange/5 text-brand-orange' 
                  : 'border-white/5 bg-white/5 text-white/30'
                }`}>
                  {app.status}
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed font-light tracking-wide min-h-[4rem]">
                  {app.description}
                </p>
              </div>
              
              {isActive && (
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-white/30 group-hover:text-white transition-all duration-500 uppercase tracking-[0.2em] relative z-10">
                  <span>Enter Interface</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

