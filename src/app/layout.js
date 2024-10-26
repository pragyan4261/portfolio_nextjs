import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from '@/components/About';
// import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'
// import { Meteors } from "@/components/ui/meteors";
// import { Globe } from "@/components/ui/globe";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        <About />
        <div>
        <Projects />

        </div>

        <div className="w-full h-[40rem] bg-transparent">
        <Contact />
        </div>
        {children}
      </body>
    </html>
  );
}
