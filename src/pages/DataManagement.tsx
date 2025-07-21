import Navigation from "@/components/Navigation";
import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, CheckCircle, ArrowRight } from "lucide-react";

const DataManagement = () => {
  const services = [
    {
      title: "Data Entry Services",
      description: "Accurate and efficient data entry for all business needs",
      features: ["Invoice data entry", "Financial data processing", "Database management", "Quality assurance"]
    },
    {
      title: "Document Management",
      description: "Organized document storage and retrieval systems",
      features: ["Digital archiving", "Document indexing", "Search capabilities", "Access controls"]
    },
    {
      title: "Cloud Backup",
      description: "Secure cloud backup solutions for your business data",
      features: ["Automated backups", "Multi-location storage", "Data encryption", "Recovery planning"]
    },
    {
      title: "Security & Privacy",
      description: "Comprehensive data security and privacy protection",
      features: ["Data encryption", "Access controls", "Privacy compliance", "Security audits"]
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
              <Database className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Data Management
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Secure data handling and backup solutions to protect your business information.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Secure Your Data
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

export default DataManagement;