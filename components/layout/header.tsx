"use client";

import { Button } from "@/components/ui/button";
import { Heart, Phone, Menu, X } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  mobileMenuOpen: boolean;
}

export default function Header({
  isScrolled,
  activeSection,
  scrollToSection,
  handleWhatsAppClick,
  setMobileMenuOpen,
  mobileMenuOpen,
}: HeaderProps) {
  const navItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "venue", label: "Venue" },
    { id: "fasilitas", label: "Fasilitas" },
    { id: "galeri", label: "Galeri" },
    { id: "video", label: "Video" },
    { id: "paket", label: "Paket" },
    { id: "faq", label: "FAQ" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mx-4 md:mx-6 lg:mx-8 gap-2">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 bg-rose-500 rounded-full flex items-center justify-center transform rotate-[-10deg] hover:rotate-0 transition-all duration-300">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-white rounded-full"></span>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-serif font-bold text-rose-800">
              Harmoni
            </span>
            <span className="text-lg sm:text-xl font-light ml-1 text-gray-900">
              Wedding
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex gap-4 lg:gap-6 px-2 flex-wrap justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs lg:text-sm font-medium relative px-1 py-2 transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-rose-600"
                    : "text-gray-900 hover:text-rose-600"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Tombol WhatsApp */}
        <Button
          onClick={handleWhatsAppClick}
          variant="green"
          rounded="full"
          className="hidden md:flex gap-2 px-4 lg:px-6 text-xs mx-4 lg:text-sm"
        >
          <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
          <span className="xs-hidden">Hubungi Kami</span>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
}
