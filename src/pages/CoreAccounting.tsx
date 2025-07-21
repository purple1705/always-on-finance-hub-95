import Navigation from "@/components/Navigation";
import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, CheckCircle, ArrowRight } from "lucide-react";

const CoreAccounting = () => {
  const services = [
    {
      title: "Bookkeeping & Record Maintenance",
      description: "Comprehensive record keeping for all your business transactions",
      features: ["Daily transaction recording", "Bank reconciliation", "Expense tracking", "Revenue monitoring"]
    },
    {
      title: "Accounts Payable/Receivable",
      description: "Efficient management of your business cash flow",
      features: ["Invoice generation", "Payment tracking", "Vendor management", "Customer accounts"]
    },
    {
      title: "Financial Statement Preparation",
      description: "Professional financial statements for your business",
      features: ["Balance sheets", "Income statements", "Cash flow statements", "Monthly reports"]
    },
    {
      title: "Cash Flow Management",
      description: "Strategic cash flow planning and optimization",
      features: ["Cash flow forecasting", "Budget planning", "Working capital analysis", "Liquidity management"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <ServiceNavigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Calculator className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Core Accounting Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Essential bookkeeping and financial management services to keep your business running smoothly.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoreAccounting;