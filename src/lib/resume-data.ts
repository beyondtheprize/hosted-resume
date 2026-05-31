export interface Title {
  title: string;
  dateRange: string;
}

export interface Stint {
  company: string;
  location: string;
  span: string;
  titles: Title[];
  bullets: string[];
}

export interface Education {
  year: string;
  degree: string;
  school: string;
  location: string;
  honors?: string;
}

export const contactInfo = {
  name: "Matthew G. Schulze",
  location: "Greater Boston, MA",
  email: "mgschulz@bu.edu",
  linkedin: "https://www.linkedin.com/in/mattschulzemba/",
};

export const summary =
  "AI-focused biopharma leader who scales digital and data platforms, drives transformative compliant initiatives from startup through M&A, and builds high-impact teams that deliver business-critical outcomes.";

export const stints: Stint[] = [
  {
    company: "RA Capital Management",
    location: "Boston, MA",
    span: "2026 — Present",
    titles: [
      { title: "Technology Business Partner", dateRange: "2026 — Present" },
    ],
    bullets: [
      "Serve as the primary IT and technology strategy partner for RA Capital's Raven biotech incubator and Planetary Health investment teams, reporting to the CIO.",
      "Translate the evolving needs of venture formation, portfolio company building, and investment operations into scalable technology solutions across AI, data analytics, and automation.",
      "Accelerate company formation, due diligence, and investment decision-making through targeted technology advisory, platform delivery, and cross-portfolio standards.",
    ],
  },
  {
    company: "Flagship Pioneering",
    location: "Cambridge, MA",
    span: "2022 — 2026",
    titles: [
      { title: "Executive Director, AI Strategy", dateRange: "2025 — 2026" },
      { title: "Head of Digital Pioneering Medicines", dateRange: "2022 — 2025" },
    ],
    bullets: [
      "Led AI and digital strategy across R&D programs, translating scientific and business needs into scaled platforms and measurable outcomes.",
      "Sponsored and delivered multiple generative AI initiatives from concept through pilot and adoption, with a strong focus on governance, compliance, and change management.",
      "Built and operated a cross-functional digital organization (product, engineering, data, and operations), improving delivery velocity and stakeholder satisfaction.",
      "Owned portfolio and budget planning for digital investments and technology partnerships.",
      "Established validated quality and compliance frameworks to enable regulated clinical and research operations.",
    ],
  },
  {
    company: "Resilience",
    location: "La Jolla, CA",
    span: "2021 — 2022",
    titles: [
      { title: "Head of Digital Biomanufacturing Applications", dateRange: "2021 — 2022" },
    ],
    bullets: [
      "Set enterprise application strategy for manufacturing and R&D environments; prioritized programs across quality, lab, and operations functions.",
      "Built and led a multi-disciplinary global team to deliver core digital capabilities and standardized processes.",
      "Drove rapid implementation and stabilization of key quality and validation tooling across multiple sites.",
      "Partnered with corporate functions on operational readiness, integration, and due diligence for major transactions.",
    ],
  },
  {
    company: "Alkermes",
    location: "Waltham, MA",
    span: "2018 — 2021",
    titles: [
      { title: "Associate Director of Informatics & R&D Applications", dateRange: "2020 — 2021" },
      { title: "Manager of Development Applications", dateRange: "2018 — 2020" },
    ],
    bullets: [
      "Led informatics, applications, and data engineering across research and development functions, delivering platforms that improved scientific productivity and data reliability.",
      "Produced enterprise assessments and roadmaps for R&D data and application ecosystems, aligning investment to business strategy.",
      "Managed cross-functional delivery teams and vendors; developed talent and operating mechanisms for predictable execution.",
      "Recognized with internal awards for sustained impact and leadership.",
    ],
  },
  {
    company: "Alkermes",
    location: "Waltham, MA",
    span: "2015 — 2018",
    titles: [
      { title: "Senior Systems Analyst", dateRange: "2015 — 2018" },
    ],
    bullets: [
      "Led global upgrades and system enhancements for laboratory and quality platforms, improving data integrity and operational continuity.",
      "Delivered risk reduction and resiliency improvements for mission-critical systems supporting commercial operations.",
    ],
  },
  {
    company: "Sanofi & Genzyme",
    location: "Framingham, MA",
    span: "2010 — 2015",
    titles: [
      { title: "Senior Business Systems Analyst", dateRange: "2013 — 2015" },
      { title: "Business Systems Analyst", dateRange: "2010 — 2013" },
    ],
    bullets: [
      "Served as technical project lead for regulated lab and quality system deployments across regions, partnering with stakeholders to ensure adoption and compliance.",
    ],
  },
  {
    company: "Bristol-Myers Squibb",
    location: "Devens, MA",
    span: "2008 — 2010",
    titles: [
      { title: "Sr Bioprocess Associate", dateRange: "2009 — 2010" },
      { title: "Bioprocess Associate", dateRange: "2008 — 2009" },
    ],
    bullets: [],
  },
];

export const education: Education[] = [
  {
    year: "2018",
    degree: "Master of Business Administration with Honors",
    school: "Boston University",
    location: "Boston, MA",
    honors: "Strategy & Innovation · Beta Gamma Sigma (Top 20%)",
  },
  {
    year: "2008",
    degree: "Bachelor of Science in Biology and Biotechnology",
    school: "Worcester Polytechnic Institute (WPI)",
    location: "Worcester, MA",
    honors: "Cell and Molecular Biology and Genetics",
  },
];
