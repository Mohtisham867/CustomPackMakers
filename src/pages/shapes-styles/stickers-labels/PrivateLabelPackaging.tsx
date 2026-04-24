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
import heroImg from "@/assets/stickers-and-labels/private-label-packaging.webp";

const faqItems = [
  {
    id: "item-1",
    q: "What is private label packaging?",
    a: "Private label packaging applies your brand identity to products sourced from third-party manufacturers, transforming commodity goods into your exclusive branded product line. Our labels create compelling brand presence that differentiates your private label products at retail and direct-to-consumer channels.",
  },
  {
    id: "item-2",
    q: "Do you maintain confidentiality for private label clients?",
    a: "Yes. We maintain strict confidentiality for all private label packaging clients, producing labels that carry only your brand identity with no manufacturer references. Non-disclosure agreements are available for clients requiring formal confidentiality protection for their sourcing arrangements.",
  },
  {
    id: "item-3",
    q: "What products work best with private label labeling?",
    a: "Cosmetics, supplements, food products, cleaning supplies, pet care items, and personal care products are the most common private label categories. Virtually any manufactured product in a standard container format can be transformed into a branded private label product with professional custom labeling.",
  },
  {
    id: "item-4",
    q: "Can private label packaging include my own branding and logo?",
    a: "Yes. Private label labels feature your brand name, logo, color system, typography, and all required product information exclusively. No manufacturer branding or generic product identification appears on private label orders, creating a fully proprietary brand experience.",
  },
  {
    id: "item-5",
    q: "What minimum quantities are available for private label labels?",
    a: "We accept private label label orders from 250 units for businesses launching initial product tests through to high-volume production for established private label programs with multiple SKUs across several product categories, all with consistent quality and brand identity accuracy.",
  },
];

