// import React, { useEffect, useState, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import {
//   FaReact, FaNodeJs, FaPython, FaVuejs, FaAngular, FaDocker,
//   FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaPlay, FaCode, FaRocket
// } from 'react-icons/fa';
// import { SiNextdotjs, SiDjango, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

// const Home = () => {
//   const { scrollYProgress } = useScroll();
//   const heroRef = useRef(null);

//   // Stats data
//   const stats = [
//     { value: '5+', label: 'Years Experience', icon: <FaRocket /> },
//     { value: '25', label: 'Projects Completed', icon: <FaCode /> },
//     { value: '15', label: 'Happy Clients', icon: <FaGithub /> },
//     { value: '∞', label: 'Coffee Consumed', icon: <FaPython /> },
//   ];

//   // Services
//   const services = [
//     {
//       title: 'Full-Stack Development',
//       desc: 'End-to-end web applications with React, Node.js, and modern databases.',
//       icon: <FaReact className="text-3xl" />,
//       color: '#61DAFB',
//     },
//     {
//       title: 'Cloud Architecture',
//       desc: 'Scalable, secure cloud solutions on AWS, Docker, and serverless.',
//       icon: <FaDocker className="text-3xl" />,
//       color: '#2496ED',
//     },
//     {
//       title: 'UI/UX Design',
//       desc: 'Beautiful, intuitive interfaces with Tailwind and Framer Motion.',
//       icon: <SiTailwindcss className="text-3xl" />,
//       color: '#06B6D4',
//     },
//     {
//       title: 'Performance Optimization',
//       desc: 'Lightning-fast websites with optimized code and CDN delivery.',
//       icon: <FaNodeJs className="text-3xl" />,
//       color: '#339933',
//     },
//   ];

//   // Process steps
//   const process = [
//     { step: '01', title: 'Discovery', desc: 'Understanding your vision and goals.' },
//     { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and feedback.' },
//     { step: '03', title: 'Development', desc: 'Agile sprints with regular updates.' },
//     { step: '04', title: 'Launch', desc: 'Deployment, testing, and ongoing support.' },
//   ];

//   // Testimonials
//   const testimonials = [
//     { name: 'Alex Johnson', role: 'CEO, TechCorp', text: 'Bhavya delivered an exceptional product ahead of schedule. His attention to detail and technical expertise are unmatched.', avatar: 'https://i.pravatar.cc/150?img=1' },
//     { name: 'Sarah Chen', role: 'Product Manager, StartupX', text: 'Working with Bhavya was a game-changer. He transformed our vague idea into a polished, scalable platform.', avatar: 'https://i.pravatar.cc/150?img=2' },
//     { name: 'Mike Davis', role: 'Founder, DesignStudio', text: 'The code quality and architecture are top-notch. Highly recommended for any complex project.', avatar: 'https://i.pravatar.cc/150?img=3' },
//   ];

//   // Blog posts
//   const posts = [
//     { title: 'Modern React Patterns in 2024', date: 'Feb 12, 2024', readTime: '5 min', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800' },
//     { title: 'Scaling Node.js Applications', date: 'Jan 28, 2024', readTime: '7 min', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800' },
//     { title: 'Docker for Beginners', date: 'Jan 10, 2024', readTime: '4 min', image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800' },
//   ];

//   return (
//     <div className="bg-graphite text-text-light">
//       {/* Progress Bar */}
//       {/* <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-ice z-50 origin-left" style={{ scaleX: scrollYProgress }} /> */}

