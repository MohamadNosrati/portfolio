import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "../public/globals.css";

const inter = Inter({
  variable: "--font-inter",

  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-mono",

  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),

  title: {
    default: "Mohamad Nosrati | Full Stack JavaScript Developer",
    template: "%s | Mohamad Nosrati",
  },

  description:
    "Experienced Full Stack JavaScript Developer specializing in React, Next.js, Node.js, TypeScript, MongoDB, and React Native. Explore my projects, skills, and professional experience.",

  keywords: [
    "Mohamad Nosrati",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Mohamad Nosrati",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
  ],

  creator: "Mohamad Nosrati",
  publisher: "Mohamad Nosrati",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mohamad Nosrati Portfolio",
    title: "Mohamad Nosrati | Full Stack JavaScript Developer",
    description:
      "Full Stack JavaScript Developer specializing in React, Next.js, Node.js, TypeScript, MongoDB, and React Native.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamad Nosrati Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",

  applicationName: "Mohamad Nosrati Portfolio",

  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
            ${inter.variable}
            ${jetBrains.variable}
            antialiased
                  `}
      >
        {children}
      </body>
    </html>
  );
}
