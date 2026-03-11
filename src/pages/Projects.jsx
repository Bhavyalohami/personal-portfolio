// // import React, { useState } from 'react';
// // import { 
// //   FaGithub, FaExternalLinkAlt, FaCode, 
// //   FaDesktop, FaMobileAlt, FaServer, FaEye 
// // } from 'react-icons/fa';

// // const Projects = () => {
// //   const [activeFilter, setActiveFilter] = useState('all');
// //   const [hoveredProject, setHoveredProject] = useState(null);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: 'LS REALTORIN',
// //       description: 'Full Real Estate Management System with 360° virtual tours, AI-powered property valuation, and blockchain-based transactions.',
// //       shortDescription: 'Full Real Estate Management System with 360° views',
// //       tags: ['REACT', 'DJANGO', 'POSTGRESQL', 'AWS', 'THREE.JS'],
// //       category: 'fullstack',
// //       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
// //       github: '#',
// //       live: '#',
// //       features: ['360° Virtual Tours', 'AI Property Valuation', 'Blockchain Transactions', 'Smart Contracts', 'CRM System']
// //     },
// //     {
// //       id: 2,
// //       title: 'SALON BOOKING',
// //       description: 'Intelligent scheduling platform with real-time availability, automated reminders, AI staff allocation, and integrated payment processing.',
// //       shortDescription: 'Smart scheduling with real-time availability',
// //       tags: ['NEXT.JS', 'NODE.JS', 'MONGODB', 'STRIPE', 'SOCKET.IO'],
// //       category: 'fullstack',
// //       image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800',
// //       github: '#',
// //       live: '#',
// //       features: ['Real-time Booking', 'AI Staff Allocation', 'Payment Integration', 'SMS Notifications', 'Analytics Dashboard']
// //     },
// //     {
// //       id: 3,
// //       title: 'BLOG PLATFORM',
// //       description: 'Advanced content management system with AI-powered SEO optimization, real-time analytics, and social media integration.',
// //       shortDescription: 'SEO-optimized blog with admin panel',
// //       tags: ['REACT', 'EXPRESS', 'MYSQL', 'REDIS', 'ELASTICSEARCH'],
// //       category: 'fullstack',
// //       image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
// //       github: '#',
// //       live: '#',
// //       features: ['AI SEO Optimization', 'Real-time Analytics', 'Social Media Integration', 'Comment System', 'CDN Delivery']
// //     },
// //     {
// //       id: 4,
// //       title: 'E-COMMERCE DASHBOARD',
// //       description: 'Real-time business intelligence dashboard with predictive analytics, inventory forecasting, and customer behavior analysis.',
// //       shortDescription: 'Real-time analytics dashboard for e-commerce',
// //       tags: ['VUE.JS', 'PYTHON', 'FIREBASE', 'CHART.JS', 'WEBSOCKETS'],
// //       category: 'dashboard',
// //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
// //       github: '#',
// //       live: '#',
// //       features: ['Predictive Analytics', 'Inventory Forecasting', 'Customer Insights', 'Real-time Reports', 'KPI Monitoring']
// //     },
// //     {
// //       id: 5,
// //       title: 'TASK MANAGEMENT APP',
// //       description: 'Collaborative productivity platform with real-time synchronization, file sharing, team communication, and project tracking.',
// //       shortDescription: 'Collaborative task management with real-time updates',
// //       tags: ['REACT NATIVE', 'NODE.JS', 'SOCKET.IO', 'AWS', 'MONGODB'],
// //       category: 'mobile',
// //       image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800',
// //       github: '#',
// //       live: '#',
// //       features: ['Real-time Collaboration', 'File Sharing', 'Progress Tracking', 'Team Chat', 'Push Notifications']
// //     },
// //     {
// //       id: 6,
// //       title: 'WEATHER FORECAST APP',
// //       description: 'Advanced weather application with machine learning predictions, interactive maps, severe weather alerts, and PWA support.',
// //       shortDescription: 'Beautiful weather application with detailed forecasts',
// //       tags: ['REACT', 'WEATHER API', 'MAPBOX', 'PWA', 'SERVICE WORKERS'],
// //       category: 'frontend',
// //       image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800',
// //       github: '#',
// //       live: '#',
// //       features: ['ML Predictions', 'Interactive Maps', 'Severe Weather Alerts', 'PWA Support', 'Offline Mode']
// //     },
// //   ];

