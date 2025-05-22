
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Membership", path: "/membership" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact Us", path: "/contact" },
];

const socialLinks = [
  { 
    icon: Facebook, 
    link: "https://facebook.com/SetyonSacco", 
    label: "Facebook",
    color: "#1877F2"
  },
  { 
    icon: Twitter, 
    link: "https://twitter.com/SetyonSacco", 
    label: "Twitter",
    color: "#1DA1F2"
  },
  { 
    icon: Linkedin, 
    link: "https://linkin.com/SetyonSacco", 
    label: "LinkedIn",
    color: "#0A66C2"
  },
  { 
    icon: Youtube, 
    link: "https://youtube.com/SetyonSacco", 
    label: "YouTube",
    color: "#FF0000"
  },
  { 
    icon: Phone, 
    link: "https://wa.me/254723656494", 
    label: "WhatsApp",
    color: "#25D366"
  },
];

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4 text-neutral-300">
              <p>Kipchimatt Supermarket, Brooke</p>
              <p>Kericho, along Kericho-Kisumu Highway, Kenya</p>
              <p>Email: info@setyon-sacco.com</p>
              <p>Phone: +254 723 656 494</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                  style={{ backgroundColor: social.color }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>© 2025 Setyon SACCO. All Rights Reserved.</p>
          jasmitech solution ltd
        </div>
      </div>
    </footer>
  );
};
