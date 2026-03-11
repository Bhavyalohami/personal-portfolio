// import React from 'react';
// import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaCode, FaUsers, FaChartLine } from 'react-icons/fa';

// const Experience = () => {
//   const experiences = [
//     {
//       id: 1,
//       company: 'TECH SOLUTIONS INC.',
//       position: 'FULL STACK DEVELOPER',
//       period: '2022 - PRESENT',
//       location: 'SAN FRANCISCO, CA',
//       description: 'Led development of multiple web applications using React and Node.js. Improved application performance by 40% through code optimization and implemented CI/CD pipelines reducing deployment time by 60%.',
//       responsibilities: [
//         'Developed and maintained 10+ web applications serving 50k+ users',
//         'Collaborated with UI/UX designers to implement pixel-perfect interfaces',
//         'Mentored 3 junior developers and conducted code reviews',
//         'Implemented CI/CD pipelines reducing deployment time by 60%',
//         'Optimized database queries improving response time by 40%'
//       ],
//       tech: ['REACT', 'NODE.JS', 'MONGODB', 'AWS', 'DOCKER', 'GIT'],
//       icon: <FaCode />
//     },
//     {
//       id: 2,
//       company: 'DIGITAL AGENCY CO.',
//       position: 'FRONTEND DEVELOPER',
//       period: '2020 - 2022',
//       location: 'NEW YORK, NY',
//       description: 'Built responsive websites and web applications for various clients. Focused on creating optimal user experiences and achieving 95+ Lighthouse scores.',
//       responsibilities: [
//         'Created 20+ responsive websites for diverse client portfolios',
//         'Optimized website performance achieving 95+ Lighthouse scores',
//         'Collaborated with backend teams to integrate RESTful APIs',
//         'Implemented accessibility standards meeting WCAG 2.1 guidelines',
//         'Reduced page load times by 50% through optimization techniques'
//       ],
//       tech: ['JAVASCRIPT', 'VUE.JS', 'SASS', 'WEBPACK', 'REST APIS'],
//       icon: <FaUsers />
//     },
//     {
//       id: 3,
//       company: 'STARTUP INNOVATIONS',
//       position: 'JUNIOR DEVELOPER',
//       period: '2019 - 2020',
//       location: 'REMOTE',
//       description: 'Started my professional journey building small to medium web applications and learning best practices in modern web development.',
//       responsibilities: [
//         'Developed responsive landing pages and marketing websites',
//         'Fixed bugs and implemented new features for existing applications',
//         'Learned modern JavaScript frameworks and development workflows',
//         'Participated in code reviews and agile development processes',
//         'Assisted in database design and API development'
//       ],
//       tech: ['HTML/CSS', 'JAVASCRIPT', 'JQUERY', 'BOOTSTRAP', 'PHP'],
//       icon: <FaChartLine />
//     },
//   ];

//   return (
//     <div className="pt-24 min-h-screen">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Hero Section */}
//         <div className="text-center mb-12 animate-fade-in-up">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             WORK <span className="bg-gradient-to-r from-ice-blue to-deep-ice bg-clip-text text-transparent">EXPERIENCE</span>
//           </h1>
//           <p className="text-text-light/60 text-lg max-w-2xl mx-auto font-mono">
//             My professional journey and career milestones
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="max-w-4xl mx-auto">
//           {experiences.map((exp, index) => (
//             <div
//               key={exp.id}
//               className={`
//                 relative pl-12 pb-12 last:pb-0
//                 animate-fade-in-up
//               `}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               {/* Timeline Connector */}
//               <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ice-blue to-deep-ice"></div>
              
//               {/* Timeline Dot */}
//               <div className="absolute left-0 top-0 w-6 h-6 -translate-x-2.5 bg-gradient-ice rounded-full border-4 border-graphite shadow-lg"></div>

