import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteForm } from '@/components/QuoteForm';
import { BrandRating } from '@/components/BrandRating';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TechnicalSpecsSection } from '@/components/TechnicalSpecsSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus, Minus } from 'lucide-react';
import productHero from '@/assets/bakery-products/cupcake-boxes.webp';
import img2 from '@/assets/bakery-products/custom-cake-boxes.webp';
import img3 from '@/assets/bakery-products/pastry-boxes.webp';
import img4 from '@/assets/bakery-products/donut-boxes.webp';
import img5 from '@/assets/bakery-products/muffin-boxes.webp';
import FAQimage from '@/assets/FAQ-image.png';
import { RelatedProductBakery } from '@/components/RelatedProductBakery';

const CupcakeBoxes = () => {
  const [sel, setSel] = useState(0);
  const imgs = [
    { src: productHero, alt: 'Cupcake Boxes Main' },
    { src: img2, alt: 'Cupcake Boxes View 2' },
    { src: img3, alt: 'Cupcake Boxes View 3' },
    { src: img4, alt: 'Cupcake Boxes View 4' },
    { src: img5, alt: 'Cupcake Boxes View 5' },
  ];
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>Custom Cupcake Boxes | Food-Grade Bakery Packaging | CustomPackMakers</title>
        <meta name="description" content="Custom cupcake boxes with FDA-approved grease-resistant food-safe materials. Wholesale bakery packaging with elegant finishes and fast 8-10 day turnaround." />
        <meta name="keywords" content="custom cupcake boxes, cupcake boxes packaging, food-safe cupcake boxes, wholesale cupcake boxes, bakery packaging" />
      </Helmet>
      <Header />
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
        <div className="container mx-auto px-[30px] py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">All Industries</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/bakery-boxes">Bakery Boxes</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Cupcake Boxes</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-primary rounded-full" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                <span className="text-primary">Custom</span> Cupcake Boxes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                Premium FDA-approved cupcake boxes with grease-resistant food-safe materials, elegant finishes, and full-color custom printing. Wholesale pricing with 8-10 day turnaround for bakeries of every scale.
              </p>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Get a Quote
              </Button>
            </div>
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
              <img src={productHero} alt="Custom Cupcake Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Cupcake Boxes Built for Food Safety, Freshness and Brand Impact</h2>
          <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
            <p>Our <strong className="text-foreground">custom cupcake boxes</strong> are engineered with FDA-approved food-grade SBS paperboard and grease-resistant coatings compliant with Title 21 food contact regulations. Every box protects your product's freshness, texture, and aroma from production to the customer's hands, while displaying your brand with full-color custom printing that makes a lasting impression on every recipient.</p>
            <p>With flexible sizing options, premium finishing including matte lamination, spot UV, foil stamping, and optional window panels, our wholesale cupcake boxes are designed to make your bakery brand stand out on every counter, shelf, and delivery. Our 8-10 business day turnaround and low minimum order quantities ensure accessible pricing at every scale of operation.</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-accent/5" id="quote-form">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7 space-y-6">
              <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                <img src={imgs[sel].src} alt={imgs[sel].alt} className="w-full h-full object-cover" />
              </div>
              <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                {imgs.map((img, i) => (
                  <button key={i} onClick={() => setSel(i)} className={"relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 " + (sel === i ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300')}>
                    <img src={img.src} alt={"Thumb " + (i + 1)} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="12" className="h-9 bg-white" /></div>
                      <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
                      <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="4" className="h-9 bg-white" /></div>
                    </div>
                    <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="500" className="h-9 bg-white" /></div>
                    <div className="space-y-1.5"><Label htmlFor="uname" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="uname" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                    <div className="space-y-1.5"><Label htmlFor="uemail" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="uemail" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Cupcake Boxes</h2>
          <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
              <p>Custom cupcake boxes represent one of the most specialized segments of food-grade bakery packaging. Every bakery product presents a unique combination of challengesâ€”oil content, moisture levels, structural fragility, display requirements, and gifting expectationsâ€”and meeting all of these simultaneously demands expertise that generic packaging suppliers cannot provide. CustomPackMakers brings over a decade of food packaging engineering experience to every cupcake boxes order, combining FDA-compliant materials science with precision structural design and premium brand finishing options that set your products apart in every retail and gifting environment.</p>
              <p>The regulatory framework governing cupcake boxes is established under FDA Title 21, which specifies the safety standards for all materials that come into direct or indirect contact with food products. All paperboard, coatings, adhesives, and printing inks used in our cupcake boxes manufacturing are fully compliant with these regulations. This compliance protects your business from regulatory risk while ensuring your customers receive products that are safe, fresh, and presented with the quality they expect every single time they interact with your brand in any channel.</p>
              <h3>Food-Grade Material Selection</h3>
              <p>The foundation of any effective food packaging solution is the quality and compliance of its base materials. For cupcake boxes, our primary substrate for food-contact surfaces is solid bleached sulfate (SBS) paperboardâ€”the industry gold standard for direct-food-contact applications. SBS offers a chemically neutral, bright white surface that will never impart flavors, odors, or color migration to your products. The material's smooth surface is also ideal for high-quality printing, allowing your brand's full visual identity to be rendered with photographic accuracy and Pantone color precision across every unit in your order.</p>
              <ul>
                <li><strong>Grease-Resistant Barriers:</strong> FDA-approved fluoropolymer or PE extrusion coatings applied to the board matrix block oil and fat migration, maintaining exterior appearance and structural integrity throughout the product's full shelf life in retail, gifting, or event environments.</li>
                <li><strong>Moisture Management Coatings:</strong> Clay-coated interior surfaces and optional PE vapor barriers regulate moisture transmission, keeping your cupcake boxes at the precise humidity level required to maintain optimal product texture and sensory quality during display and delivery.</li>
                <li><strong>Anti-Microbial Surface Treatments:</strong> For extended shelf-life applications and bakeries operating in high-humidity environments, we offer food-safe anti-microbial surface coatings that inhibit bacterial growth on interior box surfaces for an additional level of food safety assurance.</li>
              </ul>
              <h3>Structural Engineering for Product Protection</h3>
              <p>Material quality alone does not guarantee safe product deliveryâ€”the structural architecture of your packaging determines how effectively it protects your products through the rigors of handling, stacking, transport, and retail display. Our packaging engineers use CAD modeling and load-testing methodology to design structures that meet the specific mechanical demands of your product category, distribution method, and stacking requirements at every point in the supply chain.</p>
              <ul>
                <li><strong>Reinforced Base Construction:</strong> Double-wall or corrugated base panels distribute product weight evenly across the entire base surface, preventing the localized stress concentrations that cause base panels to bow or fail under normal handling and stacking conditions.</li>
                <li><strong>Precision Closure Engineering:</strong> Tuck-end, auto-bottom, and interlocking lid closure geometries are designed to specific tension and retention force targets, ensuring secure closure that withstands transport vibration without requiring excessive opening force that frustrates end customers.</li>
                <li><strong>Stacking Load Compliance:</strong> Our packaging structures are tested against realistic stacking loads based on your specific order configuration and distribution chain requirements, ensuring no product damage occurs throughout the entire journey from our production facility to your customer.</li>
              </ul>
              <h3>Printing, Finishing and Brand Presentation</h3>
              <p>Your cupcake boxes are brand touchpoints that travel publicly, appear in social media content, and form lasting impressions in the minds of gift recipients and retail customers. Our full-color offset printing and premium finishing options transform functional food packaging into powerful brand marketing assets that work for your bakery business around the clock across every channel where your brand appears and operates.</p>
              <ul>
                <li><strong>Full-Color CMYK Offset Printing:</strong> Commercial offset printing delivers photographic-quality imagery with precise Pantone brand color matching across the entire outer surface area of your custom packaging boxes.</li>
                <li><strong>Lamination Options:</strong> Soft-touch matte lamination creates a luxurious velvet feel; high-gloss lamination delivers vibrant, saturated color intensity; satin lamination provides an elegant and versatile middle-ground finish appropriate for most premium bakery brands.</li>
                <li><strong>Specialty Finishes:</strong> Spot UV coatings applied to logos and brand marks, foil stamping in gold, silver, or rose gold, and embossed or debossed brand elements create premium tactile and visual impressions that communicate artisan quality and justify premium pricing at every retail touchpoint.</li>
              </ul>
              <h3>Sustainability Commitments</h3>
              <p>Consumer and regulatory expectations around sustainable packaging are growing rapidly across the food industry. Our cupcake boxes are available in a range of sustainability profilesâ€”from FSC-certified SBS paperboard sourced from responsibly managed forests, to compostable PLA window films, to water-based vegetable-ink printing systems that eliminate VOC emissions entirely. We work with your brand's sustainability team to identify the right balance between environmental performance, cost, and food safety compliance for your specific packaging requirements.</p>
              <h3>Wholesale Pricing and Production Scalability</h3>
              <p>Whether you are a boutique artisan bakery ordering 250 units for a specialty seasonal release or a multi-location chain requiring 50,000 units per month, our production infrastructure and volume pricing model are structured to serve your business efficiently at every scale. Our volume-tiered pricing rewards higher order quantities with progressively lower per-unit costs, while our 8-10 business day standard production turnaroundâ€”with expedited rush options available on requestâ€”ensures your packaging supply chain stays precisely synchronized with your production schedule every week throughout the year.</p>
            </div>
          </div>
        </div>
      </section>
      <RelatedProductBakery />
      <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
        <div className="container mx-auto px-[30px] relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="space-y-5">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">FDA-Approved Food Safety</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Our cupcake boxes use FDA Title 21 compliant SBS paperboard with grease-resistant and moisture barrier coatings. Every material is certified for direct food contact, protecting your customers and your business from food safety risks at every scale of operation.</p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-100" />
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Structural Protection Engineering</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Reinforced base panels, precision-engineered closure systems, and CAD-modeled stacking load compliance protect your cupcake boxes through handling, transport, and retail display. Our field-tested structural designs eliminate the crushing and collapse failures that damage products and your brand reputation.</p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-100" />
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Premium Brand Aesthetics</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Full-color CMYK printing, spot UV logos, foil stamping, and soft-touch matte lamination transform your cupcake boxes into powerful brand marketing assets. Premium packaging communicates premium quality throughout the entire customer experience, driving loyalty, repeat purchases, and social sharing that grows your bakery business.</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center py-8">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={productHero} alt="Premium Custom Cupcake Boxes Packaging" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                  <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                </div>
              </div>
              <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
              <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-emerald-500 leading-none">8-10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                <img src={productHero} alt="Differentiate Your Cupcakes Brand" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Cupcakes</span> From Others</h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers brings together food safety engineering, structural protection science, and premium brand aesthetics to create cupcake boxes that protect your products and grow your brand at every touchpoint. Our FDA-approved materials, precision closures, and luxury finishes ensure your bakery packaging is as carefully crafted as the products inside every box.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
              </div>
              <Accordion type="single" collapsible defaultValue="faq-1" className="w-full space-y-2">
                {[
                  { id: 'faq-1', q: 'Are your cupcake boxes FDA approved?', a: 'Yes. All our cupcake boxes are manufactured using FDA Title 21 compliant food-grade SBS paperboard, water-based inks, and certified food-safe coatings. Every material is rigorously tested for direct and indirect food contact safety compliance.' },
                  { id: 'faq-2', q: 'Can you add a window to my ', a: 'Absolutely. We offer custom die-cut window panels fitted with crystal-clear, anti-fog, food-safe PET film. Windows can be shaped and sized to any specification to showcase your product and drive impulse purchase decisions in retail and gifting environments.' },
                  { id: 'faq-3', q: 'How do you prevent grease from staining the boxes?', a: 'We apply FDA-approved grease-resistant barrier coatings including fluoropolymer treatments and PE extrusion liners that block oil and fat migration through the board matrix, keeping your packaging exterior pristine throughout retail display and delivery.' },
                  { id: 'faq-4', q: 'What is the minimum order quantity?', a: 'We offer flexible minimums starting from as low as 100 units for boutique bakeries, with competitive wholesale pricing tiers for larger volume orders. Contact us for a custom quote based on your specific quantity, sizes, and print specifications.' },
                  { id: 'faq-5', q: 'What finishing options are available?', a: 'We offer matte lamination, gloss lamination, soft-touch coating, spot UV, gold and silver foil stamping, embossing, debossing, and ribbon handle options. Our sales team will recommend the best combination for your brand positioning and specific budget.' },
                ].map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                    <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                      <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                      <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                        <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                        <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img src={FAQimage} alt="Cupcake Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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
export default CupcakeBoxes;


