// import React from 'react';
// import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCertificate, FaBook, FaUniversity } from 'react-icons/fa';

// const Education = () => {
//   const education = [
//     {
//       id: 1,
//       degree: 'MASTER OF COMPUTER SCIENCE',
//       institution: 'STANFORD UNIVERSITY',
//       period: '2017 - 2019',
//       location: 'STANFORD, CA',
//       gpa: '3.9/4.0',
//       description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Neural Networks for Image Recognition". Published 2 research papers in international conferences.',
//       courses: [
//         'ADVANCED ALGORITHMS',
//         'MACHINE LEARNING',
//         'COMPUTER VISION',
//         'DISTRIBUTED SYSTEMS',
//         'NATURAL LANGUAGE PROCESSING',
//         'DEEP LEARNING'
//       ],
//       achievements: [
//         'GRADUATED WITH HONORS (MAGNA CUM LAUDE)',
//         'BEST THESIS AWARD 2019',
//         'RESEARCH ASSISTANT - AI LAB',
//         'PUBLISHED 2 RESEARCH PAPERS'
//       ],
//       icon: <FaUniversity />
//     },
//     {
//       id: 2,
//       degree: 'BACHELOR OF SOFTWARE ENGINEERING',
//       institution: 'MIT',
//       period: '2013 - 2017',
//       location: 'CAMBRIDGE, MA',
//       gpa: '3.8/4.0',
//       description: 'Focus on Software Development and Systems Design. Minor in Mathematics. President of Computer Science Club.',
//       courses: [
//         'DATA STRUCTURES & ALGORITHMS',
//         'OPERATING SYSTEMS',
//         'DATABASE SYSTEMS',
//         'SOFTWARE ENGINEERING',
//         'COMPUTER NETWORKS',
//         'WEB DEVELOPMENT'
//       ],
//       achievements: [
//         "DEAN'S LIST ALL SEMESTERS",
//         'HACKATHON WINNER 2016',
//         'STUDENT COUNCIL PRESIDENT',
//         'TEACHING ASSISTANT FOR ALGORITHMS'
//       ],
//       icon: <FaGraduationCap />
//     },
//     {
//       id: 3,
//       degree: 'HIGH SCHOOL DIPLOMA',
//       institution: 'TECH MAGNET HIGH SCHOOL',
//       period: '2009 - 2013',
//       location: 'SEATTLE, WA',
//       gpa: '4.0/4.0',
//       description: 'Focus on STEM subjects. President of Computer Science Club. Captain of Robotics Team.',
//       courses: [
//         'AP COMPUTER SCIENCE',
//         'CALCULUS BC',
//         'PHYSICS C',
//         'STATISTICS',
//         'DIGITAL ELECTRONICS',
//         'WEB DESIGN'
//       ],
//       achievements: [
//         'VALEDICTORIAN',
//         'SCIENCE OLYMPIAD GOLD MEDALIST',
//         'NATIONAL MERIT SCHOLAR',
//         'ROBOTICS COMPETITION WINNER'
//       ],
//       icon: <FaBook />
//     },
//   ];

//   const certifications = [
//     {
//       name: 'AWS CERTIFIED SOLUTIONS ARCHITECT',
//       issuer: 'AMAZON WEB SERVICES',
//       date: '2022',
//       credential: 'CREDENTIAL ID: AWS-12345',
//       color: 'from-orange-500 to-yellow-500'
//     },
//     {
//       name: 'GOOGLE PROFESSIONAL CLOUD ARCHITECT',
//       issuer: 'GOOGLE CLOUD',
//       date: '2021',
//       credential: 'CREDENTIAL ID: GCP-67890',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       name: 'REACT DEVELOPER CERTIFICATION',
//       issuer: 'META',
//       date: '2020',
//       credential: 'CREDENTIAL ID: META-45678',
//       color: 'from-blue-600 to-purple-600'
//     },
//     {
//       name: 'SCRUM MASTER CERTIFIED',
//       issuer: 'SCRUM ALLIANCE',
//       date: '2019',
//       credential: 'CREDENTIAL ID: SMC-12345',
//       color: 'from-green-500 to-teal-500'
//     },
//   ];

