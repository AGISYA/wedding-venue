"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  handleWhatsAppClick: () => void;
}

export default function CTASection({ handleWhatsAppClick }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-rose-600 relative overflow-hidden flex justify-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500 rounded-full opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container max-w-screen-lg px-6 relative z-10 text-center text-white">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Wujudkan Pernikahan Impian Anda di Harmoni Wedding Venue
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-rose-100">
            Jadwalkan kunjungan atau konsultasi dengan tim kami untuk memulai
            perencanaan hari spesial Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={handleWhatsAppClick}
              variant="white"
              rounded="full"
              size="lg"
              className="gap-2 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg text-rose-600 hover:bg-rose-50 group"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              rounded="full"
              size="lg"
              className="border-white text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
            >
              Lihat Katalog Lengkap
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
          {[
            { value: "500+", label: "Pernikahan Sukses" },
            { value: "5.000m²", label: "Luas Area" },
            { value: "9", label: "Tahun Pengalaman" },
            { value: "4.9/5", label: "Rating Kepuasan" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-rose-100">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
