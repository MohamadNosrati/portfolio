"use client";

import { FaUser } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkillItem from "./SkillItem";
import "swiper/css";

const data = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="fe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#F97316" />
    </linearGradient>
  </defs>
  <rect x="14" y="16" width="52" height="38" rx="4" fill="none" stroke="url(#fe)" stroke-width="3" />
  <rect x="32" y="54" width="16" height="6" rx="2" fill="none" stroke="url(#fe)" stroke-width="3" />
  <text x="24" y="41" font-family="monospace" font-size="20" font-weight="bold" fill="url(#fe)">&lt;/&gt;</text>
  <rect x="22" y="26" width="10" height="8" rx="1" fill="url(#fe)" opacity="0.4" />
  <rect x="36" y="26" width="16" height="8" rx="1" fill="url(#fe)" opacity="0.4" />
  <rect x="22" y="38" width="30" height="6" rx="1" fill="url(#fe)" opacity="0.4" />
</svg>`,
    title: "Frontend",
    branches: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Query",
      "Jest",
      "React Hook Form",
      "MicroFronted",
      "Webpack",
      "Turbopack",
    ],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="uiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FB923C" />
      <stop offset="100%" stop-color="#EC4899" />
    </linearGradient>
  </defs>
  <rect x="14" y="16" width="52" height="38" rx="4" fill="none" stroke="url(#uiGrad)" stroke-width="3" />
  <rect x="36" y="54" width="8" height="6" fill="url(#uiGrad)" />
  <rect x="30" y="60" width="20" height="4" rx="2" fill="url(#uiGrad)" />
  <rect x="22" y="24" width="8" height="22" rx="1" fill="url(#uiGrad)" opacity="0.3" />
  <rect x="34" y="24" width="24" height="10" rx="1" fill="url(#uiGrad)" opacity="0.3" />
  <rect x="34" y="38" width="24" height="8" rx="1" fill="url(#uiGrad)" opacity="0.3" />
  <path d="M62 20 L68 22 L66 28 Z" fill="url(#uiGrad)" />
</svg>`,
    title: "Ui",
    branches: [
      "HTML5",
      "Tailwind CSS",
      "Material UI",
      "Hero UI",
      "Responsive Design",
      "PWA",
      "Framer Motion",
    ],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="sm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#sm)" />
    </marker>
  </defs>
  <circle cx="40" cy="40" r="10" fill="none" stroke="url(#sm)" stroke-width="3" />
  <circle cx="40" cy="40" r="3" fill="url(#sm)" />
  
  <circle cx="18" cy="18" r="5" fill="none" stroke="url(#sm)" stroke-width="2" />
  <circle cx="62" cy="18" r="5" fill="none" stroke="url(#sm)" stroke-width="2" />
  <circle cx="18" cy="62" r="5" fill="none" stroke="url(#sm)" stroke-width="2" />
  <circle cx="62" cy="62" r="5" fill="none" stroke="url(#sm)" stroke-width="2" />
  
  <line x1="26" y1="26" x2="32" y2="32" stroke="url(#sm)" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="54" y1="26" x2="48" y2="32" stroke="url(#sm)" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="26" y1="54" x2="32" y2="48" stroke="url(#sm)" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="54" y1="54" x2="48" y2="48" stroke="url(#sm)" stroke-width="2" marker-end="url(#arrow)" />
