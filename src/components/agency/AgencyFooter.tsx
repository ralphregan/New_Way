import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { NeueWegeLogo } from "./NeueWegeLogo";

export function AgencyFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <NeueWegeLogo className="w-10 h-10" />
              <div>
                <span className="block text-xl tracking-tight text-[#5EBEAF]">
                  NEUE WEGE
                </span>
                <span className="block text-xs text-gray-400 -mt-1">Digital Marketing</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Innovative digital marketing solutions that drive real results for your business.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#5EBEAF] hover:to-[#3B9B8E] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#5EBEAF] hover:to-[#3B9B8E] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#5EBEAF] hover:to-[#3B9B8E] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#5EBEAF] hover:to-[#3B9B8E] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Growth Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 neue wege Digital Marketing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5EBEAF] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}