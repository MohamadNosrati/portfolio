"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import ContactItem from "./ContactItem";
import TelegramImage from "@/public/images/telegram.png";
import WhasappImage from "@/public/images/whatsapp.png";
import GitHubImage from "@/public/images/github.png";
import GmailImage from "@/public/images/gmail.png";
import InstagramImage from "@/public/images/instagram.png";
import LinkedinImage from "@/public/images/linkedin.png";
import PhoneCall from "@/public/images/phone.png";

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
    href: "mailto:mohamadnosratidev@gmail.com", // ✅ Must start with 'mailto:'
    image: GmailImage?.src,
  },
  {
    label: "Telegram",
    value: "@MohamadNosratidev",
    href: "https://t.me/MohamadNosratidev", // ✅ Correct (username is case-sensitive)
    image: TelegramImage?.src,
  },
  {
    label: "LinkedIn",
    value: "In/nosrati",
    href: "https://linkedin.com/in/MohamadNos", // ✅ Fixed: replaced 'yourusername' with 'nosrati'
    image: LinkedinImage?.src,
  },
  {
    label: "GitHub",
    value: "github/nosrati",
    href: "https://github.com/MohamadNosrati", // ✅ Fixed: replaced 'yourusername' with 'nosrati'
    image: GitHubImage?.src,
  },
  {
    label: "Phone",
    value: "+98 9120958305",
    href: "tel:+989120958305", // ✅ Correct (spaces and dashes removed for 'tel:')
    image: PhoneCall?.src,
  },
  {
    label: "Instagram",
    value: "@mnosrati_dev",
    href: "https://instagram.com/mohamad_nst_", // ✅ Fixed: was pointing to Twitter, and removed the '@' from URL
    image: InstagramImage?.src,
  },
  {
    label: "Whatsapp",
    value: "@mnosrati_dev", // Note: WhatsApp uses phone numbers, not usernames, for direct chat
    href: "https://wa.me/989120958305", // ✅ Fixed: removed '+', spaces, and special chars per WhatsApp rules
    image: WhasappImage?.src,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto max-sm:px-4 py-8">
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-4 max-lg:gap-x-4 gap-y-8"
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