//       {/* HERO SECTION */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left */}
//             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//               <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-ice-blue/10 border border-ice-blue/30 text-ice-blue text-sm font-mono mb-6">
//                 <span className="w-2 h-2 bg-deep-ice rounded-full animate-pulse"></span>
//                 <span>AVAILABLE FOR WORK</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
//                 <span className="text-text-light">Hi, I'm </span>
//                 <span className="animated-gradient-text">Bhavya</span>
//               </h1>
//               <h2 className="text-2xl md:text-3xl text-soft-ice mt-4 font-light">Full-Stack Developer & Cloud Architect</h2>
//               <p className="text-lg text-text-light/70 mt-6 max-w-xl leading-relaxed">
//                 I build scalable, high-performance web applications that blend cutting-edge technology with exceptional user experience. Let's turn your ideas into reality.
//               </p>
//               <div className="flex flex-wrap gap-4 mt-8">
//                 <Link to="/projects" className="px-8 py-3 bg-gradient-ice text-graphite font-semibold rounded-xl hover:shadow-lg hover:shadow-ice-blue/20 transition-all">
//                   View My Work
//                 </Link>
//                 <Link to="/contact" className="px-8 py-3 border border-ice-blue text-ice-blue font-semibold rounded-xl hover:bg-ice-blue/10 transition-all">
//                   Let's Talk
//                 </Link>
//               </div>
//             </motion.div>
//             {/* Right - floating icons */}
//             <motion.div className="hidden lg:flex relative h-[400px] items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//               <div className="relative w-[300px] h-[300px]">
//                 {[FaReact, SiNextdotjs, FaNodeJs, SiDjango, SiTypescript, SiMongodb].map((Icon, i) => {
//                   const angle = (i / 6) * Math.PI * 2;
//                   const radius = 120;
//                   return (
//                     <motion.div
//                       key={i}
//                       className="absolute w-14 h-14 bg-card/80 backdrop-blur-lg rounded-xl border border-ice-blue/30 flex items-center justify-center text-3xl"
//                       style={{
//                         left: `calc(50% + ${Math.cos(angle) * radius}px)`,
//                         top: `calc(50% + ${Math.sin(angle) * radius}px)`,
//                         transform: 'translate(-50%, -50%)',
//                         color: ['#61DAFB', '#000000', '#339933', '#092E20', '#3178C6', '#47A248'][i],
//                       }}
//                       animate={{
//                         scale: [1, 1.2, 1],
//                         rotate: [0, 10, -10, 0],
//                       }}
//                       transition={{ duration: 6, repeat: Infinity, delay: i * 0.5 }}
//                     >
//                       <Icon />
//                     </motion.div>
//                   );
//                 })}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="mt-[55px] ml-[50px] w-24 h-24 rounded-full bg-gradient-ice opacity-20 animate-pulse"></div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//         <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <FaArrowDown className="text-ice-blue/50 text-xl" />
//         </motion.div>
//       </section>

