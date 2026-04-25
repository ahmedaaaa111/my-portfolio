import { Project, Skill, Experience } from "@/src/types";

export const projects: Project[] = [
  // ✅ REAL PROJECT 1
  {
    id: 1,
    title: "Adasa Blog",
    description:
      "A modern, responsive blog platform featuring clean design, dynamic content, and smooth animations with GSAP.",
    image: "/images/adasa-blog.png",
    technologies: ["React", "JavaScript", "CSS", "GSAP"],
    liveUrl: "https://tinyurl.com/adasa-app",
    githubUrl: "https://github.com/ahmedaaaa111/adasa-blog",
  },
  // ✅ REAL PROJECT 2
  {
    id: 2,
    title: "Social Media App",
    description:
      "A full-featured social networking platform with user authentication, CRUD posts & comments, user profiles, and real-time interactions via REST API.",
    image: "/images/social-app.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "", // Add your deployed link when ready
    githubUrl: "", // Add your GitHub repo when ready
  },
  // 🔜 COMING SOON
  {
    id: 3,
    title: "Coming Soon",
    description:
      "A new exciting project is currently in development. Stay tuned!",
    image: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const skills: Skill[] = [
  { name: "HTML5", icon: "html5", level: 90 },
  { name: "CSS3", icon: "css3-alt", level: 85 },
  { name: "JavaScript", icon: "js", level: 85 },
  { name: "TypeScript", icon: "code", level: 75 },
  { name: "React.js", icon: "react", level: 80 },
  { name: "Next.js", icon: "server", level: 70 },
  { name: "Tailwind CSS", icon: "palette", level: 85 },
  { name: "Bootstrap", icon: "bootstrap", level: 80 },
  { name: "Git & GitHub", icon: "git-alt", level: 80 },
  { name: "REST APIs", icon: "link", level: 75 },
  { name: "Responsive Design", icon: "mobile-screen", level: 90 },
  { name: "Chrome DevTools", icon: "wrench", level: 80 },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    location: "Prague, Czech Republic",
    startDate: "October 2025",
    endDate: "Present",
    description: [
      "Engineered high-performance web applications using React.js, JavaScript (ES6+), and Tailwind CSS",
      "Translated complex client requirements into functional, user-friendly websites",
      "Optimized web performance and ensured cross-browser compatibility",
      "Managed project lifecycles using GitHub for version control",
    ],
  },
  {
    id: 2,
    role: "Freelance Linguistic Tester",
    company: "TransPerfect",
    location: "Prague, Czech Republic",
    startDate: "February 2026",
    endDate: "Present",
    description: [
      "Conducted rigorous linguistic quality assurance for the Amazon CJQA project",
      "Identified and reported linguistic bugs and formatting issues",
      "Contributed to the delivery of high-quality localized content",
    ],
  },
];