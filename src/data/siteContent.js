// Supporting site content with explicit evidence boundaries.
// Technical notes are original portfolio notes, not previously published articles.

export const technicalNotes = [
  {
    slug: 'validate-time-sensitive-state-at-commit',
    title: 'Displayed availability is not confirmed availability',
    excerpt:
      'A schedule can become stale while a user is still filling a form. Reliable booking flows validate again at the point of commitment.',
    readingTime: '5 min read',
    topic: 'Concurrency and validation',
    status: 'Portfolio note',
    publishedAt: null,
    sourceProjectSlugs: ['hospital-management-system'],
    evidenceNote:
      'This note generalizes the hospital project lesson about real-time slot validation. It does not describe an unpublished production architecture.',
    bodySections: [
      {
        heading: 'The stale state problem',
        paragraphs: [
          'A calendar is a snapshot. Another user can reserve the same slot after the snapshot loads and before the first user confirms.',
          'Disabling an option in the interface improves clarity, but the server must still be the authority when the booking is written.',
        ],
      },
      {
        heading: 'A safer sequence',
        paragraphs: [
          'Show the best available state, collect the minimum required input, and validate the selected slot again immediately before the authoritative write.',
          'If the state changed, preserve the form, explain what happened in plain language, and return a short list of nearby alternatives.',
        ],
      },
      {
        heading: 'What to measure',
        paragraphs: [
          'Track validation failures, duplicate attempts, recovery completion, and time to a successful alternative booking.',
          'A conflict-reduction claim is useful only when the baseline, sample, measurement window, and definition of conflict are recorded.',
        ],
      },
    ],
    codeSnippets: [
      {
        language: 'javascript',
        caption: 'A framework-neutral commit boundary',
        code: `async function confirmAppointment(input, dependencies) {
  const availability = await dependencies.slots.check(input.slotId);

  if (!availability.isAvailable) {
    return {
      ok: false,
      reason: 'slot_changed',
      alternatives: availability.nearbySlots,
    };
  }

  return dependencies.bookings.createAtomically(input);
}`,
      },
    ],
  },
  {
    slug: 'design-filters-as-a-state-model',
    title: 'Design filters as a state model, not a drawer',
    excerpt:
      'Property discovery improves when filter state is understandable, reversible, shareable, and consistent across screen sizes.',
    readingTime: '6 min read',
    topic: 'Search and product state',
    status: 'Portfolio note',
    publishedAt: null,
    sourceProjectSlugs: ['uphomes-rental-marketplace', 'real-estate-management-system'],
    evidenceNote:
      'This note draws only on the documented map, filter, and property-discovery requirements. It does not claim ownership of the UpHomes search implementation.',
    bodySections: [
      {
        heading: 'Search has more than one state',
        paragraphs: [
          'A useful property query can include location, budget, furnishing, move date, property type, and lifestyle constraints at the same time.',
          'The interface should make active criteria visible outside the filter panel so users can explain why a result set changed.',
        ],
      },
      {
        heading: 'Normalize before requesting',
        paragraphs: [
          'Convert empty values, ranges, arrays, and defaults into one predictable query shape before calling an API.',
          'A normalized model makes caching, URL persistence, analytics, tests, and reset behavior easier to reason about.',
        ],
      },
      {
        heading: 'Empty results are part of discovery',
        paragraphs: [
          'An empty result should identify the strongest constraints and offer reversible changes instead of presenting a dead end.',
          'Measure successful refinement and inquiry quality, not only the number of filter interactions.',
        ],
      },
    ],
    codeSnippets: [
      {
        language: 'javascript',
        caption: 'Normalize a query before serializing it',
        code: `function normalizePropertyFilters(filters) {
  return {
    city: filters.city.trim().toLowerCase(),
    minPrice: Number(filters.minPrice) || null,
    maxPrice: Number(filters.maxPrice) || null,
    propertyTypes: [...new Set(filters.propertyTypes)].sort(),
    furnished: filters.furnished || 'any',
  };
}

function toSearchParams(filters) {
  const params = new URLSearchParams();

  Object.entries(normalizePropertyFilters(filters)).forEach(([key, value]) => {
    if (value === null || value === 'any' || value.length === 0) return;
    params.set(key, Array.isArray(value) ? value.join(',') : String(value));
  });

  return params;
}`,
      },
    ],
  },
  {
    slug: 'role-based-ui-is-not-authorization',
    title: 'Role-based UI is not authorization',
    excerpt:
      'Hiding a dashboard action can simplify an interface, but only a server-side policy can protect the underlying operation.',
    readingTime: '4 min read',
    topic: 'Application security',
    status: 'Portfolio note',
    publishedAt: null,
    sourceProjectSlugs: ['real-estate-management-system', 'hospital-management-system'],
    evidenceNote:
      'The source projects document role-specific workflows but do not document their authorization implementation. This note preserves that distinction.',
    bodySections: [
      {
        heading: 'Two different responsibilities',
        paragraphs: [
          'The client decides which actions are relevant enough to show. The server decides whether the current identity may perform an action on a specific resource.',
          'A hidden button is an experience decision. It is not a security control because an API request can be made without the button.',
        ],
      },
      {
        heading: 'Check action, role, and resource',
        paragraphs: [
          'A useful authorization decision includes the requested action, the authenticated subject, and the resource being changed.',
          'Object-level checks matter when two users share a role but do not own the same listing, schedule, inquiry, or inventory record.',
        ],
      },
      {
        heading: 'Make denial observable',
        paragraphs: [
          'Return a consistent denial response, log enough context for investigation, and avoid leaking data in error messages.',
          'Tests should call protected endpoints directly instead of relying only on interface visibility.',
        ],
      },
    ],
    codeSnippets: [
      {
        language: 'javascript',
        caption: 'Keep the server policy authoritative',
        code: `async function updateListing(request, dependencies) {
  const listing = await dependencies.listings.findById(request.params.id);
  const decision = dependencies.policy.can({
    subject: request.user,
    action: 'listing:update',
    resource: listing,
  });

  if (!decision.allowed) {
    return { status: 403, body: { error: 'forbidden' } };
  }

  return dependencies.listings.update(listing.id, request.body);
}`,
      },
    ],
  },
  {
    slug: 'put-trust-boundaries-in-the-interface',
    title: 'Put trust boundaries in the interface',
    excerpt:
      'Verification, pricing, privacy, and transaction scope should appear where a user makes a decision, not only in legal or help content.',
    readingTime: '5 min read',
    topic: 'Trust and product communication',
    status: 'Portfolio note',
    publishedAt: null,
    sourceProjectSlugs: ['uphomes-rental-marketplace'],
    evidenceNote:
      'This note generalizes public UpHomes product behavior. It does not claim that Bhavya designed its policies or verification architecture.',
    bodySections: [
      {
        heading: 'Trust is contextual',
        paragraphs: [
          'A verification badge means little if the user cannot tell what was verified, when it was checked, or what still requires personal judgment.',
          'Place scope and freshness beside the listing, contact, payment, or booking action that depends on it.',
        ],
      },
      {
        heading: 'Describe the product boundary',
        paragraphs: [
          'State what the platform handles and what users must decide directly. This is especially important for deposits, agreements, identity checks, and off-platform coordination.',
          'Clear boundaries reduce accidental overpromising and create better requirements for support and error handling.',
        ],
      },
      {
        heading: 'Do not turn claims into proof',
        paragraphs: [
          'A public product statement is evidence of positioning, not evidence of a specific security implementation or an individual contributor impact.',
          'Portfolio case studies should label the source and scope of every claim that could influence trust.',
        ],
      },
    ],
    codeSnippets: [
      {
        language: 'javascript',
        caption: 'Model a boundary so the interface can repeat it consistently',
        code: `const rentalBoundary = {
  platformHandles: [
    'listing discovery',
    'contact access',
    'recommendation support',
  ],
  usersDecideDirectly: [
    'final rent',
    'deposit',
    'agreement terms',
    'move-in terms',
  ],
};`,
      },
    ],
  },
];

