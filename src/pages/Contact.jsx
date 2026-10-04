import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Захват данных и перенаправление на Home (Задание 1.j)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Captured Form Data:', formData);
    alert(`Thank you ${formData.firstName}! Message received. Redirecting to Home page...`);
    navigate('/');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto py-4">
      {/* Контактная панель (Задание 1.i) */}
      <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl flex flex-col justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-100">Get in Touch</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Feel free to reach out for business inquiries, software engineering collaborations, or portfolio questions.
          </p>
          <div className="space-y-3 pt-4 text-sm text-slate-300">
            <p>📍 <strong className="text-slate-100">Location:</strong> Toronto, ON, Canada</p>
            <p>📧 <strong className="text-slate-100">Email:</strong> contact@almansur.dev</p>
            <p>🎓 <strong className="text-slate-100">College:</strong> Centennial College</p>
          </div>
        </div>
      </div>

      {/* Форма обратной связи (Задание 1.j) */}
      <form onSubmit={handleSubmit} className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">First Name</label>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Last Name</label>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Number</label>
            <input
              required
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
          <textarea
            required
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 rounded-lg text-sm transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;