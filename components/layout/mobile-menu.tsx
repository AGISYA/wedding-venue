"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

export default function MobileMenu({
  activeSection,
  scrollToSection,
  handleWhatsAppClick,
}: MobileMenuProps) {
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
    <div className="fixed inset-0 z-30 bg-white pt-20 pb-6 px-4 sm:px-6 md:hidden flex flex-col">
      <nav className="flex flex-col gap-3 sm:gap-4 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-base sm:text-lg font-medium p-3 rounded-lg transition-colors ${
              activeSection === item.id
                ? "bg-rose-50 text-rose-600"
                : "text-gray-900 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-4">
        <Button
          onClick={handleWhatsAppClick}
          variant="green"
          rounded="full"
          className="w-full gap-2 py-4 sm:py-6 text-base sm:text-lg"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
          Hubungi Kami via WhatsApp
        </Button>
      </div>
    </div>
  );
}
