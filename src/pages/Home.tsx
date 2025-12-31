import { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import AIWorkshop from "@/components/AIWorkshop";
import MicrosoftServices from "@/components/MicrosoftServices";
import CloudServices from "@/components/CloudServices";
import Partners from "@/components/Partners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <main>
        <HeroCarousel />
        <StatsSection />
        <AIWorkshop onBookClick={handleContactClick} />
        <MicrosoftServices />
        <CloudServices />
        <Partners />
        <CTASection onGetStartedClick={handleContactClick} />
      </main>
      <Footer />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
