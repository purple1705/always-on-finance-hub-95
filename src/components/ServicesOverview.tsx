import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  CreditCard,
  BarChart3,
  Settings
} from "lucide-react";

const ServicesOverview = () => {
  const mainServices = [
    {
      icon: Calculator,
      title: "GST Filing & Management",
      description: "Complete GST registration, filing, and compliance management with 100% accuracy",
      features: ["Monthly GST Reports", "GSTR-1, GSTR-3B Filing", "Input Tax Credit Optimization", "Compliance Tracking"],
      price: "Starting ₹299/month",
      popular: true
    },
    {
      icon: FileText,
      title: "Complete Bookkeeping",
      description: "Professional bookkeeping services with real-time financial tracking and reporting",
      features: ["Daily Transaction Recording", "Bank Reconciliation", "Financial Statements", "Expense Tracking"],
      price: "Starting ₹999/month",
      popular: false
    },
    {
      icon: CreditCard,
      title: "TDS & Tax Services",
      description: "Expert TDS calculations, filings, and comprehensive tax planning services",
      features: ["TDS Calculations", "Quarterly Returns", "Tax Planning", "Refund Processing"],
      price: "Starting ₹499/month",
      popular: false
    },
    {
      icon: Settings,
      title: "Software Integration",
      description: "Seamless integration with Tally, QuickBooks, and other accounting software",
      features: ["Tally Setup & Training", "Data Migration", "Custom Workflows", "Ongoing Support"],
      price: "Starting ₹1,999/month",
      popular: false
    }
  ];

  const specializedServices = [
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Comprehensive financial analysis and reporting for better business decisions"
    },
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description: "Strategic financial advice to help grow your business efficiently"
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Complete payroll processing with compliance and employee management"
    },
    {
      icon: BookOpen,
      title: "Audit Support",
      description: "Preparation and support for internal and external audit processes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Accounting Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic bookkeeping to complex financial analysis, we provide comprehensive 
            accounting services tailored to your business needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/20">
              {service.popular && (
                <Badge className="absolute -top-3 left-4 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-primary text-lg mb-3">{service.price}</p>
                  <Button 
                    className="w-full group/btn" 
                    variant={service.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Additional Specialized Services</h3>
            <p className="text-muted-foreground">Comprehensive solutions for all your financial needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 24/7 Support Highlight */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
          <div className="relative space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                <Clock className="h-10 w-10 text-accent" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">24/7 Virtual Accounting Support</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get instant help whenever you need it. Our virtual accounting experts are available 
                round the clock to solve your queries and provide professional guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Clock className="h-5 w-5 mr-2" />
                Start Live Chat Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule Call Back
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Expert Certified Accountants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;