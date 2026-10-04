import React from 'react';

const educationList = [
  {
    degree: 'Software Engineering Technology - Artificial Intelligence',
    institution: 'Centennial College',
    dates: '2025 - Present',
    details: 'Focusing on C#, Java OOP, Web Development (COMP229), Oracle SQL, Data Structures, and Applied Machine Learning.'
  },
  {
    degree: 'Software Engineering & iOS Development Program',
    institution: 'Academy ShaG',
    dates: '2024 - 2025',
    details: 'Completed practical training in SwiftUI mobile app design, Git workflows, and front-end interface engineering.'
  }
];

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-4">
      {/* Академические квалификации (Задание 1.g) */}
      <h1 className="text-3xl font-bold text-center">Educational Background</h1>

      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <div key={index} className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl relative pl-8 border-l-4 border-l-cyan-400">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">{edu.dates}</span>
            <h2 className="text-xl font-bold text-slate-100 mt-1">{edu.degree}</h2>
            <p className="text-slate-300 font-medium text-sm">{edu.institution}</p>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;