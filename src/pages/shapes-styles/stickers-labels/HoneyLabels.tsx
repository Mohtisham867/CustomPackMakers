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
import heroImg from "@/assets/stickers-and-labels/honey-labels.webp";

const faqItems = [
  {
    id: "item-1",
    q: "What material is best for honey jar labels?",
    a: "We recommend moisture-resistant gloss or matte BOPP for glass honey jars for vibrant waterproof adhesion. Kraft paper with water-resistant varnish is ideal for artisan honey labels seeking a natural aesthetic that resonates with specialty food and farmers market consumers.",
  },
  {
    id: "item-2",
    q: "Can honey labels include weight and origin information?",
    a: "Yes. We print net weight, country and region of origin, floral source, raw or filtered designations, and all required FDA food labeling elements with precise typography formatted to honey labeling requirements for domestic retail distribution.",
  },
  {
    id: "item-3",
    q: "Do you produce labels for plastic honey bears?",
    a: "Yes. Flexible polypropylene honey labels bond firmly to plastic bear surfaces and conform to curved geometry without wrinkling, providing permanent adhesion on PE and HDPE honey containers throughout the product use lifecycle.",
  },
  {
    id: "item-4",
    q: "Can honey labels include QR codes for farm traceability?",
    a: "Yes. QR codes, batch codes, and harvest date variable data print on honey labels with scannability verified before delivery, enabling consumers to trace origin and access farm authenticity content for direct-to-consumer relationship building.",
  },
  {
    id: "item-5",
    q: "What finish makes honey labels look premium?",
    a: "Gold metallic ink and cold foil on honeycomb and brand elements creates warm premium shelf appeal. Spot UV highlights logos on gloss. Matte kraft with gold ink delivers artisan premium positioning loved by specialty food buyers and gift retail buyers.",
  },
];

const HoneyLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    { src: heroImg, alt: "Honey Labels - View 1" },
    { src: heroImg, alt: "Honey Labels - View 2" },
    { src: heroImg, alt: "Honey Labels - View 3" },
    { src: heroImg, alt: "Honey Labels - View 4" },
    { src: heroImg, alt: "Honey Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      {/* ── SEO ── */}
      <Helmet>
        <title>Custom Honey Labels | CustomPackMakers</title>
        <meta
          name="description"
          content="Order custom Honey Labels wholesale. Premium adhesive, durable finishes, fast turnaround."
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
                <BreadcrumbPage>Honey Labels</BreadcrumbPage>
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
                <span className="text-primary">Custom</span> Honey Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Sweet custom honey labels with golden-tone printing, moisture-proof materials, and
                durable adhesive for jars, plastic bears, and artisan honey product branding.
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
                alt="Honey Labels Hero"
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
            Custom Honey Labels Built for Brands That Demand Quality
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Custom honey labels convey the natural purity of artisan and commercial honey products
            with warm aesthetics on moisture-resistant gloss, matte, or kraft paper stock. Our
            permanent adhesive bonds to glass mason jars, plastic squeeze bears, and metal tin lids,
            resisting sticky residue and bathroom-style humidity. Full-color printing reproduces
            warm golden hues, honeycomb patterns, bee illustrations, and origin-story branding. Gold
            metallic ink and foil accents add warmth that elevates honey labels to premium gift and
            specialty retail appeal. Belly band, full-wrap, lid seal, and tag formats are available
            for every honey container format.
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
            The Complete Guide to Premium Honey Labels
          </h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>The Art of Marketing Honey Through Premium Label Design</h3>
              <p>
                In the specialty food market, honey labels communicate far more than product
                identification — they tell the story of the beekeeper, the terroir of the hive
                location, the floral sources that give the honey its flavor profile, and the
                artisanal care that makes your honey worth a premium price over commodity
                supermarket alternatives. Our custom honey labels are designed to capture all of
                these brand narratives visually through typography, color, illustration, and
                material choices that resonate with specialty food consumers and gift buyers who
                choose honey as much for how it looks as for how it tastes. From farmers market
                artisans to commercial honey producers, we produce honey labels that create the
                visual premium your product deserves.
              </p>

              <h3>Container-Specific Label Formats for Honey Products</h3>
              <p>
                Honey is packaged in an unusually wide variety of containers compared to other food
                categories. Classic wide-mouth mason jars require front and back panel labels or a
                single large wrap label. Plastic honey bear squeeze containers need flexible,
                conformable labels that wrap tightly around the curved body without lifting at
                edges. Traditional tall glass jars use wraparound labels maximizing face panel
                width. Hexagonal glass jars benefit from multi-panel label designs that follow the
                angular geometry. Metal tin lids require circular top seal labels. Squeeze pouch
                formats need custom-sized panel labels with secure adhesion to flexible film. We
                produce honey labels in any format matched to your specific container geometry for
                the most professional finished presentation.
              </p>

              <h3>Material and Finish Choices for Honey Label Aesthetics</h3>
              <p>
                Material selection for honey labels significantly impacts both the visual aesthetic
                and functional performance on sticky honey containers. White gloss paper stock
                delivers maximum color vibrancy for bright, eye-catching honey labels that
                photograph beautifully for e-commerce and social media. Natural kraft paper creates
                the artisanal, farm-fresh aesthetic that resonates with farmers market shoppers and
                premium grocery buyers. Both gloss and matte BOPP polypropylene provide moisture
                resistance ideal for honey jars that accumulate humidity and sticky residue during
                use. Gold metallic ink brings warm, premium shimmer to honeycomb illustrations and
                brand elements. Cold foil stamping on specific design areas creates luxury gift
                appeal for premium honey gift sets and specialty retail positioning.
              </p>

              <h3>Color and Printing Accuracy for Honey Branding</h3>
              <p>
                Honey branding revolves around warm amber, golden, and natural earth tones that
                visually communicate the natural sweetness of the product. Getting these colors
                right requires precise CMYK formulation and Pantone color matching to ensure
                warmth, richness, and natural authenticity are reproduced accurately across
                production runs. Our color management workflow calibrates print output to your
                approved proofs, maintaining consistency across order quantities so your honey
                labels look identical whether you order 500 for a farmers market season or 50,000
                for wholesale distribution. Photography of flowers, honeycombs, bees, and farmscapes
                is reproduced with photorealistic detail that differentiates premium honey from
                commodity alternatives on the specialty food shelf.
              </p>

              <h3>Regulatory Requirements for Honey Labels</h3>
              <p>
                Honey sold commercially in the United States requires specific labeling elements to
                comply with FDA food labeling regulations. Net weight must appear on the principal
                display panel in both avoirdupois and metric measurements. The common name or
                statement of identity must be present. Manufacturer or packer name and address is
                required. Country of origin labeling may be required depending on your distribution
                channel. For raw, unfiltered, or organic honey, appropriate descriptors must meet
                regulatory definitions. Our printing capabilities render all required text at
                compliant type sizes while maintaining design elegance. We advise on label real
                estate allocation between required regulatory content and brand marketing content to
                balance compliance with consumer engagement.
              </p>

              <h3>Gift Packaging and Premium Honey Label Formats</h3>
              <p>
                Honey is one of the most popular food gift products in the specialty food category.
                Premium honey gift sets require labels that communicate luxury quality and
                thoughtfulness. Our metallic foil stamping, soft-touch matte lamination, and custom
                die-cut label shapes create gift-worthy packaging presentation that commands
                premium price at boutique retail, holiday gift markets, and direct-to-consumer
                channels. Belly band labels wrap elegantly around glass jars for a clean, minimal
                look ideal for gift products. Custom gift tag labels add a personal touch for
                wedding favors, corporate gifts, and seasonal promotional products. We produce all
                honey label formats with the visual excellence that gift market buyers require.
              </p>

              <h3>Ordering, Quantities, and Production for Honey Businesses</h3>
              <p>
                We serve honey businesses at every production scale — from small-batch artisan
                beekeepers selling at local farmers markets to established commercial honey
                processors supplying regional and national grocery chains. Small minimum orders make
                professional honey label quality accessible to startup producers without requiring
                large capital commitments to inventory. Digital production technology enables
                multiple SKU varieties — different floral varieties, seasonal releases, or regional
                origins — to be produced economically without requiring high minimum quantities per
                design. Production lead time is typically 8 to 10 business days with expedited
                options for seasonal peaks. We ship honey labels on rolls, in sheets, or in fan-fold
                formats compatible with your application workflow and production volume
                requirements.
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Golden Tone Printing</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Honey branding demands warm amber hues and honeycomb patterns. Our color
                    management reproduces these tones with rich accuracy on gloss, matte, and kraft
                    stock, giving honey labels the visual warmth and natural authenticity that
                    drives specialty food purchase decisions.
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Moisture-Proof Adhesion</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Honey jars accumulate sticky residue and humidity exposure. Our
                    moisture-resistant coatings and adhesive prevent curling, peeling, or smearing
                    on glass and plastic honey containers during storage and retail display through
                    the full product lifecycle.
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
                    Artisan and Commercial Formats
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We produce belly band, full-wrap, lid top seal, and tag formats for glass mason
                    jars, plastic bears, and commercial bulk containers, covering every honey
                    packaging format from farmstand artisan to supermarket shelf distribution at any
                    quantity.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <img src={heroImg} alt="Premium Honey Labels" className="w-full h-full object-cover" />
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
                alt="Differentiate Honey Labels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Differentiate Your <span className="text-primary">Brand</span> From Others
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our honey labels capture the warmth and natural purity of quality honey products
                with beautiful printing and durable materials. From artisan beekeepers at farmers
                markets to commercial honey producers supplying grocery chains, we produce labels
                that make your honey irresistible on the shelf.
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

export default HoneyLabels;