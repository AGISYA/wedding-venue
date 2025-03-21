"use client";

import { Button } from "@/components/ui/button";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

export default function Footer({
  scrollToSection,
  handleWhatsAppClick,
}: FooterProps) {
  const navItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang Kami" },
    { id: "venue", label: "Venue" },
    { id: "fasilitas", label: "Fasilitas" },
    { id: "galeri", label: "Galeri" },
    { id: "video", label: "Video" },
    { id: "paket", label: "Paket & Harga" },
    { id: "faq", label: "FAQ" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <footer className="bg-gray-900 p-7 text-white py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="container max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 bg-rose-500 rounded-full flex items-center justify-center transform rotate-[-10deg]">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-white rounded-full"></span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-serif font-bold text-white">
                  Harmoni
                </span>
                <span className="text-lg sm:text-xl font-light ml-1">
                  Wedding
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              Mewujudkan pernikahan impian Anda dengan venue pernikahan yang
              elegan dan layanan profesional.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Tautan Cepat
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm sm:text-base text-gray-400 hover:text-white flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Kontak
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              {[Phone, Mail, MapPin].map((Icon, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-rose-400 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300">
                    {index === 0
                      ? "+62 812 3456 7890"
                      : index === 1
                      ? "info@harmoniwedding.com"
                      : "Jl. Pernikahan Indah No. 123, Jakarta Selatan"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Jam Operasional
            </h3>
            <ul className="space-y-2 sm:space-y-4 text-center sm:text-left">
              {[
                "Senin - Jumat: 09:00 - 18:00",
                "Sabtu: 09:00 - 16:00",
                "Minggu: 10:00 - 15:00",
              ].map((text, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-400">
                  {text}
                </li>
              ))}
            </ul>
            <div className="flex justify-center sm:justify-start">
              <Button
                onClick={handleWhatsAppClick}
                variant="rose"
                rounded="full"
                className="mt-4 sm:mt-6 gap-2 text-sm sm:text-base"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
