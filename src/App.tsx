import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CoreAccounting from "./pages/CoreAccounting";
import GSTTax from "./pages/GSTTax";
import SoftwareIntegration from "./pages/SoftwareIntegration";
import BusinessAdvisory from "./pages/BusinessAdvisory";
import ComplianceAudit from "./pages/ComplianceAudit";
import DataManagement from "./pages/DataManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/core-accounting" element={<CoreAccounting />} />
          <Route path="/services/gst-tax" element={<GSTTax />} />
          <Route path="/services/software" element={<SoftwareIntegration />} />
          <Route path="/services/advisory" element={<BusinessAdvisory />} />
          <Route path="/services/compliance" element={<ComplianceAudit />} />
          <Route path="/services/data" element={<DataManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
