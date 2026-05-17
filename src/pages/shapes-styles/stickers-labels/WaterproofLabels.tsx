import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductStickersLabels } from "@/components/RelatedProductStickersLabels";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import FAQimage from "@/assets/FAQ-image.webp";
import heroImg from "@/assets/shape-style/stickers-and-labels/waterproof-labels.webp";

const faqItems = [
  {
    id: "item-1",
    q: "How waterproof are your waterproof labels?",
    a: "Our synthetic polypropylene and polyester waterproof labels with laminate coatings resist complete submersion in water for extended periods, maintaining adhesion and print legibility. They are rated for dishwasher-safe temperatures in specific configurations on request.",
  },
  {
    id: "item-2",
    q: "What surfaces bond best with waterproof labels?",
    a: "Waterproof labels bond to glass, plastic, metal, and coated cardboard surfaces with our permanent or repositionable waterproof adhesive formulations, tested on each common container substrate for optimal peel strength and long-term bond performance in wet conditions.",
  },
  {
    id: "item-3",
    q: "Can waterproof labels survive a dishwasher?",
    a: "Our high-temperature waterproof labels using polyester stock with high-tack adhesive can withstand dishwasher cycles for applications on reusable containers. Specify dishwasher-safe requirements when ordering so we can select the correct substrate and adhesive combination for your application.",
  },
  {
    id: "item-4",
    q: "Are waterproof labels available in clear?",
    a: "Yes. Clear BOPP or polyester waterproof labels create a premium no-label look on glass and transparent containers, ideal for cosmetic, beverage, and specialty food products where the container itself is part of the premium aesthetic and brand presentation.",
  },
  {
    id: "item-5",
    q: "What industries use waterproof labels most?",
    a: "Beverage, wine and spirits, cosmetics, soap and personal care, seafood and refrigerated food, swimming pool chemicals, marine equipment, laboratory chemicals, and outdoor industrial equipment are the primary industries using our waterproof synthetic label products.",
  },
];

const WaterproofLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    { src: heroImg, alt: "Waterproof Labels - View 1" },
    { src: heroImg, alt: "Waterproof Labels - View 2" },
    { src: heroImg, alt: "Waterproof Labels - View 3" },
    { src: heroImg, alt: "Waterproof Labels - View 4" },
    { src: heroImg, alt: "Waterproof Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">

      {/* ── SEO ── */}
      <Helmet>
        <title>Custom Waterproof Labels | CustomPackMakers</title>
        <meta
          name="description"
          content="Order custom Waterproof Labels wholesale. Premium adhesive, durable finishes, fast turnaround."
        />
      </Helmet>

      <Header />

      {/* ── Breadcrumb ── */}
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
                <BreadcrumbPage>Waterproof Labels</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left — copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-primary rounded-full" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                <span className="text-primary">Custom</span> Waterproof Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Durable custom waterproof labels with synthetic material construction, specialized
                adhesive, and moisture-proof printing for bottles, containers, and products exposed
                to water and humidity.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:-translate-y-1 transition-all"
                onClick={() =>
                  document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get a Quote
              </Button>
            </div>

            {/* Right — hero image */}
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
              <img
                src={heroImg}
                alt="Waterproof Labels Hero"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Product Overview ── */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-1 bg-primary rounded-full" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Product Overview
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
            Custom Waterproof Labels Built for Brands That Demand Quality
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom waterproof labels are engineered to maintain adhesion, print clarity, and
            professional appearance through direct water exposure, immersion, humidity, condensation,
            and cleaning that destroy standard paper labels within minutes. Produced on white or
            clear polypropylene or polyester synthetic stock with waterproof adhesive and laminate
            coatings, our waterproof labels are used on wine bottles in ice buckets, beverage
            containers in coolers, soap and shampoo bottles in showers, aquatic product packaging
            near water, outdoor containers in rain, and industrial equipment in wet manufacturing
            environments. Full-color printing with water-resistant inks and protective lamination
            maintains visual quality through repeated water contact without bleeding, smearing, or
            fading across the full lifecycle of any product.
          </p>
        </div>
      </section>

      {/* ── Quote Form + Image Gallery ── */}
      <section className="py-10 bg-accent/5" id="quote-form">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">

            {/* Gallery */}
            <div className="lg:col-span-7 space-y-6">
              <div
                className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={productImages[selectedImage].src}
                  alt={productImages[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${
                      selectedImage === index
                        ? "border-primary shadow-md ring-2 ring-primary/20"
                        : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Card className="shadow-lg border-slate-200 bg-slate-50/50 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="l" className="text-xs font-semibold text-muted-foreground">
                          L (in)
                        </Label>
                        <Input id="l" type="number" placeholder="4" className="h-9 bg-white" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="w" className="text-xs font-semibold text-muted-foreground">
                          W (in)
                        </Label>
                        <Input id="w" type="number" placeholder="3" className="h-9 bg-white" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="d" className="text-xs font-semibold text-muted-foreground">
                          D (in)
                        </Label>
                        <Input id="d" type="number" placeholder="1" className="h-9 bg-white" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">
                        Quantity
                      </Label>
                      <Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="nm" className="text-xs font-semibold text-muted-foreground">
                        Name
                      </Label>
                      <Input id="nm" type="text" placeholder="Your Name" className="h-9 bg-white" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="em" className="text-xs font-semibold text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="em"
                        type="email"
                        placeholder="email@example.com"
                        className="h-9 bg-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md mt-2"
                    >
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* ── Technical Specs ── */}
      <TechnicalSpecsSection />

      {/* ── SEO Scroll Box ── */}
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-[5vw]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            The Complete Guide to Premium Waterproof Labels
          </h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">

              <h3>Why Waterproof Labels Are Essential for Modern Brands</h3>
              <p>
                Products that face moisture exposure during their lifecycle — beverages chilling in
                ice, soaps in steamy showers, cosmetics on bathroom counters, or outdoor equipment
                in rain — demand labels engineered for those exact conditions. Standard paper labels
                dissolve, bubble, and peel within minutes of water contact, destroying brand
                presentation at the most visible moment. Our custom waterproof labels use synthetic
                polypropylene or polyester substrates combined with moisture-resistant adhesives and
                protective laminate coatings, ensuring they maintain perfect adhesion, clear print,
                and professional appearance through extended water immersion, condensation cycles,
                and high-humidity environments that would immediately ruin conventional labels.
              </p>

              <h3>Substrate and Adhesive Engineering</h3>
              <p>
                The foundation of every effective waterproof label is the substrate and adhesive
                combination. We produce waterproof labels on white BOPP polypropylene, clear BOPP,
                white polyester, and clear polyester stocks — each material offering a different
                performance profile. BOPP provides excellent flexibility and conformability for
                squeezable bottles and pouches. Polyester offers superior rigidity, chemical
                resistance, and temperature performance for industrial containers and laboratory
                applications. Our adhesive formulations include permanent waterproof adhesive for
                long-term bonding through water exposure, removable waterproof adhesive for
                short-term or repositional applications, and ultra-high-tack variants for low-energy
                plastic surfaces like HDPE containers that standard adhesives fail to grip reliably.
              </p>

              <h3>Print Quality That Survives the Elements</h3>
              <p>
                A waterproof label that peels from wet surfaces but maintains ink clarity is still a
                failure. Our waterproof labels use water-resistant ink systems and protective
                overlaminate coatings that prevent ink bleeding, smearing, color migration, and UV
                fading regardless of water exposure. Full-color CMYK and Pantone-matched printing
                reproduces brand colors, photography, and detailed graphics with precision. Gloss
                laminate creates vivid, jewel-toned imagery for premium beverages and cosmetics.
                Matte laminate delivers understated sophistication for artisan products. Soft-touch
                matte coating adds a premium tactile quality that communicates quality through feel
                as well as visual appearance.
              </p>

              <h3>Applications Across Every Industry</h3>
              <p>
                Waterproof labels serve an extraordinary range of industries and products. Beverage
                manufacturers rely on them for glass bottles and cans that spend time in ice buckets,
                coolers, and refrigerated cases. Cosmetic and personal care brands use them for
                shampoo, conditioner, body wash, lotion, and soap products that live in shower
                environments with constant steam and water contact. Aquatic and marine products
                require waterproof labeling as a basic functional requirement. Outdoor equipment and
                industrial machinery exposed to weather, cleaning chemicals, and manufacturing fluids
                demand synthetic label construction that paper stock simply cannot provide. Our
                waterproof label solutions cover all of these applications from a single production
                partner.
              </p>

              <h3>Cold Temperature and Freezer Performance</h3>
              <p>
                Waterproof labels for refrigerated and frozen applications require specialized
                adhesive formulations that maintain bond strength at low temperatures. Standard
                adhesives become brittle and lose peel strength below 40°F, causing labels to lift
                at edges and eventually fall off refrigerator or freezer surfaces. Our
                cold-temperature waterproof adhesives remain flexible and maintain tack from freezer
                temperatures through ambient conditions. This makes our waterproof labels ideal for
                frozen food packaging, refrigerated beverage products, laboratory specimen storage,
                and pharmaceutical products requiring cold chain maintenance throughout their
                lifecycle.
              </p>

              <h3>Custom Shapes and Die-Cut Precision</h3>
              <p>
                Waterproof labels are available in any custom shape including standard rectangles,
                ovals, circles, and complex die-cut contours that mirror your product or brand
                silhouette. Custom shapes reinforce brand personality and differentiate products on
                retail shelves where rectangular labels all blend together. Our precision die-cutting
                equipment produces clean, consistent edges with exact dimensional specifications
                across production runs of any size. Waterproof labels for cylindrical containers
                like bottles are available in wraparound configurations that create 360-degree brand
                coverage, maximizing the premium real estate of every container surface.
              </p>

              <h3>Ordering and Lead Times</h3>
              <p>
                We supply waterproof labels to businesses at every scale from small artisan producers
                ordering a few thousand to large manufacturers requiring millions of units per month.
                Digital printing technology gives small-quantity buyers access to premium waterproof
                label quality at accessible price points. High-volume flexographic and offset
                production drives unit costs down efficiently for large brands with ongoing inventory
                needs. Our standard lead time is 8 to 10 business days with rush production options
                available for urgent requirements. We ship on rolls in standard core sizes compatible
                with common label dispensing and auto-applicator equipment for seamless integration
                into your packaging line.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      <RelatedProductStickersLabels />

      {/* ── Why Choose Us ── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#fafafa 0%,#f4f6ff 60%,#f0fdf8 100%)" }}
      >
        <div className="container mx-auto px-[30px] relative z-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Brands Choose <span className="text-primary">CustomPackMakers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Craftsmanship, speed, and reliability that makes your brand unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Feature list */}
            <div className="space-y-5">

              {/* Feature 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">True Waterproof Construction</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Our waterproof labels use synthetic polypropylene or polyester stock with
                    water-resistant adhesive and laminate coatings that resist complete water
                    immersion, direct spray, condensation cycles, and humidity, maintaining adhesion
                    and print quality in any wet environment.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Feature 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Chemical Resistance</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Waterproof label synthetic substrates resist common cleaning chemicals,
                    sanitizers, alcohol, soaps, and mild solvents, making them suitable for
                    laboratory, food service, cosmetic, and industrial applications where standard
                    paper labels would fail rapidly from chemical contact.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Ice Bucket and Freezer Performance</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Our cold-temperature waterproof adhesive formulations remain flexible and firmly
                    bonded at refrigerator and freezer temperatures and through ice bucket immersion
                    cycles, ensuring wine, beverage, and food labels maintain professional appearance
                    throughout chilled service and storage conditions.
                  </p>
                </div>
              </div>

            </div>

            {/* Image card */}
            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={heroImg}
                  alt="Premium Waterproof Labels"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white font-bold text-lg mb-1">Trusted by 500+ Brands</p>
                  <p className="text-white/75 text-sm">Delivering premium labels across North America</p>
                </div>
              </div>

              {/* Stat badges */}
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

      {/* ── Differentiate section ── */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl">
              <img
                src={heroImg}
                alt="Differentiate Waterproof Labels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Differentiate Your <span className="text-primary">Brand</span> From Others
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our waterproof labels eliminate the embarrassment and brand damage of peeling, soggy,
                or illegible labels on products that encounter water in their normal usage
                environment. From artisan soap makers to industrial equipment manufacturers, we
                produce waterproof labels that maintain professional, readable presentation through
                every real-world condition your products face in use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                {faqItems.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 transition-all"
                  >
                    <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                      <span className="text-left font-semibold text-foreground text-base">
                        {faq.q}
                      </span>
                      <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                        <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                        <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img
                src={FAQimage}
                alt="FAQ"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <BrandRating />
      <QuoteForm />
      <Footer />

    </div>
  );
};

export default WaterproofLabels;