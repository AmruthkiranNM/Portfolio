// ============================================================
// PORTFOLIO DATA - Edit this file to update all portfolio content
// ============================================================

// ------ PERSONAL INFORMATION ------
export const personalInfo = {
  name: "Amruth Kiran N M",
  firstName: "Amruth",
  initials: "AK",
  email: "amruthnek@gmail.com",
  phone: "+91-8660960234",
  location: "Mangalore, Karnataka",
  github: "https://github.com/AmruthkiranNM",
  linkedin: "https://linkedin.com/in/amruth-kiran-n-m", // TODO: Replace with actual LinkedIn URL
  resumePath: "resume.pdf",
  greeting: "Hello, I'm",
  introText:
    "Computer Science Engineering student with hands-on experience building full-stack applications using the MERN stack.Strong problem-solving skills with experience developing and deploying real-world software solutions",
  status: "Open to opportunities",
};

// ------ ANIMATED ROLES ------
export const roles = [
  "Computer Science Engineering Student",
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI & Data Analytics Enthusiast",
];

// ------ NAVIGATION LINKS ------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ------ ABOUT ME ------
export const aboutMe = {
  paragraphs: [
    "I am a Computer Science Engineering student at St. Joseph Engineering College, Mangaluru, with experience building full-stack web applications and real-world software systems.",
    "My work includes a deployed School ERP platform, an AI-powered business intelligence platform, a smart waste management system, and an interactive air quality dashboard.",
    "I enjoy working across full-stack development, AI-powered applications, data analytics, APIs, databases, and modern web technologies.",
  ],
  quickInfo: [
    { label: "Degree", value: "B.E. Computer Science & Engineering" },
    { label: "CGPA", value: "8.98" },
    { label: "Location", value: "Mangalore, Karnataka" },
    { label: "Graduation", value: "2027" },
  ],
};

