import Navigation from "@/components/Navigation";
import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServiceNavigation />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional accounting solutions tailored to your business needs. 
              Navigate through our service categories using the dedicated service navigation above.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;