//       {/* STATS SECTION */}
//       <section className="py-20 bg-gradient-to-b from-transparent to-steel/30">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, i) => (
//               <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
//                 <div className="text-4xl font-bold text-ice-blue mb-2">{stat.value}</div>
//                 <div className="text-sm text-text-light/50 font-mono uppercase tracking-wider">{stat.label}</div>
//                 <div className="mt-3 text-ice-blue/30 text-2xl">{stat.icon}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section className="py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//               <span className="animated-gradient-text">WHAT I DO</span>
//             </h2>
//             <p className="text-lg text-text-light/60 max-w-2xl mx-auto">I offer a wide range of services to help you build, scale, and optimize your digital products.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, i) => (
//               <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group bg-card/50 p-6 rounded-2xl border border-steel hover:border-ice-blue/50 hover:shadow-lg hover:shadow-ice-blue/5 transition-all">
//                 <div className="w-14 h-14 rounded-xl bg-gradient-ice/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ color: service.color }}>
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-text-light mb-2">{service.title}</h3>
//                 <p className="text-text-light/60 text-sm leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS SECTION */}
//       <section className="py-24 bg-steel/20">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//               MY <span className="animated-gradient-text">PROCESS</span>
//             </h2>
//             <p className="text-lg text-text-light/60 max-w-2xl mx-auto">A proven workflow that ensures your project is delivered on time and exceeds expectations.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {process.map((step, i) => (
//               <motion.div key={step.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative">
//                 <div className="text-4xl font-mono text-ice-blue/30 mb-2">{step.step}</div>
//                 <h3 className="text-xl font-semibold text-text-light mb-2">{step.title}</h3>
//                 <p className="text-text-light/60 text-sm">{step.desc}</p>
//                 {i < 3 && <div className="hidden md:block absolute top-4 left-20 w-full h-px bg-gradient-to-r from-ice-blue/50 to-transparent"></div>}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS PREVIEW */}
//       <section className="py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//               <span className="animated-gradient-text">RECENT PROJECTS</span>
//             </h2>
//             <p className="text-lg text-text-light/60 max-w-2xl mx-auto">A selection of my favorite works, each one a unique story of problem-solving and innovation.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[1, 2, 3, 4].map((_, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group relative h-64 rounded-2xl overflow-hidden">
//                 <img src={`https://images.unsplash.com/photo-${i + 1550000000000 + i * 100}?auto=format&fit=crop&w=800`} alt="project" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <h3 className="text-2xl font-bold text-white mb-2">Project {i + 1}</h3>
//                   <p className="text-white/70 text-sm mb-3">React, Node.js, MongoDB</p>
//                   <Link to={`/projects/${i + 1}`} className="inline-flex items-center text-ice-blue hover:underline">
//                     View Details <FaPlay className="ml-2 text-xs" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Link to="/projects" className="px-8 py-3 border border-ice-blue text-ice-blue font-semibold rounded-xl hover:bg-ice-blue/10 transition-all">
//               View All Projects
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-24 bg-steel/20">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//               <span className="animated-gradient-text">WHAT CLIENTS SAY</span>
//             </h2>
//             <p className="text-lg text-text-light/60 max-w-2xl mx-auto">I don't just build software—I build relationships. Here's what people think about working with me.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((t, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card/50 p-6 rounded-2xl border border-steel hover:border-ice-blue/50 transition-all">
//                 <p className="text-text-light/80 italic">"{t.text}"</p>
//                 <div className="flex items-center mt-6">
//                   <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
//                   <div>
//                     <h4 className="font-semibold text-text-light">{t.name}</h4>
//                     <p className="text-sm text-text-light/50">{t.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BLOG / LATEST ARTICLES */}
//       <section className="py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//               <span className="animated-gradient-text">LATEST ARTICLES</span>
//             </h2>
//             <p className="text-lg text-text-light/60 max-w-2xl mx-auto">I occasionally write about web development, cloud architecture, and tech trends.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {posts.map((post, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group bg-card/50 rounded-2xl overflow-hidden border border-steel hover:border-ice-blue/50 transition-all">
//                 <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
//                 <div className="p-6">
//                   <div className="flex items-center text-xs text-ice-blue mb-3">
//                     <span>{post.date}</span>
//                     <span className="mx-2">•</span>
//                     <span>{post.readTime} read</span>
//                   </div>
//                   <h3 className="text-xl font-semibold text-text-light mb-2 group-hover:text-ice-blue transition-colors">{post.title}</h3>
//                   <Link to="#" className="text-sm text-ice-blue hover:underline">Read More →</Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-gradient-to-r from-steel/50 to-graphite border-t border-steel/50">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-3xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
//               Let's build something
//               <span className="animated-gradient-text block mt-2">extraordinary together</span>
//             </h2>
//             <p className="text-xl text-text-light/60 mb-8">Ready to start your next project? I'm just a message away.</p>
//             <Link to="/contact" className="inline-block px-12 py-5 bg-gradient-ice text-graphite font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all">
//               Start the Conversation
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  FaReact, FaNodeJs, FaPython, FaDocker,
  FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaPlay, FaCode, FaRocket,
  FaAws
} from 'react-icons/fa';
import {
  SiNextdotjs, SiDjango, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql,
  SiGraphql, SiKubernetes, SiRedis
} from 'react-icons/si';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState('forward');

  const roles = ['Full‑Stack Developer', 'Cloud Architect', 'UI/UX Enthusiast', 'Problem Solver'];
  const currentRole = roles[typingIndex % roles.length];

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typingDirection === 'forward') {
        if (typingText.length === currentRole.length) {
          setTimeout(() => setTypingDirection('backward'), 1500);
          return;
        }
        setTypingText(currentRole.slice(0, typingText.length + 1));
      } else {
        if (typingText.length === 0) {
          setTypingIndex(prev => prev + 1);
          setTypingDirection('forward');
          return;
        }
        setTypingText(currentRole.slice(0, typingText.length - 1));
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [typingText, typingDirection, currentRole]);

  // Stats data
  const stats = [
    { value: '5+', label: 'Years Experience', icon: <FaRocket /> },
    { value: '25', label: 'Projects Completed', icon: <FaCode /> },
    { value: '15', label: 'Happy Clients', icon: <FaGithub /> },
    { value: '∞', label: 'Coffee Consumed', icon: <FaPython /> },
  ];

  // Services
  const services = [
    {
      title: 'Full-Stack Development',
      desc: 'End-to-end web applications with React, Node.js, and modern databases.',
      icon: <FaReact className="text-3xl" />,
      color: '#61DAFB',
    },
    {
      title: 'Cloud Architecture',
      desc: 'Scalable, secure cloud solutions on AWS, Docker, and serverless.',
      icon: <FaDocker className="text-3xl" />,
      color: '#2496ED',
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces with Tailwind and Framer Motion.',
      icon: <SiTailwindcss className="text-3xl" />,
      color: '#06B6D4',
    },
    {
      title: 'Performance Optimization',
      desc: 'Lightning-fast websites with optimized code and CDN delivery.',
      icon: <FaNodeJs className="text-3xl" />,
      color: '#339933',
    },
  ];

  // Tech stack for floating icons + tooltips (with descriptions)
  const techStack = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB', desc: 'UI library for component-based interfaces' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#ffffff', desc: 'React framework for production' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933', desc: 'JavaScript runtime for backend' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20', desc: 'High-level Python web framework' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6', desc: 'Typed JavaScript superset' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248', desc: 'NoSQL database' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791', desc: 'Advanced relational database' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB', desc: 'Versatile programming language' },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900', desc: 'Cloud computing platform' },
    { icon: <SiGraphql />, name: 'GraphQL', color: '#E10098', desc: 'API query language' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5', desc: 'Container orchestration' },
    { icon: <SiRedis />, name: 'Redis', color: '#DC382D', desc: 'In-memory data store' },
  ];

  // Process steps
  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and goals.' },
    { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and feedback.' },
    { step: '03', title: 'Development', desc: 'Agile sprints with regular updates.' },
    { step: '04', title: 'Launch', desc: 'Deployment, testing, and ongoing support.' },
  ];

  // Projects for carousel
  const projects = [
    {
      id: 1,
      title: 'LS REALTORIN',
      description: 'Real estate platform with 360° tours',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
      tags: ['React', 'Django', 'AWS'],
    },
    {
      id: 2,
      title: 'SALON BOOKING',
      description: 'Smart scheduling system',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'BLOG PLATFORM',
      description: 'SEO-optimized blog',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
      tags: ['React', 'Express', 'MySQL'],
    },
    {
      id: 4,
      title: 'AI DASHBOARD',
      description: 'Analytics with ML predictions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      tags: ['Vue.js', 'Python', 'TensorFlow'],
    },
  ];

  // Testimonials for carousel
  const testimonials = [
    { name: 'Alex Johnson', role: 'CEO, TechCorp', text: 'Bhavya delivered an exceptional product ahead of schedule. His attention to detail and technical expertise are unmatched.', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Sarah Chen', role: 'Product Manager, StartupX', text: 'Working with Bhavya was a game-changer. He transformed our vague idea into a polished, scalable platform.', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Mike Davis', role: 'Founder, DesignStudio', text: 'The code quality and architecture are top-notch. Highly recommended for any complex project.', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Emily White', role: 'CTO, FinTechLabs', text: 'Bhavya is a rare talent – he combines deep technical knowledge with a great sense of design.', avatar: 'https://i.pravatar.cc/150?img=4' },
  ];

  // Blog posts
  const posts = [
    { title: 'Modern React Patterns in 2024', date: 'Feb 12, 2024', readTime: '5 min', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800' },
    { title: 'Scaling Node.js Applications', date: 'Jan 28, 2024', readTime: '7 min', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800' },
    { title: 'Docker for Beginners', date: 'Jan 10, 2024', readTime: '4 min', image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800' },
  ];

  return (
    <div className="bg-graphite text-text-light overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-ice z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION - REDESIGNED */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ice-blue/20 via-transparent to-transparent"></div>
        </div>

        {/* Few floating particles for ambiance */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ice-blue/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-ice-blue/20 border border-ice-blue/40 text-ice-blue text-sm font-mono mb-6">
                <span className="w-2 h-2 bg-deep-ice rounded-full animate-pulse"></span>
                <span>AVAILABLE FOR WORK</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-text-light">Hi, I'm </span>
                <span className="animated-gradient-text">Bhavya</span>
              </h1>
              <div className="h-16 mt-4">
                <h2 className="text-3xl md:text-4xl text-soft-ice font-light">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              <p className="text-lg text-text-light/80 mt-6 max-w-xl leading-relaxed">
                I build scalable, high-performance web applications that blend
                cutting-edge technology with exceptional user experience. Let's
                turn your ideas into reality.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-gradient-ice text-graphite font-semibold rounded-xl hover:shadow-lg hover:shadow-ice-blue/20 transition-all backdrop-blur-sm"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-ice-blue text-ice-blue font-semibold rounded-xl hover:bg-ice-blue/10 transition-all backdrop-blur-sm"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Central Orb + Orbiting Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:flex relative h-[500px] items-center justify-center"
            >
              <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                {/* Central glowing orb */}
                <div className="absolute w-32 h-32 rounded-full bg-gradient-ice opacity-30 blur-2xl animate-pulse"></div>
                <div className="absolute w-24 h-24 rounded-full bg-gradient-ice opacity-20 blur-xl"></div>

                {/* Orbiting icons */}
                {techStack.slice(0, 8).map((tech, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const radius = 160;
                  const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
                  const top = `calc(50% + ${Math.sin(angle) * radius}px)`;

                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{ left, top, transform: "translate(-50%, -50%)" }}
                    >
                      {/* Individual icon container with group for tooltip */}
                      <div className="group relative">
                        {/* Icon */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="z-40 w-16 h-16 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center text-4xl shadow-xl cursor-help"
                          style={{ color: tech.color }}
                        >
                          {tech.icon}
                        </motion.div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 w-max max-w-xs">
                          <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-ice-blue/30 text-center shadow-2xl">
                            <p className="text-ice-blue font-bold text-sm">
                              {tech.name}
                            </p>
                            <p className="text-white/90 text-xs">{tech.desc}</p>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 border-4 border-transparent border-t-black/90"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-ice-blue/50 text-2xl" />
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gradient-to-b from-transparent to-steel/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:border-ice-blue/30 transition-all"
              >
                <div className="text-4xl font-bold text-ice-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light/60 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="mt-3 text-ice-blue/40 text-3xl">
                  {stat.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="animated-gradient-text">WHAT I DO</span>
            </h2>
            <p className="text-lg text-text-light/60 max-w-2xl mx-auto">
              I offer a wide range of services to help you build, scale, and
              optimize your digital products.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-ice-blue/30 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-ice/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-2">
                  {service.title}
                </h3>
                <p className="text-text-light/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-8 text-ice-blue">
            Tech Stack I Use
          </h2>
          <div className="relative flex overflow-x-hidden">
            <motion.div
              className="flex space-x-8 whitespace-nowrap"
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="inline-flex items-center space-x-3 backdrop-blur-xl bg-white/5 px-6 py-3 rounded-full border border-white/10"
                >
                  <span className="text-2xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="text-text-light/80 font-mono">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-steel/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              MY <span className="animated-gradient-text">PROCESS</span>
            </h2>
            <p className="text-lg text-text-light/60 max-w-2xl mx-auto">
              A proven workflow that ensures your project is delivered on time
              and exceeds expectations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <div className="text-5xl font-mono text-ice-blue/30 mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-2">
                  {step.title}
                </h3>
                <p className="text-text-light/60 text-sm">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-ice-blue/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS CAROUSEL */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="animated-gradient-text">RECENT PROJECTS</span>
            </h2>
            <p className="text-lg text-text-light/60 max-w-2xl mx-auto">
              A selection of my favorite works, each one a unique story of
              problem-solving and innovation.
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            // navigation
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-text-light mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-light/60 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 text-ice-blue text-xs font-mono rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-ice-blue hover:underline text-sm inline-flex items-center"
                    >
                      View Details <FaPlay className="ml-2 text-xs" />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="px-8 py-3 border border-ice-blue text-ice-blue font-semibold rounded-xl hover:bg-ice-blue/10 transition-all backdrop-blur-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-steel/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="animated-gradient-text">WHAT CLIENTS SAY</span>
            </h2>
            <p className="text-lg text-text-light/60 max-w-2xl mx-auto">
              I don't just build software—I build relationships. Here's what
              people think about working with me.
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            // navigation
            className="testimonials-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 h-full"
                >
                  <p className="text-text-light/80 italic mb-4">"{t.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-ice-blue/30"
                    />
                    <div>
                      <h4 className="font-semibold text-text-light">
                        {t.name}
                      </h4>
                      <p className="text-sm text-text-light/50">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="animated-gradient-text">LATEST ARTICLES</span>
            </h2>
            <p className="text-lg text-text-light/60 max-w-2xl mx-auto">
              I occasionally write about web development, cloud architecture,
              and tech trends.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <div className="flex items-center text-xs text-ice-blue mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-light mb-2 group-hover:text-ice-blue transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    to="#"
                    className="text-sm text-ice-blue hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-steel/50 to-graphite border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's build something
              <span className="animated-gradient-text block mt-2">
                extraordinary together
              </span>
            </h2>
            <p className="text-xl text-text-light/60 mb-8">
              Ready to start your next project? I'm just a message away.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-gradient-ice text-graphite font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;