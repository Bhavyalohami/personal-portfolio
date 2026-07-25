import {
  caseStudies,
  caseStudyEvidenceLevels,
  getCaseStudyBySlug,
} from './caseStudies';

const requiredTextFields = ['id', 'slug', 'title', 'category', 'period', 'summary'];
const validEvidenceLevels = new Set(Object.values(caseStudyEvidenceLevels));

const expectNonEmptyText = (value) => {
  expect(typeof value).toBe('string');
  expect(value.trim().length).toBeGreaterThan(0);
};

const expectOptionalSecureUrl = (value) => {
  if (value == null) return;
  const parsed = new URL(value);
  expect(parsed.protocol).toBe('https:');
  expect(parsed.hostname).toBeTruthy();
};

describe('case-study data integrity', () => {
  test('contains uniquely addressable case studies', () => {
    expect(caseStudies.length).toBeGreaterThan(0);

    const slugs = caseStudies.map(({ slug }) => slug);
    const ids = caseStudies.map(({ id }) => id);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test.each(caseStudies)('$slug exposes the fields required by its route', (study) => {
    requiredTextFields.forEach((field) => expectNonEmptyText(study[field]));
    expect(study.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

    expectNonEmptyText(study.status?.label);
    expectNonEmptyText(study.status?.detail);
    expect(study.status?.lastVerified).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    expectNonEmptyText(study.media?.hero);
    expectNonEmptyText(study.media?.alt);
    expectNonEmptyText(study.media?.provenance);
    expect(study.media.hero).toMatch(/^\/assets\//);

    expectNonEmptyText(study.evidence?.confidence);
    expectNonEmptyText(study.evidence?.authorshipBoundary);
    expect(Array.isArray(study.evidence?.sources)).toBe(true);
    expect(study.evidence.sources.length).toBeGreaterThan(0);

    ['users', 'constraints', 'decisions', 'tradeoffs', 'outcomes', 'lessons', 'nextSteps']
      .forEach((field) => {
        expect(Array.isArray(study[field])).toBe(true);
        expect(study[field].length).toBeGreaterThan(0);
      });
  });

  test('uses only declared evidence levels and syntactically valid source links', () => {
    caseStudies.forEach((study) => {
      study.evidence.sources.forEach((source) => {
        expect(validEvidenceLevels.has(source.type)).toBe(true);
        expectNonEmptyText(source.label);
        expectNonEmptyText(source.supports);
        expectOptionalSecureUrl(source.href);
      });

      expectOptionalSecureUrl(study.links?.live);
      expectOptionalSecureUrl(study.links?.repository);
    });
  });

  test('resolves each slug without hard-coding project URLs', () => {
    caseStudies.forEach((study) => {
      expect(getCaseStudyBySlug(study.slug)).toBe(study);
    });
    expect(getCaseStudyBySlug('missing-case-study')).toBeUndefined();
  });
});
