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
import heroImg from "@/assets/stickers-and-labels/color-labels.webp";

const ColorLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = [
    { src: heroImg, alt: "Color Labels - View 1" },
    { src: heroImg, alt: "Color Labels - View 2" },
    { src: heroImg, alt: "Color Labels - View 3" },
    { src: heroImg, alt: "Color Labels - View 4" },
    { src: heroImg, alt: "Color Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Color Labels | CustomPackMakers</title>
        <meta name="description" content="Order custom Color Labels wholesale. Premium adhesive, durable finishes, fast turnaround." />
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
                <BreadcrumbPage>Color Labels</BreadcrumbPage>
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
                <span className="text-primary">Custom</span> Color Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Full-color custom labels with vivid CMYK printing, premium high-fidelity color matching, and specialty finishes for vibrant branding across product packaging and promotional labeling.
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
              <img src={heroImg} alt="Color Labels Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Custom Color Labels Built for Brands That Demand Quality</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom color labels are produced to the highest standards of color reproduction for brands where visual vibrancy is a primary communication tool. Whether you need photographic food imagery, vivid cosmetics brand colors, vibrant beverage packaging, or eye-catching promotional stickers, our full-color CMYK and extended color gamut printing delivers stunning accuracy on gloss, matte, or specialty label stocks. Pantone color matching ensures your specific brand palette reproduces with laboratory-level consistency across every production run. High-gloss lamination amplifies color richness to maximum visual impact. Specialty metallic and fluorescent ink options extend your color range beyond standard CMYK for truly unique packaging effects that competitors using standard label printing cannot replicate in retail environments.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">The Complete Guide to Premium Color Labels</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>The Strategic Value of Color-Coded Label Systems</h3>
              <p>Color labels — labels designed around specific color coding as a primary organizational or identification system — serve critical functions in inventory management, product differentiation, compliance documentation, medical and laboratory organization, food safety dating, and warehouse logistics. The strategic application of color in labeling systems allows humans to process information faster than text alone, reducing errors, improving workflow speed, and ensuring critical information is visible at a glance without requiring detailed reading at the point of use. Our custom color labels are produced with precise, consistent color accuracy — critical for systems where a specific color has a specific meaning and deviation creates confusion, errors, or compliance failures in the operations they support.</p>
              
              <h3>Color Consistency Across Large Label Production Runs</h3>
              <p>Color label systems fail when colors drift between production batches, making labels from different print runs visually inconsistent and undermining the organizational clarity the system is designed to deliver. When a red label means "priority handling required" or a yellow label means "hazardous material," the red must be exactly the same shade of red on labels printed months apart. Our Pantone-matched color management workflow ensures exact color reproduction consistency across production runs, reorders, and different print batch dates, maintaining the color integrity that makes your color coding system reliable over time. We document the Pantone or CMYK specifications for every color in your label program and reference them on every reorder to eliminate drift.</p>
              
              <h3>Color Label Materials for Every Application</h3>
              <p>Color labels are applied across a remarkable variety of surfaces and environments. Office and warehouse inventory labels on cardboard boxes and bins require durable but economical paper stock with good print contrast. Laboratory specimen labels on glass tubes and plastic containers need synthetic stock with chemical and moisture resistance. Cold storage food dating labels must maintain color brightness and adhesion at refrigerator and freezer temperatures. Outdoor equipment and asset labels exposed to UV, weather, and physical abrasion require weatherproof vinyl with UV-resistant color inks. Medical and pharmaceutical color coding must meet regulatory requirements for medical-grade label materials. We specify and supply the correct substrate for each color label application environment, ensuring performance matches the demands of real operational conditions.</p>
              
              <h3>Color Printing Technology and Vibrancy</h3>
              <p>Color vibrancy is the currency of effective color labeling — a faded, muddy, or inaccurate color undermines the entire color coding system's effectiveness. Our color label printing uses high-resolution digital printing with calibrated ink systems that deliver bright, saturated, consistent colors in every CMYK or spot color the labeling system requires. Fluorescent color options create high-visibility labels for safety and warning applications where maximum attention-capture at distance is functionally important. Metallic color labels with gold or silver base create premium tier product differentiation in retail contexts where color communicates quality positioning. Pantone color precision is verified on color proofs before production approval on every color label program we manufacture.</p>
              
              <h3>Custom Die-Cut Color Labels for Organization Systems</h3>
              <p>Color labels in custom shapes — circles, squares, rectangles, arrows, diamonds, and custom organizational icons — create intuitive visual coding that users navigate faster than text-only systems. Arrow-shaped directional color labels communicate orientation instantly. Circle dot labels fit compactly on product lids and file folders. Custom-shaped flag labels extend past the edge of containers for grab-and-scan accessibility in dense file systems. Rectangular color panel labels integrate branding and text content with bold color backgrounds. We produce any combination of color and shape in the custom die-cut format your organizational or product differentiation system requires for maximum operational effectiveness at the point of use.</p>
              
              <h3>Retail Product Line Color Coding for Brand Architecture</h3>
              <p>Consumer brands frequently use color labels to differentiate product lines, strength levels, flavor varieties, and size tiers within a brand portfolio. Health and wellness brands color-code by health benefit category. Food brands differentiate flavors through bright color panel labels. Cleaning product lines use color to signal fragrance and strength. Hair care lines differentiate by hair type and treatment category. Paint brands organize by color family. Our product line color label programs maintain precise color standards across all SKUs, ensuring the consumer-facing color differentiation system that communicates your brand architecture remains visually consistent and shopper-navigable at retail across the full range of products in your branded portfolio.</p>
              
              <h3>Volume, Lead Times, and Color Label Supply Management</h3>
              <p>Color label programs for large operational systems — hospitals, warehouses, food manufacturers, government facilities — require reliable, consistent supply with no color drift between deliveries. We manage color label supply programs with documented color standards, approved production samples, and quality control checks on every production run to ensure each batch matches the established specification precisely. Small-quantity digital production allows color label system testing and small department or pilot program rollouts economically. Large-volume production ensures cost efficiency for facility-wide implementations. Our standard lead time is 8 to 10 business days with expedited options for urgent operational needs. We ship on rolls, in sheet format, or as fan-fold stacks suited to your dispensing equipment and workflow requirements.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Maximum Color Vibrancy</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Our high-resolution full-color print process with extended color gamut technology reproduces the broadest and most saturated color range available in label printing, giving color-forward brands the visual intensity they need to dominate retail shelf presence.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Pantone Brand Color Matching</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Color consistency is non-negotiable for brand integrity. Our Pantone matching system reproduces your specific brand colors with laboratory-level accuracy across every production run, ensuring color labels match your packaging, marketing materials, and digital brand assets precisely.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Specialty Color Effects</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Metallic inks create premium gold, silver, and copper tones. Fluorescent inks deliver electric neon vibrancy. Thermochromic inks change color with temperature. These specialty effects extend your visual palette far beyond standard CMYK capabilities for truly distinctive label differentiation.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={heroImg} alt="Premium Color Labels" className="w-full h-full object-cover" />
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
              <img src={heroImg} alt="Differentiate Color Labels" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Differentiate Your <span className="text-primary">Brand</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our color labels serve brands for whom visual vibrancy is the primary purchase driver. From photographic food packaging to vibrant cosmetics and specialty beverage labels, our color expertise delivers the maximum print intensity that captures attention, earns shelf placement, and drives consumer purchase decisions across every retail category you compete in.
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
                    q: "What color printing technology do you use for color labels?",
                    a: "We use high-resolution digital and offset CMYK printing with extended color gamut technology on our color labels, delivering broader and more saturated color reproduction than standard four-color printing for maximum visual impact across food, cosmetics, and beverage packaging."
                  },
                  {
                    id: "item-2",
                    q: "Can you match specific Pantone colors exactly?",
                    a: "Yes. Our Pantone matching system reproduces your specific brand Pantone colors with precise accuracy on gloss, matte, and specialty label stocks. Press proofs are provided before full production to verify color accuracy meets your approved brand standards."
                  },
                  {
                    id: "item-3",
                    q: "What finishes enhance full-color label vibrancy?",
                    a: "High-gloss lamination amplifies color saturation to maximum visual intensity. Satin lamination balances vibrancy with elegance. Matte lamination creates sophisticated contrast with vivid printed areas. Spot UV over specific color elements adds dimensional gloss accents against quieter backgrounds."
                  },
                  {
                    id: "item-4",
                    q: "Can color labels include metallic or fluorescent inks?",
                    a: "Yes. Gold, silver, copper, and rose gold metallic inks add premium reflective effects. Fluorescent inks deliver electric neon vibrancy beyond standard CMYK color gamut. These specialty inks are available individually or combined with standard CMYK printing on any label format."
                  },
                  {
                    id: "item-5",
                    q: "What is the minimum order for full-color custom labels?",
                    a: "We accept full-color custom label orders from 250 units via digital printing for small brands and product launches, scaling to millions of units via offset and flexographic production for national distribution with consistent color accuracy across all quantities."
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

export default ColorLabels;