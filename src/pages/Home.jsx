import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center gap-8 py-12">
      <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-2">
        Software Engineering & AI Student
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
        Building Intelligent Systems & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Modern Web Solutions</span>
      </h1>

      {/* Mission Statement (Задание 1.c) */}
      <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-2xl max-w-2xl shadow-xl">
        <h2 className="text-lg font-semibold text-cyan-400 mb-2">Mission Statement</h2>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          To bridge full-stack web development with applied machine learning models, delivering scalable, highly accessible, and intuitive software applications designed to solve real-world industry challenges.
        </p>
      </div>

      {/* Перенаправляющие кнопки (Задание 1.c) */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/about"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          Learn About Me
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-semibold rounded-xl transition-all"
        >
          Explore Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;