"use client";

import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  handleWhatsAppClick: () => void;
}

export default function WhatsAppButton({
  handleWhatsAppClick,
}: WhatsAppButtonProps) {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </button>
  );
}
