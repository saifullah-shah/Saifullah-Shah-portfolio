import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Chatbot from "@/components/chatbot/chatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaifUllah Shah | DevOps & Cloud Engineer",
  description:
    "DevOps & Cloud Engineer with 3 years of experience specializing in AWS, Azure, GCP, CI/CD automation, Docker, and cloud infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}