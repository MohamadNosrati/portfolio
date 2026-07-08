"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";
import ExperienceItem from "./ExperienceItem";
import MobtakeranImage from "@/public/images/mobtakeran.jpg";
import ideKavanImage from "@/public/images/ideKavan.png";
import saroojImage from "@/public/images/sarooj.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const experiences = [
  {
    companyLogo: ideKavanImage?.src,
    companyName: "ّIde Kavan",
    role: "Front-End Developer",
    startDate: "Mar 2024",
    type: "FullTime",
    endDate: "Present",
    isFreelance: false,
    description: `Delivered technical training in AI fluency (prompt engineering, MCP
servers, RAG, n8n).
Provided hands-on instruction in Micro Frontend development.
Trained learners in Docker and containerized workflows.
Taught professional Git practices, emphasizing scalable systems and
best practices.`,
    projects: [
      {
        label: "Behtarino",
        disable: false,
        href: "https://behtarino.com/",
      },
    ],
    reference: {
      name: "Milad Afkhami",
      position: "Frontend Chapter Lead",
      phone: "+989392840749",
    },
  },
  {
    companyLogo: MobtakeranImage?.src,
    companyName: "Mobtakeran",
    role: "Front-End Developer",
    startDate: "March 2025",
    type: "PartTime",
    endDate: "Nov 2025",
    isFreelance: false,
    description: `Experienced in React Native and web development with Monorepo
setup , contributing to scalable, high-performance applications. Familiar
with SWR for optimized state management and Ant Design (antd) for
clean, enterprise-grade UI/UX across platforms.`,
    projects: [
      {
        label: "Mobedu",
        disable: false,
        href: "https://exam.mobedu.ir/",
      },
    ],
    reference: {
      name: "Mohamad Shariat",
      position: "Tech Lead",
      phone: "+989395852725",
    },
  },
  {
    companyLogo: "",
    companyName: "ّFannvaran Tosee Amn",
    role: "Front-End Developer",
    startDate: "Nov 2025",
    type: "FullTime",
    endDate: "Mar 2026",
    isFreelance: false,
    description: `Skilled in Zustand and React Query for efficient local and remote state
management, with strong REST API and Axios experience.
Expert in React Hook Form, Hero UI, and Tailwind CSS for fast, responsive
forms and clean UI.
Proficient in ECharts for interactive data visualization, focused on
delivering high-performance and scalable applications.`,
    projects: [
      {
        label: "I Cant Expose",
        disable: true,
      },
    ],
    reference: {
      name: "Mohamad Hosein EPakchian",
      position: "CTO",
      phone: "+989154801941",
    },
  },
  {
    companyLogo: saroojImage?.src,
    companyName: "ّSarooj Contractor Company",
    role: "Full Stack Developer",
    startDate: "Mar 2023",
    type: "Freelancer",
    isFreelance: true,
    endDate: "Apr 2023",
    description:
      "Maintained client dashboards, resolved state-management pipeline defects, and built clean, reusable component packages across production layers.",
    projects: [
      {
        label: "Sarooj",
        disable: false,
        href: "https://www.saroojcontractor.com/",
      },
    ],
    reference: {
      name: "Mohamad Hosein EPakchian",
      position: "CTO",
      phone: "+989154801941",
    },
  },
  {
    companyLogo: "",
    companyName: "Doctorize Project",
    role: "Full Stack Developer",
    startDate: "Apr 2022",
    type: "Freelancer",
    isFreelance: true,
    endDate: "Dec 2022",
    description: `
      Built backend with PHP Laravel using MVC, ORM, and MySQL for a
LinkedIn-like platform.
Used Blade, layouts, partials, and API routes for dynamic views and AJAX
handling.
Implemented email system, advanced relations, jobs, events,
andlisteners for robust features`,
    projects: [
      {
        label: "Sarooj",
        disable: false,
        href: "https://www.saroojcontractor.com/",
      },
    ],
    reference: {
      name: "Turaj ArminPour",
      position: "Teck Lead",
      phone: "+989128167840",
    },
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="container mx-auto max-sm:px-4 py-8">
      {/* Header matching your existing styles */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <FaBriefcase className="size-5" />
        </div>
        <h2 className="text-foreground font-extrabold text-xl tracking-wide uppercase">
          Work Experience
        </h2>
      </div>

      {/* Grid: Exactly 3 columns on large screens */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </motion.div>
    </section>
  );
}
