import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/src/assets/cocohub-logo.jpg" alt="Cocohub Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              From Nature to Nurture - Premium coconut products and export solutions 
              across South India. Your trusted partner for eco-friendly coconut products.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/916363784290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products#cocopeat" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Cocopeat for Agriculture
                </Link>
              </li>
              <li>
                <Link to="/products#coco-power" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Coco Power Products
                </Link>
              </li>
              <li>
                <Link to="/products#fresh-coconuts" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Thunder Fresh Coconuts
                </Link>
              </li>
              <li>
                <Link to="/products#bulk-trading" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Bulk Coconut Trading
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Service Areas</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Karnataka</li>
              <li>Tamil Nadu</li>
              <li>Goa</li>
              <li>Andhra Pradesh</li>
              <li>Telangana</li>
              <li>Chennai</li>
              <li>Hyderabad</li>
              <li>International Export</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary-foreground/80" />
                <div>
                  <a href="tel:+916363784290" className="text-primary-foreground/80 hover:text-white transition-colors">
                    +91 6363 784290
                  </a>
                  <p className="text-primary-foreground/80">Owner: Nandish HM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary-foreground/80" />
                <div>
                  <a href="mailto:contact.cocohub@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                    contact.cocohub@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">
                  Pattanagere Main Road<br />
                  Rajarajeshwari Nagar<br />
                  Bengaluru - 560098
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Cocohub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/80 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;