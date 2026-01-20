import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";

const pageTitle = "Amazon Web Services";

export default function AmazonWebServicesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onContactClick={() => setContactModalOpen(true)} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80 mb-6">
              Cloud & Infrastructure
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              This page is ready for a custom layout tailored to Amazon Web Services.
            </p>
            <div className="mt-10">
              <Button onClick={() => setContactModalOpen(true)}>
                Talk to an expert
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20">
          <div className="rounded-3xl border bg-card/70 backdrop-blur p-8 md:p-10">
            <p className="text-base text-muted-foreground">
              Replace this section with your custom structure, modules, and media.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