const PrivateLabelPackaging = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    { src: heroImg, alt: "Private Label Packaging - View 1" },
    { src: heroImg, alt: "Private Label Packaging - View 2" },
    { src: heroImg, alt: "Private Label Packaging - View 3" },
    { src: heroImg, alt: "Private Label Packaging - View 4" },
    { src: heroImg, alt: "Private Label Packaging - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      {/* ── SEO ── */}
      <Helmet>
        <title>Custom Private Label Packaging | CustomPackMakers</title>
        <meta
          name="description"
          content="Order custom Private Label Packaging wholesale. Premium adhesive, durable finishes, fast turnaround."
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
                <BreadcrumbPage>Private Label Packaging</BreadcrumbPage>
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
              <div className="w-20 h-1.5 bg-primary rounded-full" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                <span className="text-primary">Custom</span> Private Label Packaging
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Custom private label packaging with exclusive branding, premium materials, and
                tailored label designs for businesses building proprietary product lines under
                their own brand identity.
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
                alt="Private Label Packaging Hero"
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
            Custom Private Label Packaging Built for Brands That Demand Quality
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom private label packaging service is designed for businesses that source
            products from manufacturers and need professional branded packaging that presents
            those products as their own exclusive line. Whether you are a retailer building a
            house brand, a subscription box operator creating an exclusive product experience, a
            wellness brand launching a private label supplement line, or a boutique retailer
            differentiating commodity products through premium branding, we produce labels and
            packaging that make your private label products indistinguishable from
            custom-manufactured goods. Full-color custom label design, premium material selection,
            and luxury finish options create the brand identity and visual premium that earns
            consumer trust and commands retail margin, transforming standard products into
            exclusive branded experiences across every category your business enters.
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
            The Complete Guide to Premium Private Label Packaging
          </h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>What Is Private Label Packaging and Why Does It Matter?</h3>
              <p>
                Private label packaging is the practice of manufacturing products under a
                retailer's or brand's own label rather than under the manufacturer's brand — and
                the packaging is a critical component of that brand identity strategy. For
                businesses that source products from manufacturers but sell under their own brand
                name, private label packaging communicates brand ownership, builds consumer
                recognition, and creates the visual differentiation that drives repeat purchase
                decisions. Our custom private label packaging solutions cover labels, stickers,
                seals, and branded packaging components for businesses at every stage from startup
                DTC brands establishing their first product line to established retailers
                expanding their proprietary product portfolios.
              </p>

              <h3>Brand Identity Through Packaging Consistency</h3>
              <p>
                The most successful private label brands understand that packaging consistency
                across their entire product line creates cumulative brand equity with consumers.
                When every product on your shelf — regardless of which third-party manufacturer
                produced it — bears identical design language, typography, color palette, and
                quality signals, consumers begin to associate those packaging cues with your
                brand's quality promise. Our private label packaging production maintains exact
                color matching, material specifications, and finish consistency across different
                products and multiple production runs, ensuring your brand's visual identity
                remains coherent across every SKU in your product catalog over time.
              </p>

              <h3>Material Options for Premium Private Label Presentation</h3>
              <p>
                Private label packaging label material selection communicates brand tier
                positioning before customers read a single word on the package.
                Gloss-laminated white paper stock delivers brilliant, vivid brand graphics ideal
                for health, wellness, food, and cosmetic private label lines. Kraft paper conveys
                natural, artisanal positioning for organic food, herbal supplement, and
                plant-based wellness brands seeking eco-conscious consumer connections. Metallic
                foil substrates communicate premium and luxury tier positioning for private label
                cosmetics, spirits, and premium wellness products. Clear BOPP creates the
                sophisticated no-label look for glass-packaged products. We match material
                selection to your brand positioning and target consumer expectations for maximum
                market impact.
              </p>

              <h3>Label Application and Adhesive Specifications</h3>
              <p>
                Private label packaging labels are applied to a wide variety of containers and
                surfaces — glass jars, plastic bottles, metal tins, cardboard boxes, foil
                pouches, and flexible bags. Each surface requires specific adhesive formulations
                for reliable, long-term bond performance. Our permanent adhesive options provide
                strong, lasting bonds on glass and rigid plastic surfaces for products with
                extended shelf lives. Cold-temperature adhesives maintain bond strength on
                refrigerated and frozen private label food products. High-tack formulations grip
                low-energy plastic surfaces where standard adhesives fail to lock. We verify
                adhesive-to-substrate compatibility for every private label packaging order,
                eliminating field failures that damage brand credibility.
              </p>

              <h3>Regulatory Compliance for Private Label Products</h3>
              <p>
                Private label products carry a unique regulatory responsibility — as the brand
                owner, your business is responsible for ensuring all label content meets
                applicable regulations in your target markets. Our private label packaging
                printing capabilities reproduce FDA-required nutrition facts panels, ingredient
                lists, net quantity statements, and manufacturer name and address blocks at
                required type sizes with the legibility and print quality that passes regulatory
                inspection. Food, dietary supplement, cosmetic, and over-the-counter drug private
                label categories all have specific label content and format requirements that our
                team is experienced in accommodating. We work with your labeling requirements
                specification to ensure compliance is built into the design and production
                process.
              </p>

              <h3>Custom Die-Cut Shapes and Specialty Finishes</h3>
              <p>
                Private label packaging differentiation comes not just from printed graphics but
                from the physical presentation created through label shape and finish. Custom
                die-cut labels that follow your product's form or brand silhouette create
                distinctive shelf presence that standard rectangular labels cannot achieve. Spot
                UV coating on logos creates gloss-on-matte contrast that highlights brand
                elements without adding excess visual noise. Hot foil stamping adds gold, silver,
                or rose gold accents that communicate premium product positioning.
                Soft-touch matte lamination creates a velvet tactile quality that signals luxury
                through feel. These specialty finishing techniques transform private label
                products from commodity to premium tier commanding higher price points and
                stronger consumer loyalty.
              </p>

              <h3>Scalable Production for Growing Private Label Brands</h3>
              <p>
                Private label brands frequently need packaging solutions that scale efficiently
                from initial product launch quantities through rapid growth to established
                national distribution volumes. Our digital printing production technology makes
                short-run private label packaging economically accessible for new product
                testing and small initial order quantities. As your private label brand scales,
                our flexographic production infrastructure drives unit costs down efficiently for
                high-volume sustained production. Blanket orders with scheduled release
                shipments align our production schedule with your inventory needs. We are a
                long-term private label packaging partner committed to growing with your brand
                from startup through category leadership.
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
                    Exclusive Brand Identity Creation
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Private label success depends on packaging that makes your brand the focus,
                    not the source manufacturer. Our full-color custom labels create a
                    compelling exclusive brand identity with color systems, typography, and
                    visual design that positions your product line precisely where you want it in
                    market.
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
                    Premium Material and Finish Selection
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Private label products command premium retail price only when packaging
                    communicates premium quality. We guide you through material, substrate, and
                    finish selection from soft-touch matte and spot UV on cosmetics to textured
                    kraft and gold foil on food products, for maximum perceived value.
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
                    Confidential Manufacturing Support
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We understand the confidentiality requirements of private label operations.
                    Our production team maintains strict client privacy, producing labels that
                    carry only your brand identity with no references to original source
                    manufacturers, protecting your proprietary brand positioning in all markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={heroImg}
                  alt="Premium Private Label Packaging"
                  className="w-full h-full object-cover"
                />
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
                alt="Differentiate Private Label Packaging"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Differentiate Your <span className="text-primary">Brand</span> From Others
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                CustomPackMakers private label packaging helps growing brands compete with
                established names by delivering the packaging quality that makes consumers
                believe in a brand before tasting, testing, or trying a product. Our label
                design expertise, premium material selection, and low minimum orders let you
                launch and scale your private label line with professional branded packaging from
                the first unit to the millionth, building consumer trust and brand loyalty at
                every touchpoint.
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

export default PrivateLabelPackaging;