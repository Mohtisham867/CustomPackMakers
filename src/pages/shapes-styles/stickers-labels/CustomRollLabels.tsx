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
import FAQimage from "@/assets/FAQ-image.png";
import heroImg from "@/assets/stickers-and-labels/custom-roll-labels.webp";

const CustomRollLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = [
    { src: heroImg, alt: "Custom Roll Labels - View 1" },
    { src: heroImg, alt: "Custom Roll Labels - View 2" },
    { src: heroImg, alt: "Custom Roll Labels - View 3" },
    { src: heroImg, alt: "Custom Roll Labels - View 4" },
    { src: heroImg, alt: "Custom Roll Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Custom Roll Labels | CustomPackMakers</title>
        <meta name="description" content="Order custom Custom Roll Labels wholesale. Premium adhesive, durable finishes, fast turnaround." />
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
                <BreadcrumbPage>Custom Roll Labels</BreadcrumbPage>
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
                <span className="text-primary">Custom</span> Custom Roll Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Efficient custom roll labels for high-volume production lines featuring automatic application compatibility, consistent print quality, and durable adhesive for labeling machines and dispensers.
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
              <img src={heroImg} alt="Custom Roll Labels Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Custom Custom Roll Labels Built for Brands That Demand Quality</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom roll labels are the professional labeling solution for brands and manufacturers running high-volume production lines where individual sheet labels create bottlenecks. Produced on standard roll formats with core sizes compatible with most automated label applicator machines, our roll labels feed smoothly through production equipment without jamming, double-feeding, or misapplication. Full-color printing with consistent density across the entire roll ensures the first label applied matches the last with identical color, adhesion, and die-cut precision. Available in any shape and size on rolls of 250 to tens of thousands of labels, with permanent, removable, or freeze-resistant adhesive matched to your product and container surface. Thermal transfer overprint compatible gaps and barcodes available.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">The Complete Guide to Premium Custom Roll Labels</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>Why Roll Format Is the Industry Standard for High-Volume Labeling</h3>
              <p>Custom roll labels are the production format of choice for businesses that apply labels at volume — whether on a manual application bench or through automated label applicator machinery integrated into a packaging line. Roll format delivers labels in a continuous strip on a liner backing, ready for fast, consistent application without the sorting and handling overhead of sheet-format labels. Our custom roll labels are manufactured with precise core specifications, unwind direction specifications, and liner thickness options to integrate seamlessly with your specific label applicator equipment model. From hand-apply bench operations applying hundreds of labels per hour to high-speed automated lines applying thousands per minute, roll labels are the format that makes professional production-scale labeling possible.</p>
              
              <h3>Roll Label Specifications for Equipment Compatibility</h3>
              <p>Roll labels must meet exact technical specifications to work reliably with your label applicator equipment. Core diameter is the first critical dimension — the most common industry core sizes are 3-inch and 1-inch diameter cores, but specialty sizes exist for specific applicator models. Unwind direction — the orientation in which labels unwind from the roll — must match your applicator's feed geometry to prevent mis-registration and application errors. Maximum roll diameter must fit within your applicator's unwind spool maximum capacity. Label gap between adjacent labels must meet your sensor's detection tolerance. We manufacture custom roll labels to any combination of these specifications, producing rolls that are drop-in compatible with your existing label applicator equipment without modification or adjustment to your packaging line workflow.</p>
              
              <h3>Material Options for Roll Label Applications</h3>
              <p>Roll labels are available in the full range of label substrate options — white gloss and matte paper for indoor and ambient applications, BOPP polypropylene for moisture-resistant food, beverage, and cosmetic labeling, polyester for chemical and temperature resistance in industrial environments, clear BOPP for no-label-look glass container applications, and kraft paper for natural food and artisan product positioning. Each substrate is available with permanent, removable, high-tack, freezer-grade, or repositionable adhesive formulations matched to your container surface and application environment. The substrate-adhesive combination is specified during quoting to ensure your roll labels achieve the adhesion performance and durability your product requires in its real-world distribution and use environment.</p>
              
              <h3>Printing Quality on Roll Labels</h3>
              <p>Roll labels produced for high-volume application programs must maintain consistent print quality across the entire roll length — from the first label to the last. Our digital and flexographic roll label production maintains color calibration throughout long production runs, ensuring print quality consistency that keeps your brand presentation uniform across every labeled unit regardless of where it falls in a production batch. Pantone color matching ensures brand-critical colors remain accurate across multiple reorders. High-resolution printing reproduces fine text, barcodes, QR codes, and detailed graphics with reliable accuracy. In-process quality checks during production catch any deviations before they affect your inventory, maintaining the production-ready quality standards that automated labeling operations require.</p>
              
              <h3>Variable Data and Serialized Roll Labels</h3>
              <p>Many roll label applications require variable data — unique information that changes from label to label within a roll. Lot codes, batch numbers, use-by dates, serial numbers, and personalized promotional codes all require variable data printing capabilities that standard fixed-content label production cannot accommodate. Our digital roll label production platform supports variable data printing with exact sequential control, ensuring codes are applied in the precise order your tracking system requires. QR codes with unique URLs for each label unit support serialized authentication, consumer engagement programs, and supply chain traceability. We produce variable data roll labels with the accuracy and reliability that regulated food, pharmaceutical, and consumer electronics labeling programs demand.</p>
              
              <h3>Specialty Finishes and Label Enhancements for Roll Labels</h3>
              <p>Roll labels can incorporate the full range of specialty finishes and enhancements available in sheet label production. Gloss lamination protects against scuffs and moisture while intensifying color vibrancy. Matte lamination creates upscale understated packaging aesthetics. Soft-touch matte adds a premium tactile dimension. Security features including holographic overlaminates, tamper-evident voids, and security cuts detect unauthorized removal and communicate authenticity for high-value product applications. Extended content labels with fold-out multi-page booklet panels include extensive regulatory or instructional information on small containers without sacrificing primary branding space. All specialty finishes are compatible with roll format production and automated application processes.</p>
              
              <h3>Order Quantities, Pricing, and Supply Management</h3>
              <p>Roll label economics improve significantly with volume. Small-quantity digital roll label production is accessible at low minimum order quantities for startups, product testing, and seasonal SKU variations. As order volumes increase, economies of scale drive per-unit costs down significantly through flexographic production. Blanket purchase agreements with scheduled release shipments maintain your roll label inventory without requiring large storage commitments or tying up capital in excess inventory. We manage roll label supply programs for brands across all production scales, coordinating reorder timing with your production schedules to ensure roll label availability always stays ahead of your inventory consumption rate. Contact our team to discuss volume pricing and supply program options for your specific roll label requirements.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Application Ready</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Our roll labels are produced on standard core sizes with consistent label gap spacing calibrated for your specific applicator machine, ensuring smooth continuous feeding through automated production lines at high speed without misapplication or jamming downtime.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Consistent Roll Quality</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Color density, adhesion, and die-cut precision are maintained from the first label on the roll to the last. Our production controls eliminate variation within rolls and between rolls on the same order, ensuring every product in your production run is labeled identically.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Any Label Shape and Size</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Roll labels are available in rectangles, circles, ovals, and custom die-cut shapes in any dimension required for your container format, with roll length and quantity options configured to minimize changeover frequency on your specific production line speed and output.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={heroImg} alt="Premium Custom Roll Labels" className="w-full h-full object-cover" />
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
              <img src={heroImg} alt="Differentiate Custom Roll Labels" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Differentiate Your <span className="text-primary">Brand</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our custom roll labels serve food and beverage producers, cosmetics manufacturers, supplement companies, industrial packagers, and any brand operating a production line where labeling efficiency and consistency are critical business metrics. We consult on roll specifications, core size, label gap, and material selection to maximize application performance on your specific equipment before production begins.
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
                    q: "What core sizes are available for roll labels?",
                    a: "We produce roll labels on 1-inch, 3-inch, and 4-inch core sizes compatible with most commercial label applicator machines. Custom core sizing is available for specialized equipment. Please specify your applicator machine model for precise compatibility verification."
                  },
                  {
                    id: "item-2",
                    q: "Can roll labels be printed with variable data?",
                    a: "Yes. Variable data roll labels with unique barcodes, QR codes, serial numbers, lot codes, and expiration dates are available with our digital printing systems, enabling unique identification on each label within a single production roll run."
                  },
                  {
                    id: "item-3",
                    q: "What adhesive options are available for roll labels?",
                    a: "Permanent, removable, low-temperature, high-temperature, freezer-grade, and aggressive adhesive formulations are available for roll labels. We match adhesive to your container material and environmental conditions to ensure optimal production line application performance."
                  },
                  {
                    id: "item-4",
                    q: "Do roll labels work with thermal transfer printers?",
                    a: "Yes. We produce roll labels with thermal transfer overprint compatible face stocks for brands overprinting variable data including dates, batch codes, and barcodes with in-house thermal transfer printers before or after product filling and capping operations."
                  },
                  {
                    id: "item-5",
                    q: "What is the minimum roll label order?",
                    a: "We produce roll labels from 500 units per roll for short-run digital production through to millions of units per order for high-volume flexographic production, with pricing that reflects significant economies of scale at larger quantities and repeat order commitments."
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

export default CustomRollLabels;