// ------ SKILLS ------
export const skills = [
  {
    category: "Programming Languages",
    icon: "Code2",
    items: ["C++", "Java", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Vercel", "Render"],
  },
];

// ------ EXPERIENCE ------
export const experience = [
  {
    role: "Full Stack Developer",
    organization: "Shree Sharada High School ERP",
    location: "Sullia, Karnataka",
    duration: "Nov 2025 – Present",
    description: [
      "Developed a role-based School ERP platform with attendance management, marks tracking, student promotion, Excel bulk import/export, and SMS notifications for parents using the MERN stack.",
      "Built secure REST APIs with JWT authentication and bcrypt password hashing, designed responsive React dashboards, and deployed the application on Vercel and Render using MongoDB Atlas.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "JWT",
      "bcrypt",
      "Vercel",
      "Render",
    ],
    highlights: [
      "Role-Based Access",
      "Attendance Management",
      "Marks Tracking",
      "Student Promotion",
      "Excel Import/Export",
      "Parent SMS Notifications",
      "Secure Authentication",
      "Responsive Dashboards",
    ],
  },
];

// ------ PROJECTS ------
export const projects = [
  {
    id: 1,
    name: "Voice BI",
    duration: "Feb 2026 – Present",
    category: "AI & Data",
    technologies: [
      "React.js",
      "FastAPI",
      "Ollama",
      "FAISS",
      "SQLite",
      "Chart.js",
      "Docker",
    ],
    description:
      "Built a full-stack AI business analytics platform using React.js and FastAPI that transforms CSV datasets into interactive insights through a multi-agent RAG pipeline with voice-enabled natural language querying and secure SQL generation.",
    features: [
      "CSV dataset analysis",
      "Multi-agent RAG pipeline",
      "Voice-enabled natural language querying",
      "Secure SQL generation",
      "Ollama-powered local LLM inference",
      "FAISS-based schema retrieval",
      "Interactive visualizations",
      "Forecasting",
      "Conversational follow-up queries",
      "Pipeline tracing",
      "Data quality analysis",
      "Docker deployment",
      "100% local data privacy",
    ],
    image: "projects/voice-bi.png",
    github: "https://github.com/AmruthkiranNM/voice_BI.git", // TODO: Add GitHub URL
    liveUrl: "", // TODO: Add live URL if available
    featured: true,
  },
  {
    id: 2,
    name: "Shree Sharada High School ERP",
    duration: "Nov 2025 – Present",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Vercel",
      "Render",
    ],
    description:
      "A role-based full-stack School ERP platform built for managing school operations through dedicated dashboards and secure workflows.",
    features: [
      "Attendance management",
      "Marks tracking",
      "Student promotion",
      "Excel bulk import/export",
      "Parent SMS notifications",
      "Role-based access",
      "JWT authentication",
      "Responsive dashboards",
      "Cloud deployment",
    ],
    image: "projects/school-erp.png",
    github: "https://github.com/AmruthkiranNM/school_system.git", // TODO: Add GitHub URL
    liveUrl: "https://schoolsystem-zeta.vercel.app", // TODO: Add live URL if available
    featured: false,
    
  },
  {
    id: 3,
    name: "LINKOPS",
    duration: "Jul 2025 – Nov 2025",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "WhatsApp Integration", "MongoDB"],
    description:
      "Developed a full-stack smart waste management platform connecting citizens and NGOs through WhatsApp-based pickup scheduling, automated request tracking, and unique Request ID generation.",
    features: [
      "WhatsApp-based pickup scheduling",
      "Automated request tracking",
      "Unique Request ID generation",
      "Citizen and NGO connection",
      "Role-based NGO dashboards",
      "Pickup request monitoring",
      "Staff assignment",
      "Waste collection workflow management",
    ],
    image: "projects/linkops.png",
    github: "https://github.com/AmruthkiranNM/SmartConnect.git", // TODO: Add GitHub URL
    liveUrl: "", // TODO: Add live URL if available
    featured: false,
  },
  {
    id: 4,
    name: "Air Quality Dashboard",
    duration: "Feb 2025 – May 2025",
    category: "AI & Data",
    technologies: ["Python", "Dash", "Plotly", "OpenWeatherMap API"],
    description:
      "Developed an interactive air quality dashboard using Python, Dash, and Plotly to visualize real-time and historical AQI data, pollutant trends, and location-based air quality insights through the OpenWeatherMap API.",
    features: [
      "Real-time AQI data",
      "Historical air quality data",
      "Pollutant trend visualization",
      "Location-based air quality insights",
      "Interactive Plotly charts",
      "OpenWeatherMap API integration",
    ],
    image: "projects/air-quality.png",
    github: "https://github.com/AmruthkiranNM/python_air_quality.git", // TODO: Add GitHub URL
    liveUrl: "", // TODO: Add live URL if available
    featured: false,
  },
  {
    id: 5,
    name: "Strategic Enterprise Intelligence Engine",
    duration: "Mar 2025",
    category: "Full Stack",
    technologies: ["Python", "FastAPI", "React.js", "Tailwind CSS"],
    description:
      "Developed an enterprise intelligence platform that analyzes company domains and geographic regions to discover and prioritize high-potential business leads.",
    features: [
      "Multi-factor scoring engine",
      "Interactive dashboard",
      "Evaluate growth, scale & trigger signals",
      "Generate lead scores",
      "Targeted outreach strategies",
    ],
    image: "projects/strategic-engine.png",
    github: "https://github.com/AmruthkiranNM/Enterprise_Intelligence_Engine.git", // TODO: Add GitHub URL
    liveUrl: "", // TODO: Add live URL if available
    featured: true,
  },
  {
    id: 6,
    name: "Inventory and Sales Management System",
    duration: "Apr 2026",
    category: "Full Stack",
    technologies: ["Go (Golang)", "Fyne", "SQLite"],
    description:
      "Developed a desktop application for managing inventory and sales, featuring product CRUD operations, sales tracking, automatic stock updates, and low-stock monitoring.",
    features: [
      "Product CRUD operations",
      "Sales tracking & history",
      "Automatic stock updates",
      "Low-stock monitoring",
      "Database-driven revenue reporting",
      "Interactive GUI using Fyne",
    ],
    image: "projects/inventory-system.png",
    github: "https://github.com/AmruthkiranNM/go_micro_project.git", // TODO: Add GitHub URL
    liveUrl: "", // TODO: Add live URL if available
    featured: false,
  },
];

// ------ PROJECT FILTER CATEGORIES ------
export const projectFilters = ["All", "Full Stack", "AI & Data"];

