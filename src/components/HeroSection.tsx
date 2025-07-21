import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InteractiveImageUpload from "@/components/InteractiveImageUpload";
import { 
  Clock, 
  UserCheck, 
  Shield, 
  Star, 
  ArrowRight
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Shield className="h-4 w-4 mr-2" />
              Trusted by 500+ Businesses
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Professional Accounting
                <span className="block text-accent">Available 24/7</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Get expert financial management with round-the-clock virtual support 
                and personalized consultation. Your business finances, handled perfectly.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">24/7 Virtual Support</h3>
                  <p className="text-sm text-white/80">Always available when you need us</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Consultation</h3>
                  <p className="text-sm text-white/80">Personalized financial advice</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                <UserCheck className="h-5 w-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Clock className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold">500+</span> Happy Clients
              </div>
              <div className="text-sm">
                <span className="font-semibold">24/7</span> Support
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Image Upload */}
          <div className="relative">
            <InteractiveImageUpload />

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center animate-float">
              <Clock className="h-8 w-8 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;