// //   const filters = [
// //     { id: 'all', label: 'ALL PROJECTS' },
// //     { id: 'fullstack', label: 'FULL STACK' },
// //     { id: 'frontend', label: 'FRONTEND' },
// //     { id: 'dashboard', label: 'DASHBOARD' },
// //     { id: 'mobile', label: 'MOBILE' },
// //   ];

// //   const filteredProjects = activeFilter === 'all' 
// //     ? projects 
// //     : projects.filter(project => project.category === activeFilter);

// //   return (
// //     <div className="pt-24 min-h-screen">
// //       <div className="container mx-auto px-4 md:px-6">
// //         {/* Hero Section */}
// //         <div className="text-center mb-12 animate-fade-in-up">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">
// //             MY <span className="bg-gradient-to-r from-ice-blue to-deep-ice bg-clip-text text-transparent">PROJECTS</span>
// //           </h1>
// //           <p className="text-text-light/60 text-lg max-w-2xl mx-auto font-mono">
// //             A collection of my recent work and personal projects
// //           </p>
// //         </div>

// //         {/* Filter Buttons */}
// //         <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
// //           {filters.map((filter) => (
// //             <button
// //               key={filter.id}
// //               onClick={() => setActiveFilter(filter.id)}
// //               className={`
// //                 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 font-mono text-sm
// //                 ${activeFilter === filter.id 
// //                   ? 'bg-gradient-ice text-graphite shadow-lg shadow-ice-blue/20' 
// //                   : 'bg-card text-text-light/80 hover:text-ice-blue border border-steel hover:border-ice-blue/50'
// //                 }
// //               `}
// //             >
// //               {filter.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Projects Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {filteredProjects.map((project, index) => (
// //             <div
// //               key={project.id}
// //               className="
// //                 bg-card rounded-xl overflow-hidden
// //                 border border-steel
// //                 card-hover relative
// //                 animate-fade-in-up
// //               "
// //               style={{ animationDelay: `${index * 100}ms` }}
// //               onMouseEnter={() => setHoveredProject(project.id)}
// //               onMouseLeave={() => setHoveredProject(null)}
// //             >
// //               {/* Project Image */}
// //               <div className="relative h-56 overflow-hidden">
// //                 <img 
// //                   src={project.image} 
// //                   alt={project.title}
// //                   className="w-full h-full object-cover transition-transform duration-700"
// //                 />
// //                 <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-60'}`}></div>
                
// //                 {/* Category Badge */}
// //                 <div className="absolute top-4 left-4 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full flex items-center space-x-2 text-sm font-mono border border-steel">
// //                   {project.category === 'mobile' ? <FaMobileAlt className="text-ice-blue" /> : <FaDesktop className="text-ice-blue" />}
// //                   <span className="text-soft-ice capitalize">{project.category}</span>
// //                 </div>
                
// //                 {/* Action Buttons */}
// //                 <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
// //                   <a 
// //                     href={project.github}
// //                     className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-soft-ice hover:text-ice-blue hover:bg-ice-blue/20 border border-steel transition-all"
// //                   >
// //                     <FaGithub />
// //                   </a>
// //                   <a 
// //                     href={project.live}
// //                     className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-soft-ice hover:text-ice-blue hover:bg-ice-blue/20 border border-steel transition-all"
// //                   >
// //                     <FaExternalLinkAlt />
// //                   </a>
// //                 </div>

// //                 {/* View Button */}
// //                 <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
// //                   <button className="px-4 py-2 bg-gradient-ice text-graphite font-mono text-sm rounded-lg flex items-center space-x-2">
// //                     <FaEye />
// //                     <span>VIEW DETAILS</span>
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Project Content */}
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-text-light mb-2 font-mono">{project.title}</h3>
// //                 <p className="text-text-light/70 mb-4">{project.shortDescription}</p>
                
