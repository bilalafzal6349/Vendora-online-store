import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in your products. Can you help me with my order?";
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 hover:bg-green-200 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-40 animate-bounce"
      title="Contact us on WhatsApp"
    >
      <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 " />
    </button>
  );
};

export default WhatsAppButton;