export const labExperiments = [
  {
    slug: 'adaptive-lunar-rendering',
    title: 'Adaptive lunar rendering',
    summary:
      'A responsive React Three Fiber scene that limits pixel ratio, lowers geometry cost on smaller screens, pauses offscreen work, and provides a static fallback.',
    status: 'Live in this portfolio',
    sourceAvailability: {
      publicRepository: false,
      localSource: true,
      paths: ['src/components/3d/Scene.jsx', 'src/components/3d/Environment.jsx'],
      note: 'The implementation is present in this portfolio workspace. No public repository URL is configured.',
    },
    demoHref: '/',
    relatedProjectSlugs: [],
  },
  {
    slug: 'reduced-motion-contract',
    title: 'Reduced-motion interaction contract',
    summary:
      'An implemented motion mode that removes nonessential choreography, limits scene updates, and preserves navigation and content without animation.',
    status: 'Live in this portfolio',
    sourceAvailability: {
      publicRepository: false,
      localSource: true,
      paths: ['src/pages/Home.jsx', 'src/components/3d/Scene.jsx', 'src/index.css'],
      note: 'The implementation is local and can be inspected in the workspace. No standalone package is published.',
    },
    demoHref: '/',
    relatedProjectSlugs: [],
  },
  {
    slug: 'booking-race-condition-harness',
    title: 'Booking race-condition harness',
    summary:
      'A planned test bench for sending competing requests against the same slot and inspecting conflict recovery behavior.',
    status: 'Planned',
    sourceAvailability: {
      publicRepository: false,
      localSource: false,
      paths: [],
      note: 'This experiment is a documented next step. No implementation or source code exists in the current workspace.',
    },
    demoHref: null,
    relatedProjectSlugs: ['hospital-management-system'],
  },
];