//   return (
//     <div className="pt-24 min-h-screen">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Hero Section */}
//         <div className="text-center mb-12 animate-fade-in-up">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-ice-blue to-deep-ice bg-clip-text text-transparent">EDUCATION</span> & CERTIFICATIONS
//           </h1>
//           <p className="text-text-light/60 text-lg max-w-2xl mx-auto font-mono">
//             Academic background and professional certifications
//           </p>
//         </div>

//         {/* Education Timeline */}
//         <div className="max-w-4xl mx-auto mb-16">
//           {education.map((edu, index) => (
//             <div
//               key={edu.id}
//               className={`
//                 bg-card rounded-2xl p-6 mb-8 border border-steel
//                 hover:border-ice-blue card-hover
//                 animate-fade-in-up
//               `}
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div className="flex items-start space-x-4">
//                 {/* Icon */}
//                 <div className="w-16 h-16 bg-gradient-ice rounded-xl flex items-center justify-center text-graphite text-2xl flex-shrink-0">
//                   {edu.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="flex-grow">
//                   {/* Header */}
//                   <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-text-light">{edu.degree}</h3>
//                       <h4 className="text-xl text-ice-blue font-semibold font-mono">{edu.institution}</h4>
//                     </div>
                    
//                     <div className="mt-2 md:mt-0">
//                       <div className="flex flex-wrap items-center gap-4 text-soft-ice">
//                         <span className="flex items-center text-sm">
//                           <FaCalendarAlt className="mr-2 text-ice-blue" />
//                           {edu.period}
//                         </span>
//                         <span className="flex items-center text-sm">
//                           <FaMapMarkerAlt className="mr-2 text-ice-blue" />
//                           {edu.location}
//                         </span>
//                         <span className="flex items-center px-3 py-1 bg-gradient-ice text-graphite rounded-full text-sm font-mono">
//                           <FaAward className="mr-1.5" />
//                           GPA: {edu.gpa}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-text-light/80 mb-6">{edu.description}</p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Courses */}
//                     <div>
//                       <h5 className="font-semibold text-ice-blue mb-2 font-mono">KEY COURSES:</h5>
//                       <div className="flex flex-wrap gap-2">
//                         {edu.courses.map((course, idx) => (
//                           <span
//                             key={idx}
//                             className="px-3 py-1.5 bg-steel text-soft-ice text-xs font-mono rounded-lg"
//                           >
//                             {course}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Achievements */}
//                     <div>
//                       <h5 className="font-semibold text-ice-blue mb-2 font-mono">ACHIEVEMENTS:</h5>
//                       <ul className="space-y-1">
//                         {edu.achievements.map((achievement, idx) => (
//                           <li key={idx} className="flex items-center text-text-light/70">
//                             <span className="w-2 h-2 bg-deep-ice rounded-full mr-3"></span>
//                             {achievement}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certifications Section */}
//         <div className="animate-fade-in-up">
//           <h2 className="text-3xl font-bold text-center mb-8 text-text-light">
//             PROFESSIONAL <span className="text-ice-blue">CERTIFICATIONS</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {certifications.map((cert, index) => (
//               <div
//                 key={cert.name}
//                 className={`
//                   bg-card p-6 rounded-xl border border-steel
//                   hover:border-ice-blue card-hover
//                   animate-fade-in-up
//                 `}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Certificate Icon */}
//                 <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4`}>
//                   <FaCertificate />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-text-light mb-2 font-mono">{cert.name}</h3>
//                 <p className="text-text-light/60 text-sm mb-4">ISSUED BY: {cert.issuer}</p>
                
//                 <div className="text-sm text-text-light/50 mb-4">
//                   <div className="flex items-center">
//                     <FaCalendarAlt className="mr-2" />
//                     DATE: {cert.date}
//                   </div>
//                 </div>
                
//                 <p className="text-xs text-text-light/40 mb-4 font-mono">{cert.credential}</p>
                
