"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Berapa kapasitas maksimal venue?",
      answer:
        "Harmoni Wedding Venue dapat menampung hingga 500 tamu untuk acara indoor di Grand Ballroom kami, dan hingga 300 tamu untuk acara outdoor di Garden Pavilion. Kami juga memiliki ruangan yang lebih kecil seperti Crystal Hall yang dapat menampung hingga 200 tamu untuk acara yang lebih intim.",
    },
    {
      question: "Apakah venue tersedia untuk acara selain pernikahan?",
      answer:
        "Ya, selain pernikahan, Harmoni Wedding Venue juga dapat digunakan untuk berbagai acara seperti pertunangan, ulang tahun, gathering perusahaan, dan acara formal lainnya. Kami memiliki paket khusus untuk acara non-pernikahan yang dapat disesuaikan dengan kebutuhan Anda.",
    },
    {
      question: "Bagaimana dengan parkir untuk tamu?",
      answer:
        "Kami memiliki area parkir yang luas yang dapat menampung hingga 200 kendaraan. Untuk acara dengan jumlah tamu yang lebih banyak, kami menyediakan layanan valet parking dan shuttle bus dari lokasi parkir tambahan yang berjarak sekitar 500 meter dari venue.",
    },
    {
      question: "Apakah boleh membawa vendor dari luar?",
      answer:
        "Ya, Anda diperbolehkan membawa vendor dari luar seperti fotografer, videografer, atau wedding organizer. Namun, untuk katering, kami memiliki kebijakan eksklusif dengan beberapa vendor katering terpilih untuk menjaga kualitas makanan dan layanan. Kami akan memberikan daftar vendor katering yang dapat Anda pilih.",
    },
    {
      question: "Berapa lama waktu sewa venue?",
      answer:
        "Waktu sewa venue bervariasi tergantung paket yang Anda pilih. Paket Silver menyediakan waktu sewa selama 8 jam, Paket Gold selama 12 jam, dan Paket Platinum selama 24 jam. Waktu tambahan dapat dinegosiasikan dengan biaya tambahan per jam.",
    },
    {
      question: "Apakah ada deposit yang harus dibayarkan?",
      answer:
        "Ya, untuk mengamankan tanggal pernikahan Anda, kami memerlukan deposit sebesar 50% dari total biaya paket. Deposit ini tidak dapat dikembalikan tetapi dapat dialihkan ke tanggal lain jika ada perubahan jadwal yang diinformasikan minimal 6 bulan sebelum tanggal acara yang telah ditetapkan.",
    },
    {
      question: "Apakah ada akomodasi untuk pengantin dan keluarga?",
      answer:
        "Ya, kami memiliki 5 villa mewah yang dapat digunakan untuk penginapan keluarga atau tamu VIP. Setiap villa dilengkapi dengan 2 kamar tidur, ruang tamu, dan fasilitas modern. Untuk Paket Platinum, akomodasi untuk pengantin sudah termasuk dalam paket.",
    },
    {
      question: "Bagaimana dengan pembatalan atau penundaan acara?",
      answer:
        "Kebijakan pembatalan kami adalah sebagai berikut: pembatalan 6 bulan atau lebih sebelum acara akan dikenakan biaya 25% dari deposit, pembatalan 3-6 bulan sebelum acara akan dikenakan biaya 50% dari deposit, dan pembatalan kurang dari 3 bulan sebelum acara akan dikenakan biaya 100% dari deposit. Untuk penundaan acara, kami akan berusaha mengakomodasi tanggal baru berdasarkan ketersediaan.",
    },
    {
      question: "Apakah ada batasan waktu untuk musik atau kebisingan?",
      answer:
        "Untuk acara indoor di Grand Ballroom, tidak ada batasan waktu untuk musik. Namun, untuk acara outdoor, musik harus diakhiri pada pukul 23.00 untuk menghormati lingkungan sekitar. Volume musik juga harus dijaga pada level yang wajar setelah pukul 22.00.",
    },
    {
      question: "Bagaimana dengan dekorasi venue?",
      answer:
        "Kami menyediakan dekorasi dasar yang termasuk dalam setiap paket, tetapi Anda juga dapat membawa dekorator sendiri atau menggunakan layanan dekorasi premium kami dengan biaya tambahan. Semua dekorasi harus dipasang dan dibongkar dalam waktu sewa venue yang telah ditentukan.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              FAQ
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-800 text-lg">
            Temukan jawaban untuk pertanyaan umum tentang venue pernikahan kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-800">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-800 mb-2">
            Masih punya pertanyaan lain? Jangan ragu untuk menghubungi kami.
          </p>
          <p className="text-rose-600 font-medium">
            info@harmoniwedding.com | +62 812 3456 7890
          </p>
        </div>
      </div>
    </section>
  );
}