export const capabilityGroups = [
  {
    id: 'interface-systems',
    title: 'Interface systems',
    summary: 'Responsive React interfaces, reusable components, state flows, and operational dashboards.',
    capabilities: ['React', 'Next.js', 'Responsive UI', 'Reusable components', 'Context API', 'Redux'],
    projectSlugs: ['real-estate-management-system', 'hospital-management-system'],
    evidenceBoundary:
      'The linked case studies document these technologies and responsibilities. No proficiency percentage is implied.',
  },
  {
    id: 'search-discovery',
    title: 'Search and discovery',
    summary: 'Filters, map-oriented discovery, property matching, and clear empty or recovery states.',
    capabilities: ['Advanced filtering', 'Property discovery', 'Search state', 'Map-oriented UX'],
    projectSlugs: ['uphomes-rental-marketplace', 'real-estate-management-system'],
    evidenceBoundary:
      'UpHomes supports the product behavior only; Bhavya\'s exact implementation ownership there is not documented.',
  },
  {
    id: 'api-validation',
    title: 'API and validation workflows',
    summary: 'REST integrations, server-backed state, scheduling guardrails, and recoverable error handling.',
    capabilities: ['REST APIs', 'Django', 'Validation systems', 'Scheduling flows'],
    projectSlugs: ['real-estate-management-system', 'hospital-management-system'],
    evidenceBoundary:
      'The project records support API integration and Django work but do not expose full backend architecture.',
  },
  {
    id: 'trust-operations',
    title: 'Trust and operations',
    summary: 'Role-aware workflows, explicit product boundaries, verification context, and next-step clarity.',
    capabilities: ['Role-aware UI', 'Trust signals', 'Operational UX', 'Privacy-aware copy'],
    projectSlugs: [
      'uphomes-rental-marketplace',
      'real-estate-management-system',
      'hospital-management-system',
    ],
    evidenceBoundary:
      'Role-aware UI and public verification claims do not establish authorization, encryption, or compliance controls.',
  },
];

export const professionalPrinciples = [
  {
    id: 'prove-the-claim',
    title: 'Prove the claim',
    statement: 'Connect important claims to code, a live product, a resume record, analytics, or an explicit limitation.',
  },
  {
    id: 'validate-at-boundaries',
    title: 'Validate at boundaries',
    statement: 'Treat the interface as guidance and the authoritative server boundary as the final decision point.',
  },
  {
    id: 'design-recovery',
    title: 'Design recovery, not only success',
    statement: 'Preserve user work, explain changed state, and make the next valid action obvious.',
  },
  {
    id: 'access-is-a-requirement',
    title: 'Access is a requirement',
    statement: 'Keyboard, reduced-motion, semantic, contrast, and assistive-technology behavior belong in the definition of done.',
  },
  {
    id: 'performance-is-hierarchy',
    title: 'Performance protects hierarchy',
    statement: 'Load essential meaning first, isolate expensive visuals, and give small devices a deliberate rendering budget.',
  },
  {
    id: 'state-ownership',
    title: 'Give state an owner',
    statement: 'Document which layer owns each state transition so caches, stores, APIs, and interfaces do not compete.',
  },
];

