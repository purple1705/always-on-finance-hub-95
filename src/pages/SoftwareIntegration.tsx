import Navigation from "@/components/Navigation";
import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, CheckCircle, ArrowRight } from "lucide-react";

const SoftwareIntegration = () => {
  const services = [
    {
      title: "Tally Accounting Setup",
      description: "Complete Tally implementation and customization",
      features: ["Tally installation", "Chart of accounts setup", "User training", "Custom reports"]
    },
    {
      title: "QuickBooks Integration",
      description: "Seamless QuickBooks setup and data migration",
      features: ["QuickBooks setup", "Data migration", "Bank integration", "Workflow automation"]
    },
    {
      title: "Xero Solutions",
      description: "Cloud-based accounting with Xero implementation",
      features: ["Xero configuration", "Third-party integrations", "Mobile access setup", "Real-time reporting"]
    },
    {
      title: "Custom Software Support",
      description: "Tailored software solutions for unique business needs",
      features: ["Custom development", "API integrations", "Software consulting", "Technical support"]
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
              <Settings className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Software Integration
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Seamless accounting software solutions to streamline your business operations.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Explore Solutions
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

export default SoftwareIntegration;