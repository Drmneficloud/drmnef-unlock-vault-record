
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-muted text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8" />
              <span className="text-xl font-bold">Drmnef</span>
            </div>
            <p className="text-sm text-gray-300">
              Professional iPhone unlocking services. Secure, fast, and reliable solutions for all your device needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-highlight transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-highlight transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-highlight transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-highlight transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-highlight transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-highlight transition-colors">Services</Link></li>
              <li><Link to="/track" className="hover:text-brand-highlight transition-colors">Track Order</Link></li>
              <li><Link to="/faq" className="hover:text-brand-highlight transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-brand-highlight transition-colors">Network Unlock</Link></li>
              <li><Link to="/services" className="hover:text-brand-highlight transition-colors">iCloud Unlock</Link></li>
              <li><Link to="/services" className="hover:text-brand-highlight transition-colors">Carrier Check</Link></li>
              <li><Link to="/services" className="hover:text-brand-highlight transition-colors">IMEI Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>support@drmnef.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Tech Way, Digital City, CA 92532</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Drmnef. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
