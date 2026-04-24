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
import heroImg from "@/assets/stickers-and-labels/vinyl-stickers.webp";

const faqItems = [
  {
    id: "item-1",
    q: "How long do vinyl stickers last outdoors?",
    a: "Our outdoor vinyl stickers with UV-protective lamination are rated for 3 to 5 years of outdoor durability, resisting sun fading, moisture, and temperature extremes from negative twenty to 150 degrees Fahrenheit without peeling or color degradation on any surface.",
  },
  {
    id: "item-2",
    q: "What surfaces do vinyl stickers adhere to?",
    a: "Vinyl stickers bond permanently to painted metal, glass, plastic, powder-coated surfaces, wood, and smooth textured materials with our aggressive permanent adhesive, maintaining long-term adhesion through rain, washing, humidity, and temperature cycling in outdoor environments.",
  },
  {
    id: "item-3",
    q: "Are vinyl stickers waterproof?",
    a: "Yes. Cast vinyl with laminate coat is fully waterproof and resists car wash pressure, rain, snow, and salt spray without delaminating, peeling, or print degradation, making them ideal for automotive decals, marine equipment, and outdoor product applications.",
  },
  {
    id: "item-4",
    q: "Can vinyl stickers be removed without damage?",
    a: "We offer removable-adhesive vinyl stickers for applications requiring residue-free removal from painted, glass, or delicate surfaces. Permanent adhesive is recommended for long-term outdoor applications. Specify your removal requirements when ordering for the correct adhesive specification.",
  },
  {
    id: "item-5",
    q: "What is the minimum order for custom vinyl stickers?",
    a: "We accept vinyl sticker orders from 100 units for custom personal and small business applications through to millions of units for national promotional campaigns, with consistent quality, color accuracy, and die-cut precision across all production quantities.",
  },
];

