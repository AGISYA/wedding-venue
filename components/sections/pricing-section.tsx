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
      <div className="container">
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

        {/* Perbaikan responsif untuk pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  className={`w-full gap-2 group ${
                    plan.popular
                      ? ""
                      : "border-rose-200 text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  Pesan Sekarang
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-6 text-center text-gray-900">
            Pertanyaan Umum tentang Paket
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2 text-gray-900">
                Apakah paket dapat disesuaikan?
              </h4>
              <p className="text-gray-800 text-sm sm:text-base">
                Ya, semua paket dapat disesuaikan dengan kebutuhan spesifik
                Anda. Kami memahami bahwa setiap pernikahan unik, jadi kami
                menawarkan fleksibilitas dalam menyesuaikan layanan.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-gray-900">
                Bagaimana dengan pembayaran?
              </h4>
              <p className="text-gray-800 text-sm sm:text-base">
                Kami menerima pembayaran dalam beberapa tahap. Biasanya, 50%
                dibayarkan sebagai deposit untuk mengamankan tanggal, dan
                sisanya dibayarkan satu bulan sebelum hari pernikahan.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-gray-900">
                Apakah ada biaya tambahan?
              </h4>
              <p className="text-gray-800 text-sm sm:text-base">
                Semua biaya sudah termasuk dalam paket yang dipilih. Namun, jika
                Anda meminta layanan tambahan di luar paket, mungkin ada biaya
                tambahan yang akan diinformasikan sebelumnya.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              onClick={handleWhatsAppClick}
              variant="green"
              rounded="full"
              className="gap-2"
            >
              Tanyakan Lebih Lanjut via WhatsApp
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
