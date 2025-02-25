
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import PaymentOptions from "./pages/PaymentOptions";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Promotion from "./pages/Promotion";
import Careers from "./pages/Careers";
import Publication from "./pages/Publication";
import Downloads from "./pages/Downloads";
import Branches from "./pages/Branches";
import Tender from "./pages/Tender";
import FAQs from "./pages/FAQs";
import Calculator from "./pages/Calculator";
import IndividualMembership from "./pages/IndividualMembership";
import JointMembership from "./pages/JointMembership";
import GroupMembership from "./pages/GroupMembership";
import CorporateMembership from "./pages/CorporateMembership";
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
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payments" element={<PaymentOptions />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/tender" element={<Tender />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/membership/individual" element={<IndividualMembership />} />
          <Route path="/membership/joint" element={<JointMembership />} />
          <Route path="/membership/group" element={<GroupMembership />} />
          <Route path="/membership/corporate" element={<CorporateMembership />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
