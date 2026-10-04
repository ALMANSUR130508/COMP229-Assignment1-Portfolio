import React from 'react';

const services = [
  {
    title: 'Web Application Development',
    desc: 'Creating responsive, fast full-stack applications with React, Tailwind CSS, and Node.js RESTful interfaces.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Database Architecture & SQL',
    desc: 'Designing ER diagrams, table normalization, and writing query logic using Oracle SQL and PostgreSQL.',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'General Software Engineering',
    desc: 'Object-oriented programming in C# and Java, algorithm development, and CLI automated scripting.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600'
  }
];

const Services = () => {
  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      {/* Перечень услуг с изображениями (Задание 1.h) */}
      <h1 className="text-3xl font-bold text-center">Services Offered</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-slate-800/60 border border-slate-700/80 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
            <img src={srv.img} alt={srv.title} className="w-full h-40 object-cover" />
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-bold text-cyan-400">{srv.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;