// //                 {/* Features */}
// //                 <div className="mb-4">
// //                   <h4 className="text-sm font-semibold text-ice-blue mb-2 font-mono">KEY FEATURES:</h4>
// //                   <ul className="space-y-1">
// //                     {project.features.map((feature, idx) => (
// //                       <li key={idx} className="text-sm text-text-light/60 flex items-center">
// //                         <span className="w-1.5 h-1.5 bg-ice-blue rounded-full mr-2"></span>
// //                         {feature}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 {/* Tech Tags */}
// //                 <div className="flex flex-wrap gap-2">
// //                   {project.tags.map(tag => (
// //                     <span 
// //                       key={tag}
// //                       className="px-3 py-1.5 bg-steel text-soft-ice text-xs font-mono rounded-full flex items-center border border-steel"
// //                     >
// //                       <FaCode className="mr-1.5 text-ice-blue" />
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Stats Section */}
// //         <div className="bg-gradient-to-r from-card to-steel rounded-2xl p-8 border border-ice-blue/30 animate-fade-in-up">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {[
// //               { value: '20+', label: 'PROJECTS COMPLETED' },
// //               { value: '15+', label: 'HAPPY CLIENTS' },
// //               { value: '50K+', label: 'LINES OF CODE' },
// //               { value: '99%', label: 'CLIENT SATISFACTION' },
// //             ].map((stat, index) => (
// //               <div key={stat.label} className="text-center">
// //                 <div className="text-4xl md:text-5xl font-bold mb-2 text-ice-blue animate-float" 
// //                      style={{ animationDelay: `${index * 200}ms` }}>
// //                   {stat.value}
// //                 </div>
// //                 <div className="text-text-light/60 font-mono text-sm">{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

// const Projects = () => {
//   const [filter, setFilter] = useState('All');

//   const categories = ['All', 'Real Estate', 'Scheduling', 'CMS', 'Analytics', 'E-commerce', 'Productivity'];

//   const projects = [
//     {
//       id: 1,
//       title: 'LS REALTORIN',
//       description: 'Full-featured real estate platform with 360° virtual tours, property listings, and AI-based recommendations.',
//       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200',
//       tags: ['React', 'Django', 'PostgreSQL', 'AWS'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'Real Estate',
//     },
//     {
//       id: 2,
//       title: 'SALON BOOKING',
//       description: 'Smart scheduling system with real-time availability, payment integration, and client management.',
//       image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200',
//       tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'Scheduling',
//     },
//     {
//       id: 3,
//       title: 'BLOG PLATFORM',
//       description: 'SEO-optimized blog with rich text editor, user authentication, and comment system.',
//       image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200',
//       tags: ['React', 'Express', 'MySQL', 'Tailwind'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'CMS',
//     },
//     {
//       id: 4,
//       title: 'AI DASHBOARD',
//       description: 'Interactive analytics dashboard with machine learning predictions and real-time data visualization.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
//       tags: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'Analytics',
//     },
//     {
//       id: 5,
//       title: 'E-COMMERCE PLATFORM',
//       description: 'Modern e-commerce solution with cart, wishlist, and admin dashboard.',
//       image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200',
//       tags: ['Next.js', 'Django', 'Redis', 'Docker'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'E-commerce',
//     },
//     {
//       id: 6,
//       title: 'TASK MANAGER',
//       description: 'Collaborative task management tool with real-time updates and team workspaces.',
//       image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200',
//       tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'Productivity',
//     },
//     {
//       id: 7,
//       title: 'WEATHER APP',
//       description: 'Real-time weather forecasting with interactive maps and 7-day predictions.',
//       image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200',
//       tags: ['React', 'OpenWeather API', 'Chart.js'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'Analytics',
//     },
//     {
//       id: 8,
//       title: 'PORTFOLIO 2024',
//       description: 'Personal portfolio with smooth animations and dark/light mode.',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200',
//       tags: ['Next.js', 'Framer Motion', 'Tailwind'],
//       github: 'https://github.com/',
//       live: 'https://example.com',
//       category: 'CMS',
//     },
//   ];

//   const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

