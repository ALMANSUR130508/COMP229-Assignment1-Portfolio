import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-10">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-800/50 p-8 rounded-3xl border border-slate-700/80">
        
        {/* Ваша фотография из папки public */}
        <div className="relative group shrink-0">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Almansur Nurtazin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-100">Almansur Nurtazin</h1>
          <p className="text-cyan-400 font-medium">Software Engineering Technology - AI Student</p>
          
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I am a dedicated software engineering student at Centennial College focused on full-stack web applications, relational databases, and machine learning integration. Experienced in modern JavaScript frameworks (React, Vite), C#, Java, and Python backend microservices.
          </p>

          {/* Ссылка на ваше реальное резюме из папки public */}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl transition-all"
            >
              📄 Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;