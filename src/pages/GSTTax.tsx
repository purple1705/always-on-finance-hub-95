import Navigation from "@/components/Navigation";
import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt, CheckCircle, ArrowRight } from "lucide-react";

const GSTTax = () => {
  const services = [
    {
      title: "GST Registration & Filing",
      description: "Complete GST compliance and monthly filing services",
      features: ["GST registration assistance", "Monthly return filing", "GSTR compliance", "Input tax credit optimization"]
    },
    {
      title: "TDS Calculations & Submissions",
      description: "Accurate TDS calculations and timely submissions",
      features: ["TDS computation", "Quarterly returns", "Certificate generation", "Compliance monitoring"]
    },
    {
      title: "Income Tax Return Filing",
      description: "Professional ITR filing for individuals and businesses",
      features: ["Individual ITR filing", "Business tax returns", "Tax optimization", "Audit support"]
    },
    {
      title: "Tax Planning & Advisory",
      description: "Strategic tax planning to minimize your tax liability",
      features: ["Tax saving strategies", "Investment planning", "Deduction optimization", "Compliance advisory"]
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
              <Receipt className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              GST & Tax Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive tax compliance and filing services to keep your business compliant and optimized.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Tax Consultation
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

export default GSTTax;