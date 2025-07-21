import Navigation from "@/components/Navigation";
import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";

const ComplianceAudit = () => {
  const services = [
    {
      title: "Statutory Audit",
      description: "Comprehensive statutory audit services for compliance",
      features: ["Financial statement audit", "Compliance verification", "Audit reports", "Regulatory filings"]
    },
    {
      title: "Internal Audit",
      description: "Internal audit services to improve business operations",
      features: ["Process evaluation", "Risk assessment", "Control testing", "Improvement recommendations"]
    },
    {
      title: "Compliance Management",
      description: "End-to-end compliance management services",
      features: ["Regulatory compliance", "Policy development", "Training programs", "Monitoring systems"]
    },
    {
      title: "Due Diligence",
      description: "Professional due diligence for business transactions",
      features: ["Financial due diligence", "Tax due diligence", "Legal compliance", "Risk evaluation"]
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
              <Shield className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Compliance & Audit
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Regulatory compliance and audit services to protect your business and ensure transparency.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Request Audit
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

export default ComplianceAudit;