// "use client";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-16 bg-gradient-to-br from-blue-100 via-white to-purple-100 text-center"
//     >
//       <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">Contact Me</h2>
//       <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8 animate-fadeInUp delay-1">
//         Have a project in mind or want to work together? Let's connect!
//       </p>

//       <form
//         action="https://formspree.io/f/YOUR_FORM_ID"
//         method="POST"
//         className="max-w-md mx-auto space-y-4 animate-fadeInUp delay-2"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
//         >
//           Send Message
//         </button>
//       </form>

//       <div className="mt-8 animate-fadeInUp delay-3">
//         <p className="text-gray-600">Or email me directly:</p>
//         <a
//           href="mailto:vedanta@example.com"
//           className="text-blue-600 font-medium hover:underline"
//         >
//           vedanta@example.com
//         </a>
//       </div>

//       <style jsx>{`
//         /* Fade Up Animation */
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//         .delay-1 {
//           animation-delay: 0.2s;
//         }
//         .delay-2 {
//           animation-delay: 0.4s;
//         }
//         .delay-3 {
//           animation-delay: 0.6s;
//         }
//       `}</style>
//     </section>
//   );
// }







// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//     // Reset form
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-6 w-6" />,
//       title: "Email",
//       details: "alex.chen@example.com",
//       link: "mailto:alex.chen@example.com"
//     },
//     {
//       icon: <Phone className="h-6 w-6" />,
//       title: "Phone",
//       details: "+1 (555) 123-4567",
//       link: "tel:+15551234567"
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       title: "Location",
//       details: "San Francisco, CA",
//       link: null
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <Github className="h-5 w-5" />,
//       name: "GitHub",
//       url: "https://github.com",
//       color: "hover:text-foreground"
//     },
//     {
//       icon: <Linkedin className="h-5 w-5" />,
//       name: "LinkedIn",
//       url: "https://linkedin.com",
//       color: "hover:text-blue-600"
//     },
//     {
//       icon: <Twitter className="h-5 w-5" />,
//       name: "Twitter",
//       url: "https://twitter.com",
//       color: "hover:text-blue-400"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
//           <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
//             Ready to start your next project? Let's discuss how I can help bring your ideas to life.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <Card className="bg-gradient-card border-card-border shadow-custom-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl">Send Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Full Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full min-h-[120px]"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>
                
//                 <Button 
//                   type="submit" 
                
//                   size="lg" 
//                   className="w-full group"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             {/* Contact Details */}
//             <div>
//               <h3 className="text-2xl font-bold mb-6 text-foreground">
//                 Contact Information
//               </h3>
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-custom-md">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <div className="text-sm font-medium text-foreground-muted">
//                         {info.title}
//                       </div>
//                       {info.link ? (
//                         <a
//                           href={info.link}
//                           className="text-foreground hover:text-primary transition-colors"
//                         >
//                           {info.details}
//                         </a>
//                       ) : (
//                         <div className="text-foreground">{info.details}</div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-foreground">
//                 Follow Me
//               </h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground-muted transition-all duration-300 hover:scale-110 ${social.color} hover:shadow-custom-md`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <Card className="bg-gradient-card border-card-border">
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-bold mb-3 text-foreground">
//                   Current Availability
//                 </h3>
//                 <div className="flex items-center space-x-2 mb-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-foreground font-medium">Available for new projects</span>
//                 </div>
//                 <p className="text-sm text-foreground-muted">
//                   Typically respond within 24 hours
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// "use client"

// import { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Get In Touch</h2>
//           <div className="section-divider"></div>
//           <p className="section-description">
//             Ready to start your next project? Let's discuss how I can help bring your ideas to life.
//           </p>
//         </div>

//         <div className="contact-container">
//           {/* Contact Form */}
//           <div className="contact-form">
//             <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="form-group">
//                 <label htmlFor="name" className="form-label">Full Name</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="form-input"
//                   placeholder="Your name"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="form-input"
//                   placeholder="your.email@example.com"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="form-input form-textarea"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>
              
//               <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
//                 Send Message
//                 <svg style={{ marginLeft: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <line x1="22" y1="2" x2="11" y2="13"></line>
//                   <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
//                 </svg>
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="contact-info">
//             <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Contact Information</h3>
            
//             <div className="contact-item">
//               <div className="contact-icon">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                 </svg>
//               </div>
//               <div className="contact-details">
//                 <div className="contact-title">Email</div>
//                 <a href="mailto:alex.chen@example.com" className="contact-value">
//                   alex.chen@example.com
//                 </a>
//               </div>
//             </div>

//             <div style={{ textAlign: 'center', background: 'var(--gradient-card)', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid hsl(var(--color-card-border))' }}>
//               <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem' }}>Current Availability</h3>
//               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
//                 <div className="status-dot"></div>
//                 <span style={{ fontWeight: '500' }}>Available for new projects</span>
//               </div>
//               <p style={{ fontSize: '0.875rem', color: 'hsl(var(--color-foreground-muted))' }}>
//                 Typically respond within 24 hours
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


















"use client";

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once on scroll
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form" data-aos="fade-right" data-aos-delay="200">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send Message
                <svg style={{ marginLeft: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info" data-aos="fade-left" data-aos-delay="400">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-details">
                <div className="contact-title">Email</div>
                <a href="mailto:alex.chen@example.com" className="contact-value">
                  alex.chen@example.com
                </a>
              </div>
            </div>

            <div
              style={{ textAlign: 'center', background: 'linear-gradient(90deg, #ff007f, #ff6699, #ffcc99)', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid hsl(var(--color-card-border))' }}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem', color: '#fff' }}>Current Availability</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#fff' }}>
                <div className="status-dot"></div>
                <span style={{ fontWeight: '500' }}>Available for new projects</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#fff' }}>
                Typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
