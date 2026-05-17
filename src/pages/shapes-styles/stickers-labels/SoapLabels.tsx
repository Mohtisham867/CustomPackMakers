import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductStickersLabels } from "@/components/RelatedProductStickersLabels";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import FAQimage from "@/assets/FAQ-image.webp";
import heroImg from "@/assets/shape-style/stickers-and-labels/soap-labels.webp";

const SoapLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = [
    { src: heroImg, alt: "Soap Labels - View 1" },
    { src: heroImg, alt: "Soap Labels - View 2" },
    { src: heroImg, alt: "Soap Labels - View 3" },
    { src: heroImg, alt: "Soap Labels - View 4" },
    { src: heroImg, alt: "Soap Labels - View 5" },
  ];
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Soap Labels | Premium Adhesive Labels | CustomPackMakers</title>
        <meta name="description" content="Order custom Soap Labels wholesale. Premium adhesive quality, durable finishes, and fast turnaround. Free shipping on bulk label orders." />
        <meta name="keywords" content="custom soap labels, wholesale soap labels, adhesive labels, custom stickers, label printing" />
        <meta property="og:title" content="Custom Soap Labels | Premium Adhesive Labels | CustomPackMakers" />
        <meta property="og:description" content="Premium custom soap labels with durable adhesive, vibrant printing, and specialty finishes. Get a free quote today." />
      </Helmet>
      <Header />
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
        <div className="container mx-auto px-[30px] py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes &amp; Styles</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/stickers-labels">Stickers &amp; Labels</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Soap Labels</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Soap Labels</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Water-resistant custom soap labels featuring durable polypropylene stock, smudge-proof coatings, and premium printing for liquid soap bottles, bar soap, and handwash dispensers.</p>
              <div className="pt-2">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                <img src={heroImg} alt="Soap Labels Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
