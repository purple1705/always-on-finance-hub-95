import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Clock, 
  Menu, 
  X, 
  ChevronDown,
  Phone,
  MessageCircle,
  UserCheck
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Core Accounting",
      description: "Complete bookkeeping and financial management",
      href: "/services/core-accounting",
      items: [
        "Bookkeeping & Record Maintenance",
        "Accounts Payable/Receivable",
        "Financial Statement Preparation",
        "Cash Flow Management"
      ]
    },
    {
      title: "GST & Tax Services",
      description: "Comprehensive tax compliance and filing",
      href: "/services/gst-tax",
      items: [
        "GST Registration & Filing",
        "TDS Calculations & Submissions",
        "Income Tax Return Filing",
        "Tax Planning & Advisory"
      ]
    },
    {
      title: "Software Integration",
      description: "Seamless accounting software solutions",
      href: "/services/software",
      items: [
        "Tally Accounting Setup",
        "QuickBooks Integration",
        "Xero Solutions",
        "Custom Software Support"
      ]
    }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Accounting Pro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[800px] lg:grid-cols-3">
                      {services.map((service) => (
                        <div key={service.title} className="group">
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                              <ul className="mt-2 space-y-1">
                                {service.items.map((item) => (
                                  <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                                ))}
                              </ul>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/24-7-support" className="font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    24/7 Support
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/consultation" className="font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    <UserCheck className="h-4 w-4" />
                    Free Consultation
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/pricing" className="font-medium text-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="font-medium text-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* 24/7 Support Quick Action */}
            <Button size="sm" className="hidden lg:flex items-center gap-2 bg-accent hover:bg-accent/90">
              <MessageCircle className="h-4 w-4" />
              Live Chat
            </Button>

            {/* Get Started Button */}
            <Button size="sm" className="hidden md:flex bg-gradient-primary">
              Get Started
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                Services
              </Link>
              <Link to="/24-7-support" className="block px-3 py-2 text-base font-medium text-accent hover:text-accent/80 hover:bg-muted rounded-md flex items-center gap-2">
                <Clock className="h-4 w-4" />
                24/7 Support
              </Link>
              <Link to="/consultation" className="block px-3 py-2 text-base font-medium text-primary hover:text-primary/80 hover:bg-muted rounded-md flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                Free Consultation
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                Pricing
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                About
              </Link>
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-accent hover:bg-accent/90" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button className="w-full bg-gradient-primary" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;