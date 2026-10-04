import React from 'react';

const projects = [
  {
    title: 'Aman AI NLP Microservices',
    role: 'Backend & NLP Integration Developer',
    outcome: 'Architected RESTful API endpoints and backend prompt processing for enterprise language translation pipeline.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    tags: ['Python', 'REST API', 'NLP']
  },
  {
    title: 'Toronto Smart Parking Platform',
    role: 'Lead Systems Designer',
    outcome: 'Designed UML domain models and relational database architecture supporting real-time urban parking slot booking.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600',
    tags: ['Oracle SQL', 'UML', 'System Architecture']
  },
  {
    title: 'Habit Tracker iOS Application',
    role: 'Mobile Developer',
    outcome: 'Built a native iOS application using SwiftUI with local storage persistence and dynamic weather API syncing.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
    tags: ['SwiftUI', 'iOS', 'REST API']
  }
];

const Projects = () => {
  return (
    <div className="space-y-8 py-4">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl font-bold">Featured Projects</h1>
        <p className="text-slate-400 text-sm">Key developments highlighting software engineering and backend capabilities.</p>
      </div>

      {/* Список минимум из 3 проектов (Задание 1.f) */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-slate-800/60 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all">
            <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-bold text-slate-100">{proj.title}</h2>
              <p className="text-xs font-semibold text-cyan-400">Role: {proj.role}</p>
              <p className="text-slate-300 text-sm leading-snug">{proj.outcome}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-700/60 text-slate-300 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;