
import { useState } from "react";
import { MessageCircle, X, HelpCircle, Phone, Mail } from "lucide-react";

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "254723656494";
  const message = encodeURIComponent("Hello! I would like to know more about Setyon SACCO services.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const options = [
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.open("tel:+254723656494"),
    },
    {
      icon: Mail,
      label: "Email Us",
      action: () => window.open("mailto:info@setyon-sacco.com"),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      action: handleWhatsAppClick,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">How can we help?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.label}
                onClick={option.action}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <option.icon className="w-5 h-5 text-primary" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-bounce"
        aria-label="Chat with us"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
