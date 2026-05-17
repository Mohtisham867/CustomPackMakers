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
import heroImg from "@/assets/shape-style/stickers-and-labels/bag-labels.webp";

const BagLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = [
    { src: heroImg, alt: "Bag Labels - View 1" },
    { src: heroImg, alt: "Bag Labels - View 2" },
    { src: heroImg, alt: "Bag Labels - View 3" },
    { src: heroImg, alt: "Bag Labels - View 4" },
    { src: heroImg, alt: "Bag Labels - View 5" },
  ];
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Bag Labels | Premium Adhesive Labels | CustomPackMakers</title>
        <meta name="description" content="Order custom Bag Labels wholesale. Premium adhesive quality, durable finishes, and fast turnaround. Free shipping on bulk orders." />
        <meta name="keywords" content="custom bag labels, wholesale bag labels, adhesive labels, custom stickers, label printing" />
        <meta property="og:title" content="Custom Bag Labels | CustomPackMakers" />
        <meta property="og:description" content="Premium custom bag labels with durable adhesive, vibrant printing, and specialty finishes. Get a free quote today." />
      </Helmet>
      <Header />
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
        <div className="container mx-auto px-[30px] py-4">
          <Breadcrumb><BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes &amp; Styles</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/stickers-labels">Stickers &amp; Labels</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Bag Labels</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList></Breadcrumb>
        </div>
      </div>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Bag Labels</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Custom bag labels featuring strong adhesive, high-visibility printing, and durable materials for paper bags, plastic poly bags, mylar pouches, and retail packaging identification.</p>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
            </div>
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                <img src={heroImg} alt="Bag Labels Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Custom Bag Labels Built for Brands That Demand Quality</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">Our custom bag labels are designed to identify, brand, and provide product information on the full spectrum of flexible and semi-rigid bag formats, from paper grocery and bakery bags to polypropylene retail bags, mylar stand-up pouches, and resealable Ziplock packaging. Produced on label stock matched to each bag substrate, with adhesive formulations that grip paper, plastic, foil, and coated bag surfaces without lifting or leaving residue at removal, our bag labels deliver professional presentation across food, retail, cannabis, pet food, and supplement product packaging. Full-color printing with high-resolution logos, product images, and regulatory text gives flexible bag packaging the branded identity it needs to compete effectively on crowded retail shelves and in direct-to-consumer channels.</p>
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
                    <div className="space-y-1.5"><Label htmlFor="uname" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="uname" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                    <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md mt-2">Submit Inquiry</Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Premium Bag Labels</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5" >
<h3>Why bag labels Adhesive Quality Matters</h3>
                        <p>The adhesive is the silent workhorse of every bag labels. Our high-tack permanent adhesive formulations bond reliably to glass, plastic, metal, cardboard, and coated surfaces, tested for peel strength, shear resistance, and tack across temperatures and humidity levels. Cold-temperature adhesives extend performance into refrigerated environments while high-temperature variants handle warm ambient storage. The right adhesive means zero label failures and zero customer complaints about peeling packaging.</p>
                        <h3>Finish Options That Elevate Brand Perception</h3>
                        <p>Label finish transforms print into a brand experience. Gloss lamination creates vivid, high-contrast imagery with jewel-like sheen. Matte lamination delivers sophisticated, understated elegance. Soft-touch coatings add a velvety tactile quality. Metallic and holographic finishes communicate luxury and exclusivity. Spot UV coating combines matte and gloss zones on a single bag labels for dimensional contrast that highlights logos with striking precision across every retail environment.</p>
                        <h3>Material Selection and Durability</h3>
                        <p>Durability begins with the right substrate. BOPP polypropylene labels offer exceptional moisture, oil, and tear resistance for food, beverage, and cosmetic applications. Polyester withstands chemical exposure and extreme temperatures for industrial containers. Clear labels create a premium no-label look. Kraft delivers an eco-conscious aesthetic. White gloss provides the brightest print surface for maximum color vibrancy. We match substrate to application so your bag labels perform flawlessly in real-world conditions throughout the entire product lifecycle.</p>
                        <h3>Printing Technology and Color Accuracy</h3>
                        <p>Precise color reproduction is non-negotiable for brand consistency. Our production combines offset and digital printing to deliver the right process for your quantity and quality requirements. Digital printing offers cost-effective short runs with rich color and fast turnaround. Offset printing delivers Pantone-matched consistency across massive volume runs. High-resolution engines reproduce fine typography, photography, and patterns with sharp detail. QR codes, barcodes, and batch numbers print with guaranteed scannability verified before every shipment leaves our facility.</p>
                        <h3>Sustainability and Eco-Friendly Options</h3>
                        <p>Modern consumers demand sustainable packaging. Our eco-friendly bag labels options include FSC-certified paper stocks, biodegradable kraft materials, compostable substrates, and water-based adhesives supporting recyclability. Soy-based inks reduce volatile organic emissions without compromising color vibrancy. Recycled content materials meet brand sustainability commitments while maintaining the print quality and adhesion performance your products require. We provide material certification documentation with every eco order for transparent, verifiable sustainability claims.</p>
                        <h3>Custom Die-Cutting and Shapes</h3>
                        <p>Custom die-cutting is where brand personality emerges. We produce bag labels in virtually any shape from geometric polygons and ovals to intricate custom contours that mirror your logo silhouette. Kiss-cutting through the face without cutting the liner creates easy-peel stickers. Through-cutting produces individual shaped labels for direct application. Multi-up sheets organize several variants on one sheet for efficient workflows. Precision equipment ensures clean edges, consistent dimensions, and perfect registration between print and cut on every roll.</p>
                        <h3>Wholesale Ordering and Scalability</h3>
                        <p>Whether you need 500 labels for a product launch or five million for a national campaign, our production infrastructure scales to your volume with consistent quality. Low-minimum digital runs let startups access premium label quality affordably. High-volume offset and flexographic runs deliver the lowest per-unit cost for established brands with consistent labeling needs. Flat-rate pricing and transparent quotes eliminate surprise costs. Our team coordinates lead times and freight so your bag labels always arrive before your inventory needs them.</p>
