// Case-study content is deliberately evidence-aware. Copy marked as
// `not-documented` should stay visible as a limitation or be replaced only
// when source code, analytics, tickets, or first-hand project notes exist.

export const caseStudyEvidenceLevels = {
  publicProduct: 'public-product',
  portfolioRecord: 'portfolio-record',
  resumeRecord: 'resume-record',
  reasonedReflection: 'reasoned-reflection',
  notDocumented: 'not-documented',
};

export const caseStudies = [
  {
    id: 'uphomes',
    slug: 'uphomes-rental-marketplace',
    title: 'UpHomes',
    category: 'Rental marketplace platform',
    period: 'Public product · contribution dates not documented',
    summary:
      'A trust-first rental marketplace that helps renters discover verified homes, compare options, unlock owner contacts, match with flatmates, and coordinate visits.',
    status: {
      label: 'Live public product',
      detail:
        'The public website responded successfully when checked on 19 July 2026. The portfolio record does not document the product release date or Bhavya’s contribution dates.',
      lastVerified: '2026-07-19',
    },
    links: {
      live: 'https://uphomes.in',
      repository: null,
      repositoryNote: 'No public repository is present in the portfolio records.',
    },
    media: {
      hero: '/assets/lunar/project-uphomes.webp',
      sourceCapture: '/assets/project-uphomes-shot.png',
      provenance: 'Capture of the public UpHomes product; not an invented product screen.',
      alt: 'UpHomes rental marketplace interface showing its public product presentation.',
    },
    evidence: {
      confidence: 'mixed',
      sources: [
        {
          type: caseStudyEvidenceLevels.publicProduct,
          label: 'Live UpHomes website',
          href: 'https://uphomes.in',
          supports:
            'Product positioning, verified rentals, contact unlock, recommendations, flatmate matching, map discovery, smart filters, direct owner contact, and live-selfie verification.',
        },
        {
          type: caseStudyEvidenceLevels.portfolioRecord,
          label: 'Existing portfolio project record',
          supports: 'Project summary, problem framing, and product-flow description.',
        },
      ],
      authorshipBoundary:
        'The available records do not state Bhavya’s exact role, team size, code ownership, or which UpHomes capabilities he personally delivered. The case study must not imply end-to-end ownership until that is documented.',
    },
    problem: {
      statement:
        'Rental discovery can lose trust when listings are stale, costs are unclear, contact details are gated unpredictably, or renters must coordinate through several intermediaries.',
      whyItMatters:
        'A renter needs enough reliable information to shortlist confidently before spending money, sharing personal information, or scheduling a visit.',
      evidence: caseStudyEvidenceLevels.publicProduct,
    },
    users: [
      {
        name: 'Renters',
        need: 'Find suitable, available homes and compare rent, deposit, location, furnishing, and move-in requirements.',
      },
      {
        name: 'Property owners and listers',
        need: 'Publish clear property details and speak with renters who have already reviewed the basics.',
      },
      {
        name: 'People seeking flatmates',
        need: 'Describe room, budget, move date, and house expectations before connecting.',
      },
    ],
    role: {
      title: 'Contribution scope not documented',
      ownership:
        'The portfolio associates Bhavya with UpHomes, but it does not identify whether his work covered product design, frontend, backend, mobile, infrastructure, or a subset of those areas.',
      team: 'Team size and collaborators are not documented.',
      publishingRule:
        'Replace this section only with work that can be demonstrated through commits, tickets, designs, deployment records, or a precise first-hand account.',
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    constraints: [
      {
        title: 'Trust before contact',
        detail: 'Renters need useful listing and verification signals before deciding to unlock or contact an owner.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        title: 'Location-heavy discovery',
        detail: 'Budget, commute, area, furnishing, lifestyle, and availability all affect whether a listing is relevant.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        title: 'Multi-party coordination',
        detail: 'Renters, owners, and potential flatmates enter the journey with different goals and privacy expectations.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        title: 'Scope boundary',
        detail:
          'The public product supports discovery and contact; final rent, deposit, agreement, token payment, and move-in terms remain between renter and owner.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
    ],
    architecture: {
      summary:
        'The available evidence describes product capabilities, not the implementation stack or system topology.',
      layers: [
        {
          name: 'Discovery experience',
          detail: 'Listings, intent-aware filtering, map exploration, shortlisting, and recommendations.',
          evidence: caseStudyEvidenceLevels.publicProduct,
        },
        {
          name: 'Trust experience',
          detail: 'Verified-rental positioning, identity checks, live-selfie verification, and review safeguards.',
          evidence: caseStudyEvidenceLevels.publicProduct,
        },
        {
          name: 'Coordination experience',
          detail: 'Owner contact unlock, direct messaging, flatmate matching, and visit coordination.',
          evidence: caseStudyEvidenceLevels.publicProduct,
        },
      ],
      notDocumented: [
        'Frontend framework and component architecture',
        'Backend services and API contracts',
        'Database and search-index design',
        'Authentication and authorization model',
        'Hosting, observability, and deployment pipeline',
      ],
    },
    decisions: [
      {
        title: 'Make trust features part of discovery',
        decision:
          'The public product surfaces verification, listing details, and contact terms before a renter proceeds.',
        rationale: 'Trust signals are most useful at the moment a renter evaluates an option.',
        ownership: 'Product behavior; personal decision ownership is not documented.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        title: 'Combine list and map discovery',
        decision: 'Provide area-based visual exploration alongside filters and recommendations.',
        rationale: 'Location is a primary rental constraint and is easier to reason about spatially.',
        ownership: 'Product behavior; personal decision ownership is not documented.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        title: 'Keep final transaction terms outside the platform claim',
        decision:
          'The public FAQ states that rent, deposit, agreement, token, and move-in terms are decided directly by renter and owner.',
        rationale: 'This makes the product boundary explicit and avoids overstating transaction ownership.',
        ownership: 'Public product policy; personal decision ownership is not documented.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
    ],
    tradeoffs: [
      {
        choice: 'Paid contact unlock instead of a broker-style percentage fee',
        benefit: 'Makes the access price explicit before contact and avoids a percentage-based brokerage claim.',
        cost: 'Adds a purchase decision before direct contact.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        choice: 'Rich matching criteria',
        benefit: 'Can improve relevance across budget, commute, furnishing, and lifestyle.',
        cost: 'Requires more user input and careful empty-state design.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        choice: 'Direct renter-owner coordination',
        benefit: 'Reduces intermediaries and keeps the conversation immediate.',
        cost: 'Places more responsibility on users to verify final terms and coordinate safely.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
    ],
    accessibility: {
      documented: [],
      productConsiderations: [
        'Filters, maps, verification flows, and chat need complete keyboard and screen-reader alternatives.',
        'Identity and error states should never depend on color alone.',
        'Forms should preserve entered data and explain recovery after validation failures.',
      ],
      verification:
        'No accessibility audit, WCAG conformance report, assistive-technology test, or personal accessibility contribution is present in the available records.',
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    security: {
      documentedProductClaims: [
        'The public site describes identity checks with live-selfie verification.',
        'The public FAQ states that users choose which owner contacts to unlock and that phone numbers are not sold for spam.',
      ],
      boundary:
        'These are product claims, not evidence of a particular encryption, retention, consent, or authorization implementation by Bhavya.',
      notDocumented: [
        'Authentication and session design',
        'Authorization enforcement',
        'Encryption and secrets management',
        'Personal-data retention and deletion',
        'Threat modeling or penetration testing',
      ],
      evidence: caseStudyEvidenceLevels.publicProduct,
    },
    testing: {
      documented: [],
      notDocumented: [
        'Unit and integration test coverage',
        'End-to-end coverage for search, contact unlock, verification, and scheduling',
        'Cross-browser and device matrix',
        'Load, search-relevance, or security testing',
      ],
      honestSummary: 'No test strategy should be claimed for this project from the current evidence.',
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    outcomes: [
      {
        label: 'Public product breadth',
        value: 'Discovery → contact → coordination',
        detail:
          'The live product presents a connected journey spanning listing discovery, recommendations, owner contact, flatmate matching, and visit support.',
        scope: 'Product capability, not a personal impact metric.',
        evidence: caseStudyEvidenceLevels.publicProduct,
      },
      {
        label: 'Quantified personal impact',
        value: 'Not documented',
        detail:
          'The public site reports community metrics, but the available evidence does not connect those numbers to Bhavya’s contribution; they are intentionally not used as personal results here.',
        scope: 'Evidence boundary.',
        evidence: caseStudyEvidenceLevels.notDocumented,
      },
    ],
    lessons: [
      {
        title: 'Trust is part of the interface',
        detail:
          'Verification, pricing, privacy, and transaction boundaries need to appear where users make decisions, not only in help content.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        title: 'Search quality is a product system',
        detail:
          'Useful rental discovery connects filters, location, availability, and human intent rather than treating search as a single text field.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
    ],
    nextSteps: [
      'Document Bhavya’s exact contribution with dated evidence and named responsibilities.',
      'Add an architecture diagram only after the actual stack and data flow are confirmed.',
      'Capture accessibility, performance, reliability, and conversion baselines before publishing improvement claims.',
      'Add a redacted decision log or code sample that proves individual ownership without exposing proprietary information.',
    ],
  },
  {
    id: 'real-estate-management',
    slug: 'real-estate-management-system',
    title: 'Real Estate Management System',
    alternateTitle: 'VerdantKey',
    category: 'Operational real-estate software',
    period: 'April 2025 – Present',
    summary:
      'A responsive Next.js real-estate system for property discovery, role-specific dashboards, inquiries, messaging, notifications, and listing operations.',
    status: {
      label: 'Active project · live demonstration',
      detail:
        'The portfolio record marks the project as ongoing. The VerdantKey demonstration responded successfully when checked on 19 July 2026.',
      lastVerified: '2026-07-19',
    },
    links: {
      live: 'https://real-estate-management-lake.vercel.app',
      repository: null,
      repositoryNote: 'No public repository is present in the portfolio records.',
    },
    media: {
      hero: '/assets/lunar/project-real-estate.webp',
      sourceCapture: '/assets/project-real-estate-shot.png',
      provenance: 'Capture associated with the live VerdantKey demonstration.',
      alt: 'VerdantKey real-estate interface with property-led visual presentation.',
    },
    evidence: {
      confidence: 'portfolio-and-resume-backed',
      sources: [
        {
          type: caseStudyEvidenceLevels.resumeRecord,
          label: 'Existing resume-backed portfolio record',
          supports:
            'Dates, stack, reusable components, REST integrations, role dashboards, 1,000-plus listings, and the stated 60 percent discovery-efficiency improvement.',
        },
        {
          type: caseStudyEvidenceLevels.publicProduct,
          label: 'Live VerdantKey demonstration',
          href: 'https://real-estate-management-lake.vercel.app',
          supports: 'A publicly reachable real-estate product demonstration.',
        },
      ],
      authorshipBoundary:
        'The portfolio says Bhavya built the system, but it does not document team size, backend ownership, deployment ownership, or a repository. Claims below stay within the recorded frontend and integration scope.',
    },
    problem: {
      statement:
        'Real-estate teams need to manage large property inventories and buyer or renter intent without making discovery, inquiries, or operational dashboards slow and confusing.',
      whyItMatters:
        'Poor filtering increases decision time for customers, while fragmented inquiry and listing workflows create repetitive work for operators.',
      evidence: caseStudyEvidenceLevels.portfolioRecord,
    },
    users: [
      {
        name: 'Property seekers',
        need: 'Search, filter, compare, and inquire about relevant properties across devices.',
      },
      {
        name: 'Property owners or agents',
        need: 'Create and maintain listings, receive inquiries, and follow conversations.',
      },
      {
        name: 'Platform operators',
        need: 'Use role-appropriate dashboards to manage inventory, notifications, and operational states.',
      },
    ],
    role: {
      title: 'Software developer',
      ownership:
        'Recorded scope includes Next.js and React UI, Tailwind styling, dynamic listings, advanced search and filters, role-specific dashboards, reusable components, REST API integration, state flows, messaging, notifications, and inquiry management.',
      team: 'Team size and named collaborators are not documented.',
      exclusions:
        'The available record does not prove sole product ownership, backend implementation, infrastructure ownership, or visual-design ownership.',
      evidence: caseStudyEvidenceLevels.resumeRecord,
    },
    constraints: [
      {
        title: 'Large dynamic inventory',
        detail: 'The recorded system scope supports more than 1,000 property listings.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        title: 'Multi-dimensional discovery',
        detail: 'Useful results depend on combining search and filters without obscuring the active criteria.',
        evidence: caseStudyEvidenceLevels.portfolioRecord,
      },
      {
        title: 'Role-specific workflows',
        detail: 'Different users need different controls, data density, and next actions.',
        evidence: caseStudyEvidenceLevels.portfolioRecord,
      },
      {
        title: 'Responsive operations',
        detail: 'Property discovery and dashboard workflows must remain usable across desktop and smaller screens.',
        evidence: caseStudyEvidenceLevels.portfolioRecord,
      },
    ],
    architecture: {
      summary:
        'A component-based Next.js and React frontend consumes REST APIs and uses Context API and Redux for recorded client-state responsibilities.',
      layers: [
        {
          name: 'Application shell',
          detail: 'Next.js application with responsive React views styled with Tailwind CSS.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
        {
          name: 'Reusable interface layer',
          detail: 'Shared components support listing, filter, dashboard, messaging, notification, and inquiry experiences.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
        {
          name: 'Client state',
          detail: 'Context API and Redux are recorded for coordinating shared application state.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
        {
          name: 'Data boundary',
          detail: 'REST API integrations supply dynamic listing and workflow data to the frontend.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
      ],
      notDocumented: [
        'Backend framework and service boundaries',
        'Database schema and query strategy',
        'Search engine or indexing implementation',
        'Cache and revalidation policy',
        'Deployment and observability architecture',
      ],
    },
    decisions: [
      {
        title: 'Create role-specific dashboards',
        decision: 'Present controls and operational data according to the active user role.',
        rationale: 'Property seekers, listers, and operators should not navigate through irrelevant controls.',
        evidence: caseStudyEvidenceLevels.portfolioRecord,
      },
      {
        title: 'Build reusable workflow components',
        decision: 'Use shared components across listings, filters, messages, notifications, and inquiries.',
        rationale: 'Repeated operational patterns benefit from consistent behavior and faster iteration.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        title: 'Treat discovery as a composed filter system',
        decision: 'Combine advanced search and filtering rather than relying on a single search input.',
        rationale: 'Property relevance is defined by several simultaneous constraints.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
    ],
    tradeoffs: [
      {
        choice: 'Context API and Redux within one frontend',
        benefit: 'Allows state mechanisms to be selected for different sharing and complexity needs.',
        cost: 'Creates overlapping mental models unless ownership boundaries are documented.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        choice: 'Rich filter controls',
        benefit: 'Improves precision for property seekers.',
        cost: 'Increases UI complexity and makes mobile disclosure and clear-all behavior important.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        choice: 'Role-specific dashboards',
        benefit: 'Reduces irrelevant choices for each user group.',
        cost: 'Adds authorization states, route variants, and a larger regression surface.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
    ],
    accessibility: {
      documented: ['Responsive interface behavior is recorded.'],
      productConsiderations: [
        'Filter controls need programmatic names, active-state announcements, and keyboard operation.',
        'Property imagery needs content-specific alternative text or an intentionally empty alternative when decorative.',
        'Messages, notifications, and validation feedback need focus-safe live updates.',
        'Dense dashboard tables need headings, captions, and usable small-screen transformations.',
      ],
      verification:
        'Responsive design is not proof of accessibility. No WCAG audit, assistive-technology test, contrast report, or keyboard-test record is available.',
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    security: {
      documentedProductClaims: ['The portfolio records role-specific dashboards.'],
      boundary:
        'Role-specific UI does not prove server-side authorization. No claim is made about access-control enforcement without backend evidence.',
      notDocumented: [
        'Authentication and session security',
        'Server-side role and object authorization',
        'Input validation and output encoding',
        'Rate limiting and abuse prevention',
        'Secrets, logging, and incident-response practices',
      ],
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    testing: {
      documented: [],
      notDocumented: [
        'Component, reducer, and API integration tests',
        'End-to-end tests for search, filters, inquiries, and role routing',
        'Dataset-size or query-performance tests for 1,000-plus listings',
        'Accessibility and cross-browser regression tests',
      ],
      honestSummary:
        'The project record describes capabilities and outcomes but does not identify its test framework, coverage, or CI quality gates.',
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    outcomes: [
      {
        label: 'Listing scale supported',
        value: '1,000+',
        detail: 'The resume-backed record states support for more than 1,000 dynamic property listings.',
        scope: 'Recorded project capacity; production traffic and concurrency are not documented.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        label: 'Discovery efficiency',
        value: '+60%',
        detail:
          'The resume-backed record attributes a 60 percent improvement in property-discovery efficiency to advanced search and filtering.',
        scope:
          'The baseline, measurement window, sample size, and analytics method are not available. Retain this claim only if those can be explained in an interview.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        label: 'Workflow coverage',
        value: 'Listings, inquiries, messages, notifications',
        detail: 'The recorded implementation connects discovery and operational follow-up in one system.',
        scope: 'Feature coverage, not a quantified business result.',
        evidence: caseStudyEvidenceLevels.portfolioRecord,
      },
    ],
    lessons: [
      {
        title: 'Filter clarity matters as much as filter power',
        detail:
          'A broad filter set only helps when people can see active criteria, understand result changes, and recover from an empty result.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        title: 'Shared state needs explicit ownership',
        detail:
          'When Context and Redux coexist, documenting which state belongs where prevents duplicated sources of truth.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
    ],
    nextSteps: [
      'Document the analytics definition behind the 60 percent discovery-efficiency claim.',
      'Publish a redacted architecture diagram covering the actual API, state, cache, and authorization boundaries.',
      'Add recorded Core Web Vitals, accessibility audit results, and a named cross-browser test matrix.',
      'Link a public repository or a permission-safe code excerpt if project ownership allows it.',
    ],
  },
  {
    id: 'hospital-management',
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    category: 'Healthcare operations platform',
    period: 'August 2024 – December 2024',
    summary:
      'A React and Django operations system for appointments, doctor and service administration, lab scheduling, pharmacy inventory, pricing, and real-time slot validation.',
    status: {
      label: 'Completed portfolio project · private or unpublished',
      detail:
        'The recorded development period ended in December 2024. No live deployment or public repository is present in the available project data.',
      lastVerified: '2026-07-19',
    },
    links: {
      live: null,
      liveNote: 'No public demonstration URL is documented.',
      repository: null,
      repositoryNote: 'No public repository is documented.',
    },
    media: {
      hero: '/assets/lunar/hospital-operations.webp',
      diagram: '/assets/lunar/hospital-validation.webp',
      provenance:
        'The hero artwork is a generated editorial visualization made for this portfolio, not a screenshot of the production interface.',
      alt: 'Conceptual hospital-operations dashboard visualization representing scheduling and administrative workflows.',
    },
    evidence: {
      confidence: 'resume-backed-with-gaps',
      sources: [
        {
          type: caseStudyEvidenceLevels.resumeRecord,
          label: 'Existing resume-backed portfolio record',
          supports:
            'Dates, React and Django stack, REST APIs, reusable components, real-time slot validation, admin scope, 15-plus components, 90 percent conflict reduction, and 50-plus managed doctors or operational entities.',
        },
        {
          type: caseStudyEvidenceLevels.portfolioRecord,
          label: 'Existing experience record',
          supports: 'Full-stack role framing and appointment-platform delivery.',
        },
      ],
      authorshipBoundary:
        'The records describe Bhavya as a full-stack developer on the project but do not establish sole ownership, team size, production deployment, or responsibility for every backend and operational domain.',
    },
    problem: {
      statement:
        'Healthcare operations become fragile when appointment availability, doctor schedules, lab bookings, services, pricing, and pharmacy inventory are managed through disconnected or stale records.',
      whyItMatters:
        'Conflicting appointments waste staff and patient time, while inaccurate operational data can undermine confidence in the scheduling process.',
      evidence: caseStudyEvidenceLevels.portfolioRecord,
    },
    users: [
      {
        name: 'Patients or booking staff',
        need: 'See valid appointment options and avoid selecting a slot that is no longer available.',
      },
      {
        name: 'Doctors and clinical teams',
        need: 'Maintain schedules that remain aligned with appointment availability.',
      },
      {
        name: 'Hospital administrators',
        need: 'Manage doctors, services, schedules, tests, pricing, and inventory from responsive operational screens.',
      },
      {
        name: 'Laboratory and pharmacy staff',
        need: 'Coordinate lab scheduling and medical-store inventory with current administrative data.',
      },
    ],
    role: {
      title: 'Full-stack developer',
      ownership:
        'Recorded work includes a React interface, Django REST APIs, reusable booking components, real-time slot validation, responsive administration views, lab scheduling, and medical-store inventory workflows.',
      team: 'Team size and named collaborators are not documented.',
      exclusions:
        'The record does not prove sole architecture ownership, clinical workflow authority, production operations, or regulatory compliance responsibility.',
      evidence: caseStudyEvidenceLevels.resumeRecord,
    },
    constraints: [
      {
        title: 'Time-sensitive availability',
        detail: 'A slot can become invalid between initial display and booking confirmation.',
        evidence: caseStudyEvidenceLevels.portfolioRecord,
      },
      {
        title: 'Connected operational domains',
        detail: 'Doctors, services, schedules, tests, prices, appointments, and inventory affect different workflows.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        title: 'Administrative density',
        detail: 'Operational screens need to expose enough information without making routine actions difficult to scan.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        title: 'Healthcare claim boundary',
        detail:
          'The available record does not state that the system stored production patient records or met any named healthcare-compliance standard.',
        evidence: caseStudyEvidenceLevels.notDocumented,
      },
    ],
    architecture: {
      summary:
        'A React frontend communicates with Django REST APIs; reusable UI components support appointment and administrative workflows.',
      layers: [
        {
          name: 'Experience layer',
          detail: 'Responsive React views and more than 15 recorded reusable components.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
        {
          name: 'API boundary',
          detail: 'Django REST endpoints connect interface actions to scheduling and operational data.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
        {
          name: 'Scheduling guardrail',
          detail: 'Real-time slot validation checks appointment availability within the booking workflow.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
        {
          name: 'Administrative domains',
          detail: 'Recorded areas include doctors, services, schedules, lab tests, pricing, and pharmacy inventory.',
          evidence: caseStudyEvidenceLevels.resumeRecord,
        },
      ],
      notDocumented: [
        'Database schema and transaction strategy',
        'Exact concurrency-control mechanism for slot booking',
        'Authentication and role-authorization implementation',
        'Background jobs and notification delivery',
        'Hosting, monitoring, backup, and recovery design',
      ],
    },
    decisions: [
      {
        title: 'Validate availability near the booking action',
        decision: 'Use real-time slot validation rather than relying only on an earlier schedule view.',
        rationale: 'Availability can change while a user is completing a booking flow.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        title: 'Use reusable operational components',
        decision: 'Build shared UI patterns for recurring booking and administration interactions.',
        rationale: 'Consistent interaction patterns reduce rework across related management screens.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        title: 'Separate React UI from Django APIs',
        decision: 'Expose operational data through REST contracts consumed by the frontend.',
        rationale: 'A clear client-server boundary supports independent interface and server evolution.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
    ],
    tradeoffs: [
      {
        choice: 'Real-time validation in the booking path',
        benefit: 'Reduces stale-slot confirmations and gives faster conflict feedback.',
        cost: 'Adds network dependency and still requires an authoritative server-side write check.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        choice: 'One platform for several operational domains',
        benefit: 'Creates a shared operational view across appointments, labs, services, and inventory.',
        cost: 'Expands permission, data-consistency, regression, and training complexity.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        choice: 'Reusable administration components',
        benefit: 'Improves consistency and delivery speed.',
        cost: 'Shared abstractions can become rigid when clinical and inventory workflows diverge.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
    ],
    accessibility: {
      documented: ['Responsive interface behavior is recorded.'],
      productConsiderations: [
        'Appointment availability and conflict feedback must be announced without relying on color.',
        'Date, time, doctor, service, and inventory controls need complete keyboard support.',
        'Dense administrative tables need semantic headings and usable zoom and small-screen behavior.',
        'Error messages should identify the field, explain recovery, and retain already entered data.',
      ],
      verification:
        'No WCAG audit, keyboard test, screen-reader test, contrast report, or personal accessibility contribution is documented.',
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    security: {
      documentedProductClaims: [],
      boundary:
        'No claim is made about HIPAA, India’s DPDP Act, medical-device regulation, encryption, patient-data handling, or production compliance. The available records do not support those claims.',
      notDocumented: [
        'Authentication, staff roles, and least-privilege authorization',
        'Audit logging for record and schedule changes',
        'Encryption in transit and at rest',
        'Patient-data consent, retention, export, and deletion',
        'Backup, recovery, incident response, and third-party risk',
      ],
      evidence: caseStudyEvidenceLevels.notDocumented,
    },
    testing: {
      documented: ['The recorded conflict-reduction result indicates slot-validation behavior was evaluated.'],
      notDocumented: [
        'Test framework, automated coverage, and CI gates',
        'Concurrency and atomic-booking test method',
        'Role and authorization regression tests',
        'Inventory-consistency, load, accessibility, and cross-browser tests',
      ],
      honestSummary:
        'The record supports a slot-validation outcome but does not document how that result was tested or whether an automated suite exists.',
      evidence: caseStudyEvidenceLevels.resumeRecord,
    },
    outcomes: [
      {
        label: 'Booking conflicts',
        value: '−90%',
        detail: 'The resume-backed record attributes a 90 percent reduction in booking conflicts to real-time slot validation.',
        scope:
          'The baseline, sample size, measurement period, and definition of conflict are not available. Retain this claim only if those can be explained in an interview.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        label: 'Reusable interface system',
        value: '15+ components',
        detail: 'The resume-backed record states that more than 15 reusable UI components were delivered.',
        scope: 'Component count does not by itself establish quality or reuse frequency.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
      {
        label: 'Administrative scale',
        value: '50+ doctors and operational entities',
        detail:
          'The record describes management across more than 50 doctors, services, schedules, lab tests, pricing, and inventory entries.',
        scope:
          'The source groups several entity types; it does not provide traffic, concurrency, or production-usage evidence.',
        evidence: caseStudyEvidenceLevels.resumeRecord,
      },
    ],
    lessons: [
      {
        title: 'Displayed availability is not confirmed availability',
        detail:
          'Time-sensitive workflows need an authoritative validation at the point of commitment, not only when the page first loads.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
      {
        title: 'Operational software needs explicit boundaries',
        detail:
          'Combining appointments, labs, services, and inventory makes role, ownership, and data-consistency rules more important.',
        evidence: caseStudyEvidenceLevels.reasonedReflection,
      },
    ],
    nextSteps: [
      'Document the baseline and evaluation method behind the 90 percent conflict-reduction claim.',
      'Add a redacted sequence diagram for slot lookup, validation, and authoritative booking confirmation.',
      'Document the real authentication, authorization, audit, privacy, backup, and recovery controls before making any security or compliance claim.',
      'Publish accessibility, concurrency, API-contract, and cross-browser test evidence.',
      'Replace the generated hero with permission-safe product captures if authentic screens become available.',
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);
