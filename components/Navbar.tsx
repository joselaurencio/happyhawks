"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Team", 
    children: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" }
    ]
  },
  { 
    name: "Engineering", 
    children: [
      { name: "The Robot", href: "/robot" },
      { name: "Performance", href: "/performance" },
      { name: "Portfolio", href: "/portfolio" }
    ]
  },
  { 
    name: "Community", 
    children: [
      { name: "Outreach", href: "/outreach" },
      { name: "Sponsors", href: "/sponsors" },
      { name: "Media", href: "/media" }
    ]
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-white/10 shadow-lg py-3" : "bg-transparent border-transparent py-5"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50 relative">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 border border-white/10 group-hover:scale-105 transition-transform shrink-0">
            <Image src={`${BASE_PATH}/images/logo.jpeg`} alt="Happy Hawks Logo" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">Happy Hawks</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">
                    {item.name} <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-slate-900 border border-white/10 rounded-xl p-2 min-w-[180px] shadow-xl flex flex-col gap-1">
                      {item.children.map(child => (
                        <Link 
                          key={child.name} 
                          href={child.href} 
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === child.href ? 'bg-blue-500/20 text-blue-400' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link href={item.href!} className={`text-sm font-medium transition-colors hover:text-blue-400 py-2 ${pathname === item.href ? "text-blue-500" : "text-slate-300"}`}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 w-full h-screen bg-slate-950/98 backdrop-blur-xl flex flex-col items-center pt-24 gap-6 md:hidden z-40 overflow-y-auto pb-12">
              {navItems.map((item) => (
                <div key={item.name} className="w-full px-8 flex flex-col items-center">
                  {item.children ? (
                    <>
                      <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className="text-2xl font-semibold text-slate-300 flex items-center gap-2">
                        {item.name} <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col items-center gap-4 mt-4 overflow-hidden">
                            {item.children.map(child => (
                              <Link key={child.name} href={child.href} onClick={() => setIsOpen(false)} className={`text-xl font-medium ${pathname === child.href ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href!} onClick={() => setIsOpen(false)} className={`text-2xl font-semibold ${pathname === item.href ? 'text-blue-500' : 'text-slate-300'}`}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
