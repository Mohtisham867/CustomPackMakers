import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="CustomBox" className="h-10 w-auto hue-rotate-[-45deg] brightness-110" />
              <span className="text-xl font-bold gradient-text">CustomBox</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium custom packaging solutions for businesses worldwide. Transform your brand with exceptional boxes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/packaging-hub" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Packaging Hub</Link></li>
              <li><Link to="/insights" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="#quote" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Popular Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Popular Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Custom Boxes</Link></li>
              <li><Link to="/industries/mailer-boxes" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Mailer Boxes</Link></li>
              <li><Link to="/industries/rigid-boxes" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Rigid Boxes</Link></li>
              <li><Link to="/shapes-styles/stickers-and-labels" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Stickers & Labels</Link></li>
              <li><Link to="/industries/sustainable-packaging" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Eco-Friendly Packaging</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 py-1">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Packaging Street, Design City, DC 12345</span>
              </li>
              <li className="flex items-center gap-2 py-1">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 py-1">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:support@custombox.com" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  support@custombox.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CustomBox. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
