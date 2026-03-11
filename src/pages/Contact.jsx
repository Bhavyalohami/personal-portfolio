// import React, { useState } from 'react';
// import { 
//   FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, 
//   FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle,
//   FaExclamationCircle, FaTerminal 
// } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setStatus({
//         type: 'success',
//         message: 'Message transmitted successfully! I\'ll get back to you within 24 hours.'
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setLoading(false);
//     }, 1500);
//   };

//   const contactInfo = [
//     {
//       icon: <FaEnvelope />,
//       title: 'EMAIL',
//       value: 'bhavya@example.com',
//       link: 'mailto:bhavya@example.com',
//     },
//     {
//       icon: <FaPhone />,
//       title: 'PHONE',
//       value: '+91 98765 43210',
//       link: 'tel:+919876543210',
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: 'LOCATION',
//       value: 'Jaipur, Rajasthan, India',
//       link: 'https://maps.google.com',
//     },
//     {
//       icon: <FaTerminal />,
//       title: 'STATUS',
//       value: 'AVAILABLE FOR WORK',
//       link: '#',
//     },
//   ];

//   const socialLinks = [
//     { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
//     { icon: <FaGithub />, url: '#', label: 'GitHub' },
//     { icon: <FaTwitter />, url: '#', label: 'Twitter' },
//     { icon: <FaEnvelope />, url: '#', label: 'Email' },
//   ];

//   return (
//     <div className="pt-24 min-h-screen">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Hero Section */}
//         <div className="text-center mb-12 animate-fade-in-up">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             LET'S <span className="bg-gradient-to-r from-ice-blue to-deep-ice bg-clip-text text-transparent">CONNECT</span>
//           </h1>
//           <p className="text-text-light/60 text-lg max-w-2xl mx-auto font-mono">
//             Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           {/* Left Column - Contact Info */}
//           <div className="animate-fade-in-up">
//             <h2 className="text-3xl font-bold mb-8 text-text-light">GET IN TOUCH</h2>
//             <p className="text-text-light/80 mb-8 leading-relaxed">
//               Feel free to reach out for collaborations or just a friendly hello.
//               I typically respond within 24 hours. Let's create something amazing together!
//             </p>

//             {/* Contact Details */}
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={info.title}
//                   href={info.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     flex items-center space-x-4 p-4
//                     bg-card rounded-xl border border-steel
//                     hover:border-ice-blue hover:bg-steel/50
//                     transition-all duration-300
//                     group
//                     animate-fade-in-up
//                   "
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="w-12 h-12 bg-gradient-ice rounded-lg flex items-center justify-center text-graphite text-xl group-hover:scale-110 transition-transform duration-300">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-ice-blue font-mono">{info.title}</h4>
//                     <p className="text-text-light group-hover:text-soft-ice transition-colors">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-xl font-semibold mb-4 text-ice-blue">CONNECT WITH ME</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={social.label}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.label}
//                     className={`
//                       w-12 h-12 flex items-center justify-center
//                       bg-card text-soft-ice rounded-lg border border-steel
//                       hover:text-ice-blue hover:border-ice-blue hover:scale-110
//                       transition-all duration-300
//                       animate-fade-in-up
//                     `}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="mt-8 p-6 bg-gradient-card rounded-xl border border-ice-blue/30 animate-fade-in-up">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="w-3 h-3 bg-deep-ice rounded-full animate-pulse"></div>
//                 <span className="font-semibold text-ice-blue font-mono">CURRENTLY AVAILABLE FOR NEW PROJECTS</span>
//               </div>
//               <p className="text-soft-ice text-sm">
//                 I'm open to full-time roles, freelance work, and collaborations.
//                 Estimated response time: 2-4 hours during business days.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
//             <h2 className="text-3xl font-bold mb-8 text-text-light">SEND A MESSAGE</h2>
            
