"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

export default function HeroSection({
  scrollToSection,
  handleWhatsAppClick,
}: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/LeuwiAsri-photo-full-2.jpg"
          alt="Wedding Venue"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[10%] left-[5%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-white/20 rounded-full hidden sm:block"></div>
      <div className="absolute bottom-[10%] right-[5%] w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border-2 border-white/20 rounded-full hidden sm:block"></div>
      <div className="absolute top-[35%] right-[20%] w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white/20 rounded-full hidden sm:block"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-white">
          <div className="flex justify-center items-center gap-2">
            <div className="h-px w-6 sm:w-10 bg-rose-400"></div>
            <span className="text-rose-300 uppercase tracking-wider text-xs sm:text-sm font-medium">
              Tempat Pernikahan Eksklusif
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight">
            Wujudkan Pernikahan <span className="text-rose-300">Impian</span>{" "}
            Anda
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Harmoni Wedding Venue menawarkan tempat pernikahan yang indah dan
            elegan untuk momen spesial Anda dengan layanan premium dan suasana
            yang tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 sm:pt-4">
            <Button
              onClick={handleWhatsAppClick}
              variant="rose"
              rounded="full"
              size="lg"
              className="gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base group"
            >
              Pesan Sekarang
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              rounded="full"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
              onClick={() => scrollToSection("venue")}
            >
              Lihat Venue
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-bounce hidden sm:flex">
        <span className="text-sm mb-2">Scroll</span>
        <div className="h-10 w-6 border-2 border-white/50 rounded-full flex justify-center">
          <div className="h-2 w-2 bg-white rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
