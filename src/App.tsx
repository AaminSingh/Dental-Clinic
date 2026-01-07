import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import HealthyTips from "./pages/HealthyTips";
import CostEstimator from "./pages/CostEstimator";
import SymptomChecker from "./pages/SymptomChecker";
import SmileTest from "./pages/SmileTest";
import Reviews from "./pages/Reviews";
import SmileGallery from "./pages/SmileGallery";
import Membership from "./pages/Membership";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<SmileGallery />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/healthy-tips" element={<HealthyTips />} />
          <Route path="/cost-estimator" element={<CostEstimator />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/smile-test" element={<SmileTest />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
