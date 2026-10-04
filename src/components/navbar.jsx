import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Кастомный логотип с инициалами (Задание 1.b) */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rotate-45 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-0 transition-transform duration-300">
            <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 font-black text-slate-900 text-sm tracking-tighter">
              AN
            </span>
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Almansur.dev
          </span>
        </Link>

        {/* Навигационное меню (Задание 1.a) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;