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
import heroImg from "@/assets/shape-style/stickers-and-labels/lotion-labels.webp";

const faqItems = [
  {
    id: "item-1",
    q: "Are lotion labels waterproof?",
    a: "Yes. BOPP polypropylene lotion labels with laminate coatings are fully waterproof, resisting bathroom humidity, condensation, and contact with wet hands and lotion residue while maintaining adhesion and print clarity throughout the entire product use lifecycle.",
  },
  {
    id: "item-2",
    q: "What material is best for pump bottle lotion labels?",
    a: "We recommend clear or white BOPP with cosmetic-grade permanent adhesive. Clear BOPP creates the premium no-label look popular in luxury skincare. White BOPP provides maximum print vibrancy for full-color lotion branding on any pump or squeeze bottle format.",
  },
  {
    id: "item-3",
    q: "Can lotion labels wrap around cylindrical bottles?",
    a: "Yes. Wraparound lotion labels with precisely calculated widths for standard and custom cylindrical pump and squeeze bottles ensure a seamless professional wrap with clean edge meeting and no gap or overlap on any lotion bottle geometry or diameter.",
  },
  {
    id: "item-4",
    q: "Do lotion labels need ingredient information?",
    a: "Yes. Cosmetic lotion products must list INCI ingredients in descending concentration order. We design and print complete compliant ingredient panels, application instructions, and regulatory marks formatted to FDA standards for all domestic and international distribution markets.",
  },
  {
    id: "item-5",
    q: "What finish gives lotion labels a luxury feel?",
    a: "Soft-touch matte lamination creates a velvety feel matching premium lotion textures. Spot UV on matte highlights brand names beautifully. Gold foil adds luxury metallic detail. Together these finishes create lotion labels that feel as premium as the skincare product inside.",
  },
];

const LotionLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    { src: heroImg, alt: "Lotion Labels - View 1" },
    { src: heroImg, alt: "Lotion Labels - View 2" },
    { src: heroImg, alt: "Lotion Labels - View 3" },
    { src: heroImg, alt: "Lotion Labels - View 4" },
    { src: heroImg, alt: "Lotion Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      {/* ── SEO ── */}
      <Helmet>
        <title>Custom Lotion Labels | CustomPackMakers</title>
        <meta
          name="description"
          content="Order custom Lotion Labels wholesale. Premium adhesive, durable finishes, fast turnaround."
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
                <BreadcrumbPage>Lotion Labels</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left — Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                <span className="text-primary">Custom</span> Lotion Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Moisture-proof custom lotion labels with elegant cosmetic finishes, waterproof BOPP
                stock, and premium adhesive for pump bottles, squeeze tubes, and lotion jar
                branding.
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

            {/* Right — Hero Image */}
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
              <img
                src={heroImg}
                alt="Lotion Labels Hero"
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
            Custom Lotion Labels Built for Brands That Demand Quality
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our lotion labels are built for wet bathroom environments where pump bottles, squeeze
            dispensers, and wide-mouth jars are handled repeatedly with wet and product-covered
            hands. BOPP polypropylene with permanent waterproof adhesive and moisture-resistant
            lamination stays bonded and visually pristine through bathroom humidity, condensation,
            and product contact throughout the full use life. Clear BOPP creates a premium no-label
            look on transparent lotion bottles. Soft-touch matte lamination mirrors the luxurious
            feel of the lotion inside, establishing a cohesive sensorial brand experience. Full
            Pantone-matched color printing and INCI ingredient compliance formatting ensure your
            skincare products look premium and meet regulatory requirements in every market.
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

            {/* Quote Card */}
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
            The Complete Guide to Premium Lotion Labels
          </h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>Why Lotion Labels Require Specialized Construction</h3>
              <p>
                Lotion products live in uniquely challenging label environments. They sit in
                bathrooms with high humidity and steam exposure, get handled with wet or
                product-coated hands, are compressed and squeezed repeatedly over their product
                lifecycle, and often have droplets of the lotion itself running down the sides.
                Standard paper labels fail quickly in these conditions, developing bubbles, edge
                lifting, ink smearing, and catastrophic peeling that destroys brand presentation on
                a product consumers handle multiple times daily. Our custom lotion labels are
                manufactured specifically for these demanding bathroom and body care environments
                using synthetic or specially coated paper substrates with moisture-resistant
                adhesion, waterproof inks, and protective laminate coatings that maintain
                professional appearance through every use cycle.
              </p>

              <h3>Substrate and Material Selection for Lotion Containers</h3>
              <p>
                The right label material for lotion packaging depends on the container type and
                brand positioning strategy. White BOPP polypropylene is our most popular lotion
                label substrate — it provides excellent moisture resistance, flexibility to conform
                to squeezable plastic tube shapes without cracking or wrinkling, and a bright,
                high-contrast printing surface that makes brand graphics and ingredient text appear
                vivid and clear. Clear BOPP creates a premium no-label look on amber, frosted, or
                colored plastic bottles where the container itself is part of the aesthetic. White
                polyester provides superior durability and chemical resistance for lotion products
                with high concentration active ingredients, acids, or exfoliants that might interact
                with lower-grade label materials over time. We match the substrate specification to
                your container type and lotion formulation.
              </p>

              <h3>Adhesive Performance on Lotion Bottle Surfaces</h3>
              <p>
                Lotion bottles present varied adhesion challenges. High-density polyethylene squeeze
                tubes require high-tack adhesive formulations that overcome the low-energy surface
                energy of HDPE plastic to prevent edge lifting and tunneling. PET plastic bottles
                offer better adhesive anchorage but still benefit from moisture-resistant adhesive
                formulations given their bathroom environment. Glass lotion jars require adhesive
                that maintains bond integrity even after condensation cycles and partial immersion.
                Our adhesive portfolio is matched to each lotion container substrate, tested for
                peel strength and long-term bond retention in high-humidity bathroom conditions on
                every material combination we supply. Zero adhesive failures on your lotion labels
                is the goal on every order.
              </p>

              <h3>Print Quality for Lotion Label Brand Positioning</h3>
              <p>
                In the competitive personal care and body care category, lotion label design and
                print quality are primary purchasing drivers. Consumers make split-second brand
                judgments based on label aesthetics at the point of sale and then reinforce those
                perceptions every time they use the product. Our lotion labels are produced with
                full-color CMYK printing that reproduces photographic ingredient imagery, brand
                photography, and complex gradient artwork with smooth, accurate color rendering.
                Pantone-matched spot color printing ensures your specific brand hues hit their exact
                values across production runs. Metallic foil accents, spot UV coating on logos, and
                soft-touch matte lamination all communicate premium formulation quality to consumers
                before they ever try the product.
              </p>

              <h3>Specialty Shapes and Wraparound Designs</h3>
              <p>
                Lotion labels are produced in a wide variety of formats to suit different container
                types. Rectangular wraparound labels for tube-style containers provide full
                360-degree brand coverage on the most common lotion packaging format. Front and back
                label pairs on pump bottles allow separation of marketing content from ingredient
                and warning information for cleaner design hierarchy. Custom die-cut shapes for
                lotion bottles and jars create premium differentiation that communicates artisanal
                quality and design investment to consumers. Shrink sleeves for lotion tubes
                eliminate the visible edge of traditional labels for seamless brand immersion across
                the entire container surface. We produce any lotion label format in any size and
                custom die-cut configuration.
              </p>

              <h3>Regulatory Compliance for Lotion Labels</h3>
              <p>
                Lotion products sold as cosmetics in the United States and Canada require ingredient
                declaration in INCI nomenclature order listing, net weight or volume, manufacturer
                contact information, and appropriate warnings and directions for use. FDA compliance
                is non-negotiable for lotion products in regulated categories. Our high-resolution
                printing capabilities render required text blocks — ingredient declarations, net
                weight statements, allergy warnings, and directions — at type sizes that meet
                regulatory legibility requirements while maintaining the design aesthetic of your
                premium lotion label. We work with your labeling requirements specification and can
                provide compliance printing checks to ensure all mandated information is present and
                legible on approved label artwork before production begins.
              </p>

              <h3>Order Quantities and Production Timeline</h3>
              <p>
                We produce custom lotion labels for brands at every scale from emerging artisan body
                care makers ordering small initial quantities to established personal care brands
                requiring sustained high-volume supply. Digital production technology makes
                short-run lotion labels economically accessible with no high setup costs penalizing
                small orders. High-volume flexographic production delivers the best per-unit
                economics for established brands with high lotion label consumption. Our standard
                production lead time is 8 to 10 business days with expedited options for urgent
                needs. We ship lotion labels on rolls with standard core sizes, in individual sheet
                pack formats, or as fan-fold stacks compatible with your application equipment
                workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      <RelatedProductStickersLabels />

      {/* ── Why Brands Choose Us ── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#fafafa 0%,#f4f6ff 60%,#f0fdf8 100%)" }}
      >
        <div className="container mx-auto px-[30px] relative z-10">
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
            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Waterproof Bathroom Durability
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Lotion containers live in humid bathrooms and are handled with wet hands
                    constantly. Our waterproof BOPP stock and moisture-resistant coatings prevent
                    peeling, wrinkling, and print damage, maintaining label integrity throughout
                    the entire product use period in any environment.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Feature 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Premium Skincare Finish Options
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Soft-touch matte creates a velvety luxury feel matching premium lotion
                    positioning. Clear BOPP delivers an elegant no-label look. Spot UV highlights
                    brand marks against matte backgrounds. Foil accents communicate premium
                    skincare quality to discerning beauty market consumers.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    INCI Compliance Printing
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Lotion products require complete INCI ingredient declarations. We print full
                    ingredient lists, usage instructions, net weight, and manufacturer details with
                    typography formatted to FDA cosmetic regulations for compliant retail
                    distribution in domestic and international markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img src={heroImg} alt="Premium Lotion Labels" className="w-full h-full object-cover" />
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

      {/* ── Differentiate Section ── */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl">
              <img
                src={heroImg}
                alt="Differentiate Lotion Labels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Differentiate Your <span className="text-primary">Brand</span> From Others
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our lotion labels combine waterproof durability with the premium aesthetic quality
                that skincare brands need to compete in the beauty market. Material knowledge and
                finish expertise help your lotion products earn specialty retail placement while
                compliance printing ensures regulatory requirements are met in every sales channel
                you operate through.
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
            <div className="relative w-full max-md mx-auto aspect-square rounded-2xl overflow-hidden">
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

export default LotionLabels;