// import React, { useRef } from 'react';
// import { 
//   FaDownload, FaPrint, FaEnvelope, FaPhone, 
//   FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe,
//   FaFilePdf, FaStar, FaCalendar, FaBuilding, 
//   FaGraduationCap, FaCode, FaLanguage, FaTerminal 
// } from 'react-icons/fa';

// const Resume = () => {
//   const resumeRef = useRef();

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'bhavya-lohami-resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const skills = {
//     technical: [
//       'REACT.JS', 'NEXT.JS', 'NODE.JS', 'PYTHON', 'DJANGO',
//       'MONGODB', 'POSTGRESQL', 'AWS', 'DOCKER', 'GIT',
//       'REST APIS', 'GRAPHQL', 'TYPESCRIPT', 'TAILWIND CSS'
//     ],
//     professional: [
//       'TEAM LEADERSHIP', 'PROJECT MANAGEMENT', 'AGILE/SCRUM',
//       'PROBLEM SOLVING', 'COMMUNICATION', 'MENTORING',
//       'CODE REVIEW', 'TECHNICAL WRITING', 'CLIENT RELATIONS'
//     ]
//   };

//   const experience = [
//     {
//       title: 'FULL STACK DEVELOPER',
//       company: 'TECH SOLUTIONS INC.',
//       period: '2022 - PRESENT',
//       location: 'SAN FRANCISCO, CA',
//       highlights: [
//         'Led development of 10+ web applications serving 50k+ users',
//         'Improved application performance by 40% through optimization',
//         'Mentored 3 junior developers, improving team productivity by 30%',
//         'Reduced deployment time by 60% with CI/CD implementation'
//       ]
//     },
//     {
//       title: 'FRONTEND DEVELOPER',
//       company: 'DIGITAL AGENCY CO.',
//       period: '2020 - 2022',
//       location: 'NEW YORK, NY',
//       highlights: [
//         'Built 20+ responsive websites for diverse client portfolios',
//         'Achieved 95+ Lighthouse scores for all projects',
//         'Implemented accessibility standards meeting WCAG 2.1',
//         'Collaborated with 15+ clients delivering exceptional results'
//       ]
//     }
//   ];

//   const education = [
//     {
//       degree: 'M.SC. COMPUTER SCIENCE',
//       school: 'STANFORD UNIVERSITY',
//       year: '2019',
//       gpa: '3.9/4.0'
//     },
//     {
//       degree: 'B.SC. SOFTWARE ENGINEERING',
//       school: 'MIT',
//       year: '2017',
//       gpa: '3.8/4.0'
//     }
//   ];

//   return (
//     <div className="pt-24 min-h-screen">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12 animate-fade-in-up">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-2">
//               <span className="bg-gradient-to-r from-ice-blue to-deep-ice bg-clip-text text-transparent">RESUME</span>
//             </h1>
//             <p className="text-text-light/60 text-lg font-mono">
//               Professional summary and downloadable resume
//             </p>
//           </div>
          
//           <div className="flex space-x-4 mt-6 md:mt-0">
//             <button
//               onClick={handleDownload}
//               className="
//                 px-6 py-3 bg-gradient-ice text-graphite font-semibold font-mono
//                 rounded-lg hover:shadow-xl hover:shadow-ice-blue/20
//                 transition-all duration-300 flex items-center space-x-2
//                 hover:scale-105
//               "
//             >
//               <FaDownload />
//               <span>DOWNLOAD PDF</span>
//             </button>
//             <button
//               onClick={handlePrint}
//               className="
//                 px-6 py-3 bg-card text-text-light font-semibold font-mono
//                 rounded-lg hover:bg-steel border border-steel
//                 transition-all duration-300 flex items-center space-x-2
//                 hover:scale-105
//               "
//             >
//               <FaPrint />
//               <span>PRINT RESUME</span>
//             </button>
//           </div>
//         </div>

