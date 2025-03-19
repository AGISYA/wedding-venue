"use client";

import { Button } from "@/components/ui/button";

export default function VideoSection() {
  return (
    <section id="video" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              Video
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Momen Pernikahan yang Tak Terlupakan
          </h2>
          <p className="text-gray-700 text-lg">
            Saksikan keindahan dan kemewahan pernikahan di Harmoni Wedding Venue
            melalui video berikut.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
            {/* Embed YouTube Video */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nuIj2uoTxcU?rel=0&modestbranding=1&playsinline=1"
              title="Wedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 text-black bg-rose-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-medium mb-2">
              Ingin Melihat Lebih Banyak Video?
            </h3>
            <p className="text-gray-700 mb-4">
              Kami memiliki koleksi video pernikahan yang telah diselenggarakan
              di venue kami. Hubungi kami untuk melihat lebih banyak inspirasi
              untuk pernikahan Anda.
            </p>
            <Button variant="rose" rounded="full" className="gap-2">
              Lihat Galeri Video Lengkap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
