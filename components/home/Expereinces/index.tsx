"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";
import ExperienceItem from "./ExperienceItem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const experiences = [
  {
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=TechCorp",
    companyName: "TechCorp Solutions",
    role: "Senior Front-End Engineer",
    startDate: "Mar 2024",
    endDate: "Present",
    description:
      "Led the architectural migration from a legacy React monolith to Next.js App Router, optimizing core web vitals by 40% and implementing secure SSR architectures.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "Redux"],
    reference: {
      name: "Jane Doe",
      position: "Engineering Manager",
      phone: "+1 (555) 019-2834",
    },
  },
  {
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=DevStudio",
    companyName: "DevStudio Agency",
    role: "Front-End Developer",
    startDate: "Jan 2022",
    endDate: "Feb 2024",
    description:
      "Built and delivered 10+ high-performance responsive web applications. Collaborative integration with backend teams using Node.js and RESTful API endpoints.",
    skills: ["React.js", "JavaScript", "Context API", "Sass", "REST APIs"],
    reference: {
      name: "John Smith",
      position: "Tech Lead",
      phone: "+1 (555) 014-4921",
    },
  },
  {
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=WebStart",
    companyName: "WebStart Hub",
    role: "Junior Web Developer",
    startDate: "Aug 2020",
    endDate: "Dec 2021",
    description:
      "Maintained client dashboards, resolved state-management pipeline defects, and built clean, reusable component packages across production layers.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Git"],
    reference: {
      name: "Alice Rostami",
      position: "Product Owner",
      phone: "+98 912 999 8877",
    },
  },
];

export default function Experiences() {
  return (
    <section id="expriences" className="container mx-auto max-sm:px-4 py-8">
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
