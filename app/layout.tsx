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
  title: "Your Name | Full Stack JavaScript Developer",

  description: "Full Stack JavaScript Developer Portfolio",
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