//             {/* Status Message */}
//             {status.message && (
//               <div className={`
//                 mb-6 p-4 rounded-xl flex items-center space-x-3
//                 ${status.type === 'success' 
//                   ? 'bg-gradient-to-r from-card to-steel text-ice-blue border border-ice-blue/30' 
//                   : 'bg-gradient-to-r from-card to-steel text-red-400 border border-red-400/30'
//                 }
//                 animate-fade-in-up
//               `}>
//                 {status.type === 'success' 
//                   ? <FaCheckCircle className="text-ice-blue text-xl" />
//                   : <FaExclamationCircle className="text-red-400 text-xl" />
//                 }
//                 <span className="font-mono">{status.message}</span>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-text-light/80 mb-2 font-mono">
//                     FULL NAME *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="
//                       w-full px-4 py-3 rounded-lg border border-steel
//                       focus:ring-2 focus:ring-ice-blue focus:border-ice-blue
//                       outline-none transition-all duration-300
//                       bg-card text-text-light placeholder:text-text-light/40
//                       font-mono
//                     "
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-text-light/80 mb-2 font-mono">
//                     EMAIL ADDRESS *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="
//                       w-full px-4 py-3 rounded-lg border border-steel
//                       focus:ring-2 focus:ring-ice-blue focus:border-ice-blue
//                       outline-none transition-all duration-300
//                       bg-card text-text-light placeholder:text-text-light/40
//                       font-mono
//                     "
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Subject */}
//               <div>
//                 <label className="block text-sm font-medium text-text-light/80 mb-2 font-mono">
//                   SUBJECT
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="
//                     w-full px-4 py-3 rounded-lg border border-steel
//                     focus:ring-2 focus:ring-ice-blue focus:border-ice-blue
//                     outline-none transition-all duration-300
//                     bg-card text-text-light placeholder:text-text-light/40
//                     font-mono
//                   "
//                   placeholder="Project Inquiry"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-medium text-text-light/80 mb-2 font-mono">
//                   MESSAGE *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="6"
//                   className="
//                     w-full px-4 py-3 rounded-lg border border-steel
//                     focus:ring-2 focus:ring-ice-blue focus:border-ice-blue
//                     outline-none transition-all duration-300 resize-none
//                     bg-card text-text-light placeholder:text-text-light/40
//                     font-mono
//                   "
//                   placeholder="Hello! I'd like to discuss a potential project..."
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="
//                   w-full py-4 px-6 bg-gradient-ice text-graphite
//                   font-semibold rounded-lg hover:shadow-xl
//                   hover:shadow-ice-blue/20 transition-all duration-300
//                   disabled:opacity-70 disabled:cursor-not-allowed
//                   flex items-center justify-center space-x-3 font-mono
//                   hover:scale-[1.02]
//                 "
//               >
//                 {loading ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-graphite border-t-transparent rounded-full animate-spin"></div>
//                     <span>TRANSMITTING...</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane />
//                     <span>SEND MESSAGE</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="bg-card rounded-2xl p-8 border border-steel animate-fade-in-up">
//           <h2 className="text-3xl font-bold text-center mb-8 text-text-light">BASED IN</h2>
//           <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-r from-steel to-card">
//             {/* Map Placeholder */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <div className="w-20 h-20 bg-gradient-ice rounded-full flex items-center justify-center text-graphite text-3xl mb-4 animate-glow">
//                 <FaMapMarkerAlt />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-2xl font-bold text-ice-blue mb-2">JAIPUR, RAJASTHAN</h3>
//                 <p className="text-text-light/60 font-mono">THE PINK CITY • INDIA</p>
//               </div>
//             </div>
            
//             {/* Map Coordinates */}
//             <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-steel">
//               <div className="text-sm font-mono text-ice-blue">
//                 26.9124° N, 75.7873° E
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'bhavya@example.com', link: 'mailto:bhavya@example.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Jaipur, India', link: null },
    { icon: <FaClock />, label: 'Response Time', value: 'Within 24 hours', link: null },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' },
  ];

  return (
    <div className="bg-graphite text-text-light pt-24 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 w-full h-full bg-gradient-mesh opacity-20 pointer-events-none" style={{ y: y1 }} />
      <motion.div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-blue/5 via-transparent to-transparent pointer-events-none" style={{ y: y2 }} />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4"><span className="animated-gradient-text">GET IN TOUCH</span></h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-ice-blue mb-6">Let's connect</h2>
            <p className="text-lg text-text-light/80 mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ice-blue/10 rounded-xl flex items-center justify-center text-ice-blue text-xl">{item.icon}</div>
                  <div>
                    <p className="text-sm text-text-light/60">{item.label}</p>
                    {item.link ? <a href={item.link} className="text-lg hover:text-ice-blue transition">{item.value}</a> : <p className="text-lg">{item.value}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-sm text-text-light/60 mb-3">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a key={i} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -3 }} className="w-12 h-12 rounded-full border border-steel flex items-center justify-center text-2xl text-soft-ice hover:text-ice-blue hover:border-ice-blue transition-all">
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-steel h-48">
              <img src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&w=800" alt="Jaipur" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-card/50 p-8 rounded-2xl border border-steel">
              <h2 className="text-2xl font-display font-bold text-ice-blue mb-6">Send a message</h2>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-300 rounded-xl">
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-mono text-ice-blue mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-graphite border border-steel rounded-xl focus:border-ice-blue outline-none transition text-text-light" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-ice-blue mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-graphite border border-steel rounded-xl focus:border-ice-blue outline-none transition text-text-light" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-ice-blue mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-graphite border border-steel rounded-xl focus:border-ice-blue outline-none transition text-text-light" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-ice-blue mb-2">Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-graphite border border-steel rounded-xl focus:border-ice-blue outline-none transition text-text-light resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-ice text-graphite font-bold rounded-xl hover:shadow-lg hover:shadow-ice-blue/20 transition-all flex items-center justify-center gap-2 text-lg">
                  <FaPaperPlane /> Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Additional Section: FAQ or Office Hours */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-20 text-center">
          <h2 className="text-3xl font-display font-bold mb-4 text-ice-blue">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 p-6 rounded-xl border border-steel text-left">
              <h3 className="font-bold text-ice-blue mb-2">What is your typical response time?</h3>
              <p className="text-text-light/80">I usually respond within 24 hours during weekdays.</p>
            </div>
            <div className="bg-card/50 p-6 rounded-xl border border-steel text-left">
              <h3 className="font-bold text-ice-blue mb-2">Do you take freelance projects?</h3>
              <p className="text-text-light/80">Yes, I'm open to freelance and contract work.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;