export const now = {
  title: 'Now',
  lastUpdated: '2026-07-19',
  location: 'Jaipur, India',
  focus: [
    'Deepening production React and Next.js architecture patterns.',
    'Practicing accessible motion and keyboard-safe interaction design.',
    'Measuring WebGL cost across desktop and mobile GPU budgets.',
    'Turning project claims into evidence-backed engineering case studies.',
  ],
  building: [
    'This lunar portfolio and its responsive 3D scene.',
    'Detailed case-study pages for UpHomes, VerdantKey, and the Hospital Management System.',
    'A small library of engineering notes grounded in real project constraints.',
  ],
  learningBoundary:
    'These are current areas of practice, not certifications or claims of mastery.',
};

export const changelog = [
  {
    date: '2026-07-19',
    version: 'Lunar atelier direction',
    status: 'Completed',
    changes: [
      'Rebuilt the home experience around an original lunar art direction.',
      'Added a lazy React Three Fiber scene with mobile and reduced-motion constraints.',
      'Added responsive work, about, skills, experience, and contact sections.',
      'Added keyboard-safe mobile navigation and route-aware hash scrolling.',
    ],
  },
  {
    date: '2026-07-19',
    version: 'Original asset pipeline',
    status: 'Completed',
    changes: [
      'Generated an original lunar albedo, star field, and hospital editorial visualization.',
      'Created an original SVG mark and locally synthesized WebM and MP4 signal loops.',
      'Converted project imagery to optimized WebP assets.',
    ],
  },
  {
    date: '2026-07-19',
    version: 'Evidence-aware content foundation',
    status: 'Completed',
    changes: [
      'Added structured case-study data with authorship and evidence boundaries.',
      'Separated product behavior, resume-backed claims, reasoned reflections, and undocumented facts.',
      'Added original technical notes, lab status, capability evidence, budgets, and roadmap content.',
    ],
  },
];

export const verifiedSignals = [
  {
    id: 'uphomes-live',
    label: 'UpHomes public product',
    value: 'Online when checked on 19 July 2026',
    href: 'https://uphomes.in',
    verification: 'HTTP 200 and readable public product content.',
    limitation: 'This verifies the product, not Bhavya\'s exact contribution.',
  },
  {
    id: 'verdantkey-live',
    label: 'VerdantKey demonstration',
    value: 'Online when checked on 19 July 2026',
    href: 'https://real-estate-management-lake.vercel.app',
    verification: 'HTTP 200 and a public real-estate demonstration page.',
    limitation: 'The public repository, traffic, and production-usage data are unavailable.',
  },
  {
    id: 'resume-record',
    label: 'Resume-backed project record',
    value: 'Available as a PDF in this portfolio',
    href: '/Bhavya_Resume.pdf',
    verification: 'The portfolio includes the resume artifact and labels resume-backed metrics in case-study data.',
    limitation: 'A resume is self-reported evidence, not an independent audit.',
  },
  {
    id: 'production-build',
    label: 'Portfolio build verification',
    value: 'Production build passed during the 19 July 2026 rebuild',
    href: null,
    verification: 'Local production build and browser QA were completed in the project workspace.',
    limitation: 'Continuous deployment and public uptime monitoring are not configured in this record.',
  },
];

export const socialProof = {
  testimonials: [],
  awards: [],
  press: [],
  conferenceTalks: [],
  publishedPackages: [],
  verifiedOpenSourceProjects: [],
  unavailable: [
    {
      type: 'Testimonials',
      statement: 'No permission-backed client, manager, or teammate testimonial is available in the project records.',
    },
    {
      type: 'Awards',
      statement: 'No design, engineering, or competition award is documented.',
    },
    {
      type: 'Press and talks',
      statement: 'No press feature, podcast, conference talk, or workshop is documented.',
    },
    {
      type: 'Open source',
      statement: 'No case-study repository or published package is linked in the available records.',
    },
  ],
  publishingRule:
    'Add a signal only with a direct source, permission where required, and wording that identifies Bhavya\'s actual contribution.',
};

export const availability = {
  status: 'Available for select projects',
  location: 'Jaipur, India',
  timezone: 'Asia/Kolkata (UTC+05:30)',
  preferredContact: {
    channel: 'Email',
    value: 'bhavyalohami@gmail.com',
    href: 'mailto:bhavyalohami@gmail.com',
  },
  relevantWork: [
    'React or Next.js product interfaces',
    'Full-stack product workflows with REST APIs',
    'Operational dashboards, search, validation, and performance work',
    'Creative frontend experiences with a clear mobile and accessibility plan',
  ],
  helpfulFirstMessage: [
    'What you are building and who it serves',
    'Current stage, desired outcome, and target timeline',
    'Expected role, team context, and technical constraints',
    'A product brief, relevant links, or a small list of open questions',
  ],
  responseExpectation:
    'No guaranteed response-time service level is published. Email is the clearest channel for scoped project conversations.',
};

