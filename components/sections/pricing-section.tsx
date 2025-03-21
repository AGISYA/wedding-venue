"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  handleWhatsAppClick: () => void;
}

export default function PricingSection({
  handleWhatsAppClick,
}: PricingSectionProps) {
  const pricingPlans = [
    {
      name: "Paket Silver",
      price: "Rp 75.000.000",
      description: "Paket dasar untuk pernikahan dengan jumlah tamu terbatas.",
      features: [
        "Venue selama 8 jam",
        "Kapasitas hingga 200 tamu",
        "Dekorasi standar",
        "Katering untuk 200 orang",
        "Sound system dasar",
        "Meja registrasi & seserahan",
        "Ruang rias pengantin",
        "Free parking",
      ],
      popular: false,
    },
    {
      name: "Paket Gold",
      price: "Rp 125.000.000",
      description: "Paket populer untuk pernikahan dengan layanan lengkap.",
      features: [
        "Venue selama 12 jam",
        "Kapasitas hingga 350 tamu",
        "Dekorasi premium",
        "Katering untuk 350 orang",
        "Sound system & lighting",
        "Meja registrasi & seserahan",
        "Ruang rias pengantin VIP",
        "Free parking & valet",
        "MC profesional",
        "Live music (akustik)",
        "Dokumentasi foto",
      ],
      popular: true,
    },
    {
      name: "Paket Platinum",
      price: "Rp 200.000.000",
      description:
        "Paket mewah untuk pernikahan eksklusif dengan layanan premium.",
      features: [
        "Venue selama 24 jam",
        "Kapasitas hingga 500 tamu",
        "Dekorasi eksklusif",
        "Katering premium untuk 500 orang",
        "Sound system & lighting premium",
        "Meja registrasi & seserahan",
        "Ruang rias pengantin VVIP",
        "Free parking & valet",
        "MC profesional",
        "Live music (full band)",
        "Dokumentasi foto & video",
        "Wedding organizer",
        "Akomodasi pengantin",
        "Honeymoon suite",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="paket"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              Paket & Harga
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Pilihan Paket Pernikahan
          </h2>
          <p className="text-gray-800 text-lg">
            Kami menawarkan berbagai paket pernikahan yang dapat disesuaikan
            dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-rose-500 md:scale-105 z-10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULER
                  </div>
                </div>
              )}
              <CardHeader className="pb-0">
                <CardTitle className="text-xl sm:text-2xl font-serif text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-800">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleWhatsAppClick}
                  variant={plan.popular ? "rose" : "outline"}
                  rounded="full"
                  className="w-full gap-2 group"
                >
                  Pesan Sekarang
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