</div>
        </div>
          </div>
</section>
      <RelatedProductStickersLabels />
      <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#fafafa 0%,#f4f6ff 60%,#f0fdf8 100%)' }}>
        <div className="container mx-auto px-[30px] relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We combine craftsmanship, speed, and reliability to make your brand unforgettable.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="space-y-5">
              {[
                { color:"primary", path:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title:"Multi-Bag-Surface Adhesion", body:"Bag labels must adhere to diverse surfaces including recycled paper, glossy plastic film, matte polypropylene, and metallic mylar pouches. Our adhesive portfolio covers all bag substrate types with formulations that grip each surface permanently without lifting or bubbling." },
                { color:"amber-500", path:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", title:"High-Visibility Brand Printing", body:"Bags present large, high-visibility branding surfaces. Our full-color printing with vibrant CMYK and Pantone color matching produces bold, eye-catching bag labels that command attention on retail shelves and in e-commerce photography and unboxing content." },
                { color:"emerald-500", path:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title:"Easy-Open Perforated Options", body:"For bag labels serving as tamper evidence or product seals, we offer perforated and specialty designs that allow clean opening while providing visible evidence of tampering, adding consumer confidence for food, supplement, and personal care bag products." },
              ].map((f,i) => (
                <div key={i}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 mt-1"><div className={f.color === 'primary' ? 'w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300' : f.color === 'amber-500' ? 'w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300' : 'w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300'}><svg className={f.color === 'primary' ? 'w-5 h-5 text-primary' : f.color === 'amber-500' ? 'w-5 h-5 text-amber-500' : 'w-5 h-5 text-emerald-500'} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.path} /></svg></div></div>
                    <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{f.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{f.body}</p></div>
                  </div>
                  {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                </div>
              ))}
            </div>
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio:'1/1' }}>
                <img src={heroImg} alt="Premium Bag Labels" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium labels across North America</p></div>
              </div>
              <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
              <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-emerald-500 leading-none">8-10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl">
              <img src={heroImg} alt="Differentiate Bag Labels" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Brand</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers bag labels help brands give flexible packaging the same professional branded identity that rigid box packaging commands. Our material expertise covers the unique adhesion challenges of plastic film, paper, foil, and woven bag surfaces, and our print capabilities handle the large format, high-visibility demands of bag label design. From small artisan food producers to large supplement manufacturers, we produce bag labels that elevate flexible packaging to retail-ready standards.</p>
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
                  { id:"item-1", q:"Do bag labels stick to plastic poly bags?", a:"Yes. Our bag labels use adhesive formulations specifically tested on polyethylene and polypropylene bag surfaces, providing permanent adhesion without lifting at edges, residue on bag material at removal, or print transfer during stacking and shipping." },
                  { id:"item-2", q:"Can bag labels be used on mylar pouches?", a:"Yes. We produce bag labels with adhesive formulations compatible with metallic mylar and foil-laminate pouch surfaces, providing permanent bonding without the silvery foil surface causing adhesive failure or edge lifting during retail display and handling." },
                  { id:"item-3", q:"What size bag labels do you produce?", a:"We produce bag labels in any custom size from small 1x2 inch item tags to large 8x10 inch full-panel bag labels. Standard bag label sizes for common poly bag formats are available with sizing guides to help you select the optimal dimensions." },
                  { id:"item-4", q:"Can bag labels include barcodes and scan codes?", a:"Yes. We print barcodes, QR codes, and data matrix codes on bag labels with scannability verified by our quality control team. Variable data bag labels with unique codes for each unit are also available for batch tracking and direct-to-consumer personalization." },
                  { id:"item-5", q:"Are bag labels food safe?", a:"Our food-safe bag label options use FDA-compliant inks and non-toxic adhesives suitable for indirect food contact on external packaging surfaces. Direct food contact labeling requires specific certifications which our team can advise on for your product application." },
                ].map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                    <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                      <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                      <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img src={FAQimage} alt="Bag Labels FAQ" className="absolute inset-0 w-full h-full object-cover" />
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
export default BagLabels;