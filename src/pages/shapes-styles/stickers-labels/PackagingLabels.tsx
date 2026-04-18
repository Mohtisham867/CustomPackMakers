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
import FAQimage from "@/assets/FAQ-image.png";
import heroImg from "@/assets/stickers-and-labels/packaging-labels.webp";

const faqItems = [
  {
    id: "item-1",
    q: "What information should a packaging label include?",
    a: "Packaging labels typically include product name, SKU or UPC barcode, brand logo, net weight, country of origin, handling instructions, and regulatory warnings. E-commerce packaging labels also include return address, carrier barcodes, and tracking information for shipment identification.",
  },
  {
    id: "item-2",
    q: "What adhesive is best for corrugated shipping boxes?",
    a: "We recommend aggressive permanent adhesive for corrugated shipping boxes, formulated to grip the recycled fiber surface and maintain bond through the compression, vibration, and humidity changes that packaging experiences during transportation and warehouse storage conditions.",
  },
  {
    id: "item-3",
    q: "Can packaging labels be printed in bulk on rolls?",
    a: "Yes. Roll format packaging labels in any size and quantity are compatible with standard label applicators and thermal transfer printers used in warehouse and production line environments, enabling high-speed automated application for efficient packaging operations.",
  },
  {
    id: "item-4",
    q: "Do packaging labels work on poly mailer bags?",
    a: "Yes. Our packaging labels with polyethylene-compatible adhesive bond firmly to poly mailer bag surfaces without peeling during shipping, maintaining label readability and adhesion through the flexing and compression that poly mailers experience in postal and courier transit.",
  },
  {
    id: "item-5",
    q: "Can I add my logo to packaging labels?",
    a: "Yes. Full-color logo printing, brand color backgrounds, and custom typography are all available on packaging labels in any quantity. Even basic shipping and identification labels can carry your brand identity, turning every outgoing package into an unboxing brand touchpoint.",
  },
];

const PackagingLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    { src: heroImg, alt: "Packaging Labels - View 1" },
    { src: heroImg, alt: "Packaging Labels - View 2" },
    { src: heroImg, alt: "Packaging Labels - View 3" },
    { src: heroImg, alt: "Packaging Labels - View 4" },
    { src: heroImg, alt: "Packaging Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      {/* ── SEO ── */}
      <Helmet>
        <title>Custom Packaging Labels | CustomPackMakers</title>
        <meta
          name="description"
          content="Order custom Packaging Labels wholesale. Premium adhesive, durable finishes, fast turnaround."
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
                <BreadcrumbPage>Packaging Labels</BreadcrumbPage>
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
                <span className="text-primary">Custom</span> Packaging Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Essential custom packaging labels with high-visibility printing, strong permanent
                adhesive, and durable construction for shipping boxes, retail packaging, and
                product identification branding.
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
                alt="Packaging Labels Hero"
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
            Custom Packaging Labels Built for Brands That Demand Quality
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom packaging labels serve the critical identification, informational, and
            branding functions that packaging fulfills across retail, e-commerce, logistics, and
            supply chain operations. Produced on durable white or kraft label stock with strong
            permanent adhesive, packaging labels bond reliably to corrugated shipping boxes, retail
            cartons, poly mailer bags, and secondary packing materials without lifting or leaving
            residue during shipping and receiving. Full-color printing with sharp text and barcode
            reproduction ensures your brand, product name, SKU, barcode, handling instructions, and
            regulatory information communicate clearly through the entire distribution chain.
            Available as individual labels, roll format for production line application, or sheet
            format for warehouse printing workflows, packaging labels are the workhorse behind
            professional product presentation at every supply chain touchpoint.
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
            The Complete Guide to Premium Packaging Labels
          </h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>Custom Packaging Labels as a Core Branding Investment</h3>
              <p>
                Packaging labels are the primary brand communication tool on every product that
                reaches a customer's hands. They communicate product identity, differentiate from
                competitors on crowded retail shelves, convey quality signals through material and
                finish selection, and deliver critical regulatory information in a consumer-readable
                format. Our custom packaging labels are manufactured to perform across the full
                spectrum of packaging substrates — glass, plastic, metal, cardboard, foil, and
                flexible film — with adhesive formulations matched to each surface type and
                environmental condition the package will encounter from production line through
                delivery and into end-use environments in homes, offices, and retail stores.
              </p>

              <h3>Material Selection for Every Packaging Application</h3>
              <p>
                Packaging label material selection is the most critical decision affecting label
                performance and brand perception simultaneously. White gloss paper delivers the
                brightest, most vibrant print surface for maximum color impact on rigid carton and
                glass packaging. Kraft and unbleached paper stocks convey natural, artisanal brand
                positioning for food, beverage, and wellness products targeting
                sustainability-conscious consumers. BOPP polypropylene synthetic stock provides
                moisture and scuff resistance ideal for food, beverage, and cosmetic packaging
                regularly exposed to refrigerator condensation and kitchen handling. Clear BOPP
                creates the premium no-label look that lets the container itself become part of the
                brand aesthetic on glass bottles and jars. Polyester delivers chemical and
                temperature resistance for industrial and laboratory packaging applications.
              </p>

              <h3>Adhesive Performance and Application Environments</h3>
              <p>
                Packaging labels fail when the adhesive is mismatched to the substrate or
                environmental conditions. Our adhesive portfolio covers every packaging
                application: permanent high-tack adhesive for glass, rigid plastic, and metal
                containers requiring long-term bond integrity; cold-temperature adhesive for
                refrigerated and frozen food packaging that maintains bond strength below freezing;
                removable adhesive for labels requiring clean removal without residue for reusable
                containers and rental packaging; and high-temperature adhesive for packaging
                exposed to sterilization, pasteurization, or warm storage conditions. We specify the
                correct adhesive for your exact packaging substrate and distribution chain
                conditions during the quoting process to eliminate adhesive failures in the field.
              </p>

              <h3>Printing Excellence for Packaging Label Compliance</h3>
              <p>
                Packaging labels must simultaneously achieve visual appeal and regulatory
                compliance. Our printing capabilities handle both demands with precision.
                Full-color CMYK and Pantone-matched printing reproduces brand graphics,
                photography, and patterns with exceptional accuracy and consistency across
                production runs. High-resolution printing capability renders nutrition facts panels,
                ingredient lists, warning statements, and regulatory symbols at sizes that meet
                government legibility requirements without sacrificing design elegance. Barcode and
                QR code printing is verified for scannability before shipment. Variable data
                printing capabilities accommodate batch numbers, lot codes, use-by dates, and
                serialized unique identifiers on packaging labels for traceability compliance across
                food, pharmaceutical, and industrial sectors.
              </p>

              <h3>Specialty Finishes That Elevate Packaging Labels</h3>
              <p>
                Premium packaging labels differentiate brands through finish options that
                communicate quality before the package is even opened. Gloss lamination creates
                jewel-bright imagery with a brilliant, reflective surface that dominates retail
                shelf presence. Matte lamination delivers a refined, sophisticated aesthetic that
                resonates with premium wellness, skincare, and gourmet food positioning.
                Soft-touch velvet coating adds a tactile luxury quality that makes packages
                memorable to hold. Metallic foil stamping creates gold, silver, rose gold, or
                custom color accents that communicate premium positioning with unmistakable shelf
                impact. Embossing creates dimensional tactile elements that reinforce logo and
                design features with physical texture. Spot UV coating creates gloss-on-matte
                contrast that highlights specific design elements for maximum visual impact.
              </p>

              <h3>Custom Shapes and Die-Cut Packaging Label Designs</h3>
              <p>
                Off-the-shelf rectangular packaging labels are functional but miss the brand
                differentiation opportunity that custom shapes provide. Our precision die-cutting
                capability produces packaging labels in any shape — from rounded corners and ovals
                to intricate custom contours following your product's form language or brand
                silhouette. Custom-shaped packaging labels create instant shelf recognition and
                reinforce brand personality through visual distinctiveness. Wraparound label formats
                maximize brand coverage on cylindrical packaging. Front panel and back panel label
                pairs coordinate for complete package branding. Neck, shoulder, and capsule labels
                for bottle packaging communicate premium tier positioning. We produce any packaging
                label format in any custom die-cut shape without tooling cost penalties.
              </p>

              <h3>Volume Capabilities and Supply Chain Reliability</h3>
              <p>
                Consistent packaging label supply is a business continuity requirement, not a
                convenience. Our production capacity handles everything from small-batch test runs
                for product launches to continuous high-volume supply for established consumer
                brands shipping millions of units annually. Digital printing technology makes
                short-run packaging label production economically viable for SKU testing and
                limited-edition releases. Flexographic production delivers the lowest per-unit cost
                for high-volume consistent label programs. Inventory management programs, blanket
                purchase agreements, and scheduled release shipping ensure your packaging label
                supply stays ahead of your production schedule. We are a reliable long-term
                packaging label manufacturing partner, not just a one-time print vendor.
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
                    High-Visibility Brand Communication
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Packaging labels carry your brand through the distribution chain from
                    warehouse to consumer doorstep. Our high-contrast printing with sharp
                    typography and vibrant logo color ensures your brand makes the first
                    physical impression with professional quality on every package shipped.
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
                    Strong Box-Compatible Adhesive
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Corrugated cardboard and poly mailer surfaces require aggressive adhesive to
                    prevent label separation during shipping handling. Our permanent packaging label
                    adhesive bonds firmly to recycled and virgin corrugated, poly bags, and kraft
                    mailer materials through transit conditions.
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
                    Barcode and SKU Accuracy
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Packaging labels carry barcodes, SKUs, and tracking codes that must scan
                    reliably at every supply chain checkpoint. We verify barcode print quality and
                    scannability on every packaging label order before shipment, preventing costly
                    rejection and relabeling at distribution centers.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img src={heroImg} alt="Premium Packaging Labels" className="w-full h-full object-cover" />
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
                alt="Differentiate Packaging Labels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Differentiate Your <span className="text-primary">Brand</span> From Others
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our packaging labels help brands, manufacturers, and distributors maintain
                professional product presentation and operational efficiency across their entire
                supply chain. From branded retail packaging labels that create strong first
                impressions in unboxing experiences to plain shipping labels that carry logistic
                information accurately, we produce packaging labels that perform reliably at every
                touchpoint in your product journey to market.
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

export default PackagingLabels;