</section>
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-1 bg-primary rounded-full" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Custom Soap Labels Built for Brands That Demand Quality</h2>
          <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
            <p>Our custom soap labels are built for the wet, lathery environment that liquid soap, bar soap, and handwash products inhabit. Produced on white or clear BOPP polypropylene stock with waterproof coatings and permanent adhesive, soap labels resist water splashing, steam from bathrooms, and the oily residue that develops on the exterior of soap dispensers and bottles over time. Full-color CMYK printing with protective lamination preserves label appearance through repeated handling in bathroom and kitchen sink environments. Clear BOPP labels create a clean, premium no-label aesthetic on glass and transparent soap bottles that is particularly popular for luxury apothecary brands. We produce wrap-around bottle labels, pump dispenser labels, bar soap wraps, and refill pouch stickers in any custom dimension.</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-accent/5" id="quote-form">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7 space-y-6">
              <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" />
              </div>
              <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}
                  >
                    <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="4" className="h-9 bg-white" /></div>
                      <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                      <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1" className="h-9 bg-white" /></div>
                    </div>
                    <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" /></div>
                    <div className="space-y-1.5"><Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                    <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <TechnicalSpecsSection />
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-[5vw]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Premium Soap Labels</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
                                      <h3>Why Soap Labels Adhesive Quality Matters</h3>
                        <p>The adhesive is the silent workhorse of every Soap Labels. Our high-tack permanent adhesive formulations are engineered for reliable bonding on glass, plastic, metal, cardboard, and coated surfaces. We test peel strength, shear resistance, and tack across a range of temperatures and humidity levels, ensuring your labels stay firmly in place from production floor to customer hands. Cold-temperature adhesives extend performance into refrigerated and freezer environments, while high-temperature variants handle candle jars and warm ambient storage. The right adhesive means zero label failures, zero reprints, and zero customer complaints about peeling packaging.</p>
                        <h3>Finish Options That Elevate Brand Perception</h3>
                        <p>Label finish transforms a functional piece of print into a brand experience. Our gloss lamination creates vivid, high-contrast imagery with a jewel-like sheen that catches light on retail shelves. Matte lamination delivers a sophisticated, understated elegance preferred by premium skincare, food, and lifestyle brands. Soft-touch coatings add a velvety, tactile quality that makes customers linger on your product. Metallic and holographic finishes create eye-catching effects that communicate luxury and exclusivity at first glance. Spot UV coating combines matte and gloss zones on a single label for dimensional contrast that highlights logos and key design elements with striking precision.</p>
                        <h3>Material Selection and Durability Engineering</h3>
                        <p>Durability begins with the right substrate. Our BOPP polypropylene labels offer exceptional moisture, oil, and tear resistance, making them ideal for food, beverage, and cosmetic applications where surface contact with liquids is unavoidable. Polyester labels withstand chemical exposure and extreme temperatures, perfect for industrial, laboratory, and cleaning product containers. Clear labels create a premium no-label look on glass and transparent packaging. Kraft labels deliver an authentic, eco-conscious aesthetic for artisan and organic brands. White gloss stock provides the brightest print surface for maximum color vibrancy. We match substrate to application so your Soap Labels perform flawlessly in real-world conditions.</p>
                        <h3>Printing Technology and Color Accuracy</h3>
                        <p>Precise color reproduction is non-negotiable for brand consistency. Our production combines offset and digital printing to deliver the right process for your quantity and quality requirements. Digital printing offers cost-effective short runs with rich color and fast turnaround, ideal for seasonal variations and product launches. Offset printing delivers Pantone-matched color consistency across massive volume runs, ensuring every label in a shipment of a million units matches the first. High-resolution print engines reproduce fine typography, photographic images, and intricate patterns with sharp detail. QR codes, barcodes, and batch numbers print with guaranteed scannability.</p>
                        <h3>Sustainability and Eco-Friendly Label Options</h3>
                        <p>Modern consumers and retailers increasingly demand sustainable packaging choices. Our eco-friendly Soap Labels options include FSC-certified paper stocks, biodegradable kraft materials, compostable label substrates, and water-based adhesives that support recyclability. Soy-based inks reduce volatile organic compound emissions without compromising color vibrancy. Recycled content materials meet brand sustainability commitments while maintaining print quality and adhesion performance. We help you communicate eco credentials by providing material certifications and environmental compliance documentation with every order.</p>
                        <h3>Custom Shapes, Sizes, and Die-Cutting</h3>
                        <p>Custom die-cutting is where your brand personality truly emerges. We produce labels in virtually any shape, from geometric polygons and ovals to intricate custom contours. Kiss-cutting through the label face without cutting the liner creates easy-peel stickers. Through-cutting produces individual shaped labels for direct application. Multi-up sheets organize several label variants efficiently. Precision die-cutting ensures clean edges, consistent dimensions, and perfect registration between print and cut across every production run, roll after roll.</p>
                        <h3>Wholesale Ordering and Production Scalability</h3>
                        <p>Whether you need 500 labels for a product launch or five million for a national distribution campaign, our production infrastructure scales to your volume. Low-minimum digital runs let startups access premium label quality without prohibitive costs. High-volume offset and flexographic runs deliver the lowest per-unit cost for established brands. We maintain consistent color, adhesion, and die-cut accuracy across all runs so reorders match originals perfectly. Flat-rate pricing and transparent quotes eliminate surprise costs, and our production team coordinates lead times to ensure your labels arrive before your inventory needs them.</p>
            </div>
          </div>
        </div>
      </section>
      <RelatedProductStickersLabels />
      <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
        <div className="container mx-auto px-[30px] relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine craftsmanship, speed, and reliability to deliver labels and stickers that make your brand unforgettable.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="space-y-5">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Waterproof Polypropylene Stock</h3><p className="text-sm text-slate-500 leading-relaxed">BOPP polypropylene soap labels resist water, lather, oils, and bathroom humidity, maintaining a strong adhesive bond and scratch-resistant print surface on glass, plastic, and ceramic soap containers throughout the entire product use cycle.</p></div>
              </div>
              <div className="w-full h-px bg-slate-100" />
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">No-Label Clear Option</h3><p className="text-sm text-slate-500 leading-relaxed">Our clear BOPP soap labels create the popular no-label look where your branding appears to be printed directly on the soap bottle, creating a clean, premium apothecary aesthetic that appeals strongly to luxury and natural soap consumers.</p></div>
              </div>
              <div className="w-full h-px bg-slate-100" />
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Ingredient and Safety Compliance</h3><p className="text-sm text-slate-500 leading-relaxed">We print full ingredient lists, INCI chemical names, pH levels, and regulatory compliance marks on soap labels with precise typography, ensuring your soap products meet FDA, EU, and international cosmetic labeling regulations for legal retail sale.</p></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={heroImg} alt="Premium Soap Labels" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium labels across North America</p></div>
              </div>
              <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
              <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-emerald-500 leading-none">8-10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl">
                <img src={heroImg} alt="Differentiate Soap Labels" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Brand</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers soap labels support handmade soap businesses and commercial soap manufacturers with equal expertise. Our material knowledge ensures every soap label substrate and adhesive combination we supply maintains integrity in wet bathroom conditions for the full product lifecycle. From plastic-free kraft wraps for natural soap bars to waterproof BOPP labels for commercial liquid dispensers, we match material to application so your soap labels always look perfect at the point of use.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                {[
                  { id: "item-1", question: "Are soap labels truly waterproof?", answer: "Our BOPP polypropylene soap labels with laminate coatings are waterproof and resist direct water exposure, soap residue, and bathroom humidity, maintaining print quality, color vibrancy, and adhesive bond throughout the entire product use period." },
                  { id: "item-2", question: "What label material is best for liquid soap bottles?", answer: "We recommend clear or white BOPP BOPP polypropylene with permanent waterproof adhesive for liquid soap bottles. Clear stock creates a premium no-label look while white BOPP provides a bright print surface for vibrant full-color soap bottle label designs." },
                  { id: "item-3", question: "Can soap labels wrap around cylindrical bottles?", answer: "Yes. We produce wrap-around soap labels that span 100 percent of a bottle's circumference, with precisely calculated label widths and heights to fit your specific container dimensions without gaps, overlaps, or misalignment on cylindrical surfaces." },
                  { id: "item-4", question: "Do soap labels need to list ingredients by law?", answer: "In most markets yes. Soap and cosmetic product labels must list ingredients in INCI nomenclature order, include net weight, manufacturer contact, and applicable safety warnings. Our design team can help format compliant ingredient panels for your specific regulatory market." },
                  { id: "item-5", question: "What finishes are available for soap labels?", answer: "Soap labels are available with gloss lamination for bright vivid colors, matte lamination for a natural organic aesthetic, soft-touch coating for a premium apothecary feel, and spot UV for highlighting logo elements against a matte label background." },
                ].map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                    <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                      <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                      <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                        <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                        <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img src={FAQimage} alt="Soap Labels FAQ" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <BrandRating />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default SoapLabels;