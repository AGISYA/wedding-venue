"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, MapPin, ArrowRight, Star } from "lucide-react";

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function AboutSection({ scrollToSection }: AboutSectionProps) {
  return (
    <section id="tentang" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container max-w-screen-xl px-6 sm:px-8 lg:px-12 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Gambar */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-rose-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-rose-100 rounded-full -z-10"></div>
            <Image
              src="/images/Leuwi-Asri-Kopi-dan-Resto-infogarut.id_-1080x675.jpg"
              alt="Venue Interior"
              width={800}
              height={600}
              className="rounded-xl sm:rounded-2xl shadow-xl object-cover relative z-10 w-full"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white p-2 sm:p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-1 sm:gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-base font-medium mt-1 text-gray-900">
                Lebih dari 200+ pasangan bahagia
              </p>
            </div>
          </div>

          {/* Teks */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-px w-6 sm:w-10 bg-rose-400"></div>
              <span className="text-rose-600 uppercase tracking-wider text-xs sm:text-sm font-medium">
                Tentang Kami
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900">
              Tempat Pernikahan Elegan untuk Momen Tak Terlupakan
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              Harmoni Wedding Venue adalah tempat pernikahan premium yang
              dirancang khusus untuk memberikan pengalaman pernikahan yang tak
              terlupakan. Didirikan pada tahun 2015, venue kami telah menjadi
              pilihan utama bagi pasangan yang menginginkan pernikahan elegan
              dengan sentuhan alam yang asri.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              Dengan luas area mencapai 5.000 m², venue kami menawarkan berbagai
              pilihan ruang untuk upacara dan resepsi pernikahan. Arsitektur
              bergaya kontemporer dengan sentuhan klasik menciptakan suasana
              mewah namun tetap hangat dan mengundang.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base text-gray-900">
                    Kapasitas
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Hingga 500 tamu
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base text-gray-900">
                    Lokasi
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Jakarta Selatan
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection("venue")}
              variant="rose"
              rounded="full"
              className="gap-2 px-6 sm:px-8 mt-2 sm:mt-4 text-sm sm:text-base group w-full md:w-auto"
            >
              Jelajahi Venue
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <HistoryTimeline />
      </div>
    </section>
  );
}

function HistoryTimeline() {
  const timelineItems = [
    {
      year: "2015",
      title: "Awal Mula",
      description:
        "Harmoni Wedding Venue didirikan oleh pasangan Budi dan Rina Santoso yang bermimpi menciptakan tempat pernikahan yang menggabungkan keindahan alam dengan kemewahan arsitektur modern. Dibangun di atas lahan keluarga seluas 5.000 m², venue ini awalnya hanya memiliki satu ballroom utama dan taman kecil.",
    },
    {
      year: "2018",
      title: "Ekspansi Pertama",
      description:
        "Setelah mendapatkan popularitas, Harmoni melakukan ekspansi besar dengan menambahkan taman yang lebih luas, gazebo untuk upacara outdoor, dan kolam air mancur yang menjadi ikon venue ini. Pada tahun ini juga, Harmoni mulai menawarkan layanan all-in-one yang mencakup dekorasi, katering, dan dokumentasi.",
    },
    {
      year: "2020",
      title: "Renovasi & Inovasi",
      description:
        "Meskipun menghadapi tantangan pandemi, Harmoni memanfaatkan waktu untuk melakukan renovasi besar-besaran. Ballroom utama diperluas, sistem pencahayaan dan audio diperbarui dengan teknologi terkini, dan ditambahkan ruang persiapan mewah untuk pengantin.",
    },
    {
      year: "2023",
      title: "Harmoni Saat Ini",
      description:
        "Saat ini, Harmoni Wedding Venue telah menjadi salah satu destinasi pernikahan paling prestisius di Jakarta dengan lebih dari 200 pernikahan sukses setiap tahunnya. Venue ini terus berinovasi dengan menambahkan layanan virtual tour, opsi pernikahan berkelanjutan (eco-friendly), dan kolaborasi dengan desainer pernikahan ternama.",
    },
  ];

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 bg-rose-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="h-px w-6 sm:w-10 bg-rose-400"></div>
          <span className="text-rose-600 uppercase tracking-wider text-xs sm:text-sm font-medium">
            Sejarah & Cerita
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 text-gray-900">
          Perjalanan Harmoni Wedding Venue
        </h3>

        <div className="space-y-6 sm:space-y-8">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 sm:gap-6"
            >
              <div className="md:w-1/4 flex flex-col items-center md:items-start">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-rose-200 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm sm:text-base text-gray-900">
                    {item.year}
                  </span>
                </div>
                {index < timelineItems.length - 1 && (
                  <div className="h-full w-0.5 bg-rose-200 hidden md:block"></div>
                )}
              </div>
              <div className="md:w-3/4">
                <h4 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-800">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
