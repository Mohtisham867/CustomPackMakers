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
import heroImg from "@/assets/shape-style/stickers-and-labels/bath-bomb-labels.webp";

const BathBombLabels = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = [
    { src: heroImg, alt: "Bath Bomb Labels - View 1" },
    { src: heroImg, alt: "Bath Bomb Labels - View 2" },
    { src: heroImg, alt: "Bath Bomb Labels - View 3" },
    { src: heroImg, alt: "Bath Bomb Labels - View 4" },
    { src: heroImg, alt: "Bath Bomb Labels - View 5" },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Bath Bomb Labels | CustomPackMakers</title>
        <meta name="description" content="Order custom Bath Bomb Labels wholesale. Premium adhesive, durable finishes, fast turnaround." />
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
                <BreadcrumbPage>Bath Bomb Labels</BreadcrumbPage>
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
                <span className="text-primary">Custom</span> Bath Bomb Labels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Fun and vibrant custom bath bomb labels with moisture-resistant materials, playful designs, and durable adhesive for belly bands, sticker seals, and bath bomb packaging branding.
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
              <img src={heroImg} alt="Bath Bomb Labels Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Custom Bath Bomb Labels Built for Brands That Demand Quality</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-5xl">
            Our bath bomb labels survive humid bathroom retail displays while delivering the vibrant or luxurious visual appeal bath bomb consumers expect. Moisture-resistant BOPP or kraft paper with waterproof coatings and permanent adhesive bonds to tissue-wrapped bath bombs, cellophane bags, kraft boxes, and plastic jar containers without lifting or smearing in humid retail and bathroom environments. Full-color printing in both bright playful palettes and sophisticated muted spa tones gives products the shelf presence needed in the growing bath and body market. Belly bands wrapping around spherical bombs, sticker seals, tissue wrap labels, and lid stickers accommodate every bath bomb packaging configuration from bare bombs to gift-boxed spa sets.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">The Complete Guide to Premium Bath Bomb Labels</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
              <h3>Bath Bomb Labels — Where Self-Care Branding Begins</h3>
              <p>Bath bombs are among the most visually driven personal care products in the retail market — consumers frequently purchase bath bombs based entirely on packaging appeal before they ever experience the product itself. The bath bomb market rewards superior branding because the product is often purchased as a gift, displayed as a decorative item in bathrooms, and shared on social media as part of self-care aesthetic content. Our custom bath bomb labels are designed for exactly this audience: consumers who appreciate artisan quality, natural ingredients, vibrant color, and packaging that photographs beautifully for Instagram and TikTok content. Every material choice, finish selection, and design decision we make for bath bomb labels serves the premium aesthetic positioning your brand needs in this competitive category.</p>
              
              <h3>Bath Bomb Packaging Formats and Label Applications</h3>
              <p>Bath bombs come in multiple packaging formats, each requiring different label configurations. Individual bath bombs wrapped in clear cello paper are labeled with a single face label showing brand name, scent, and key ingredients through the transparent wrapping. Bath bombs in shrink-wrap require labels applied over the shrink film. Paper tissue-wrapped bath bombs use wrap-around labels that embrace and seal the packaging. Cardboard boxes containing single or multiple bath bombs use front panel labels, lid seals, and back information panels. Gift sets in window boxes or kraft packaging require front face labels and back information labels. Clear bags of multiple bath bombs use large format bag labels. We produce bath bomb labels in any format matched to your specific packaging style and brand presentation goals.</p>
              
              <h3>Shrink Wrap and Cello Compatible Label Adhesives</h3>
              <p>Bath bomb labels applied to cello and shrink wrap packaging surfaces present unique adhesion challenges. Polypropylene cello film is a low-energy surface that many standard adhesives fail to grip reliably, especially in ambient temperature or humid environments like bathroom retail displays. Our low-surface-energy adhesive formulations grip cello and shrink wrap surfaces with reliable permanent bond strength without edge lifting, tunneling, or label migration along the film surface. For bath bombs that consumers purchase for gift giving and may store for extended periods before use, label adhesion longevity on the packaging surface is especially important — a label that lifts or falls off before the product is gifted creates a visual quality failure that reflects on brand perception. We test adhesive performance on your specific packaging material before every bath bomb label order.</p>
              
              <h3>Color Vibrancy for Bath Bomb Brand Aesthetics</h3>
              <p>Bath bomb brands are built on visual energy, color, and the promise of a sensory experience that consumers can see before they buy. Bold, saturated colors that pop in retail display, photography, and social media thumbnails are not optional for bath bomb labels — they are the primary purchase driver. Our bath bomb label printing uses high-resolution digital printing with vibrant ink systems that deliver maximum color saturation and brightness across full-color artwork, gradient backgrounds, botanical illustration, and photographic ingredient imagery. Gloss lamination intensifies color vibrancy to jewel-bright levels ideal for high-energy bath bomb branding. Holographic and iridescent vinyl substrates create color-shifting effects that visually mimic the sparkle and shimmer of high-quality bath bomb formulations, creating a packaging-product aesthetic alignment that resonates powerfully with the bath bomb consumer audience.</p>
              
              <h3>Eco-Friendly Materials for Natural Bath Bomb Brands</h3>
              <p>Bath bomb brands frequently position around natural, organic, vegan, or eco-conscious formulations, and the packaging must reinforce these values authentically. Kraft paper labels with water-based inks communicate natural positioning and minimize environmental footprint. FSC-certified paper stocks provide chain-of-custody documentation for sustainable sourcing claims. Biodegradable and compostable label substrates eliminate synthetic plastic from the packaging equation for zero-waste product positioning. Soy-based ink printing reduces volatile organic compound emissions without sacrificing color vibrancy. Recycled content label materials demonstrate environmental commitment backed by documented recycled fiber percentages. We guide natural bath bomb brands through eco-friendly label material options that align with their formulation values and target consumer expectations for authentic sustainability positioning.</p>
              
              <h3>Regulatory Labeling for Bath Bomb Products</h3>
              <p>Bath bombs sold as cosmetics in the United States require complete INCI ingredient declarations, net weight on the principal display panel, manufacturer contact information, and usage instructions and cautions including warnings for products containing colorants, fragrances, or ingredients with potential skin sensitivity. Products making drug claims — such as "relieves muscle pain" or "treats dry skin conditions" — enter a different regulatory category requiring additional compliance measures. Our printing capabilities accurately render complete regulatory content on bath bomb labels in the compact typography required to fit compliance information on small label formats without sacrificing brand aesthetics. We advise bath bomb businesses on label content compliance requirements to help build regulatory correctness into the label design process from the start.</p>
              
              <h3>Quantities, Gifting Seasons, and Bath Bomb Label Supply</h3>
              <p>The bath bomb market has extreme seasonal peaks driven by gifting — Valentine's Day, Mother's Day, Christmas, and birthday gifting seasons create demand spikes that require advance label inventory planning. Our production capacity and lead time planning help bath bomb businesses prepare seasonal label inventory before peak demand arrives. Standard production lead time of 8 to 10 business days allows efficient planning. Digital printing technology makes multiple scent variants, seasonal limited edition designs, and gift set coordination labels economically viable in small quantities that align with specialty production runs. We serve bath bomb businesses from artisan kitchen producers to large commercial manufacturers, with label production solutions scaled appropriately for every business size and seasonal production volume demand.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Moisture-Resistant Materials</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Bath bomb products display in humid retail bath sections and home bathrooms. Our waterproof-coated label stocks resist ambient moisture and damp surface contact, preventing delamination and print smearing throughout the entire product retail and consumer use period.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Vibrant Color Energy</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Bath bombs sell on visual excitement. Our full-color printing reproduces bright rainbow palettes, sparkle effects, botanical illustrations, and fun characters with vivid accuracy that drives impulse purchases in the bath and body retail category displays.</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Belly Band and Wrap Formats</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Belly bands wrap around spherical bath bombs providing branded real estate without difficult curved surface label application. Sticker seals, tissue wrap labels, and box lid stickers are also available for complete bath bomb packaging configurations at any quantity.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={heroImg} alt="Premium Bath Bomb Labels" className="w-full h-full object-cover" />
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
              <img src={heroImg} alt="Differentiate Bath Bomb Labels" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Differentiate Your <span className="text-primary">Brand</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Our bath bomb labels help artisan bath product makers and commercial brands present products with vibrant, spa-worthy quality that drives purchases and repeat orders. Moisture-resistant materials and flexible format options accommodate every bath bomb packaging style while low minimums support small producers and high-volume production serves established bath and body brands.
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
                    q: "What label type works best for spherical bath bombs?",
                    a: "Belly bands wrap around the equator of spherical bombs providing brand identity. Circular top seals also work well. For wrapped bath bombs, tissue wrap labels and outer bag stickers are optimal formats that accommodate the spherical shape without adhesion challenges on curved surfaces."
                  },
                  {
                    id: "item-2",
                    q: "Are bath bomb labels moisture resistant?",
                    a: "Yes. BOPP and treated kraft paper stocks with waterproof coatings prevent delamination and smearing in humid retail bath environments, home bathroom storage, and brief contact with damp hands during bath bomb product handling and consumer use."
                  },
                  {
                    id: "item-3",
                    q: "Can bath bomb labels include ingredient and scent information?",
                    a: "Yes. Scent descriptions, key botanical ingredients, usage instructions, net weight, and manufacturer information print on bath bomb labels with typography legible on narrow belly band and small seal formats used for standard bath bomb packaging configurations."
                  },
                  {
                    id: "item-4",
                    q: "What finishes make bath bomb labels look premium?",
                    a: "Gloss amplifies vibrant color energy for playful branding. Matte creates sophisticated spa aesthetics. Holographic stock adds magical iridescent shimmer perfect for luxury bath bomb gift packaging and seasonal limited edition collections targeting premium gift retail markets."
                  },
                  {
                    id: "item-5",
                    q: "Do you produce bath bomb labels for wholesale quantities?",
                    a: "Yes. From 250 units for small artisan bath producers to tens of thousands for mass-market brands, we maintain consistent color accuracy and moisture-resistant material quality across all production quantities with reliable turnaround times for seasonal demand."
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

export default BathBombLabels;