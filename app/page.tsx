"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileMenu from "@/components/layout/mobile-menu";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import VenueDetailsSection from "@/components/sections/venue-details-section";
import FeaturesSection from "@/components/sections/features-section";
import GallerySection from "@/components/sections/gallery-section";
import VideoSection from "@/components/sections/video-section";
import PricingSection from "@/components/sections/pricing-section";
import FAQSection from "@/components/sections/faq-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import CTASection from "@/components/sections/cta-section";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function WeddingVenueLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = [
        "beranda",
        "tentang",
        "venue",
        "fasilitas",
        "galeri",
        "video",
        "paket",
        "faq",
        "kontak",
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // WhatsApp handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890"; // Replace with your actual WhatsApp number
    const message =
      "Halo, saya tertarik untuk menyewa tempat pernikahan Anda. Bisakah Anda memberikan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Scroll to section smoothly - Menambahkan anotasi tipe untuk sectionId
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf5]">
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        handleWhatsAppClick={handleWhatsAppClick}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      {mobileMenuOpen && (
        <MobileMenu
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          handleWhatsAppClick={handleWhatsAppClick}
        />
      )}

      <main className="flex-1 pt-16">
        <HeroSection
          scrollToSection={scrollToSection}
          handleWhatsAppClick={handleWhatsAppClick}
        />
        <AboutSection scrollToSection={scrollToSection} />
        <VenueDetailsSection handleWhatsAppClick={handleWhatsAppClick} />
        <FeaturesSection />
        <GallerySection />
        <VideoSection />
        <PricingSection handleWhatsAppClick={handleWhatsAppClick} />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection handleWhatsAppClick={handleWhatsAppClick} />
        <CTASection handleWhatsAppClick={handleWhatsAppClick} />
      </main>

      <Footer
        scrollToSection={scrollToSection}
        handleWhatsAppClick={handleWhatsAppClick}
      />

      <WhatsAppButton handleWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
}