//               {/* Content Card */}
//               <div className="bg-card rounded-2xl p-6 border border-steel hover:border-ice-blue transition-all duration-300 card-hover">
//                 {/* Header */}
//                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-14 h-14 bg-gradient-ice rounded-xl flex items-center justify-center text-graphite text-xl">
//                       {exp.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-text-light">{exp.company}</h3>
//                       <div className="flex items-center space-x-4 mt-2">
//                         <span className="px-3 py-1 bg-gradient-ice text-graphite rounded-full text-sm font-mono">
//                           {exp.position}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="mt-4 md:mt-0 space-y-2">
//                     <div className="flex items-center space-x-2 text-soft-ice">
//                       <FaCalendarAlt className="text-ice-blue" />
//                       <span className="font-mono">{exp.period}</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-soft-ice">
//                       <FaMapMarkerAlt className="text-ice-blue" />
//                       <span className="font-mono">{exp.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-text-light/80 mb-6">{exp.description}</p>

//                 {/* Responsibilities */}
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-text-light mb-3 flex items-center">
//                     <FaArrowRight className="mr-2 text-ice-blue" />
//                     KEY RESPONSIBILITIES:
//                   </h4>
//                   <ul className="space-y-2">
//                     {exp.responsibilities.map((resp, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="w-2 h-2 bg-ice-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                         <span className="text-text-light/70">{resp}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Tech Stack */}
//                 <div>
//                   <h4 className="text-lg font-semibold text-text-light mb-3">TECHNOLOGIES USED:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.tech.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1.5 bg-steel text-soft-ice text-sm font-mono rounded-lg border border-steel"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Skills Developed Section */}
//         <div className="mt-16 bg-card rounded-2xl p-8 border border-steel animate-fade-in-up">
//           <h2 className="text-3xl font-bold text-center mb-8 text-text-light">
//             SKILLS <span className="text-ice-blue">DEVELOPED</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { skill: 'TEAM LEADERSHIP', level: 90, color: 'from-ice-blue to-cyan-500' },
//               { skill: 'PROJECT MANAGEMENT', level: 85, color: 'from-purple-500 to-pink-500' },
//               { skill: 'CODE REVIEW', level: 95, color: 'from-green-500 to-emerald-500' },
//               { skill: 'TECHNICAL DOCUMENTATION', level: 80, color: 'from-orange-500 to-red-500' },
//               { skill: 'CLIENT COMMUNICATION', level: 90, color: 'from-indigo-500 to-blue-500' },
//               { skill: 'AGILE METHODOLOGY', level: 85, color: 'from-teal-500 to-green-500' },
//             ].map((item, index) => (
//               <div key={index} className="space-y-2 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
//                 <div className="flex justify-between">
//                   <span className="font-medium text-text-light font-mono">{item.skill}</span>
//                   <span className="font-bold text-ice-blue">{item.level}%</span>
//                 </div>
//                 <div className="w-full bg-steel rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
//                     style={{ width: `${item.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaAward, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const experiences = [
    {
      title: 'Senior Full‑Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Jaipur, India (Remote)',
      period: '2022 – Present',
      logo: 'https://logo.clearbit.com/techcorp.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
      description: [
        'Lead development of microservices-based platform handling 50k+ daily users.',
        'Architected cloud infrastructure on AWS, reducing costs by 30%.',
        'Mentored junior developers and conducted code reviews.',
        'Implemented CI/CD pipelines using GitHub Actions and Docker.',
        'Collaborated with product managers to define technical roadmap.',
      ],
      achievements: ['AWS Cost Optimization Award', 'Employee of the Year 2023'],
    },
    {
      title: 'Full‑Stack Developer',
      company: 'InnovateLabs',
      location: 'Bangalore, India',
      period: '2020 – 2022',
      logo: 'https://logo.clearbit.com/innovatelabs.com',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800',
      description: [
        'Developed and maintained multiple React/Node.js applications.',
        'Integrated third-party APIs (Stripe, Google Maps, Twilio).',
        'Optimized database queries, improving response times by 40%.',
        'Collaborated with design team to create responsive UIs.',
        'Participated in agile ceremonies and sprint planning.',
      ],
      achievements: ['Best Performance Improvement', 'Team Player Award'],
    },
    {
      title: 'Junior Web Developer',
      company: 'DigitalCraft',
      location: 'Jaipur, India',
      period: '2019 – 2020',
      logo: 'https://logo.clearbit.com/digitalcraft.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
      description: [
        'Built static and dynamic websites using HTML, CSS, JavaScript.',
        'Assisted in migrating legacy PHP apps to modern stack.',
        'Wrote unit tests and performed bug fixes.',
        'Supported senior developers in client projects.',
      ],
      achievements: ['Rookie of the Year', 'Client Satisfaction Award'],
    },
  ];

  const achievements = [
    { icon: <FaAward />, text: '5+ Years Experience' },
    { icon: <FaRocket />, text: '20+ Projects Delivered' },
    { icon: <FaBuilding />, text: '3 Companies' },
    { icon: <FaMapMarkerAlt />, text: 'Worked Remotely & On‑site' },
  ];

  return (
    <div className="bg-graphite text-text-light pt-24 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 w-full h-full bg-gradient-mesh opacity-20 pointer-events-none" style={{ y: y1 }} />
      <motion.div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-blue/5 via-transparent to-transparent pointer-events-none" style={{ y: y2 }} />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4"><span className="animated-gradient-text">WORK EXPERIENCE</span></h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">My professional journey – building, learning, and growing.</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card/50 p-6 rounded-2xl border border-steel text-center hover:border-ice-blue/50 transition-all">
              <div className="text-4xl text-ice-blue mb-3">{item.icon}</div>
              <div className="text-text-light/80">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          {experiences.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0">
              <div className="md:w-1/3 flex items-start justify-end">
                <div className="bg-card p-4 rounded-xl border border-steel text-center w-full max-w-xs">
                  <FaCalendarAlt className="inline text-ice-blue mb-2" />
                  <p className="text-ice-blue font-mono text-lg">{exp.period}</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="bg-card/50 p-6 rounded-2xl border border-steel hover:border-ice-blue/50 transition-all overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={exp.image} alt={exp.company} className="w-16 h-16 rounded-full object-cover border-2 border-ice-blue" />
                    <div>
                      <h3 className="text-2xl font-display font-bold text-ice-blue">{exp.title}</h3>
                      <h4 className="text-xl text-text-light flex items-center gap-2"><FaBuilding className="text-soft-ice" /> {exp.company}</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-light/60 mb-4"><FaMapMarkerAlt /> {exp.location}</div>
                  <ul className="list-disc list-inside space-y-2 text-text-light/80 mb-4">
                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((ach, i) => <span key={i} className="px-3 py-1 bg-ice-blue/10 text-ice-blue text-xs font-mono rounded-full">{ach}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections: Companies I've Worked With / Clients */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-28">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">Companies I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['TechCorp', 'InnovateLabs', 'DigitalCraft', 'Freelance'].map((name, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card/50 p-6 rounded-xl border border-steel text-center hover:border-ice-blue/50 transition-all">
                <FaBuilding className="text-4xl text-ice-blue mx-auto mb-3" />
                <h3 className="font-bold">{name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials (optional) */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-28">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">What Colleagues Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: 'Bhavya is an exceptional developer with a keen eye for architecture.', name: 'Alex M., TechCorp' },
              { text: 'A true team player – always ready to help and share knowledge.', name: 'Priya K., InnovateLabs' },
            ].map((t, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-card/50 p-6 rounded-xl border border-steel">
                <p className="text-text-light/80 italic mb-4">"{t.text}"</p>
                <p className="text-ice-blue font-mono">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center bg-gradient-to-br from-ice-blue/10 to-transparent p-12 rounded-3xl border border-ice-blue/20">
          <h2 className="text-3xl font-display font-bold mb-4 text-ice-blue">Ready to Add Value to Your Team?</h2>
          <p className="text-lg text-text-light/80 mb-8 max-w-xl mx-auto">I'm open to new opportunities and collaborations.</p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-gradient-ice text-graphite font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all">Get in Touch</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;