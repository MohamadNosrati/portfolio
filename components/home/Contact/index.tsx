"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import ContactItem from "./ContactItem";
import TelegramImage from "@/public/images/telegram.png";
import WhasappImage from "@/public/images/whatsapp.png";
import GitHubImage from "@/public/images/github.png";
import LinkedineImage from "@/public/images/linkedin.png";
import GmailImage from "@/public/images/gmail.png";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const contactData = [
    {
      label: "Email",
      value: "mohamadnosratidev@gmail.com",
      href: "mohamadnosratidev@gmail.com",
      image: GmailImage?.src,
    },
    {
      label: "Telegram",
      value: "@MohamadNosratidev",
      href: "https://t.me/MohamadNosratidev",
      image: TelegramImage?.src,
    },
    {
      label: "LinkedIn",
      value: "In/nosrati",
      href: "https://linkedin.com/in/yourusername",
      image: LinkedineImage?.src,
    },
    {
      label: "GitHub",
      value: "github/nosrati",
      href: "https://github.com/yourusername",
      image: GitHubImage?.src,
    },
    {
      label: "Phone",
      value: "+98 912 3456",
      href: "tel:+989123456789",
      image: GitHubImage?.src,
    },
    {
      label: "Twitter",
      value: "@mnosrati_dev",
      href: "https://twitter.com/yourusername",
      image: WhasappImage?.src,
    },
  ];

  return (
    <section id="contacts" className="container mx-auto max-sm:px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <FaPaperPlane className="size-5" />
        </div>
        <h2 className="text-foreground font-extrabold text-xl tracking-wide uppercase">
          Connect With Me
        </h2>
      </div>

      {/* Grid: 6 columns on lg screen sizes (1/6 width each) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 max-lg:gap-x-4 gap-y-8"
      >
        {contactData.map((contact, index) => (
          <ContactItem
            key={index}
            label={contact.label}
            value={contact.value}
            href={contact.href}
            image={contact.image}
          />
        ))}
      </motion.div>
    </section>
  );
}
