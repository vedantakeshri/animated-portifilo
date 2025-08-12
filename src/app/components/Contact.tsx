'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/vedantakeshri',
      label: 'GitHub',
      className: 'github'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/vedanta-keshri-35b0a0212/',
      label: 'LinkedIn',
      className: 'linkedin'
    },
  
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let&apos;s Connect
          </h2>
          <p className="section-description">
            Ready to bring your next project to life? I&apos;d love to hear about your ideas and discuss how we can work together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div>
              <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>Get In Touch</h3>
              <p className="text-gray-300" style={{ marginBottom: '1.5rem' }}>
                I&apos;m always interested in discussing new opportunities, collaborations, 
                and challenging projects. Whether you&apos;re looking for a frontend developer 
                or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-icon email">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">vedantakeshri@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-icon message">
                    <MessageSquare className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Response Time</p>
                    <p className="text-gray-400 text-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect on Social</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.className}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Send a Message</h3>
            </div>
            <div className="card-content">
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>
            © 2025 Vedanta Keshri. Built with Next.js and pure CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
