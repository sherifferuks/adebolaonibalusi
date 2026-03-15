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
    <div className="max-w-5xl mx-auto space-y-8">
       <div>
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-lg">Select an internal application to continue.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => {
          const Icon = app.icon;
          const isActive = app.status === 'Active';
          
          return (
            <Link 
              key={app.id} 
              href={isActive ? app.href : '#'}
              className={`relative flex flex-col h-full bg-white rounded-2xl border ${isActive ? 'border-gray-200 hover:border-brand-orange hover:shadow-md cursor-pointer' : 'border-dashed border-gray-200 opacity-60 cursor-default'} transition-all p-6 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${app.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {app.status}
                </span>
              </div>
              
              <h3 className="text-xl font-serif text-gray-900 mb-2">{app.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                {app.description}
              </p>
              
              {isActive && (
                <div className="mt-6 flex items-center text-sm font-semibold text-brand-orange group-hover:gap-1.5 gap-1 transition-all">
                  Launch App <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
