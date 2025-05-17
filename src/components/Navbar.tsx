
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-brand" />
              <span className="text-xl font-bold text-brand">Drmnef</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-brand transition-colors">Home</Link>
            <Link to="/services" className="text-foreground hover:text-brand transition-colors">Services</Link>
            <Link to="/track" className="text-foreground hover:text-brand transition-colors">Track Order</Link>
            <Link to="/faq" className="text-foreground hover:text-brand transition-colors">FAQ</Link>
            <Link to="/contact" className="text-foreground hover:text-brand transition-colors">Contact</Link>
            <Link to="/admin/login" className="text-foreground hover:text-brand transition-colors">Admin</Link>
          </div>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/services">
              <Button className="bg-brand hover:bg-brand-accent">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/track" 
              className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Order
            </Link>
            <Link 
              to="/faq" 
              className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/admin/login" 
              className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
            <div className="pt-2">
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-brand hover:bg-brand-accent">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