//   return (
//     <div className="bg-graphite text-text-light pt-24">
//       <div className="container mx-auto px-4 md:px-6 py-16">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
//             <span className="animated-gradient-text">MY PROJECTS</span>
//           </h1>
//           <p className="text-lg text-text-light/60 max-w-2xl mx-auto">
//             A collection of web applications I've built, from concept to deployment.
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           <FaFilter className="text-ice-blue mr-2 self-center" />
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
//                 filter === cat
//                   ? 'bg-ice-blue text-graphite'
//                   : 'bg-card border border-steel text-text-light/70 hover:border-ice-blue'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <AnimatePresence>
//           <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 layout
//                 className="group bg-card/50 rounded-2xl overflow-hidden border border-steel hover:border-ice-blue/50 transition-all"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"></div>
//                   <span className="absolute top-3 left-3 px-3 py-1 bg-ice-blue/20 backdrop-blur-sm text-ice-blue text-xs font-mono rounded-full border border-ice-blue/30">
//                     {project.category}
//                   </span>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
//                   <p className="text-text-light/70 text-sm mb-4">{project.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map(tag => (
//                       <span key={tag} className="px-2 py-1 bg-steel text-soft-ice text-xs font-mono rounded">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-text-light/60 hover:text-ice-blue transition-colors"
//                     >
//                       <FaGithub size={20} />
//                     </a>
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-text-light/60 hover:text-ice-blue transition-colors"
//                     >
//                       <FaExternalLinkAlt size={18} />
//                     </a>
//                     <Link
//                       to={`/projects/${project.id}`}
//                       className="text-sm text-ice-blue hover:underline"
//                     >
//                       View Details →
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaSearch, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMongodb, SiPostgresql } from 'react-icons/si';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Real Estate', 'Scheduling', 'CMS', 'Analytics', 'E‑commerce', 'Productivity'];

  const projects = [
    {
      id: 1,
      title: 'LS REALTORIN',
      description: 'Full‑featured real estate platform with 360° virtual tours, AI‑based recommendations, and advanced search.',
      longDescription: 'A complete real estate solution with property listings, agent dashboards, mortgage calculators, and immersive virtual tours. Used by 50+ agencies.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800',
      ],
      tags: ['React', 'Django', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/',
      live: 'https://example.com',
      category: 'Real Estate',
      stats: { users: '5k+', rating: 4.8, completed: '2023' },
    },
    {
      id: 2,
      title: 'SALON BOOKING',
      description: 'Smart scheduling system with real‑time availability, payment integration, and client management.',
      longDescription: 'Beauty professionals use this platform to manage appointments, accept online payments, and send automated reminders. Integrated with Stripe and Twilio.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1600948836101-f9ff52b62cda?auto=format&fit=crop&w=800',
      ],
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/',
      live: 'https://example.com',
      category: 'Scheduling',
      stats: { bookings: '10k+', rating: 4.9, completed: '2023' },
    },
    {
      id: 3,
      title: 'BLOG PLATFORM',
      description: 'SEO‑optimized blog with rich text editor, user authentication, and comment system.',
      longDescription: 'A modern blogging platform built for writers. Features include markdown support, social sharing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800',
      ],
      tags: ['React', 'Express', 'MySQL', 'Tailwind'],
      github: 'https://github.com/',
      live: 'https://example.com',
      category: 'CMS',
      stats: { posts: '200+', rating: 4.7, completed: '2022' },
    },
    {
      id: 4,
      title: 'AI DASHBOARD',
      description: 'Interactive analytics dashboard with machine learning predictions and real‑time data visualization.',
      longDescription: 'Dashboards for business intelligence, featuring predictive analytics, custom reports, and real‑time data streams.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      ],
      tags: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
      github: 'https://github.com/',
      live: 'https://example.com',
      category: 'Analytics',
      stats: { dataPoints: '1M+', rating: 4.6, completed: '2024' },
    },
    {
      id: 5,
      title: 'E‑COMMERCE PLATFORM',
      description: 'Modern e‑commerce solution with cart, wishlist, and admin dashboard.',
      longDescription: 'A full‑featured online store with product management, inventory tracking, and secure checkout. Supports multiple payment gateways.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1523286877159-d963654f0c47?auto=format&fit=crop&w=800',
      ],
      tags: ['Next.js', 'Django', 'Redis', 'Docker'],
      github: 'https://github.com/',
      live: 'https://example.com',
      category: 'E‑commerce',
      stats: { products: '500+', rating: 4.9, completed: '2023' },
    },
    {
      id: 6,
      title: 'TASK MANAGER',
      description: 'Collaborative task management tool with real‑time updates and team workspaces.',
      longDescription: 'A productivity app for teams to manage tasks, set deadlines, and communicate. Built with real‑time sync using Socket.io.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800',
      ],
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/',
      live: 'https://example.com',
      category: 'Productivity',
      stats: { users: '3k+', rating: 4.8, completed: '2022' },
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-graphite text-text-light pt-24 overflow-x-hidden">
      {/* Parallax Background */}
      <motion.div className="fixed top-0 left-0 w-full h-full bg-gradient-mesh opacity-20 pointer-events-none" style={{ y: y1 }} />
      <motion.div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-blue/5 via-transparent to-transparent pointer-events-none" style={{ y: y2 }} />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4"><span className="animated-gradient-text">MY PROJECTS</span></h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">A selection of my best work – each project tells a story of problem‑solving and innovation.</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '25+', label: 'Total Projects', icon: '🚀' },
            { value: '15+', label: 'Happy Clients', icon: '😊' },
            { value: '5', label: 'Years Building', icon: '⚙️' },
            { value: '∞', label: 'Lines of Code', icon: '📝' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card/50 p-6 rounded-2xl border border-steel text-center hover:border-ice-blue/50 transition-all">
              <span className="text-4xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl font-bold text-ice-blue">{stat.value}</div>
              <div className="text-text-light/60 font-mono text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter & Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            <FaFilter className="text-ice-blue self-center" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${filter === cat ? 'bg-ice-blue text-graphite' : 'bg-card border border-steel text-text-light/70 hover:border-ice-blue'}`}>{cat}</button>
            ))}
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ice-blue/50" />
            <input type="text" placeholder="Search projects..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 bg-card border border-steel rounded-xl focus:border-ice-blue outline-none text-text-light" />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, delay: index * 0.1 }} layout className="group bg-card/50 rounded-2xl overflow-hidden border border-steel hover:border-ice-blue/50 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-ice-blue/20 backdrop-blur-sm text-ice-blue text-xs font-mono rounded-full border border-ice-blue/30">{project.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
                  <p className="text-text-light/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-steel text-soft-ice text-xs font-mono rounded">{tag}</span>)}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-light/60 hover:text-ice-blue transition-colors"><FaGithub size={20} /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-light/60 hover:text-ice-blue transition-colors"><FaExternalLinkAlt size={18} /></a>
                    <Link to={`/projects/${project.id}`} className="text-sm text-ice-blue hover:underline">View Details →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Project Highlight */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-28">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">🏆 Featured Project</h2>
          <div className="bg-gradient-to-br from-ice-blue/10 to-transparent p-8 rounded-3xl border border-ice-blue/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src={projects[0].image} alt={projects[0].title} className="rounded-2xl border border-ice-blue/30" />
              <div>
                <h3 className="text-3xl font-bold text-ice-blue mb-3">{projects[0].title}</h3>
                <p className="text-lg text-text-light/80 mb-4">{projects[0].longDescription}</p>
                <div className="flex gap-4 mb-4">
                  {projects[0].tags.map(tag => <span key={tag} className="px-3 py-1 bg-steel text-soft-ice font-mono text-sm rounded-full">{tag}</span>)}
                </div>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div><span className="block text-2xl font-bold text-ice-blue">{projects[0].stats.users}</span><span className="text-text-light/60 text-sm">Users</span></div>
                  <div><span className="block text-2xl font-bold text-ice-blue">{projects[0].stats.rating}</span><span className="text-text-light/60 text-sm">Rating</span></div>
                  <div><span className="block text-2xl font-bold text-ice-blue">{projects[0].stats.completed}</span><span className="text-text-light/60 text-sm">Year</span></div>
                </div>
                <Link to={`/projects/${projects[0].id}`} className="inline-block px-6 py-3 bg-ice-blue text-graphite font-semibold rounded-xl hover:shadow-lg transition-all">View Case Study</Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used Across Projects */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-28">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">Technologies I Use Most</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[<FaReact />, <SiNextdotjs />, <FaNodeJs />, <SiDjango />, <FaPython />, <SiMongodb />, <SiPostgresql />].map((icon, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2, rotate: 5 }} className="w-16 h-16 bg-card/50 rounded-xl border border-steel flex items-center justify-center text-3xl text-ice-blue">{icon}</motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center bg-gradient-to-br from-ice-blue/10 to-transparent p-12 rounded-3xl border border-ice-blue/20">
          <h2 className="text-3xl font-display font-bold mb-4 text-ice-blue">Have a Project in Mind?</h2>
          <p className="text-lg text-text-light/80 mb-8 max-w-xl mx-auto">Let's collaborate and build something amazing together.</p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-gradient-ice text-graphite font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all">Start a Conversation</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;