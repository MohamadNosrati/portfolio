"use client";

import { motion, Variants } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkillItem from "./SkillItem";
import "swiper/css";

export default function Skills() {
  // Animation variants for the parent container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays the next card's animation slightly
      },
    },
  };

  // Animation variants for individual cards

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
            delay: 1500,
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
          className="w-full h-full"
          modules={[Autoplay]}
        >
          {[1, 2, 3, 4, 5]?.map((item) => (
            <SwiperSlide className="py-8" key={item}>
              <SkillItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
