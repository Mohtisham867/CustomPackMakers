import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductGrid } from "@/components/ProductGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { BoxShapesCarousel } from "@/components/BoxShapesCarousel";
import { Process } from "@/components/Process";
import { ValuePropositions } from "@/components/ValuePropositions";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SampleKit } from "@/components/SampleKit";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen px-[10px]">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <QuoteForm />
      <BoxShapesCarousel />
      <Process />
      <ValuePropositions />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
