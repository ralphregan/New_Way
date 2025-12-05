import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { NeueWegeLogo } from "./NeueWegeLogo";

export function AgencyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 rounded-2xl shadow-md shadow-emerald-200 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <NeueWegeLogo className="w-12 h-12" />
            <div>
              <span className="block text-2xl font-bold tracking-tight text-[#3B9B8E]">
                NEUE WEGE
              </span>
              <span className="font-medium block text-xs text-gray-500 -mt-1">Digital Marketing</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="font-medium hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#3B9B8E] transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#3B9B8E] transition-colors">
              Services
            </a>
            <a href="#work" className="text-gray-700 hover:text-[#3B9B8E] transition-colors">
              Our Work
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#3B9B8E] transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#3B9B8E] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-[#3B9B8E] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-[#3B9B8E] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#work"
              className="block text-gray-700 hover:text-[#3B9B8E] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-[#3B9B8E] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-[#3B9B8E] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}