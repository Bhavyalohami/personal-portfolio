import { projects } from './portfolio';

export const filmActs = [
  {
    id: 'signal',
    chapter: '00',
    eyebrow: 'Cold open',
    title: 'A portfolio with a camera, not a template.',
    copy:
      'The site opens as a cinematic operating system: one continuous story where motion, layout, and 3D staging explain what kind of builder Bhavya is.',
    accent: '#f4efdc',
    scene: 'signal',
    metrics: ['Product story', 'Full-stack craft', 'Motion-led UI'],
  },
  {
    id: 'marketplace',
    chapter: '01',
    eyebrow: 'Trust engine',
    title: 'Discovery turns into confidence.',
    copy:
      'UPHOMES and real-estate systems become the first portal: verified rentals, search, map discovery, dashboards, and user decisions that feel safer.',
    accent: '#ef4b3f',
    scene: 'portal',
    projectId: 1,
    metrics: ['1000+ listings', '60% discovery lift', 'Verified rentals'],
  },
  {
    id: 'operations',
    chapter: '02',
    eyebrow: 'Pressure room',
    title: 'Operational chaos becomes calm.',
    copy:
      'Hospital scheduling, lab operations, pharmacy inventory, pricing, and admin flows are staged as a high-pressure command room.',
    accent: '#dcd8d2',
    scene: 'command',
    projectId: 3,
    metrics: ['90% fewer conflicts', '50+ entities', '15+ components'],
  },
  {
    id: 'machine',
    chapter: '03',
    eyebrow: 'Machine room',
    title: 'Reusable systems hold the frame.',
    copy:
      'The camera moves into the build layer: components, API contracts, validation, search states, responsive layouts, and performance habits.',
    accent: '#9f9b96',
    scene: 'machine',
    metrics: ['API contracts', 'Search states', 'Performance'],
  },
  {
    id: 'proof',
    chapter: '04',
    eyebrow: 'Evidence wall',
    title: 'The receipts stay visible.',
    copy:
      'Experience, education, certificates, and shipped work resolve into a proof wall that is readable first and cinematic second.',
    accent: '#ef4b3f',
    scene: 'archive',
    metrics: ['Production role', 'Cloud training', 'CSE foundation'],
  },
  {
    id: 'transmission',
    chapter: '05',
    eyebrow: 'Final transmission',
    title: 'The next project gets the spotlight.',
    copy:
      'The film ends by handing the user a direct action: open the channel, send the brief, and start building the next scene.',
    accent: '#dcd8d2',
    scene: 'transmission',
    metrics: ['Email', 'Resume', 'Project inquiry'],
  },
];

export const filmProjects = projects.slice(0, 5).map((project, index) => ({
  ...project,
  sceneIndex: index,
  accent: ['#ef4b3f', '#dcd8d2', '#9f9b96', '#ef4b3f', '#dcd8d2'][index % 5],
}));

export const getFilmAct = (index = 0) => filmActs[Math.max(0, Math.min(filmActs.length - 1, index))];
