import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductGrid } from "@/components/ProductGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { BoxShapesCarousel } from "@/components/BoxShapesCarousel";
import { Process } from "@/components/Process";
import { ValuePropositions } from "@/components/ValuePropositions";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SampleKit } from "@/components/SampleKit";
import { Footer } from "@/components/Footer";
import { HomeSEOContent } from "@/components/HomeSEOContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <QuoteForm />
      <BoxShapesCarousel />
      <HomeSEOContent />
      <Process />
      <ValuePropositions />
      <PromotionalBanner />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