//         {/* Resume Content */}
//         <div ref={resumeRef} className="bg-card rounded-2xl border border-steel p-8 mb-12 animate-fade-in-up">
//           {/* Contact Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 p-6 bg-gradient-to-r from-steel to-card rounded-xl border border-steel">
//             {[
//               { icon: <FaEnvelope />, label: 'EMAIL', value: 'bhavya@example.com' },
//               { icon: <FaPhone />, label: 'PHONE', value: '+1 (123) 456-7890' },
//               { icon: <FaMapMarkerAlt />, label: 'LOCATION', value: 'SAN FRANCISCO, CA' },
//               { icon: <FaLinkedin />, label: 'LINKEDIN', value: 'linkedin.com/in/bhavya' },
//               { icon: <FaGithub />, label: 'GITHUB', value: 'github.com/bhavya' },
//               { icon: <FaGlobe />, label: 'PORTFOLIO', value: 'bhavya.dev' },
//             ].map((contact, index) => (
//               <div key={index} className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-ice rounded-lg flex items-center justify-center text-graphite shadow-sm">
//                   {contact.icon}
//                 </div>
//                 <div>
//                   <div className="text-xs text-soft-ice font-mono">{contact.label}</div>
//                   <div className="font-medium text-text-light text-sm">{contact.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Professional Summary */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-text-light mb-4 flex items-center font-mono">
//               <FaFilePdf className="mr-3 text-ice-blue" />
//               PROFESSIONAL SUMMARY
//             </h2>
//             <p className="text-text-light/80 leading-relaxed border-l-4 border-ice-blue pl-4 py-2 bg-steel/30 rounded-r-lg">
//               Full Stack Developer with 5+ years of experience building scalable web applications. 
//               Proficient in modern JavaScript frameworks and cloud technologies. Passionate about 
//               creating efficient, user-friendly solutions and mentoring junior developers. 
//               Proven track record of delivering high-quality software on time and within budget.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Experience */}
//               <div>
//                 <h2 className="text-2xl font-bold text-text-light mb-6 flex items-center font-mono">
//                   <FaBuilding className="mr-3 text-ice-blue" />
//                   WORK EXPERIENCE
//                 </h2>
//                 <div className="space-y-8">
//                   {experience.map((exp, index) => (
//                     <div key={index} className="border-l-4 border-ice-blue pl-6 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
//                       <h3 className="text-xl font-bold text-text-light">{exp.title}</h3>
//                       <div className="flex flex-wrap items-center gap-4 my-3">
//                         <span className="text-ice-blue font-semibold font-mono">{exp.company}</span>
//                         <span className="text-text-light/60 flex items-center text-sm">
//                           <FaCalendar className="mr-1.5" />
//                           {exp.period}
//                         </span>
//                         <span className="text-text-light/60 text-sm">{exp.location}</span>
//                       </div>
//                       <ul className="space-y-2 mt-4">
//                         {exp.highlights.map((highlight, idx) => (
//                           <li key={idx} className="flex items-start">
//                             <FaStar className="w-4 h-4 text-ice-blue mr-3 mt-1 flex-shrink-0" />
//                             <span className="text-text-light/70">{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Education */}
//               <div>
//                 <h2 className="text-2xl font-bold text-text-light mb-6 font-mono">EDUCATION</h2>
//                 <div className="space-y-6">
//                   {education.map((edu, index) => (
//                     <div key={index} className="bg-gradient-to-r from-steel to-card p-6 rounded-xl border border-steel animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="text-xl font-bold text-text-light">{edu.degree}</h3>
//                           <div className="flex items-center space-x-4 mt-2">
//                             <span className="text-ice-blue font-semibold font-mono">{edu.school}</span>
//                             <span className="text-text-light/60">{edu.year}</span>
//                           </div>
//                         </div>
//                         <div className="w-12 h-12 bg-gradient-ice rounded-lg flex items-center justify-center text-graphite">
//                           <FaGraduationCap className="text-xl" />
//                         </div>
//                       </div>
//                       <div className="mt-4">
//                         <span className="px-3 py-1 bg-gradient-ice text-graphite rounded-full text-sm font-mono">
//                           GPA: {edu.gpa}/4.0
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-8">
//               {/* Technical Skills */}
//               <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
//                 <h2 className="text-2xl font-bold text-text-light mb-4 font-mono">TECHNICAL SKILLS</h2>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.technical.map((skill, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-2 bg-steel text-soft-ice text-sm font-mono rounded-lg border border-steel"
//                     >
//                       <FaCode className="inline mr-2 text-ice-blue" />
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Professional Skills */}
//               <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
//                 <h2 className="text-2xl font-bold text-text-light mb-4 font-mono">PROFESSIONAL SKILLS</h2>
//                 <div className="space-y-4">
//                   {skills.professional.map((skill, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between mb-1">
//                         <span className="font-medium text-text-light font-mono text-sm">{skill}</span>
//                         <span className="font-bold text-ice-blue">90%</span>
//                       </div>
//                       <div className="w-full bg-steel rounded-full h-2">
//                         <div
//                           className="h-2 rounded-full bg-gradient-to-r from-ice-blue to-deep-ice transition-all duration-1000"
//                           style={{ width: '90%' }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Languages */}
//               <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
//                 <h2 className="text-2xl font-bold text-text-light mb-4 font-mono">LANGUAGES</h2>
//                 <div className="space-y-3">
//                   {[
//                     { language: 'ENGLISH', level: 'NATIVE', levelNum: 100 },
//                     { language: 'HINDI', level: 'NATIVE', levelNum: 100 },
//                     { language: 'SPANISH', level: 'FLUENT', levelNum: 80 },
//                     { language: 'FRENCH', level: 'INTERMEDIATE', levelNum: 60 },
//                   ].map((lang, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between mb-1">
//                         <span className="font-medium text-text-light">{lang.language}</span>
//                         <span className="text-ice-blue font-medium font-mono">{lang.level}</span>
//                       </div>
//                       <div className="w-full bg-steel rounded-full h-2">
//                         <div
//                           className="h-2 rounded-full bg-gradient-to-r from-deep-ice to-ice-blue transition-all duration-1000"
//                           style={{ width: `${lang.levelNum}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="mt-12 p-6 bg-gradient-to-r from-steel to-card rounded-xl border border-ice-blue/30 text-center">
//             <div className="flex items-center justify-center space-x-3 mb-4">
//               <FaTerminal className="text-ice-blue text-2xl" />
//               <h3 className="text-xl font-bold text-text-light font-mono">INTERESTED IN WORKING TOGETHER?</h3>
//             </div>
//             <p className="text-text-light/70 mb-6 max-w-2xl mx-auto">
//               Let's discuss how we can bring your next project to life with cutting-edge technology and exceptional user experience.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center px-6 py-3 bg-gradient-ice text-graphite font-mono font-semibold rounded-lg hover:shadow-xl hover:shadow-ice-blue/20 transition-all duration-300 hover:scale-105"
//             >
//               <FaEnvelope className="mr-2" />
//               GET IN TOUCH
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDownload, FaFilePdf, FaEye, FaAward, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const highlights = [
    { icon: <FaBriefcase />, count: '5+', label: 'Years Experience' },
    { icon: <FaGraduationCap />, count: '2', label: 'Degrees' },
    { icon: <FaAward />, count: '8', label: 'Certifications' },
    { icon: <FaCode />, count: '25+', label: 'Projects' },
  ];

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Django', 'Python', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'Kubernetes', 'CI/CD'] },
  ];

  return (
    <div className="bg-graphite text-text-light pt-24 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 w-full h-full bg-gradient-mesh opacity-20 pointer-events-none" style={{ y: y1 }} />
      <motion.div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-blue/5 via-transparent to-transparent pointer-events-none" style={{ y: y2 }} />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4"><span className="animated-gradient-text">RESUME</span></h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">Download my resume or view it online.</p>
        </motion.div>

        {/* Highlights */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card/50 p-6 rounded-2xl border border-steel text-center hover:border-ice-blue/50 transition-all">
              <div className="text-4xl text-ice-blue mb-3">{item.icon}</div>
              <div className="text-3xl font-bold text-ice-blue">{item.count}</div>
              <div className="text-text-light/60 font-mono text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Preview */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-card/50 p-8 rounded-2xl border border-steel mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-display font-bold text-ice-blue mb-4">Bhavya Lohami – Full Stack Developer</h2>
              <p className="text-text-light/80 mb-6">A detailed PDF version of my resume includes complete work history, education, skills, and contact information. Updated March 2025.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/path-to-resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-ice text-graphite font-semibold rounded-xl hover:shadow-lg transition-all"><FaDownload /> Download PDF</a>
                <Link to="/resume/view" className="inline-flex items-center gap-2 px-6 py-3 border border-ice-blue text-ice-blue font-semibold rounded-xl hover:bg-ice-blue/10 transition-all"><FaEye /> View Online</Link>
              </div>
            </div>
            <div className="w-48 h-48 bg-gradient-ice rounded-2xl flex items-center justify-center text-6xl text-graphite"><FaFilePdf /></div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card/50 p-6 rounded-xl border border-steel">
            <h3 className="text-xl font-bold text-ice-blue mb-4">Technical Skills</h3>
            <ul className="space-y-2 text-text-light/80">
              {skills.map(cat => (
                <li key={cat.category}><span className="font-mono text-ice-blue">{cat.category}:</span> {cat.items.join(', ')}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card/50 p-6 rounded-xl border border-steel">
            <h3 className="text-xl font-bold text-ice-blue mb-4">Languages & Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><FaEnvelope className="text-ice-blue" /> bhavya@example.com</li>
              <li className="flex items-center gap-2"><FaPhone className="text-ice-blue" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-ice-blue" /> Jaipur, India</li>
              <li className="flex items-center gap-2"><span className="font-mono text-ice-blue">Languages:</span> English (Fluent), Hindi (Native)</li>
            </ul>
          </div>
        </motion.div>

        {/* Experience Teaser */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">Recent Experience</h2>
          <div className="space-y-4">
            {['Senior Full‑Stack Developer @ TechCorp (2022–Present)', 'Full‑Stack Developer @ InnovateLabs (2020–2022)', 'Junior Developer @ DigitalCraft (2019–2020)'].map((exp, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className="bg-card/30 p-4 rounded-lg border border-steel flex items-center gap-3">
                <FaBriefcase className="text-ice-blue" />
                <span className="text-text-light/80">{exp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center bg-gradient-to-br from-ice-blue/10 to-transparent p-12 rounded-3xl border border-ice-blue/20">
          <h2 className="text-3xl font-display font-bold mb-4 text-ice-blue">Interested in Working Together?</h2>
          <p className="text-lg text-text-light/80 mb-8 max-w-xl mx-auto">I'm available for freelance, full‑time, or consulting opportunities.</p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-gradient-ice text-graphite font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all">Hire Me</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;