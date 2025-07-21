import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "GST Filing & Management", href: "/services/gst" },
    { name: "Complete Bookkeeping", href: "/services/bookkeeping" },
    { name: "TDS & Tax Services", href: "/services/tax" },
    { name: "Software Integration", href: "/services/software" },
    { name: "Financial Reporting", href: "/services/reporting" },
    { name: "Business Consulting", href: "/services/consulting" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog & Resources", href: "/blog" },
    { name: "Client Portal", href: "/portal" },
    { name: "Career", href: "/career" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Data Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Accounting Pro</span>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Professional accounting services with 24/7 virtual support and personalized 
              consultation. Your trusted partner for all financial management needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white/90">support@accountingpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white/90">Mumbai, Delhi, Bangalore, Pune</span>
              </div>
            </div>

            {/* 24/7 Support Highlight */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold">24/7 Support Available</p>
                  <p className="text-sm text-white/80">Get instant help anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-white/80 hover:text-accent transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-accent transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Get Started / Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get Started Today</h3>
            <p className="text-white/80">
              Ready to streamline your accounting? Start with a free consultation 
              and experience our 24/7 support.
            </p>

            <div className="space-y-3">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Book Free Consultation
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4 border-t border-white/20">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-white/80 mb-3">
                Get accounting tips and updates delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/80 text-sm">
              © {currentYear} Accounting Pro. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/80 hover:text-accent text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;