//                 <button className="w-full py-2.5 bg-steel text-soft-ice font-mono rounded-lg hover:bg-ice-blue hover:text-graphite transition-all duration-300 text-sm">
//                   VERIFY CREDENTIAL
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaCertificate, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Education = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Rajasthan Technical University',
      location: 'Kota, India',
      period: '2015 – 2019',
      grade: 'CGPA: 8.7/10',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800',
      description: 'Specialized in software engineering, data structures, algorithms, and web technologies. Completed major project on e‑learning platform.',
      courses: ['Data Structures & Algorithms', 'Database Management', 'Web Technologies', 'Cloud Computing'],
    },
    {
      degree: 'Senior Secondary (12th)',
      institution: 'Central Academy',
      location: 'Jaipur, India',
      period: '2013 – 2015',
      grade: 'Percentage: 92%',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800',
      description: 'Science stream with Computer Science as elective. Participated in state‑level science exhibition.',
      courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    },
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: '2023', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400' },
    { name: 'MongoDB Developer’s Certification', issuer: 'MongoDB University', date: '2022', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400' },
    { name: 'Full‑Stack Web Development Specialization', issuer: 'Coursera (Johns Hopkins)', date: '2020', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400' },
    { name: 'Google UX Design Certificate', issuer: 'Google', date: '2021', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400' },
  ];

  const achievements = [
    { title: 'University Topper', year: '2019', icon: '🏆' },
    { title: 'Hackathon Winner', year: '2018', icon: '🥇' },
    { title: 'Best Project Award', year: '2019', icon: '🏅' },
  ];

  return (
    <div className="bg-graphite text-text-light pt-24 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 w-full h-full bg-gradient-mesh opacity-20 pointer-events-none" style={{ y: y1 }} />
      <motion.div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-blue/5 via-transparent to-transparent pointer-events-none" style={{ y: y2 }} />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4"><span className="animated-gradient-text">EDUCATION</span></h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">My academic background and continuous learning journey.</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '2', label: 'Degrees', icon: <FaGraduationCap /> },
            { value: '4', label: 'Certifications', icon: <FaCertificate /> },
            { value: '8.7', label: 'CGPA', icon: <FaBook /> },
            { value: '3', label: 'Achievements', icon: '🏆' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card/50 p-6 rounded-2xl border border-steel text-center hover:border-ice-blue/50 transition-all">
              <div className="text-4xl text-ice-blue mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-ice-blue">{stat.value}</div>
              <div className="text-text-light/60 font-mono text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Degrees */}
        <div className="space-y-12 mb-20">
          {education.map((edu, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="bg-card/50 p-8 rounded-2xl border border-steel hover:border-ice-blue/50 transition-all overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10"><FaUniversity className="w-full h-full text-ice-blue" /></div>
              <div className="flex flex-col md:flex-row gap-6">
                <img src={edu.image} alt={edu.institution} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-ice-blue mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-text-light mb-1">{edu.institution}</h4>
                  <div className="flex items-center gap-4 text-sm text-text-light/60 mb-3">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {edu.period}</span>
                    <span className="flex items-center gap-1"><FaMapMarkerAlt /> {edu.location}</span>
                  </div>
                  <p className="text-text-light/80 mb-2">{edu.description}</p>
                  <span className="inline-block px-3 py-1 bg-ice-blue/10 text-ice-blue text-sm font-mono rounded-full mb-4">{edu.grade}</span>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => <span key={course} className="px-2 py-1 bg-steel text-soft-ice text-xs font-mono rounded">{course}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-card/50 rounded-xl overflow-hidden border border-steel hover:border-ice-blue/50 transition-all">
                <img src={cert.image} alt={cert.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-ice-blue">{cert.name}</h3>
                  <p className="text-text-light/60 text-sm">{cert.issuer} • {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">Academic Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((ach, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card/50 p-6 rounded-xl border border-steel text-center">
                <span className="text-5xl mb-3 block">{ach.icon}</span>
                <h3 className="text-xl font-bold text-ice-blue">{ach.title}</h3>
                <p className="text-text-light/60">{ach.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center bg-gradient-to-br from-ice-blue/10 to-transparent p-12 rounded-3xl border border-ice-blue/20">
          <h2 className="text-3xl font-display font-bold mb-4 text-ice-blue">Never Stop Learning</h2>
          <p className="text-lg text-text-light/80 mb-8 max-w-xl mx-auto">I'm always adding new skills and certifications. Stay tuned!</p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-gradient-ice text-graphite font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all">Let's Connect</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;