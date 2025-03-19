"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Utensils,
  Music,
  Camera,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-rose-600" />,
      title: "Kapasitas Besar",
      description:
        "Dapat menampung hingga 500 tamu dengan konfigurasi tempat duduk yang fleksibel untuk berbagai jenis acara pernikahan.",
    },
    {
      icon: <Utensils className="h-6 w-6 text-rose-600" />,
      title: "Katering Premium",
      description:
        "Layanan katering dengan menu internasional dan lokal yang dapat disesuaikan dengan preferensi kuliner Anda dan tamu undangan.",
    },
    {
      icon: <Music className="h-6 w-6 text-rose-600" />,
      title: "Sistem Audio",
      description:
        "Sistem audio dan pencahayaan modern dengan teknologi terkini untuk menciptakan suasana yang sempurna sesuai tema pernikahan Anda.",
    },
    {
      icon: <Camera className="h-6 w-6 text-rose-600" />,
      title: "Area Fotografi",
      description:
        "Berbagai spot fotografi indah baik di dalam maupun di luar ruangan yang dirancang khusus untuk mengabadikan momen spesial Anda.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-rose-600" />,
      title: "Paket All-in-One",
      description:
        "Paket pernikahan lengkap termasuk dekorasi, katering, dan dokumentasi yang dapat disesuaikan dengan budget dan kebutuhan Anda.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-rose-600" />,
      title: "Lokasi Strategis",
      description:
        "Mudah diakses dari pusat kota dengan area parkir luas dan layanan valet untuk kenyamanan tamu undangan Anda.",
    },
  ];

  const additionalServices = [
    {
      title: "Wedding Planner",
      description:
        "Tim wedding planner berpengalaman yang akan membantu Anda merencanakan pernikahan dari awal hingga akhir.",
    },
    {
      title: "Dekorasi Kustom",
      description:
        "Layanan dekorasi yang dapat disesuaikan dengan tema dan warna pernikahan Anda, termasuk bunga segar dan pencahayaan khusus.",
    },
    {
      title: "Hiburan Live",
      description:
        "Berbagai pilihan hiburan mulai dari band live, DJ, penari tradisional, hingga pertunjukan kembang api.",
    },
    {
      title: "Transportasi",
      description:
        "Layanan transportasi mewah untuk pengantin dan keluarga, termasuk limousine dan mobil antik.",
    },
  ];

  return (
    <section id="fasilitas" className="py-16 sm:py-20 md:py-28 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              Fasilitas
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-gray-900">
            Fasilitas Lengkap untuk Pernikahan Sempurna
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Kami menyediakan berbagai fasilitas premium untuk memastikan
            pernikahan Anda berjalan lancar dan berkesan.
          </p>
        </div>

        {/* Grid Fasilitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="group hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="bg-rose-100 p-4 rounded-2xl w-fit group-hover:bg-rose-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Layanan Tambahan */}
        <div className="mt-12 md:mt-16 bg-rose-50 rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-gray-900">
                Layanan Tambahan
              </h3>
              <p className="text-gray-700 mb-6">
                Selain fasilitas standar, kami juga menawarkan berbagai layanan
                tambahan untuk membuat pernikahan Anda lebih spesial:
              </p>
              <div className="space-y-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {service.title}
                      </h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/LeuwiAsri-photo-half-5.jpg"
                alt="Layanan Tambahan"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
