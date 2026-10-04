import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Almansur Nurtazin. COMP229 Web Application Development.</p>
      </div>
    </footer>
  );
};

export default Footer;