const VinylStickers = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    { src: heroImg, alt: "Vinyl Stickers - View 1" },
    { src: heroImg, alt: "Vinyl Stickers - View 2" },
    { src: heroImg, alt: "Vinyl Stickers - View 3" },
    { src: heroImg, alt: "Vinyl Stickers - View 4" },
    { src: heroImg, alt: "Vinyl Stickers - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      {/* ── SEO ── */}
      <Helmet>
        <title>Custom Vinyl Stickers | CustomPackMakers</title>
        <meta
          name="description"
          content="Order custom Vinyl Stickers wholesale. Premium adhesive, durable finishes, fast turnaround."
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
                <BreadcrumbPage>Vinyl Stickers</BreadcrumbPage>
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
                <span className="text-primary">Custom</span> Vinyl Stickers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Durable custom vinyl stickers with UV-protective coatings, weather-resistant
                construction, and vibrant printing for outdoor products, vehicles, promotional
                campaigns, and long-term branding.
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
                alt="Vinyl Stickers Hero"
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
            Custom Vinyl Stickers Built for Brands That Demand Quality
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our custom vinyl stickers are engineered for the most demanding real-world environments,
            from outdoor signage and vehicle graphics to water bottles, skateboards, and products
            that endure years of sun, rain, and physical abrasion. Produced on premium cast or
            calendered vinyl with UV-resistant inks and protective laminate coatings, vinyl
            stickers resist fading, moisture, scratching, and temperature extremes from sub-zero
            cold to desert heat without peeling or color degradation. Full-color printing with
            vibrant CMYK accuracy reproduces complex gradients, photographic imagery, and fine line
            art with stunning clarity on the smooth vinyl surface. Die-cut to any custom shape with
            precision contouring, our vinyl stickers are available as individual stickers, kiss-cut
            sheets, or rolls for high-volume application to products and packaging.
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
            The Complete Guide to Premium Vinyl Stickers
          </h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>The Power of Custom Vinyl Stickers for Brand Promotion</h3>
              <p>
                Vinyl stickers are one of the most versatile and cost-effective branding tools
                available to businesses, creators, and organizations of every size. Unlike
                paper-based stickers, vinyl construction delivers durability that survives weather,
                UV exposure, water, and daily physical contact — making every sticker a
                long-lasting brand ambassador wherever it travels. Our custom vinyl stickers are
                manufactured from premium cast and calendered vinyl films with permanent
                pressure-sensitive adhesives that bond to virtually any clean, dry surface including
                laptops, water bottles, vehicles, windows, walls, helmets, and equipment cases. The
                result is a branding medium that extends brand reach far beyond the original point
                of application.
              </p>

              <h3>Cast Vinyl vs. Calendered Vinyl — Choosing the Right Material</h3>
              <p>
                Not all vinyl is created equal. We offer both cast vinyl and calendered vinyl
                depending on your application requirements. Cast vinyl is produced using a liquid
                casting process that creates a dimensionally stable film with excellent
                conformability for curved surfaces, outdoor durability exceeding seven years, and
                resistance to shrinkage over time. It is the premium choice for vehicle graphics,
                outdoor signage, and high-value applications where longevity and surface
                conformability are critical. Calendered vinyl is produced by pressing molten PVC
                through rollers, creating a thicker, more economical material ideal for indoor
                applications, short-term outdoor use, and flat surfaces where 3-to-5-year
                performance is sufficient. Our team helps you select the appropriate vinyl grade
                based on your intended surface, environment, and lifetime expectations.
              </p>

              <h3>Finish Options and Their Branding Impact</h3>
              <p>
                The finish you choose for your vinyl stickers dramatically affects their aesthetic
                impact and perceived quality. Gloss finish delivers maximum color vibrancy with a
                high-shine surface that makes colors pop and creates a premium retail-ready
                appearance. Matte finish produces a flat, non-reflective surface with a
                sophisticated, upscale aesthetic that photographs beautifully and reduces glare in
                bright environments. Soft-touch matte coating adds a velvety tactile texture that
                communicates luxury quality through feel. Holographic and chrome metallic vinyl
                creates attention-commanding iridescent effects that shift color with viewing angle.
                Spot UV coating can be applied selectively over specific elements to create
                gloss-on-matte contrast that highlights logos and key design elements with striking
                dimensional precision.
              </p>

              <h3>Die-Cut Precision for Distinctive Brand Shapes</h3>
              <p>
                Standard rectangular stickers are functional, but custom die-cut vinyl stickers that
                follow the exact outline of your design create a dramatically more professional and
                memorable impression. Our precision die-cutting equipment cuts vinyl stickers to any
                shape — from simple circles and ovals to complex graphic contours that follow every
                curve of your logo, character, or illustration. Kiss-cutting leaves the sticker face
                intact while cutting only through the vinyl and not the backing liner, creating an
                easy-peel sticker experience. Through-cutting produces individual stickers cut
                completely from the backing for direct application or packaging as individual units.
                We also produce kiss-cut sticker sheets with multiple designs or variants on one
                backing sheet for efficient distribution and variety packs.
              </p>

              <h3>Adhesive Properties and Surface Compatibility</h3>
              <p>
                The adhesive quality determines whether vinyl stickers perform as intended over
                time. Our permanent adhesive formulations are designed for long-term bonding and
                resist peeling, lifting, and edge curl through temperature changes, UV exposure, and
                physical contact. We offer repositionable adhesive for applications requiring
                temporary placement and clean removal without residue, ideal for rental property
                decals, seasonal promotions, and event branding. Low-surface-energy adhesives
                provide superior bonding to polypropylene, polyethylene, and other difficult plastic
                surfaces where standard adhesives fail quickly. Marine-grade adhesives withstand
                prolonged saltwater exposure for boat, surfboard, and watercraft applications where
                lesser stickers lose adhesion within weeks.
              </p>

              <h3>Printing Technology and Color Accuracy</h3>
              <p>
                Our vinyl stickers are produced using high-resolution digital inkjet printing with
                UV-resistant ink systems that maintain color accuracy through years of outdoor
                exposure without fading or color shifting. CMYK digital printing reproduces
                photographic imagery, gradient artwork, and complex illustrations with exceptional
                detail and smooth tonal transitions. Pantone-matched spot color printing ensures
                brand colors hit their exact specifications for corporate identity applications. We
                offer white ink printing for transparent vinyl stickers, creating true color
                backgrounds and premium no-backing effects on glass and clear surfaces. Print
                resolution and color fidelity are verified through calibrated color management
                workflows from design file to finished sticker.
              </p>

              <h3>Applications, Quantities, and Custom Packaging</h3>
              <p>
                Custom vinyl stickers are used across an extraordinary range of applications: brand
                merchandise and swag packs, product packaging seals, vehicle and fleet branding,
                window graphics, event giveaways, band and artist merchandise, retail product
                labeling, and direct-to-consumer fan engagement packaging. We produce vinyl stickers
                from small runs of a few hundred units for startups and artists to millions of units
                for national brands and promotional campaigns. Individual stickers, roll formats,
                and sheet packaging are all available. Custom backing designs transform sticker
                sheets into branded merchandise pieces. Contour-cut stickers can be individually
                packaged in branded cello sleeves for retail display. Our team manages every detail
                from design review to finished product delivery.
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
                    UV-Resistant Outdoor Durability
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Our vinyl stickers use UV-protective inks and laminate coatings rated for 3 to 5
                    years of continuous outdoor sun exposure without fading, cracking, or
                    delaminating, making them ideal for outdoor equipment, vehicle decals, and
                    long-term product branding.
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
                    Weatherproof All-Surface Adhesion
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Cast vinyl with aggressive permanent adhesive bonds firmly to painted metal,
                    glass, plastic, wood, and textured surfaces, maintaining long-term adhesion
                    through rain, humidity, temperature cycling, car washes, and pressure washing
                    without lifting or tunneling.
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
                    Precision Custom Die-Cutting
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Any shape from simple geometric to exact logo contours. Our precision die-cutting
                    equipment follows your vector artwork outline to sub-millimeter accuracy,
                    producing vinyl stickers with crisp edges and perfect silhouette registration on
                    every unit in the production run.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img src={heroImg} alt="Premium Vinyl Stickers" className="w-full h-full object-cover" />
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

      {/* ── Differentiate section ── */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl">
              <img
                src={heroImg}
                alt="Differentiate Vinyl Stickers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Differentiate Your <span className="text-primary">Brand</span> From Others
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our vinyl stickers serve brands, businesses, and creators who demand the durability
                that paper and standard poly stickers cannot provide in outdoor and high-contact
                environments. From product warranty stickers that must survive field conditions to
                promotional stickers that live on vehicles for years, our UV-resistant vinyl
                delivers the longevity and visual quality your brand deserves anywhere your
                stickers end up.
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

export default VinylStickers;