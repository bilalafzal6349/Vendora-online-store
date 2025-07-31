import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (page: string) => {
    // Navigate to the page
    if (page === "home") {
      navigate("/");
    } else if (page === "products") {
      navigate("/products");
    } else if (page === "about") {
      navigate("/about");
    } else if (page === "contact") {
      navigate("/contact");
    }
    
    // Smooth scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div
              className="flex items-center space-x-3 cursor-pointer p-3 group"
              onClick={() => handleNavClick("home")}
            >
              <div className=" transition-all duration-300">
                <img src="/a.jpeg" className="w-[52px] h-[52px]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors capitalize">
                  VENDORA
                </h1>
                <p className="text-sm text-emerald-400 font-semibold -mt-1">
                  OnlineStore
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted online shopping destination. We bring you the best
              products at unbeatable prices with exceptional customer service
              and fast delivery.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("products")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  +92 325 570 5107
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  info@Vendorastore.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Punjab, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vendora OnlineStore. All rights reserved. | Where care meets
            convenience — every product, every time.
          </p>
          <span>
            developed by <strong>Avengers</strong>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
