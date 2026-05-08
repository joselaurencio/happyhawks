import Link from "next/link";
import { Code, Camera, Video, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 mt-auto pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Happy Hawks</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              FTC Team #24813. Innovating through robotics, outreach, and STEM leadership. 
              Inspiring the next generation of engineers.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/shcarobotics/" target="_blank" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-colors">
                <Camera className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/HappyHawks" target="_blank" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-colors">
                <Code className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/robot" className="hover:text-blue-500 transition-colors">Our Robot</Link></li>
              <li><Link href="/outreach" className="hover:text-blue-500 transition-colors">Outreach</Link></li>
              <li><Link href="/sponsors" className="hover:text-blue-500 transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:shca.robotics@scenichillsschool.org" className="hover:text-blue-500 transition-colors">shca.robotics@scenichillsschool.org</a>
              </li>
              <li>San Antonio, TX</li>
              <li>Scenic Hills Christian Academy</li>
              <li className="pt-2">
                <a href="https://www.gofundme.com/f/help-shca-happy-hawks-compete-in-florida?attribution_id=sl%3A1f81f589-f0c7-4d9c-9ad1-8fe1b60b1b1f&lang=en_US" target="_blank" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Support us on GoFundMe</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Happy Hawks FTC #24813. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
