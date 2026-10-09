/**
 * Central portfolio data — generated from Ravi Repswal's verified CV and credentials.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Authentic engineering milestones: Balajee Studio production e-commerce, IIT Guwahati robotics finalist,
 * AXIS'26 NIT Nagpur 6-DOF rover, Google AI Studio certification, and Hack2skill credential platform.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const BASE = import.meta.env.BASE_URL;

export const profile = {
  fullName: 'Ravi Repswal',
  displayName: 'Ravi Repswal',
  firstName: 'RAVI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A REPSWAL ORIGINAL',
  role: 'Full-Stack Developer | AI Builder | Robotics Engineer',
  tagline: ['Full-Stack Developer', 'AI Builder', 'Robotics'],
  intro:
    'Second-year Automation & Robotics Engineering student at Army Institute of Technology, Pune. Sole full-stack developer of a live production e-commerce platform and team leader of a national-finalist robotics team.',
  location: 'Pune, India',
  email: 'ravirepswal108@gmail.com',
  phone: '+91-94686-74153',
  links: {
    linkedin: 'https://linkedin.com/in/ravirepswal',
    github: 'https://github.com/ravirepswal108',
  },
  resumePdf: `${BASE}assets/Ravi_Repswal_Resume.pdf`,
  cvPdf: `${BASE}assets/Ravi_Repswal_CV.pdf`,
  portrait: {
    src: `${BASE}assets/portrait-720.webp`,
    srcSet: `${BASE}assets/portrait-420.webp 420w, ${BASE}assets/portrait-720.webp 720w, ${BASE}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Ravi Repswal',
  },
  interests: ['Generative AI Agents', 'Embedded Robotics', 'Full-Stack Architecture'],
};

export const education = [
  {
    school: 'Army Institute of Technology, Pune',
    place: 'Pune, Maharashtra',
    degree: 'B.Tech in Automation & Robotics Engineering (Savitribai Phule Pune University)',
    period: '2025 – 2029',
    score: 'Second Year',
  },
  {
    school: 'Army Institute of Technology',
    place: 'Pune, Maharashtra',
    degree: 'Centre for Excellence in AI & Robotics',
    period: '2025 – Present',
    score: 'Joint Secretary',
  },
];

export const experience = [
  {
    company: 'Balajee Studio Pvt. Ltd.',
    role: 'Freelance Full-Stack Developer (Sole Developer)',
    place: 'Jaipur, Rajasthan',
    period: '2025 – Present',
    points: [
      'Designed, built, and launched a live production e-commerce platform end-to-end for a clothing-industry client using React, Node.js, and Supabase (PostgreSQL).',
      'Implemented UPI QR checkout, Cloudinary automated image pipeline, Supabase Row-Level Security (RLS) data protection, and persistent cart state with Zustand.',
      'Authored the complete technical requirements document and system architecture; deployed and maintain the application on Vercel.',
    ],
  },
  {
    company: 'Centre for Excellence in AI & Robotics, AIT Pune',
    role: 'Joint Secretary',
    place: 'Pune, Maharashtra',
    period: '2025 – Present',
    points: [
      'Represented the first-year cohort in a collegiate technical club focused on robotics, electronics, and automation competitions.',
      'Coordinated competition strategy, logistics, and documentation for AXIS\'26 at NIT Nagpur, including team travel and hardware testing.',
    ],
  },
  {
    company: 'Internshala',
    role: 'Internshala Student Partner (ISP)',
    place: 'AIT Pune Campus',
    period: 'August 2025',
    points: [
      'Promoted internship and training resources across AIT Pune; coordinated 15+ students to participate in online courses and competitions.',
    ],
  },
  {
    company: 'PepsiCo',
    role: 'Supply Chain Stars Program',
    place: 'Virtual Experience',
    period: 'October 2025',
    points: [
      'Completed structured modules on supply chain strategy, demand forecasting, and logistics optimization; developed data-backed recommendations for a distribution network efficiency case scenario.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'balajee-ecommerce',
    title: 'Balajee Studio E-Commerce',
    year: '2025 – Present',
    genre: 'Full-Stack • Supabase • Fintech',
    logline: 'A live production clothing e-commerce website with UPI QR checkout, Supabase Row-Level Security, and Cloudinary pipeline.',
    stack: ['React', 'Node.js', 'Supabase', 'PostgreSQL', 'Zustand', 'Vercel'],
    build: [
      'Designed, built, and launched a live production e-commerce website end-to-end for a clothing client in Jaipur using React, Node.js, and Supabase (PostgreSQL).',
      'Implemented instant UPI QR checkout, Cloudinary media CDN, Supabase Row-Level Security (RLS) access rules, and Zustand persistent state hydration.',
      'Authored the complete technical requirements document and system architecture; deployed and continuously maintain on Vercel.',
    ],
    features: [
      'Instant UPI QR checkout payment flow',
      'Supabase PostgreSQL with Row-Level Security (RLS)',
      'Cloudinary automated image upload and CDN delivery',
      'Persistent cart and client state management with Zustand',
      'Production deployment and uptime on Vercel',
    ],
    metrics: [
      { value: '100%', label: 'sole developer ownership' },
      { value: 'UPI QR', label: 'frictionless payments' },
      { value: 'PostgreSQL', label: 'relational database' },
      { value: 'RLS', label: 'row-level security' },
      { value: 'Vercel', label: 'production deployed' },
    ],
    github: 'https://github.com/ravirepswal108',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'pipe-climbing-robot',
    title: 'Pipe-Climbing Robot',
    year: '2026',
    genre: 'Robotics • Hardware • IIT Guwahati',
    logline: 'Spring-loaded pipe-climbing robot that qualified for the national final round at Techniche IIT Guwahati.',
    stack: ['Mechanical Design', 'Spring Clamping', 'Stepper Drives', 'Aluminum Chassis'],
    build: [
      'Led an engineering team to design and fabricate a spring-loaded pipe-climbing robot for Escalade 14.0 at Techniche IIT Guwahati, qualifying for the national finals.',
      'Directed mechanical CAD design, tension spring load calculations, component sourcing, and competition timeline strategy.',
      'Engineered an aluminum chassis for optimal strength-to-weight ratio to maximize vertical climb speed.',
    ],
    features: [
      'National Finalist at Techniche IIT Guwahati (Escalade 14.0)',
      'Custom spring-loaded high-friction clamping mechanism',
      'High-torque stepper motor drives with gear reduction',
      'Fabricated lightweight structural aluminum chassis',
    ],
    metrics: [
      { value: 'Finalist', label: 'national finals round' },
      { value: 'IIT Guwahati', label: 'techniche flagship' },
      { value: 'Lead', label: 'team leader role' },
      { value: 'Custom', label: 'spring-loaded mechanism' },
    ],
    github: 'https://github.com/ravirepswal108',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'rc-rover-arm',
    title: 'RC Rover with 6-DOF Robotic Arm',
    year: '2025 – 2026',
    genre: 'Embedded • Firmware • Power Budget',
    logline: 'Competition rover integrating wireless control, BTS7960 drivers, and an articulated 6-DOF robotic arm under a strict 2A limit.',
    stack: ['Arduino Mega', 'NRF24L01', 'BTS7960', 'MG996R Servos', 'Embedded C++'],
    build: [
      'Designed and fabricated a competition-grade RC rover integrating Arduino Mega/Uno, NRF24L01 wireless telemetry, BTS7960 motor drivers, and 6x MG996R servos.',
      'Engineered a strict power budget (under 2A competition limit); eliminated current-draw spikes through staggered algorithmic servo activation sequencing.',
      'Sourced a ₹14,000 component bill of materials (BOM), authored hardware documentation, and competed at AXIS\'26 NIT Nagpur.',
    ],
    features: [
      '6-Degree-of-Freedom articulated manipulator arm',
      'NRF24L01 2.4GHz low-latency wireless remote link',
      'BTS7960 43A high-power H-bridge motor drivers',
      'Servo activation sequencing under strict 2A ceiling',
      '₹14,000 BOM budget management',
    ],
    metrics: [
      { value: '< 2A', label: 'strict power ceiling' },
      { value: '6-DOF', label: 'articulated robotic arm' },
      { value: '₹14,000', label: 'BOM budget executed' },
      { value: 'AXIS\'26', label: 'NIT Nagpur robotics' },
    ],
    github: 'https://github.com/ravirepswal108',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'iit-guwahati-finalist',
    title: 'National Finalist — Team Leader',
    org: 'Techniche IIT Guwahati (Escalade 14.0)',
    detail: 'Led team to design and fabricate a spring-loaded pipe-climbing robot; qualified for the national final round at IIT Guwahati.',
    laurel: 'National Finalist',
  },
  {
    id: 'cursor-hackathon',
    title: 'Participant — 48-Hour AI Challenge',
    org: 'Cursor Hackathon Kashmir 2026, NIT Srinagar',
    detail: 'Selected via competitive screening to build and prototype an AI product in 48 hours.',
    laurel: 'NIT Srinagar Sprint',
  },
  {
    id: 'quizoff-2026',
    title: 'QuizOff 2026 — Global AI Challenge',
    org: 'CampusCrew × Unstop',
    detail: 'Recognized among select students in India\'s biggest AI quiz competing with 525,000+ students from 48,500+ institutions globally.',
    laurel: 'Global Participant',
  },
  {
    id: 'hackwithhyderabad',
    title: 'HackWithHyderabad 3.0',
    org: 'Hack With India × Devnovate',
    detail: 'Active participation certificate in an 8-hour technology hackathon held at Microsoft Office, Hyderabad on 3 October 2026.',
    laurel: 'Microsoft Office',
  },
  {
    id: 'ceair-leadership',
    title: 'Joint Secretary',
    org: 'Centre for Excellence in AI & Robotics, AIT Pune',
    detail: 'Elected first-year executive representing cohort in competitive robotics and automation projects including AXIS\'26 at NIT Nagpur.',
    laurel: 'Robotics Executive',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'GUVI × HCL (Google for Education Partner)',
    name: 'Build & Deploy Apps with Google AI Studio & Multilingual AI Speech App with Vibe Coding',
    link: 'https://www.guvi.in/certificate?id=16U6099Y0KS3d7r1W7',
  },
  {
    issuer: 'Hack2skill Enterprise Platform',
    name: 'Hack2skill Credential Verification (ID: 2026H2S05PWVCHL2-A00540)',
    link: 'https://certificate.hack2skill.com/verify/2026H2S05PWVCHL2-A00540',
  },
  {
    issuer: 'Unstop',
    name: 'Product Management (Prodman) Capsule',
    link: `${BASE}certificates/unstop-prodman-cert.jpg`,
  },
  {
    issuer: 'Hack With India × Devnovate',
    name: 'HackWithHyderabad 3.0 — Microsoft Office Hyderabad',
    link: `${BASE}certificates/hackwithhyderabad-cert.jpg`,
  },
  {
    issuer: 'CampusCrew × Unstop',
    name: 'QuizOff 2026 — India\'s Biggest AI Quiz',
    link: `${BASE}certificates/quizoff-2026-cert.jpg`,
  },
  {
    issuer: 'Kaggle × Google',
    name: 'Python Programmer Course (2025)',
    link: 'https://github.com/ravirepswal108',
  },
  {
    issuer: 'Kaggle × Google',
    name: '5-Day Generative AI Agents Course (2025)',
    link: 'https://github.com/ravirepswal108',
  },
  {
    issuer: 'IIT Madras & SWAYAM Plus',
    name: 'Swayam Plus Engineering Certification (2025)',
    link: 'https://github.com/ravirepswal108',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Languages',
    subtitle: 'Core programming & systems',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C', mono: 'C' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & web platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Zustand', mono: 'Zu' },
      { name: 'React Native (Expo)', mono: 'Rn' },
      { name: 'Responsive Web Design', mono: 'Rd' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    subtitle: 'Server logic & database security',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Row-Level Security (RLS)', mono: 'Rl' },
      { name: 'Authentication', mono: 'Au' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & Hardware',
    subtitle: 'Sensors, actuators & microcontrollers',
    skills: [
      { name: 'Arduino Mega / Uno', mono: 'Ar' },
      { name: 'NRF24L01 Wireless', mono: 'Rf' },
      { name: 'BTS7960 Drivers', mono: 'Bt' },
      { name: 'MG996R Servos', mono: 'Mg' },
      { name: 'Power Budgeting', mono: 'Pb' },
      { name: 'Circuit Prototyping', mono: 'Cp' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    subtitle: 'Infrastructure & workflows',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Cloudinary', mono: 'Cl' },
      { name: 'Arduino IDE', mono: 'Ai' },
    ],
  },
  {
    id: 'applied-ai',
    title: 'Applied AI & Engineering',
    subtitle: 'AI systems & technical analysis',
    skills: [
      { name: 'Generative AI & Agents', mono: 'Ai' },
      { name: 'Google AI Studio', mono: 'Gs' },
      { name: 'Data Analysis', mono: 'Da' },
      { name: 'Technical Documentation', mono: 'Td' },
      { name: 'Mechanical Integration', mono: 'Mi' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['Balajee Studio E-Commerce', 'Full-stack client architecture'],
  Python: ['Google AI Studio Apps', 'Kaggle Python Programmer', 'Gen AI Agents'],
  SQL: ['Supabase PostgreSQL', 'Balajee Studio Customer & Order Data'],
  C: ['AIT Pune Academic Coursework', 'Embedded firmware'],
  'React.js': ['Balajee Studio E-Commerce', 'Production storefront UI'],
  'Next.js': ['Modern full-stack web applications'],
  Zustand: ['Balajee Studio E-Commerce persistent cart state'],
  'Node.js': ['Balajee Studio API layer and backend workflows'],
  Supabase: ['Live production database with Row-Level Security policies'],
  PostgreSQL: ['Balajee Studio production schema & indexing'],
  'Row-Level Security (RLS)': ['Balajee Studio data isolation and customer protection'],
  'Arduino Mega / Uno': ['AXIS\'26 RC Rover with 6-DOF Robotic Arm'],
  'NRF24L01 Wireless': ['2.4GHz low-latency remote control link'],
  'BTS7960 Drivers': ['High-power 43A motor drive system'],
  'Power Budgeting': ['Staggered servo activation sequencing under 2A limit'],
  Vercel: ['Balajee Studio continuous production deployment'],
  Cloudinary: ['Automated media compression & CDN delivery pipeline'],
  'Google AI Studio': ['GUVI × HCL Google for Education Partner Certification'],
  'Generative AI & Agents': ['Kaggle × Google 5-Day Gen AI Agents Course'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2025 – 2026',
    synopsis: 'Starting at Army Institute of Technology, Pune — Engineering Mathematics, Programming in C, and Automation Fundamentals.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Entrance',
        description: 'B.Tech in Automation & Robotics Engineering at Army Institute of Technology, Pune (Affiliated to SPPU).',
        tags: ['AIT Pune', 'Robotics', 'Automation'],
        runtime: '2025 – 2029',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Executive',
        description: 'Appointed Joint Secretary at the Centre for Excellence in AI & Robotics (CEAIR), AIT Pune.',
        tags: ['CEAIR', 'Leadership', 'AIT Pune'],
        runtime: '2025 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The Client Arc',
    period: '2025 – Present',
    synopsis: 'Designing and deploying a production e-commerce platform end-to-end for Balajee Studio Pvt. Ltd., Jaipur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Sole Full-Stack Developer',
        description: 'Full-stack platform with React, Node.js, and Supabase (PostgreSQL) handling real customer transactions.',
        tags: ['React', 'Supabase', 'Node.js'],
        runtime: 'Client Project',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'UPI & RLS Security',
        description: 'Engineered UPI QR checkout, Cloudinary media CDN, and Supabase Row-Level Security data access policies.',
        tags: ['UPI QR', 'RLS', 'Zustand', 'Vercel'],
        runtime: 'Production',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Hardware & Competitions',
    period: '2025 – 2026',
    synopsis: 'National robotics finalist at IIT Guwahati and competition rover engineering at NIT Nagpur.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The National Finalist',
        description: 'Led team for Escalade 14.0 at Techniche IIT Guwahati; designed spring-loaded pipe-climbing robot qualifying for national finals.',
        tags: ['IIT Guwahati', 'Team Leader', 'Finalist'],
        runtime: 'Escalade 14.0',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The 6-DOF Rover & 2A Limit',
        description: 'Built RC rover with 6-DOF robotic arm for AXIS\'26 NIT Nagpur, solving 2A electrical limit via servo activation sequencing.',
        tags: ['Arduino', '6-DOF', 'Power Budget', 'NIT Nagpur'],
        runtime: 'AXIS\'26',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Applied AI & Sprints',
    period: '2025 – 2026',
    synopsis: 'Google AI Studio, Cursor Hackathon Kashmir, and India\'s biggest AI quiz challenge.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Google AI Studio & Speech',
        description: 'Certified by GUVI × HCL (Google for Education Partner) in building apps with Google AI Studio and multilingual speech.',
        tags: ['Google AI Studio', 'Speech AI', 'GUVI'],
        runtime: 'Feb 2026',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The 48-Hour Sprint',
        description: 'Selected for Cursor Hackathon Kashmir 2026 at NIT Srinagar, building an AI product under a 48-hour deadline.',
        tags: ['Cursor Hackathon', 'NIT Srinagar', 'AI Product'],
        runtime: 'Apr 2026',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'QuizOff 2026',
        description: 'Competed among select participants globally in QuizOff 2026, India\'s biggest AI quiz by CampusCrew & Unstop.',
        tags: ['525K+ Students', 'CampusCrew', 'Unstop'],
        runtime: 'Jul 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'What\'s Next',
    period: 'Now Streaming',
    synopsis: 'Looking forward to software engineering and data internships bridging intelligent software and autonomous systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Build',
        description: 'Open to full-stack web, generative AI agent, and robotics engineering opportunities.',
        tags: ['Full-Stack', 'AI Agents', 'Robotics'],
        runtime: 'In Production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Client production', title: 'Balajee Studio E-Commerce', detail: 'Sole Full-Stack Developer • Live on Vercel', palette: amber },
  { label: 'National finalist', title: 'IIT Guwahati Techniche', detail: 'Team Leader • Escalade 14.0 Pipe-Climbing Robot', palette: ocean },
  { label: 'Hardware breakthrough', title: '6-DOF Rover < 2A Limit', detail: 'AXIS\'26 NIT Nagpur • Algorithmic servo sequencing', palette: crimson },
  { label: 'AI credential', title: 'Google AI Studio Certified', detail: 'GUVI × HCL • Google for Education Partner', palette: violet },
  { label: 'Collegiate leadership', title: 'Joint Secretary @ CEAIR', detail: 'Centre for Excellence in AI & Robotics, AIT Pune', palette: jade },
  { label: 'AI hackathon', title: 'Cursor Hackathon Kashmir', detail: '48-hour AI product sprint at NIT Srinagar', palette: crimson },
  { label: 'Enterprise credential', title: 'Hack2skill Platform', detail: 'Credential ID: 2026H2S05PWVCHL2-A00540', palette: ocean },
  { label: 'Database security', title: 'Supabase & Postgres RLS', detail: 'Row-Level Security access control implementation', palette: amber },
  { label: 'Product mindset', title: 'Prodman Capsule', detail: 'Product Management Foundations • Unstop', palette: violet },
  { label: 'Academic home', title: 'AIT Pune Class of 2029', detail: 'B.Tech in Automation & Robotics Engineering', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Ravi Repswal',
    lines: ['Full-Stack Developer · AI Builder · Automation & Robotics Engineer', 'Army Institute of Technology, Pune · Class of 2029'],
    chips: ['Full-Stack', 'AI Builder', 'Robotics'],
  },
  {
    kicker: 'Client Production',
    title: 'Balajee Studio E-Commerce',
    lines: ['Sole Full-Stack Developer for clothing client in Jaipur', 'React · Node.js · Supabase PostgreSQL · UPI QR · Zustand'],
    chips: ['React', 'Supabase', 'Node.js', 'UPI QR', 'Vercel'],
  },
  {
    kicker: 'National Stage',
    title: 'IIT Guwahati Finalist',
    lines: ['Team Leader for Escalade 14.0 Techniche IIT Guwahati', 'Spring-loaded pipe-climbing robot national final round qualifier'],
    chips: ['IIT Guwahati', 'National Finalist', 'Team Leader'],
  },
  {
    kicker: 'Hardware & Firmware',
    title: '6-DOF Rover @ AXIS\'26',
    lines: ['Arduino Mega · NRF24L01 · BTS7960 · 6x MG996R servos', 'Strict 2A power ceiling solved via servo activation sequencing'],
    chips: ['Arduino', '6-DOF Arm', 'Power Budget', 'NIT Nagpur'],
  },
  {
    kicker: 'Certified AI',
    title: 'Google AI Studio & Agents',
    lines: ['GUVI × HCL Google for Education Partner Certification', 'Kaggle × Google 5-Day Generative AI Agents & Python Programmer'],
    chips: ['Google AI Studio', 'Kaggle', 'Gen AI Agents'],
  },
  {
    kicker: 'Leadership',
    title: 'Joint Secretary @ CEAIR',
    lines: ['Centre for Excellence in AI & Robotics, AIT Pune', 'Internshala Student Partner · NSS Volunteer'],
    chips: ['CEAIR AIT Pune', 'Leadership', 'Coordination'],
  },
  {
    kicker: 'Looking Forward',
    title: 'Now Streaming',
    lines: ['Seeking Full-Stack, AI & Robotics engineering internship opportunities.'],
  },
];

export type ProfileId = 'ravi' | 'recruiter' | 'developer' | 'robotics';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ravi',
    name: 'Ravi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, credentials & verified achievements first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, codebases & technical architecture first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'robotics',
    name: 'Robotics',
    blurb: 'Hardware builds, power budgets & competition finals',
    color: '#ffb547',
    order: ['journey', 'originals', 'skills', 'moments', 'about', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'The Pilot', meta: 'Education & engineering foundation', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'The Originals', meta: `${projects.length} Engineering Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from engineering journey', palette: jade },
  skills: { nav: 'Skills', card: 'Skill Genres', meta: `${skillCategories.length} Domain Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Curriculum Vitae • View & download', palette: violet },
};
