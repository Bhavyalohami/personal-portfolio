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
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const publicBase =
  typeof window !== 'undefined' && window.location.hostname.endsWith('github.io') ? '/personal-portfolio' : '';
const assetBase = publicBase;

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
    { label: 'GitHub', href: 'https://github.com/Bhavyalohami', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavya-lohami-62a53718a/', icon: FaLinkedin },
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
  { value: '6', label: 'Production worlds' },
  { value: '1000+', label: 'Listings supported' },
  { value: '90%', label: 'Booking conflicts reduced' },
  { value: '50+', label: 'Doctors/services managed' },
  { value: '100%', label: 'Craft mindset' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FaCode,
    accent: '#D85B4C',
    items: [
      { name: 'React.js', level: 92, icon: SiReact },
      { name: 'Next.js', level: 86, icon: SiNextdotjs },
      { name: 'TypeScript', level: 80, icon: SiTypescript },
      { name: 'JavaScript', level: 90, icon: SiJavascript },
      { name: 'Tailwind CSS', level: 94, icon: SiTailwindcss },
      { name: 'Redux / Context', level: 82, icon: SiRedux },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    accent: '#DCD8D2',
    items: [
      { name: 'Django', level: 84, icon: SiDjango },
      { name: 'Node.js', level: 78, icon: SiNodedotjs },
      { name: 'REST APIs', level: 88, icon: FaCode },
      { name: 'SQL', level: 80, icon: FaDatabase },
      { name: 'MongoDB', level: 82, icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    accent: '#9F9B96',
    items: [
      { name: 'Git / GitHub', level: 88, icon: FaGithub },
      { name: 'Azure', level: 74, icon: FaServer },
      { name: 'React Hooks', level: 90, icon: SiReact },
      { name: 'Performance', level: 84, icon: FaTools },
      { name: 'Search / Filtering', level: 86, icon: FaTools },
      { name: 'Validation Systems', level: 88, icon: FaCode },
    ],
  },
];

export const systemLayers = [
  {
    title: 'API design',
    principle: 'stable contracts',
    body: 'Define stable contracts before screens become complicated. REST APIs should make product states clear and predictable.',
  },
  {
    title: 'Validation systems',
    principle: 'trust before scale',
    body: 'Important workflows need guardrails: slot validation, verification, scheduling rules, and protected transaction states.',
  },
  {
    title: 'Search and filtering',
    principle: 'fast discovery',
    body: 'Search is product strategy. Filters should reduce decision pressure, not just hide data.',
  },
  {
    title: 'Database optimization',
    principle: 'repeatable delivery',
    body: 'Performance work matters when dashboards, listings, schedules, and inventory depend on live operational data.',
  },
  {
    title: 'Reusable components',
    principle: 'quality protection',
    body: 'Reusable UI protects quality across dashboards, forms, tables, booking flows, and mobile screens.',
  },
  {
    title: 'Workflow design',
    principle: 'next step clarity',
    body: 'The best systems make the next operational step obvious for admins, doctors, renters, owners, and teams.',
  },
];

export const projects = [
  {
    id: 1,
    title: 'UPHOMES',
    category: 'Rental marketplace platform',
    period: 'Website / public product',
    image: `${assetBase}/assets/project-uphomes-shot.png`,
    artImage: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    summary:
      'Verified homes, search routes, map discovery, owner communication, visits, and direct move-in coordination.',
    story:
      'A trust-first rental marketplace around verified rentals, flatmate matching, AI-powered discovery, map-based search, owner communication, visits, and direct renter-owner coordination.',
    problem:
      'Renters need confidence before they commit: verified listings, clear costs, fewer intermediaries, safer visits, and a path from discovery to move-in.',
    solution:
      'A marketplace journey that supports discovery, matching, chat, visit scheduling, and direct coordination between renter and owner.',
    challenge:
      'Coordinating trust signals, location-based discovery, profile matching, owner communication, and transaction state without making the journey feel heavy.',
    outcome:
      'Public positioning highlights zero upfront browsing and visit charges, verified rentals, AI smart filters, flatmate matching, map view hunting, owner connection, and live selfie verification.',
    tags: ['Marketplace UX', 'Search', 'Verification', 'Scheduling', 'Payments flow'],
    metrics: ['Verified rentals', 'AI smart filters', 'Map view hunting'],
    source: 'https://uphomes.in',
    featured: true,
  },
  {
    id: 2,
    title: 'Real Estate Management System',
    category: 'Operational real-estate software',
    period: 'Apr 2025 - Present',
    image: `${assetBase}/assets/project-real-estate-shot.png`,
    artImage: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    summary:
      'Listings, filters, inquiries, dashboards, messages, notifications, and role-specific workflows.',
    story:
      'A scalable real-estate management system supporting buying, selling, rental workflows, dashboards, search, messaging, notifications, and inquiry management.',
    problem:
      'Real-estate teams need to manage high-volume listings, buyer/renter intent, inquiries, notifications, and operational dashboards across devices.',
    solution:
      'Built a Next.js, React, and Tailwind CSS system with dynamic listings, advanced search/filtering, role-based dashboards, reusable components, API integrations, messaging, notifications, and inquiry management.',
    challenge:
      'Handling 1000+ dynamic property listings while keeping discovery fast, filters useful, dashboards role-specific, and the interface responsive across devices.',
    outcome:
      'Resume-backed results: support for 1000+ listings and a 60% improvement in user property discovery efficiency through advanced search and filtering.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs', 'Context API', 'Redux'],
    metrics: ['1000+ listings', '60% discovery lift', 'Role dashboards'],
    source: 'https://real-estate-management-lake.vercel.app',
  },
  {
    id: 3,
    title: 'Hospital Management System',
    category: 'Healthcare operations platform',
    period: 'Aug 2024 - Dec 2024',
    image: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    artImage: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    summary:
      'Appointments, doctors, labs, pharmacy, slot validation, pricing, and admin coordination.',
    story:
      'A full-stack hospital management system for appointments, lab scheduling, pharmacy inventory, doctor management, pricing, services, and admin workflows.',
    problem:
      'Healthcare workflows need reliable scheduling, fewer booking conflicts, accurate inventory visibility, and admin tools that remain usable under operational pressure.',
    solution:
      'Built a React and Django platform with REST APIs, reusable UI components, real-time slot validation, responsive admin dashboards, lab scheduling, and medical store inventory management.',
    challenge:
      'Coordinating appointments, doctors, lab tests, services, pricing, schedules, and pharmacy inventory while preventing booking conflicts in real time.',
    outcome:
      'Resume-backed results: 15+ reusable UI components, real-time slot validation reducing booking conflicts by 90%, and admin management for 50+ doctors/services/schedules/lab tests/pricing/inventory.',
    tags: ['React', 'Django', 'REST APIs', 'Reusable UI', 'Responsive design'],
    metrics: ['90% fewer conflicts', '50+ managed entities', '15+ UI components'],
  },
  {
    id: 4,
    title: 'VenomHunt',
    category: 'Brand identity and design studio',
    period: 'Website / identity',
    image: `${assetBase}/assets/project-venomhunt-shot.png`,
    artImage: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    summary:
      'Logo construction, brand identity, visual systems, portfolio proof, and motion-led presentation.',
    story:
      'A brand identity and design studio presentation for logos, visual identity, marketing visuals, and logo animation.',
    problem:
      'The brand needs to communicate creative services clearly: logo design, identity systems, visual design, portfolio credibility, and conversion paths for project inquiries.',
    solution:
      'A service-led website that positions the studio around memorable branding, logo design, identity systems, visual storytelling, portfolio work, and start-project contact paths.',
    challenge:
      'Presenting creative services and portfolio depth without mispositioning the brand as a software platform.',
    outcome:
      'Public positioning highlights logo design, brand identity, visual design, logo animation, portfolio, testimonials, blogs, and contact/start-project flows.',
    tags: ['Brand presentation', 'Portfolio UX', 'Service design', 'Responsive web'],
    metrics: ['Logo design', 'Brand identity', 'Visual design'],
    source: 'https://www.venomhunt.com',
  },
  {
    id: 5,
    title: 'GetDevoated',
    category: 'Plant-based ice cream brand',
    period: 'Website / product story',
    image: `${assetBase}/assets/project-devoated-shot.png`,
    artImage: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    summary:
      'Dairy-free ice cream brand presence with scooping ice cream, sorbet, soft serve, acai, ingredients, and contact flow.',
    story:
      'A bright consumer brand site for Devoated Ice-creams, positioning dairy-free indulgence across ice cream, sorbet, soft-serve mixes, and acai bowls.',
    problem:
      'The product story needs to feel joyful and direct while quickly explaining a dairy-free menu across multiple dessert categories.',
    solution:
      'A food-forward hero, clear category navigation, ingredient storytelling, about section, and get-in-touch path.',
    challenge:
      'Balancing playful visual personality with clear product navigation and readable brand messaging.',
    outcome:
      'Public positioning highlights dairy-free ice cream, sorbet, soft serve, acai, ingredients, and contact flow.',
    tags: ['Brand website', 'Food UX', 'Product storytelling', 'Responsive web'],
    metrics: ['Dairy-free brand', 'Menu navigation', 'Contact flow'],
    source: 'https://www.getdevoated.com',
  },
  {
    id: 6,
    title: "Hope's Safety Backpack",
    category: 'Student safety backpack concept',
    period: 'Concept / source required',
    image: `${assetBase}/assets/project-safety-backpack-shot.png`,
    artImage: `${assetBase}/assets/generated-pages/projects-worlds.png`,
    summary:
      'Student safety backpack concept with bright lights, ready pocket, family support, forms, and kindness-program framing.',
    story:
      "A student-created safety concept site for Hope's Safety Backpack, presenting a bright school-day safety idea with kid-readable feature language and family support.",
    problem:
      'A safety concept for students needs to communicate protection features without becoming too technical or frightening.',
    solution:
      'A visual idea board with bright lights, ready kit, kindness club, family-support messaging, feature exploration, forms, and preorder communication.',
    challenge:
      'Keeping the site child-friendly while still making safety, trust, and product intent feel credible.',
    outcome:
      'Public positioning highlights a student-created idea, bright lights, ready pocket, family support, kindness programs, forms, and a 2026 patent milestone.',
    tags: ['Safety concept', 'Product storytelling', 'Family UX', 'Idea board'],
    metrics: ['Bright lights', 'Ready kit', '2026 milestone'],
    source: 'https://www.hopessafetybackpack.com',
  },
];

export const certificates = [
  {
    title: 'Cloud Infrastructure Trainee',
    issuer: 'Celebal Technologies',
    period: 'May 2023 - Jul 2023',
    focus: 'Microsoft Azure, resource management, networking, deployment processes, virtual machines, virtual networks, and peering.',
    tags: ['Azure', 'VM', 'VNet', 'Cloud'],
  },
  {
    title: 'Production Software Engineering',
    issuer: 'Logicspice Consultancy Pvt. Ltd.',
    period: 'May 2024 - Apr 2026',
    focus: 'Production React, Next.js, Django, Node.js, REST APIs, rendering optimization, API integration, and database-query performance.',
    tags: ['React', 'Next.js', 'Django', 'REST APIs'],
  },
  {
    title: 'BTech Computer Science Engineering',
    issuer: 'Poornima College of Engineering',
    period: 'Jul 2020 - Jun 2024',
    focus: 'Computer science foundation, programming, web development, software problem solving, and applied engineering practice.',
    tags: ['CSE', 'CGPA 7.51', 'Software'],
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
