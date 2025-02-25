
import { Navigation } from "@/components/Navigation";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { UpdatesSection } from "@/components/UpdatesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-[6.5rem]">
        <HeroSlideshow />
        <ServicesSection />
        <BenefitsSection />
        <UpdatesSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <WhatsAppChat />
      <Footer />
    </div>
  );
};

export default Index;
