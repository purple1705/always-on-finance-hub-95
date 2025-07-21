import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  UserCheck, 
  Shield, 
  Zap, 
  HeadphonesIcon, 
  FileCheck,
  TrendingUp,
  Users,
  Smartphone,
  Globe,
  Lock,
  Award
} from "lucide-react";

const KeyFeatures = () => {
  const primaryFeatures = [
    {
      icon: Clock,
      title: "24/7 Virtual Support",
      description: "Round-the-clock access to certified accounting professionals through multiple channels",
      benefits: [
        "Instant query resolution",
        "Emergency support available",
        "Multiple communication channels",
        "Real-time assistance"
      ],
      color: "accent"
    },
    {
      icon: UserCheck,
      title: "Personalized Consultation",
      description: "Free initial consultation with tailored financial advice specific to your business needs",
      benefits: [
        "One-on-one expert guidance",
        "Customized financial strategies",
        "Business-specific solutions",
        "Ongoing advisory support"
      ],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Bank-level security with complete compliance to Indian accounting standards and regulations",
      benefits: [
        "256-bit SSL encryption",
        "GDPR compliant",
        "Regular security audits",
        "Confidential data handling"
      ],
      color: "success"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Quick turnaround times for all your accounting needs"
    },
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "Access your financial data and support from anywhere"
    },
    {
      icon: FileCheck,
      title: "100% Accuracy Guarantee",
      description: "We ensure error-free financial reports and filings"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Insights",
      description: "Data-driven recommendations to scale your business"
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal relationship manager for all your needs"
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Team of CA, CMA, and CS qualified experts"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unique Features That Set Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our innovative approach to accounting services, 
            designed specifically for modern businesses.
          </p>
        </div>

        {/* Primary Features - Large Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {primaryFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      feature.color === 'accent' ? 'bg-accent/10' :
                      feature.color === 'primary' ? 'bg-primary/10' :
                      'bg-success/10'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-8 w-8 ${
                        feature.color === 'accent' ? 'text-accent' :
                        feature.color === 'primary' ? 'text-primary' :
                        'text-success'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          feature.color === 'accent' ? 'bg-accent' :
                          feature.color === 'primary' ? 'bg-primary' :
                          'bg-success'
                        }`} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="pt-4">
                    <Badge className={`${
                      feature.color === 'accent' ? 'bg-accent/10 text-accent border-accent/20' :
                      feature.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' :
                      'bg-success/10 text-success border-success/20'
                    }`}>
                      {feature.color === 'accent' ? 'Always Available' :
                       feature.color === 'primary' ? 'Free Service' :
                       'Enterprise Grade'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted by Businesses Across India</h3>
            <p className="text-muted-foreground">Join hundreds of satisfied clients who trust us with their finances</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Live Support Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium">Live support team online now</span>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Experience Our 24/7 Support Right Now
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a question? Our accounting experts are standing by to help you immediately. 
            Start a conversation and see the difference professional support makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors">
              <HeadphonesIcon className="h-5 w-5 mr-2" />
              Start Live Chat
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-border hover:bg-muted text-foreground rounded-lg font-medium transition-colors">
              <UserCheck className="h-5 w-5 mr-2" />
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;