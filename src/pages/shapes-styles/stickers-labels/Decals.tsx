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
import heroImg from "@/assets/shape-style/stickers-and-labels/decals.webp";

const Decals = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = [
    { src: heroImg, alt: "Decals - View 1" },
    { src: heroImg, alt: "Decals - View 2" },
    { src: heroImg, alt: "Decals - View 3" },
    { src: heroImg, alt: "Decals - View 4" },
    { src: heroImg, alt: "Decals - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Decals | CustomPackMakers</title>
        <meta name="description" content="Order custom Decals wholesale. Premium adhesive, durable finishes, fast turnaround." />
      </Helmet>
      
      <Header />
      
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
        <div className="container mx-auto px-[30px] py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/shapes-styles">Shapes &amp; Styles</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/shapes-styles/stickers-labels">Stickers &amp; Labels</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Decals</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                <span className="text-primary">Custom</span> Decals
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                High-quality custom decals with precision die-cutting, durable outdoor-grade vinyl, and vibrant printing for vehicle graphics, window displays, equipment branding, and promotional applications.
              </p>
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:-translate-y-1 transition-all" 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({behavior: 'smooth'})}
              >
                Get a Quote
              </Button>
            </div>
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
              <img src={heroImg} alt="Decals Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Custom Decals Built for Brands That Demand Quality</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom decals are premium-grade graphics applications engineered for the demanding visibility and durability requirements of vehicle wraps, window lettering, equipment identification, retail window displays, floor graphics, and branded promotional installations. Produced on cast or calendered vinyl with solvent or UV-resistant inks and optionally laminated for extended lifespan, decals adhere to painted metal, glass, plastic, and powder-coated surfaces using repositionable or permanent adhesive depending on application requirements. Transfer decals allow precise positioning of complex multi-element graphics. Static cling decals work on glass without adhesive. Full-color printing with photographic quality reproduction makes our decals compelling marketing tools across vehicle fleets, retail storefronts, trade show displays, and product identification programs.
          </p>
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
              <Card className="shadow-lg border-slate-200 bg-slate-50/50 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="l" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                        <Input id="l" type="number" placeholder="4" className="h-9 bg-white" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="w" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                        <Input id="w" type="number" placeholder="3" className="h-9 bg-white" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="d" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                        <Input id="d" type="number" placeholder="1" className="h-9 bg-white" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                      <Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="nm" className="text-xs font-semibold text-muted-foreground">Name</Label>
                      <Input id="nm" type="text" placeholder="Your Name" className="h-9 bg-white" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="em" className="text-xs font-semibold text-muted-foreground">Email</Label>
                      <Input id="em" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md mt-2">
                      Submit Inquiry
                    </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">The Complete Guide to Premium Decals</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>Custom Decals as a High-Visibility Brand Tool</h3>
              <p>Decals occupy a unique position in the branded sticker and label category — they are designed for prominent, high-visibility surface application where brand presence, durability, and aesthetic impact must perform simultaneously at a large scale. Unlike small product labels, decals are often applied to vehicles, storefronts, equipment, walls, windows, and floors where they function as permanent or semi-permanent brand signage. Our custom decals are manufactured from premium cast and calendered vinyl films engineered for each specific application environment, with UV-resistant inks and protective laminates that maintain color accuracy and adhesion through years of sun, rain, temperature cycling, and physical contact in demanding real-world conditions.</p>
              
              <h3>Decal Types and Their Specific Applications</h3>
              <p>The decal category encompasses several distinct product types with different application methods and performance characteristics. Pressure-sensitive vinyl decals use aggressive permanent adhesive to bond directly to vehicle paint, glass, metal, plastic, and other rigid surfaces without any water activation. Water-activated decals use a moisture-soluble adhesive that activates upon wetting, enabling precise positioning before final adhesion — commonly used for vehicle registration and fleet identification applications. Perforated window decals allow one-way visibility through from inside vehicles and storefronts while displaying full-color graphics from outside — ideal for retail shopfront displays and vehicle rear window advertising. Floor graphics decals use slip-resistant overlaminates for safe foot traffic applications in retail stores and events. We produce all decal types with specifications matched to their intended surface and environment.</p>
              
              <h3>Material Specifications for Decal Performance</h3>
              <p>Decal material selection determines longevity, conformability, and value retention in each application environment. Cast vinyl is the premium grade for outdoor and automotive decal applications — the casting process creates a dimensionally stable film that conforms to compound curves on vehicle panels and bumpers without stretching or distortion, and maintains its dimensional accuracy without shrinkage or edge curl over 5 to 7 years of outdoor exposure. Calendered vinyl is the economical choice for flat surface indoor and short-term outdoor applications where 3-to-5-year performance meets the project requirements. Polyester film provides superior chemical and heat resistance for industrial equipment and laboratory surface decal applications. We recommend and supply the appropriate material grade for each decal application based on surface type, exposure conditions, and expected lifespan.</p>
              
              <h3>Printing Accuracy and Color Fidelity for Decals</h3>
              <p>Decals function as brand ambassadors at distances — on vehicles passing in traffic, on storefronts viewed from across the street, on equipment seen across a warehouse floor. Color accuracy and contrast at distance are therefore critical to decal effectiveness. Our decal printing uses UV-resistant ink systems with color management workflows that maintain accurate Pantone color matching and maximum contrast for visibility in bright outdoor environments. Photographic imagery reproduces with rich tonal depth. Graphics with fine lines, small typography, and complex color fields print with precision and clarity. White underbase printing for transparent vinyl decals ensures color accuracy without substrate color interference. High-resolution output at large format sizes maintains print sharpness and professional quality at every viewing distance.</p>
              
              <h3>Application Surface Compatibility and Adhesive Performance</h3>
              <p>Decal adhesive selection is critical to achieving the intended permanence and adhesion strength for each application. Our permanent adhesive decals are formulated for long-term adhesion to painted metal, glass, powder-coated surfaces, plastic, and textured materials found on commercial vehicles, equipment, and signage substrates. Repositionable adhesive decals allow adjustment during application and clean removal when the decal program ends, ideal for leased vehicles and temporary promotional applications. Removable decals clean off smooth surfaces without leaving adhesive residue. High-tack decals for textured or polypropylene surfaces grip surfaces where standard adhesives fail. Easy-apply micro-air-channel adhesive reduces installation bubbles for large decal applications, making professional installation faster and more reliable for fleet programs.</p>
              
              <h3>Custom Shapes, Sizes, and Production Formats</h3>
              <p>Decals are produced in virtually any custom shape from geometric panels to intricate custom contours following logo silhouettes, mascot shapes, or complex graphic outlines. Large format decals for vehicle doors, hoods, and trailers are produced on precision equipment maintaining exact dimensional accuracy at sizes up to full-vehicle wrap panels. Medium format decals for equipment, storefront windows, and point-of-purchase displays balance visual impact with manageable application dimensions. Small format decals for helmets, laptops, and promotional distribution are die-cut to precise contours with easy-peel liner backing. Multi-panel decal kits coordinate multiple individual pieces into complete graphic programs for consistent vehicle or storefront application across fleets or retail locations.</p>
              
              <h3>Fleet Programs and High-Volume Decal Supply</h3>
              <p>Commercial fleet operators, franchise systems, government agencies, and large retailers require consistent decal supply across multiple vehicles, locations, or seasonal programs. Our fleet decal production capabilities handle high-volume, consistent supply with exact color matching across large production runs and reorders months or years later. Lot tracking and quality control documentation ensures every decal order meets the specification of the first approved sample. Master templates ensure dimensional consistency across different vehicle makes and models. We manage the production, quality, and supply chain of decal programs for large organizations as a reliable, long-term decal manufacturing partner committed to brand consistency at every scale of your operation.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedProductStickersLabels />

      <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
        <div className="container mx-auto px-[30px] relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Craftsmanship, speed, and reliability that makes your brand unforgettable.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-5">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Outdoor-Grade Vinyl Construction</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Cast vinyl decals with UV-resistant inks and laminate coatings are rated for 5 to 7 years of outdoor exposure, maintaining vivid color and clean edges on vehicle graphics, building signage, and equipment branding without fading or edge lifting.</p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-100" />
              
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Precision Multi-Layer Registration</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Complex decal designs with multiple color layers, fine detail, and exact cut lines are produced with precise registration between print and cut, ensuring vector-sharp edges, accurate color overlay, and professional graphic quality on every decal produced.</p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-100" />
              
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Transfer and Static Cling Options</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Transfer decals allow precise positioning of complex text and graphics. Static cling film adheres to glass without adhesive for temporary window displays. Application tape is included with transfer decals for accurate positioning before final adhesion on any surface.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={heroImg} alt="Premium Decals" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white font-bold text-lg mb-1">Trusted by 500+ Brands</p>
                  <p className="text-white/75 text-sm">Delivering premium labels across North America</p>
                </div>
              </div>
              <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
              </div>
              <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                <p className="text-2xl font-bold text-emerald-500 leading-none">8-10</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl">
              <img src={heroImg} alt="Differentiate Decals" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Differentiate Your <span className="text-primary">Brand</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our custom decals serve vehicle fleet managers, retail marketing teams, event organizers, and product manufacturers who need graphics that communicate brand identity with the impact and durability of true commercial sign-quality production. From a single vehicle wrap graphic to thousands of fleet identification decals, we deliver graphical sharpness, color accuracy, and adhesive performance that represents your brand at its absolute best in every environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                {[
                  {
                    id: "item-1",
                    q: "How long do outdoor decals last?",
                    a: "Cast vinyl decals with UV-resistant inks and laminate protection are rated for 5 to 7 years outdoor durability on vehicle and equipment surfaces. Calendered vinyl decals provide 3 to 5 years of outdoor performance for shorter-term campaigns and seasonal signage applications."
                  },
                  {
                    id: "item-2",
                    q: "Can decals be applied to vehicle paint?",
                    a: "Yes. Our cast vinyl decals with removable or permanent adhesive are designed for painted vehicle surfaces. Removable adhesive allows residue-free removal after the campaign period. Permanent adhesive is for long-term fleet identification needing maximum bond strength."
                  },
                  {
                    id: "item-3",
                    q: "Do you produce window decals?",
                    a: "Yes. We produce glass-mountable decals in standard adhesive-back, static cling, and perforated window film formats, enabling front-facing, back-facing, or see-through window graphics for retail storefronts, vehicle windows, and interior glass partition applications."
                  },
                  {
                    id: "item-4",
                    q: "What is the difference between a decal and a sticker?",
                    a: "Decals are typically larger format, often used for vehicle, window, or equipment graphics applications, and frequently use transfer application. Stickers are self-adhesive labels applied directly from backing paper, generally smaller and used for product, promotional, and personal labeling purposes."
                  },
                  {
                    id: "item-5",
                    q: "Can decals be produced with custom shapes?",
                    a: "Yes. We produce decals in any custom shape using precision die-cutting or contour cutting equipment, with shapes ranging from simple rectangles to complex logo silhouettes, vehicle body contours, and architectural graphic forms for any application surface."
                  }
                ].map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 transition-all">
                    <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                      <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                      <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                        <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                        <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 text-sm">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img src={FAQimage} alt="FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default Decals;