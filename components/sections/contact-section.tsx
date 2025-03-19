"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface ContactSectionProps {
  handleWhatsAppClick: () => void;
}

export default function ContactSection({
  handleWhatsAppClick,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              Kontak
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Hubungi Kami
          </h2>
          <p className="text-gray-800 text-lg">
            Jadwalkan kunjungan atau tanyakan informasi lebih lanjut tentang
            venue pernikahan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="bg-rose-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                  <MapPin className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-900">Alamat</h4>
                  <p className="text-gray-800 text-sm">
                    Jl. Pernikahan Indah No. 123, Jakarta Selatan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                  <Phone className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-900">Telepon</h4>
                  <p className="text-gray-800 text-sm">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                  <Mail className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-900">Email</h4>
                  <p className="text-gray-800 text-sm">
                    info@harmoniwedding.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                  <Clock className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-900">
                    Jam Operasional
                  </h4>
                  <p className="text-gray-800 text-sm">
                    Senin - Jumat: 09:00 - 18:00
                  </p>
                  <p className="text-gray-800 text-sm">Sabtu: 09:00 - 16:00</p>
                  <p className="text-gray-800 text-sm">Minggu: 10:00 - 15:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                  <Calendar className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-900">
                    Kunjungan Venue
                  </h4>
                  <p className="text-gray-800 text-sm">
                    Kunjungan venue harus dijadwalkan terlebih dahulu. Silakan
                    hubungi kami untuk membuat janji.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={handleWhatsAppClick}
                variant="green"
                rounded="full"
                className="w-full gap-2"
              >
                <Phone className="h-4 w-4" />
                Hubungi via WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              Kirim Pesan
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-medium text-green-800 mb-1">
                  Pesan Terkirim!
                </h4>
                <p className="text-green-700 text-sm">
                  Terima kasih telah menghubungi kami. Tim kami akan segera
                  menghubungi Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-gray-900"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                    className="text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray-900"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="text-gray-900"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1 text-gray-900"
                    >
                      Nomor Telepon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 8xx xxxx xxxx"
                      required
                      className="text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium mb-1 text-gray-900"
                  >
                    Tanggal Pernikahan (Opsional)
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="text-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-gray-900"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    rows={4}
                    required
                    className="text-gray-900"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 md:h-96">
            {/* Google Maps embed dengan width 100% */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29279019244!2d106.7588675!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1656555883123!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmoni Wedding Venue Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
