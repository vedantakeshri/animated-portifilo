'use client';

import { useState } from 'react';

import {
  Mail,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: 'https://github.com/vedantakeshri',
      label: 'GitHub',
    },

    {
      icon: <Linkedin size={22} />,
      href: 'https://www.linkedin.com/in/vedanta-keshri-35b0a0212/',
      label: 'LinkedIn',
    },
  ];

  const contactCards = [
    {
      icon: <Mail size={22} />,
      title: 'Email',
      value: 'vedantakeshri@gmail.com',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },


    {
      icon: <MapPin size={22} />,
      title: 'Location',
      value: 'Jaipur, Rajasthan',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
    },

    {
      icon: <MessageSquare size={22} />,
      title: 'Response Time',
      value: 'Within 24 Hours',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-md">
            <Sparkles size={16} />
            Let’s Connect
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Have A Project In Mind?
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Let’s Talk
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I’m currently open to frontend development
            opportunities, freelance projects, collaborations,
            and modern SaaS/dashboard UI work.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Intro Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">
                Get In Touch
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Whether you have a frontend project, SaaS idea,
                startup collaboration, or job opportunity —
                feel free to reach out. I enjoy building modern,
                responsive, and high-performance web applications.
              </p>

              {/* Social */}
              <div className="mt-8 flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/5"
                >
                  <div
                    className={`mb-5 inline-flex rounded-2xl p-4 ${card.bg}`}
                  >
                    <div className={card.color}>
                      {card.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {card.title}
                  </h4>

                  <p className="mt-2 text-gray-400">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white">
                Send Me A Message
              </h3>

              <p className="mt-3 text-gray-400">
                Fill out the form below and I’ll get back to
                you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-400 focus:bg-blue-500/5"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-400 focus:bg-blue-500/5"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-400 focus:bg-blue-500/5"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-6 py-5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600"
              >
                <Send size={18} />

                Send Message

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-10 text-center">
          <p className="text-gray-500">
            © 2026 Vedanta Keshri • Built with Next.js,
            TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;