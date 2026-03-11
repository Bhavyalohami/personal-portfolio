import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaUserGraduate, FaMapMarkerAlt, FaHeart, FaCode,
  FaTrophy, FaLaptopCode, FaCamera, FaBook, FaMusic,
  FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-router-dom';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  // Personal information
  const personalInfo = [
    { label: 'Name', value: 'Bhavya Lohami' },
    { label: 'Based in', value: 'Jaipur, India' },
    { label: 'Experience', value: '5+ years' },
    { label: 'Email', value: 'bhavya@example.com' },
    { label: 'Languages', value: 'English, Hindi' },
    { label: 'Current focus', value: 'Full‑Stack & Cloud' },
  ];

  // Fun facts
  const funFacts = [
    { icon: <FaCode />, text: 'First line of code at age 15' },
    { icon: <FaHeart />, text: 'Open source contributor' },
    { icon: <FaUserGraduate />, text: 'CS graduate from RTU' },
    { icon: <FaMapMarkerAlt />, text: 'Loves trekking and photography' },
    { icon: <FaTrophy />, text: 'Won 3 hackathons' },
    { icon: <FaLaptopCode />, text: 'Built 25+ projects' },
  ];

  // Interests with images
  const interests = [
    { icon: <FaCamera />, name: 'Photography', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400' },
    { icon: <FaBook />, name: 'Reading', image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=400' },
    { icon: <FaMusic />, name: 'Music', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400' },
    { icon: <FaMapMarkerAlt />, name: 'Travel', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400' },
  ];

  // Timeline
  const timeline = [
    { year: '2015', event: 'Started coding in high school', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400' },
    { year: '2019', event: 'Graduated with B.Tech in Computer Science', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400' },
    { year: '2020', event: 'Became full‑stack developer at DigitalCraft', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400' },
    { year: '2022', event: 'Promoted to senior developer at InnovateLabs', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400' },
    { year: '2024', event: 'Started freelance & consulting', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400' },
  ];

  // Core skills
  const coreSkills = [
    { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#ffffff' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
  ];

  return (
    <div className="bg-graphite text-text-light pt-24 overflow-x-hidden">
      {/* Parallax Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-gradient-mesh opacity-20 pointer-events-none"
        style={{ y: y1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-blue/5 via-transparent to-transparent pointer-events-none"
        style={{ y: y2, opacity }}
      />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="animated-gradient-text">ABOUT ME</span>
          </h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">
            Get to know the person behind the code – my journey, values, and what drives me.
          </p>
        </motion.div>

        {/* Bio + Image - Left aligned, with floating effect */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-ice-blue">
              I'm Bhavya Lohami
            </h2>
            <p className="text-lg text-text-light/80 leading-relaxed mb-4">
              A passionate full‑stack developer and cloud architect with over 5 years of experience building scalable, user‑centric web applications. I thrive on solving complex problems and turning ideas into reality through clean code and thoughtful design.
            </p>
            <p className="text-lg text-text-light/80 leading-relaxed mb-4">
              My journey started with a curiosity for how things work on the web, and it has evolved into a career where I get to create digital experiences that make a difference. When I'm not coding, you'll find me exploring the outdoors, experimenting with new tech, or sharing knowledge with the community.
            </p>
            <p className="text-lg text-text-light/80 leading-relaxed">
              I believe in continuous learning and contributing back to the open‑source ecosystem. Every project is an opportunity to innovate and deliver value.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full border border-steel flex items-center justify-center text-2xl text-soft-ice hover:text-ice-blue hover:border-ice-blue transition-all"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-ice-blue/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800"
                alt="Bhavya Lohami"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ice-blue/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-deep-ice/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Quick Facts Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-steel mb-28 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            Quick Facts
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {personalInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 border-b border-steel pb-3"
              >
                <span className="text-ice-blue font-mono font-bold">{item.label}:</span>
                <span className="text-text-light/80">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Skills - Interactive Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -8 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 p-6 rounded-xl border border-steel text-center hover:border-ice-blue/50 hover:shadow-lg hover:shadow-ice-blue/10 transition-all cursor-default"
                style={{ borderColor: skill.color }}
              >
                <div className="text-5xl mb-3" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="text-sm font-mono text-text-light/80">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline with Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            My Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card/50 rounded-xl overflow-hidden border border-steel hover:border-ice-blue/50 transition-all"
              >
                <img src={item.image} alt={item.event} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <span className="text-ice-blue font-mono text-xl font-bold">{item.year}</span>
                  <p className="text-text-light/80 mt-2">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests / Hobbies with Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            When I'm Not Coding
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative h-64 rounded-xl overflow-hidden border border-steel cursor-pointer"
              >
                <img
                  src={interest.image}
                  alt={interest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2 text-ice-blue">{interest.icon}</div>
                  <h4 className="text-xl font-bold">{interest.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            Fun Facts
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 p-6 rounded-xl border border-steel text-center hover:border-ice-blue/50 transition-all"
              >
                <div className="text-4xl text-ice-blue mb-3">{fact.icon}</div>
                <p className="text-text-light/80">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-ice-blue/10 to-transparent p-12 rounded-3xl border border-ice-blue/20"
        >
          <h3 className="text-3xl font-display font-bold mb-4 text-ice-blue">
            Let's Create Something Amazing
          </h3>
          <p className="text-lg text-text-light/80 mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-ice text-graphite font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all"
          >
            Start the Conversation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;