export const performanceBudgets = {
  status: 'Targets, not measured production claims',
  fieldMetrics: [
    {
      metric: 'LCP',
      target: '<= 2.5 s',
      scope: '75th percentile field data on mobile and desktop',
      measured: null,
    },
    {
      metric: 'INP',
      target: '<= 200 ms',
      scope: '75th percentile field data on mobile and desktop',
      measured: null,
    },
    {
      metric: 'CLS',
      target: '<= 0.10',
      scope: '75th percentile field data on mobile and desktop',
      measured: null,
    },
  ],
  deliveryBudgets: [
    {
      metric: 'Initial JavaScript',
      target: '<= 180 KB compressed',
      scope: 'Route-critical code before lazy 3D modules',
    },
    {
      metric: 'Lazy 3D JavaScript',
      target: '<= 260 KB compressed',
      scope: 'Three.js and scene code loaded independently from essential content',
    },
    {
      metric: 'Above-fold raster media',
      target: '<= 600 KB compressed',
      scope: 'Desktop hero assets with smaller responsive alternatives where useful',
    },
    {
      metric: 'WebGL pixel ratio',
      target: '<= 1.5 desktop and <= 1.15 mobile',
      scope: 'Adaptive cap, with rendering paused when the scene is offscreen',
    },
    {
      metric: 'Accessibility regressions',
      target: '0 critical or serious automated findings',
      scope: 'Automated checks plus keyboard and reduced-motion manual verification',
    },
  ],
  measurementPlan: [
    'Record Lighthouse results against a production deployment.',
    'Add real-user Core Web Vitals before claiming field performance.',
    'Track bundle budgets in continuous integration.',
    'Profile the 3D scene on a representative low-power mobile device.',
  ],
};

export const roadmap = [
  {
    id: 'case-study-routes',
    title: 'Ship full case-study routes',
    status: 'In progress',
    priority: 'P0',
    detail: 'Turn the evidence-aware records into readable project narratives with clear claim sources.',
  },
  {
    id: 'performance-baseline',
    title: 'Publish a production performance baseline',
    status: 'Planned',
    priority: 'P0',
    detail: 'Deploy, measure Lighthouse and Core Web Vitals, and replace budgets with sourced results where available.',
  },
  {
    id: 'accessibility-audit',
    title: 'Complete an accessibility audit',
    status: 'Planned',
    priority: 'P0',
    detail: 'Run automated checks plus keyboard, screen-reader, zoom, contrast, and reduced-motion testing.',
  },
  {
    id: 'architecture-evidence',
    title: 'Add permission-safe architecture evidence',
    status: 'Blocked by source availability',
    priority: 'P1',
    detail: 'Publish diagrams and code excerpts only after the actual project architecture and sharing permissions are confirmed.',
  },
  {
    id: 'metric-definitions',
    title: 'Document metric definitions',
    status: 'Needs owner input',
    priority: 'P1',
    detail: 'Record baselines, time windows, sample sizes, and methods behind resume-backed impact metrics.',
  },
  {
    id: 'permission-backed-proof',
    title: 'Request permission-backed recommendations',
    status: 'Optional',
    priority: 'P2',
    detail: 'Add testimonials or logos only after the author, wording, project context, and display permission are documented.',
  },
  {
    id: 'booking-harness',
    title: 'Build the booking race-condition harness',
    status: 'Planned',
    priority: 'P2',
    detail: 'Create a small public experiment that demonstrates atomic booking and conflict recovery under competing requests.',
  },
];

export const getTechnicalNoteBySlug = (slug) =>
  technicalNotes.find((note) => note.slug === slug);

export const getLabExperimentBySlug = (slug) =>
  labExperiments.find((experiment) => experiment.slug === slug);

export const getCapabilitiesForProject = (projectSlug) =>
  capabilityGroups.filter((group) => group.projectSlugs.includes(projectSlug));

export const getRoadmapByStatus = (status) =>
  roadmap.filter((item) => item.status.toLowerCase() === status.toLowerCase());
