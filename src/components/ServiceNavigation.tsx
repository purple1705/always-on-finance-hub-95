import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Menu, 
  X, 
  ChevronDown,
  FileText,
  Receipt,
  Settings,
  TrendingUp,
  Shield,
  Database
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ServiceNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const serviceCategories = [
    {
      title: "Core Accounting",
      description: "Essential bookkeeping and financial management",
      icon: Calculator,
      href: "/services/core-accounting",
      items: [
        { name: "Bookkeeping & Record Maintenance", href: "/services/bookkeeping" },
        { name: "Accounts Payable/Receivable", href: "/services/accounts" },
        { name: "Financial Statement Preparation", href: "/services/statements" },
        { name: "Cash Flow Management", href: "/services/cashflow" }
      ]
    },
    {
      title: "GST & Tax Services",
      description: "Comprehensive tax compliance and filing",
      icon: Receipt,
      href: "/services/gst-tax",
      items: [
        { name: "GST Registration & Filing", href: "/services/gst" },
        { name: "TDS Calculations & Submissions", href: "/services/tds" },
        { name: "Income Tax Return Filing", href: "/services/itr" },
        { name: "Tax Planning & Advisory", href: "/services/tax-planning" }
      ]
    },
    {
      title: "Software Integration",
      description: "Seamless accounting software solutions",
      icon: Settings,
      href: "/services/software",
      items: [
        { name: "Tally Accounting Setup", href: "/services/tally" },
        { name: "QuickBooks Integration", href: "/services/quickbooks" },
        { name: "Xero Solutions", href: "/services/xero" },
        { name: "Custom Software Support", href: "/services/custom" }
      ]
    },
    {
      title: "Business Advisory",
      description: "Strategic financial guidance and consulting",
      icon: TrendingUp,
      href: "/services/advisory",
      items: [
        { name: "Financial Planning", href: "/services/planning" },
        { name: "Investment Advisory", href: "/services/investment" },
        { name: "Business Strategy", href: "/services/strategy" },
        { name: "Risk Management", href: "/services/risk" }
      ]
    },
    {
      title: "Compliance & Audit",
      description: "Regulatory compliance and audit services",
      icon: Shield,
      href: "/services/compliance",
      items: [
        { name: "Statutory Audit", href: "/services/audit" },
        { name: "Internal Audit", href: "/services/internal-audit" },
        { name: "Compliance Management", href: "/services/compliance-mgmt" },
        { name: "Due Diligence", href: "/services/due-diligence" }
      ]
    },
    {
      title: "Data Management",
      description: "Secure data handling and backup solutions",
      icon: Database,
      href: "/services/data",
      items: [
        { name: "Data Entry Services", href: "/services/data-entry" },
        { name: "Document Management", href: "/services/documents" },
        { name: "Cloud Backup", href: "/services/backup" },
        { name: "Security & Privacy", href: "/services/security" }
      ]
    }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Service Navigation Logo */}
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Services</span>
          </div>

          {/* Desktop Service Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {serviceCategories.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="font-medium text-sm">
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-primary p-6 no-underline outline-none focus:shadow-md"
                            >
                              <category.icon className="h-6 w-6 text-white" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                {category.title}
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                {category.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <NavigationMenuLink key={item.name} asChild>
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline" className="hidden lg:flex">
              View All Services
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

        {/* Mobile Service Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-1">
                  <Link 
                    to={category.href} 
                    className="flex items-center px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    {category.title}
                  </Link>
                  <div className="ml-6 space-y-1">
                    {category.items.slice(0, 2).map((item) => (
                      <Link 
                        key={item.name}
                        to={item.href} 
                        className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ServiceNavigation;