// ------ ACHIEVEMENTS ------
export const achievements = [
  {
    id: 1,
    title: "2nd Prize",
    event: "Course-Level PBL Project Exhibition",
    organization: "St. Joseph Engineering College, Mangaluru",
    project: "LINKOPS",
    category: "Project Recognition",
    highlight: "2nd",
    description:
      "Awarded 2nd Prize at the Course-Level PBL Project Exhibition at SJEC for LINKOPS, a full-stack smart waste management platform connecting citizens and NGOs through WhatsApp-based pickup scheduling and request management.",
    certificateUrl: "https://drive.google.com/file/d/18rf1zz4NGGesCXbvdaTKdxh3JXHHgI_f/view?usp=drive_link", // TODO: Add certificate link if available
  },
  {
    id: 2,
    title: "Phase 2 Qualifier",
    event: "VEXSTORM'26",
    organization: "",
    project: "",
    category: "Competition Qualification",
    highlight: "Phase 2",
    description: "Selected for Phase 2 of VEXSTORM'26.",
    certificateUrl: "https://drive.google.com/file/d/1v_yH-lZlqIzYqTK2KBwpVt8TenJNcOy6/view?usp=drive_link", // TODO: Add certificate link if available
  },
];

// ------ EDUCATION ------
export const education = [
  {
    institution: "St. Joseph Engineering College, Mangaluru",
    duration: "2023 – 2027",
    degree: "B.E. in Computer Science and Engineering",
    result: "CGPA: 8.98 (VI Semester)",
    current: true,
  },
  {
    institution: "Ambika Padavi Poorva Vidyalaya, Puttur",
    duration: "2021 – 2023",
    degree: "Pre-University (PCMC)",
    result: "94.16%",
    current: false,
  },
  {
    institution: "Rotary English Medium School, Sullia",
    duration: "2020 – 2021",
    degree: "SSLC",
    result: "96.48%",
    current: false,
  },
];

// ------ LEADERSHIP ------
export const leadership = {
  organization: "NSS/YRC SJEC Unit",
  role: "Core Committee Member",
  duration: "2024 – Present",
  description: [
    "Organized social service initiatives, college events, and community engagement programs in collaboration with the NSS/YRC team.",
    "Managed event publicity, media content, and social media campaigns to improve outreach and student participation.",
  ],
  highlights: [
    "Community Engagement",
    "Event Organization",
    "Media Content",
    "Social Media Campaigns",
    "Team Collaboration",
  ],
};

// ------ CERTIFICATIONS ------
export const certifications = [
  {
    title: "Privacy and Security in Online Social Media",
    platform: "NPTEL",
    institution: "IIT Hyderabad",
    credentialUrl: "https://drive.google.com/file/d/14nCL4AVoJOS5uBsf28luEJWUh7T7ublE/view?usp=drive_link", // TODO: Add credential URL if available
  },
  {
    title: "The Complete Web Development Bootcamp",
    platform: "Udemy",
    institution: "",
    credentialUrl: "https://drive.google.com/file/d/19M27SudDr68XF6uo6q08MCmS5vZj69u6/view?usp=drive_link", // TODO: Add credential URL if available
  },
  {
    title: "Mastering Data Structures & Algorithms in C/C++",
    platform: "Udemy",
    institution: "",
    credentialUrl: "", // TODO: Add credential URL if available
  },
];

// ------ WORKSHOPS ------
export const workshops = [
  {
    id: "business-modelling-pbl-workshop",
    title: "Business Modelling for PBL Projects",
    issuer: "St. Joseph Engineering College, Mangaluru",
    type: "Workshop",
    duration: "Three-Day Workshop",
    date: "26–28 March 2026",
    organizer: "Internal Quality Assurance Cell (IQAC)",
    association: "Sanjosh–TLC SJEC and Department of Business Administration",
    description: "Participated in a three-day workshop on Business Modelling for PBL Projects.",
    certificateUrl: "https://drive.google.com/file/d/1wsqI_Bn7eEtuJYYjVLxNZtMTOjTgB4S_/view?usp=drive_link", // Paste a Google Drive or external link here if you prefer a link instead of an image
  },
  {
    id: "gsoc-llms-workshop",
    title: "Master the Future: A Hands-on GSoC & LLMs Workshop",
    issuer: "St. Joseph Engineering College, Mangaluru",
    type: "Workshop",
    duration: "Hands-on Session",
    date: "14 February 2026",
    organizer: "AgentBlazer Club",
    association: "Department of Computer Science & Engineering",
    description: "Participated in a hands-on workshop focused on GSoC and Large Language Models (LLMs).",
    certificateUrl: "https://drive.google.com/file/d/1wsqI_Bn7eEtuJYYjVLxNZtMTOjTgB4S_/view?usp=drive_link",
  }
];

// ------ CONTACT SECTION ------
export const contactInfo = {
  heading: "Let's Build Something Meaningful",
  description:
    "I am open to opportunities where I can apply my skills, contribute to impactful software solutions, and continue growing as a developer.",
};
