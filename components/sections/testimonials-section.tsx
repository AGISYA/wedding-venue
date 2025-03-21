"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const featuredTestimonial = {
    name: "Citra & Danu",
    role: "Pengantin VIP",
    date: "Mei 2023",
    image: "/images/SCF9146.jpg",
    rating: 5,
    text: "Kami mencari venue pernikahan selama berbulan-bulan dan akhirnya menemukan Harmoni Wedding Venue. Dari awal kunjungan pertama, kami langsung jatuh cinta dengan keindahan tempat ini. Tim Harmoni sangat profesional dan memperhatikan setiap detail kecil yang kami inginkan. Mereka bahkan mengakomodasi beberapa permintaan khusus kami yang cukup rumit. Pada hari pernikahan, semuanya berjalan sempurna tanpa hambatan. Dekorasi yang mereka siapkan bahkan lebih indah dari yang kami bayangkan. Makanan yang disajikan mendapat pujian dari semua tamu. Kami sangat merekomendasikan Harmoni Wedding Venue untuk pasangan yang mencari tempat pernikahan impian dengan layanan premium.",
  };

  const testimonials = [
    {
      name: "Anita & Budi",
      date: "Juni 2023",
      image: "/placeholder.svg?height=100&width=100&text=A&B",
      rating: 5,
      text: "Kami sangat puas dengan layanan Harmoni Wedding Venue. Tempat yang indah, staf yang profesional, dan makanan yang lezat membuat hari pernikahan kami benar-benar sempurna. Semua tamu kami memuji keindahan venue dan kelancaran acara.",
    },
    {
      name: "Diana & Eko",
      date: "Agustus 2023",
      image: "/placeholder.svg?height=100&width=100&text=D&E",
      rating: 5,
      text: "Harmoni Wedding Venue melebihi ekspektasi kami! Dekorasi yang cantik, layanan yang ramah, dan suasana yang romantis membuat pernikahan kami terasa seperti dongeng. Tim mereka sangat membantu dari awal perencanaan hingga hari H.",
    },
    {
      name: "Fira & Gilang",
      date: "Oktober 2023",
      image: "/placeholder.svg?height=100&width=100&text=F&G",
      rating: 5,
      text: "Memilih Harmoni Wedding Venue adalah keputusan terbaik kami. Mereka sangat fleksibel dengan permintaan khusus kami dan memberikan solusi untuk setiap masalah. Garden Pavilion mereka luar biasa indah untuk upacara outdoor kami.",
    },
    {
      name: "Hana & Irfan",
      date: "Desember 2023",
      image: "/placeholder.svg?height=100&width=100&text=H&I",
      rating: 4,
      text: "Grand Ballroom Harmoni sangat megah dan sempurna untuk resepsi indoor kami. Pencahayaan dan sound system sangat bagus. Satu-satunya masalah kecil adalah parkir yang agak terbatas, tapi mereka menyediakan valet yang sangat membantu.",
    },
    {
      name: "Jessica & Kevin",
      date: "Februari 2024",
      image: "/placeholder.svg?height=100&width=100&text=J&K",
      rating: 5,
      text: "Kami mengadakan pernikahan intimate di Crystal Hall dan hasilnya luar biasa. Pemandangan taman dari dinding kaca memberikan latar belakang yang sempurna. Koordinator acara mereka sangat detail dan memastikan semuanya berjalan lancar.",
    },
    {
      name: "Laras & Miko",
      date: "April 2024",
      image: "/placeholder.svg?height=100&width=100&text=L&M",
      rating: 5,
      text: "Paket Platinum yang kami pilih sangat worth it! Semua layanan all-in-one membuat perencanaan pernikahan jauh lebih mudah. Honeymoon suite yang disediakan juga sangat mewah dan nyaman. Terima kasih Harmoni Wedding Venue!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-b from-rose-50 to-white"
    >
      <div className="container max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Apa Kata Mereka Tentang Kami
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-none shadow-xl bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 bg-rose-100 p-6 md:p-8 flex flex-col items-center justify-center">
                  <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={featuredTestimonial.image || "/placeholder.svg"}
                      alt={featuredTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900">
                    {featuredTestimonial.name}
                  </h3>
                  <p className="text-rose-600 text-sm mb-2">
                    {featuredTestimonial.role}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    {featuredTestimonial.date}
                  </p>
                  <div className="flex">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <Quote className="h-10 w-10 text-rose-200 mb-4" />
                  <p className="text-gray-800 italic mb-6">
                    {featuredTestimonial.text}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{testimonial.date}</p>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-800 text-sm">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
