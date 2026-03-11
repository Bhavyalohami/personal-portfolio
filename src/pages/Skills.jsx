import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws,
  FaGitAlt, FaFigma, FaDatabase, FaCss3Alt, FaHtml5, FaJs,
  FaVuejs, FaAngular, FaGithub, FaNpm, FaYarn
} from 'react-icons/fa';
import {
  SiNextdotjs, SiDjango, SiTailwindcss, SiTypescript,
  SiMongodb, SiPostgresql, SiGraphql, SiKubernetes,
  SiJest, SiRedux, SiFirebase, SiRedis, SiExpress,
  SiPrisma,  SiInsomnia
} from 'react-icons/si';
import { Link } from 'react-router-dom';

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  // Stats
  const stats = [
    { value: '5+', label: 'Years Coding', icon: '💻' },
    { value: '20+', label: 'Technologies', icon: '⚙️' },
    { value: '25+', label: 'Projects', icon: '🚀' },
    { value: '∞', label: 'Coffee Cups', icon: '☕' },
  ];

  // Skill categories (only technologies from your home page + common tools)
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      color: '#61DAFB',
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs />, color: '#ffffff' },
        { name: 'TypeScript', level: 80, icon: <SiTypescript />, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'JavaScript', level: 90, icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Redux', level: 75, icon: <SiRedux />, color: '#764ABC' },
      ],
    },
    {
      title: 'Backend',
      icon: <FaNodeJs />,
      color: '#339933',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs />, color: '#339933' },
        { name: 'Django', level: 80, icon: <SiDjango />, color: '#092E20' },
        { name: 'Python', level: 75, icon: <FaPython />, color: '#3776AB' },
        { name: 'GraphQL', level: 70, icon: <SiGraphql />, color: '#E10098' },
        { name: 'Express.js', level: 80, icon: <SiExpress />, color: '#ffffff' },
      ],
    },
    {
      title: 'Database & DevOps',
      icon: <FaDatabase />,
      color: '#47A248',
      skills: [
        { name: 'MongoDB', level: 80, icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', level: 75, icon: <SiPostgresql />, color: '#336791' },
        { name: 'Docker', level: 70, icon: <FaDocker />, color: '#2496ED' },
        { name: 'AWS', level: 65, icon: <FaAws />, color: '#FF9900' },
        { name: 'Kubernetes', level: 60, icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'Firebase', level: 70, icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Redis', level: 60, icon: <SiRedis />, color: '#DC382D' },
      ],
    },
    {
      title: 'Tools & Testing',
      icon: <FaGitAlt />,
      color: '#F05032',
      skills: [
        { name: 'Git', level: 90, icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Jest', level: 70, icon: <SiJest />, color: '#C21325' },
        { name: 'Figma', level: 60, icon: <FaFigma />, color: '#F24E1E' },
        { name: 'Postman', level: 85, icon: <SiInsomnia />, color: '#FF6C37' },
        { name: 'NPM/Yarn', level: 80, icon: <FaNpm />, color: '#CB3837' },
      ],
    },
  ];

  // Tools I Use (with images)
  const tools = [
    { name: 'VS Code', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400' },
    { name: 'GitHub', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2b7?auto=format&fit=crop&w=400' },
    { name: 'Docker', image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=400' },
    { name: 'Figma', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400' },
  ];

  // Currently Learning
  const learning = [
    { name: 'Rust', icon: '🦀', image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=400' },
    { name: 'Kubernetes', icon: '⎈', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=400' },
    { name: 'GraphQL', icon: '◉', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=400' },
  ];

  // Certifications (placeholder images)
  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400' },
    { name: 'MongoDB Associate', issuer: 'MongoDB', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400' },
    { name: 'Full‑Stack Specialization', issuer: 'Coursera', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400' },
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
            <span className="animated-gradient-text">TECHNICAL SKILLS</span>
          </h1>
          <p className="text-xl text-text-light/60 max-w-2xl mx-auto">
            A comprehensive overview of the technologies I use daily to build robust, scalable applications.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/50 p-6 rounded-2xl border border-steel text-center hover:border-ice-blue/50 transition-all"
            >
              <span className="text-4xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl font-bold text-ice-blue">{stat.value}</div>
              <div className="text-text-light/60 font-mono text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-20 mb-28">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl" style={{ color: category.color }}>{category.icon}</div>
                <h2 className="text-3xl font-display font-bold" style={{ color: category.color }}>
                  {category.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card/50 p-5 rounded-xl border border-steel hover:border-ice-blue/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-text-light">{skill.name}</span>
                      </div>
                      <span className="text-ice-blue font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-steel rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools I Use - Image Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            Tools I Use Daily
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-48 rounded-xl overflow-hidden border border-steel"
              >
                <img src={tool.image} alt={tool.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-xl">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            🔭 Currently Learning
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {learning.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative h-64 rounded-2xl overflow-hidden border border-steel"
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl mb-2 block">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-ice-blue">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-card/50 rounded-xl overflow-hidden border border-steel"
              >
                <img src={cert.image} alt={cert.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-ice-blue">{cert.name}</h3>
                  <p className="text-text-light/60 text-sm">{cert.issuer}</p>
                </div>
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
          <h2 className="text-3xl font-display font-bold mb-4 text-ice-blue">
            Want to discuss a project?
          </h2>
          <p className="text-lg text-text-light/80 mb-8 max-w-xl mx-auto">
            I'm always excited to apply my skills to new challenges. Let's talk!
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-ice text-graphite font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-ice-blue/20 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;