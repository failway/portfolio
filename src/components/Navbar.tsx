"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300); 
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 will-change-[padding,background-color] ${
      isScrolled 
        ? "py-4 bg-slate-950/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.1)]" 
        : "py-6 bg-transparent"
    }`}
    style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition">
          DEV<span className="text-blue-500">.</span>FAILWAY
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-white transition cursor-pointer">
            Обо мне
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="hover:text-white transition cursor-pointer">
            Проекты
          </a>
          <a href="#contacts" onClick={(e) => scrollToSection(e, "contacts")} className="hover:text-white transition cursor-pointer">
            Контакты
          </a>
          
          <a 
            href="https://github.com/failway" 
            target="_blank"
            className="px-5 py-2 glass hover:bg-white/10 transition rounded-full text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}