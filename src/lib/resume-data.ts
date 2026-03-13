export interface Experience {
  title: string;
  dateRange: string;
  company: string;
  location: string;
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
  address: "49 Galen St. Waltham, MA 02451",
  phone: "+1-978-846-1493",
  email: "mgschulz@bu.edu",
  linkedin: "https://www.linkedin.com/in/mattschulzemba/",
};

export const summary =
  "AI-focused biopharma leader who scales digital and data for Biotechnology platforms, drives transformative, compliant initiatives from startup through M&A, and builds high-impact teams that deliver business-critical outcomes.";

export const experiences: Experience[] = [
  {
    title: "Executive Director, AI Strategy",
    dateRange: "2025 - Present",
    company: "Flagship Pioneering",
    location: "Cambridge, MA",
    bullets: [],
  },
  {
    title: "Head of Digital Pioneering Medicines",
    dateRange: "2022 - 2025",
    company: "Flagship Pioneering",
    location: "Cambridge, MA",
    bullets: [
      "Product Owner for custom Agentic software that generates novel indication-target pairings for venture investment and compresses R&D portfolio analyses from weeks to hours, enabling realtime executive decision-making on investment and resource allocation.",
      "Built business case for Generative AI-enabled Antibody Design across Pioneering Medicines programs; secured leadership approval of $3M investment and launched pilot.",
      'Integrated "Artificial Mechanistic Intelligence" into QSP and PK/PD modeling workflows, improving predictive accuracy over traditional empirical approaches.',
      "Led enterprise ChatGPT rollout across Flagship with structured enablement program, driving rapid adoption of domain-specific GPT tools.",
      "As Senior Director on IT Leadership Team, developed and executed Pioneering Medicines' digital strategy, managing ~$3.5M annual budget and cross-functional technology initiatives.",
      "Recognized for strategic leadership in transformation of a 60-person R&D unit into an integrated digital ecosystem for 130+ staff, implementing AI-driven research tools and cloud-based data management.",
      "Developed Digital Clinical & Regulatory roadmap; implemented Flagship's first GxP-validated system (eQMS) and CSV framework to enable FDA-regulated clinical operations.",
      "Co-founded the Digital CMC Consortium (Project Artemis), a cross-industry collaboration advancing digital transformation in drug development and manufacturing.",
    ],
  },
  {
    title: "Head of Digital Biomanufacturing Applications",
    dateRange: "2021 - 2022",
    company: "Resilience",
    location: "La Jolla, CA",
    bullets: [
      "Directed the Resilience Digital Application strategy, implementing mission-critical systems to elevate manufacturing and research operations. Managed a $30M budget and drove M&A due diligence for high-profile transactions.",
      "Recruited and built a 24-member team to deliver next-generation digital capabilities across Resilience, structured into Biomanufacturing Automation, Digital Quality Applications, Digital Quality Control, R&D Applications & Informatics, and Data Management.",
      "Oversaw the rapid deployment of Veeva Platform Vaults for Quality and Kneat for e-Validation across six global manufacturing sites in under 25 weeks where there were no solutions before.",
      "Led cross-functional teams to implement essential QC and R&D applications. Oversaw the deployment of Electronic Laboratory Notebook (ELN), Inventory and Registration tools, and a data hub.",
      "Demonstrated adaptability by taking ownership beyond my role, leading the ERP project to streamline 3PL supply chain operations.",
    ],
  },
  {
    title: "Associate Director of Informatics & R&D Applications",
    dateRange: "2020 - 2021",
    company: "Alkermes",
    location: "Waltham, MA",
    bullets: [
      "Led Informatics and Data Engineering for Medicines Development across Research, Development, Clinical, and Regulatory domains, managing projects and a $2M technology budget.",
      "Recognized with Key Contributor Award; stock-based equity award given to top performers.",
      "Spearheaded comprehensive assessment of Alkermes R&D data landscape that delivered technology reference architectures, a definitive business case, and roadmap of projects.",
      "Coordinated the delivery of strategic features for Computational Chemistry Idea generation platform, critical in meeting Alkermes 2020 goals.",
    ],
  },
  {
    title: "Manager of Development Applications",
    dateRange: "2018 - 2020",
    company: "Alkermes",
    location: "Waltham, MA",
    bullets: [
      "Cultivated a dynamic team of 3-5 direct reports, 2-3 contractors, and Managed Services including Data Engineers, Systems Analysts, and Project Managers.",
      "Handpicked as R&D IT Leader to advance the Corporate Data Foundation initiative.",
      "Boosted Alkermes Vivitrol yearly revenue by ~$400,000 through implementing Alkermes' first Cloud High Performance Computing (HPC) environment.",
    ],
  },
  {
    title: "Senior Systems Analyst",
    dateRange: "2015 - 2018",
    company: "Alkermes",
    location: "Waltham, MA",
    bullets: [
      "Spearheaded a global ELN upgrade project, enhancing data management efficiency and integrity for product development teams.",
      "Directed a global QC system initiative, introducing critical features and disaster recovery capabilities supporting $250M in annual sales.",
    ],
  },
  {
    title: "Senior Business Systems Analyst",
    dateRange: "2013 - 2015",
    company: "Sanofi & Genzyme",
    location: "Framingham, MA",
    bullets: [
      "Served as Technical Project Lead for a lab quality system lifecycle, deploying systems across Europe and North America.",
      "Awarded Genzyme Spot Award for key contributions in Chromatography Data System deployments.",
    ],
  },
  {
    title: "Business Systems Analyst",
    dateRange: "2010 - 2013",
    company: "Sanofi & Genzyme",
    location: "Framingham, MA",
    bullets: [],
  },
  {
    title: "Sr Bioprocess Associate",
    dateRange: "2009 - 2010",
    company: "Bristol-Myers Squibb",
    location: "Devens, MA",
    bullets: [],
  },
  {
    title: "Bioprocess Associate",
    dateRange: "2008 - 2009",
    company: "Bristol-Myers Squibb",
    location: "Devens, MA",
    bullets: [],
  },
];

export const education: Education[] = [
  {
    year: "2018",
    degree: "Master of Business Administration with Honors",
    school: "Boston University",
    location: "Boston, MA",
    honors: "Strategy & Innovation | Beta Gamma Sigma (Top 20%)",
  },
  {
    year: "2008",
    degree: "Bachelor of Science in Biology and Biotechnology",
    school: "Worcester Polytechnic Institute (WPI)",
    location: "Worcester, MA",
    honors: "Cell and Molecular Biology and Genetics",
  },
];
