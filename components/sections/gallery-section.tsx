"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function GallerySection() {
  const galleryItems = [
    {
      image: "/images/SCF9146.jpg",
      colSpan: "col-span-2 row-span-2",
      title: "Venue utama dengan dekorasi elegan",
    },
    {
      image:
        "/images/Snapinst.app_462605593_982548516965677_6597046332804782859_n_1080.jpg",
      title: "Pemandangan luar venue",
    },
    {
      image:
        "/images/Snapinst.app_462751688_526274436824246_9157435802926966555_n_1080.jpg",
      title: "Meja tamu dengan hiasan bunga",
    },
    {
      image:
        "/images/Snapinst.app_361948058_257506600452973_4456514888783293148_n_1080.jpg",
      title: "Dekorasi pernikahan romantis",
    },
    {
      image:
        "/images/Snapinst.app_362206933_257506557119644_5907997017666089862_n_1080.jpg",
      title: "Area makan dengan pencahayaan hangat",
    },
    {
      image:
        "/images/Snapinst.app_361600755_257506467119653_3370119690151620194_n_1080.jpg",
      colSpan: "col-span-2",
      title: "Jalan masuk dengan karpet merah",
    },
    {
      image:
        "/images/Snapinst.app_361553465_257506637119636_3963530394742462174_n_1080.jpg",
      title: "Panggung utama untuk pengantin",
    },
  ];

  return (
    <section
      id="galeri"
      className="py-20 md:py-28 bg-gradient-to-b from-rose-50 to-white"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              Galeri
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Keindahan Venue Kami
          </h2>
          <p className="text-gray-700 text-lg">
            Lihat keindahan venue pernikahan kami melalui galeri foto berikut.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group ${
                item.colSpan || ""
              }`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title ?? "Gambar galeri venue"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Sparkles
                  className={`${
                    item.colSpan ? "h-10 w-10" : "h-8 w-8"
                  } text-white`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-rose-200 bg-red-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700"
          >
            Lihat Lebih Banyak Foto
          </Button>
        </div>
      </div>
    </section>
  );
}