</svg>`,
    title: "State Management",
    branches: ["Redux Toolkit", "Zustand", "jotai"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="md" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
  </defs>
  <rect x="24" y="12" width="32" height="56" rx="6" fill="none" stroke="url(#md)" stroke-width="3" />
  <rect x="28" y="20" width="24" height="36" rx="2" fill="url(#md)" opacity="0.15" />
  <rect x="32" y="24" width="16" height="2" fill="url(#md)" />
  <polygon points="38,34 48,40 38,46" fill="url(#md)" />
  <rect x="32" y="52" width="6" height="6" rx="1" fill="url(#md)" opacity="0.8" />
  <rect x="42" y="52" width="6" height="6" rx="1" fill="url(#md)" opacity="0.8" />
  <circle cx="40" cy="62" r="2" fill="url(#md)" />
</svg>`,
    title: "Mobile Development",
    branches: ["React Native", "Expo", "PWA"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="be" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>
  <rect x="20" y="24" width="40" height="12" rx="2" fill="none" stroke="url(#be)" stroke-width="3" />
  <rect x="20" y="44" width="40" height="12" rx="2" fill="none" stroke="url(#be)" stroke-width="3" />
  <circle cx="28" cy="30" r="2" fill="url(#be)" />
  <circle cx="28" cy="50" r="2" fill="url(#be)" />
  <path d="M60 30 L68 30 L68 50 L60 50" fill="none" stroke="url(#be)" stroke-width="3" />
  <circle cx="68" cy="30" r="2" fill="url(#be)" />
  <circle cx="68" cy="50" r="2" fill="url(#be)" />
</svg>`,
    title: "Backend",
    branches: ["Node.js", "Express.js", "PHP", "Laravel", "REST API"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="db" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
  </defs>
  <ellipse cx="40" cy="20" rx="18" ry="6" fill="none" stroke="url(#db)" stroke-width="3" />
  <path d="M22 20 L22 50 A18 6 0 0 0 58 50 L58 20" fill="none" stroke="url(#db)" stroke-width="3" />
  <ellipse cx="40" cy="50" rx="18" ry="6" fill="none" stroke="url(#db)" stroke-width="3" />
</svg>`,
    title: "Database",
    branches: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Mongoose"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="vc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A78BFA" />
      <stop offset="100%" stop-color="#6366F1" />
    </linearGradient>
  </defs>
  <line x1="20" y1="20" x2="20" y2="60" stroke="url(#vc)" stroke-width="3" stroke-linecap="round" />
  <circle cx="20" cy="20" r="5" fill="url(#vc)" />
  <circle cx="20" cy="40" r="5" fill="url(#vc)" />
  <circle cx="20" cy="60" r="5" fill="url(#vc)" />
  <path d="M20 40 L50 40 L50 60" fill="none" stroke="url(#vc)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="50" cy="40" r="5" fill="url(#vc)" />
  <circle cx="50" cy="60" r="5" fill="url(#vc)" />
  <path d="M50 50 L65 50 L65 60" fill="none" stroke="url(#vc)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="65" cy="60" r="5" fill="url(#vc)" />
</svg>`,
    title: "Version Control",
    branches: ["GitHub", "GitLab", "Git Flow", "Monorepo", "Turborepo"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="rtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#F97316" />
    </linearGradient>
  </defs>
  <circle cx="40" cy="40" r="28" fill="none" stroke="url(#rtGrad)" stroke-width="2" stroke-dasharray="6 6" />
  <circle cx="40" cy="40" r="18" fill="none" stroke="url(#rtGrad)" stroke-width="3" />
  <circle cx="40" cy="40" r="8" fill="url(#rtGrad)" opacity="0.8" />
  <path d="M40 40 L58 28" fill="none" stroke="url(#rtGrad)" stroke-width="3" stroke-linecap="round" />
  <polygon points="58,28 52,24 56,32" fill="url(#rtGrad)" />
  <circle cx="40" cy="40" r="28" fill="none" stroke="url(#rtGrad)" stroke-width="2" opacity="0.4" />
</svg>`,
    title: "Realtime",
    branches: ["Socket.IO", "WebSockets", "Push Notifications"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="pkgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C084FC" />
      <stop offset="100%" stop-color="#8B5CF6" />
    </linearGradient>
  </defs>
  <path d="M30 28 L50 22 L70 28 L50 34 Z" fill="none" stroke="url(#pkgGrad)" stroke-width="3" stroke-linejoin="round" />
  <path d="M30 28 L30 52 L50 58 L50 34 Z" fill="none" stroke="url(#pkgGrad)" stroke-width="3" stroke-linejoin="round" />
  <path d="M50 34 L50 58 L70 52 L70 28 Z" fill="none" stroke="url(#pkgGrad)" stroke-width="3" stroke-linejoin="round" />
  <path d="M50 12 L50 22 M44 16 L50 22 L56 16" fill="none" stroke="url(#pkgGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="54" y="44" width="14" height="10" rx="2" fill="url(#pkgGrad)" opacity="0.8" />
  <text x="57" y="51" font-family="monospace" font-size="8" font-weight="bold" fill="#fff">v1</text>
</svg>`,
    title: "Package Managers",
    branches: ["npm", "pnpm", "Yarn"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="monGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
  </defs>
  <rect x="14" y="16" width="52" height="38" rx="4" fill="none" stroke="url(#monGrad)" stroke-width="3" />
  <rect x="36" y="54" width="8" height="6" fill="url(#monGrad)" />
  <rect x="30" y="60" width="20" height="4" rx="2" fill="url(#monGrad)" />
  <rect x="20" y="42" width="6" height="8" rx="1" fill="url(#monGrad)" opacity="0.5" />
  <rect x="28" y="36" width="6" height="14" rx="1" fill="url(#monGrad)" opacity="0.5" />
  <rect x="36" y="44" width="6" height="6" rx="1" fill="url(#monGrad)" opacity="0.5" />
  <polyline points="46,46 52,34 58,40 62,30" fill="none" stroke="url(#monGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="52" cy="34" r="2" fill="url(#monGrad)" />
  <circle cx="62" cy="30" r="2" fill="url(#monGrad)" />
</svg>`,
    title: "Monitoring",
    branches: ["PostHog"],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="ss" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F472B6" />
      <stop offset="100%" stop-color="#8B5CF6" />
    </linearGradient>
  </defs>
  <path d="M40 24 C26 24 22 36 24 44 C26 52 34 56 40 54 C46 56 54 52 56 44 C58 36 54 24 40 24 Z" fill="none" stroke="url(#ss)" stroke-width="3" />
  <path d="M30 32 Q35 28 40 32 Q45 36 50 32" fill="none" stroke="url(#ss)" stroke-width="3" stroke-linecap="round" />
  <path d="M26 42 Q30 46 34 42 Q38 38 42 42 Q46 46 50 42 Q54 38 56 42" fill="none" stroke="url(#ss)" stroke-width="3" stroke-linecap="round" />
  <path d="M36 50 Q40 54 44 50" fill="none" stroke="url(#ss)" stroke-width="3" stroke-linecap="round" />
  <path d="M62 26 L64 22 L66 26 L70 28 L66 30 L64 34 L62 30 L58 28 Z" fill="url(#ss)" />
</svg>`,
    title: "Soft Skills",
    branches: [
      "Problem Solving",
      "Debugging",
      "Communication",
      "Teamwork",
      "Agile",
      "Scrum",
      "Code Review",
      "System Design",
      "Time Management",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto max-sm:px-4">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-2xl text-primary">
          <FaUser className="size-5" />
        </div>
        <h2 className="text-foreground font-extrabold text-xl tracking-wide uppercase">
          Skills
        </h2>
      </div>
      <div className="w-full bg-card px-6 md:px-10 rounded-lg">
        <Swiper
          loop
          autoplay={{
            delay: 10000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1020: {
              slidesPerView: 3.8,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 16,
            },
            540: {
              slidesPerView: 1.8,
              spaceBetween: 12,
            },
            320: {
              slidesPerView: 1.2,
              spaceBetween: 8,
              centeredSlides: true,
            },
          }}
          className="w-full"
          modules={[Autoplay]}
        >
          {data?.map((item) => (
            <SwiperSlide className="py-8 flex  min-h-max" key={item?.title}>
              <SkillItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
