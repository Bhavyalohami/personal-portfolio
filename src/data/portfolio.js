import {
  FaCode,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaServer,
  FaTools,
} from 'react-icons/fa';
import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

const publicBase =
  typeof window !== 'undefined' && window.location.hostname.endsWith('github.io') ? '/personal-portfolio' : '';

export const profile = {
  name: 'Bhavya Lohami',
  role: 'React / Full-Stack Developer',
  location: 'Jaipur, India',
  email: 'bhavyalohami@gmail.com',
  phone: '+91-9680844601',
  resume: `${publicBase}/Bhavya_Resume.pdf`,
  intro:
    'I build polished, scalable web experiences with React, Next.js, Django, REST APIs, and thoughtful product thinking.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
    { label: 'Email', href: 'mailto:bhavyalohami@gmail.com', icon: FaEnvelope },
  ],
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export const stats = [
  { value: '2+', label: 'Years building' },
  { value: '5', label: 'Major projects' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Craft mindset' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FaCode,
    accent: '#6AE2FF',
    items: [
      { name: 'React.js', level: 92, icon: SiReact },
      { name: 'Next.js', level: 86, icon: SiNextdotjs },
      { name: 'JavaScript', level: 90, icon: SiJavascript },
      { name: 'Tailwind CSS', level: 94, icon: SiTailwindcss },
      { name: 'Redux / Context', level: 82, icon: SiRedux },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    accent: '#A78BFA',
    items: [
      { name: 'Django', level: 84, icon: SiDjango },
      { name: 'Node.js', level: 78, icon: FaServer },
      { name: 'REST APIs', level: 88, icon: FaCode },
      { name: 'SQL', level: 80, icon: FaDatabase },
      { name: 'MongoDB', level: 82, icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    accent: '#FDE68A',
    items: [
      { name: 'Git / GitHub', level: 88, icon: FaGithub },
      { name: 'Azure', level: 74, icon: FaServer },
      { name: 'React Hooks', level: 90, icon: SiReact },
      { name: 'Performance', level: 84, icon: FaTools },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Real Estate Management System',
    category: 'Real Estate',
    period: 'Apr 2025 - Present',
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A responsive property platform with listings, advanced filters, role-based dashboards, messaging, and API-led content.',
    story:
      'Designed as a high-trust property product where buyers can browse fast, sellers can manage inventory, and admins can keep the marketplace moving.',
    tags: ['Next.js', 'Tailwind', 'Django', 'Redux', 'Azure'],
    metrics: ['SSR ready', 'Role dashboards', 'Advanced filters'],
    featured: true,
  },
  {
    id: 2,
    title: 'HRMS Platform',
    category: 'HRMS',
    period: 'Jan 2025 - Mar 2025',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'Employee dashboards, task tracking, admin controls, modal workflows, and a modular React component system.',
    story:
      'A cleaner HR command center that helps teams create, assign, update, and review tasks without losing operational context.',
    tags: ['React', 'Tailwind', 'Context API', 'REST APIs'],
    metrics: ['Task flows', 'Admin control', 'Reusable UI'],
  },
  {
    id: 3,
    title: 'Clinic Appointment Booking',
    category: 'Healthcare',
    period: 'Aug 2024 - Dec 2024',
    image:
      'https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A full-stack booking experience with doctor cards, slot selection, confirmation flows, and admin scheduling.',
    story:
      'Built around clarity and trust: patients can move from discovery to booking quickly while admins manage doctors and services.',
    tags: ['React', 'Django', 'MongoDB', 'Hooks', 'REST APIs'],
    metrics: ['Slot booking', 'Admin panel', 'Validated forms'],
  },
  {
    id: 4,
    title: 'LS REALTORIN',
    category: 'Real Estate',
    period: '2023',
    image:
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A real estate showcase with virtual tour direction, agent dashboards, property discovery, and cloud-minded architecture.',
    story:
      'A portfolio-grade property product concept that balances rich visual browsing with pragmatic listing management.',
    tags: ['React', 'Django', 'PostgreSQL', 'AWS'],
    metrics: ['Property UX', 'Agent tools', 'Search ready'],
  },
];

export const experiences = [
  {
    role: 'Software Developer',
    company: 'LogicSpice Consultancy',
    location: 'Jaipur, India',
    period: 'May 2024 - Present',
    description:
      'Building production web applications with React, Next.js, Django, REST APIs, role-based dashboards, and responsive UI systems.',
    wins: ['Real estate platform delivery', 'API integration and state flows', 'Frontend performance improvements'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'LogicSpice Project Studio',
    location: 'Jaipur, India',
    period: 'Aug 2024 - Dec 2024',
    description:
      'Delivered a clinic appointment platform with reusable booking components, admin management, and clean validation flows.',
    wins: ['Doctor card system', 'Slot selector experience', 'Admin service management'],
  },
  {
    role: 'SDE Intern',
    company: 'BlueSpace Software',
    location: 'Jaipur, India',
    period: '2023',
    description:
      'Worked on client-facing web interfaces, learned production collaboration, and translated requirements into working UI.',
    wins: ['React components', 'Client requirement mapping', 'Team delivery habits'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Poornima College of Engineering',
    location: 'Jaipur, India',
    period: '2020 - 2024',
    notes: ['Software engineering', 'Web technologies', 'Data structures', 'Database systems'],
  },
  {
    degree: 'Senior Secondary',
    field: 'Science',
    institution: 'Central Academy',
    location: 'Jaipur, India',
    period: 'Completed before 2020',
    notes: ['Mathematics', 'Problem solving', 'Technology foundation'],
  },
];

export const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, icon: FaPhone },
  { label: 'Location', value: profile.location, href: null, icon: FaMapMarkerAlt },
];
