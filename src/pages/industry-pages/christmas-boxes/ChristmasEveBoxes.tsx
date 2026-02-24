import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import productHero from "@/assets/christmas-products/christmas-eve-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
import christmasCandyBoxes from "@/assets/christmas-products/christmas-candy-boxes.webp";
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.webp";
import christmasTreatBoxes from "@/assets/christmas-products/christmas-treat-boxes.webp";
import christmasPaperBags from "@/assets/christmas-products/christmas-paper-bags.webp";
import christmasGiftBags from "@/assets/christmas-products/christmas-gift-bags.webp";
import christmasFavorBoxes from "@/assets/christmas-products/christmas-favor-boxes.webp";
import christmasStickers from "@/assets/christmas-products/christmas-stickers.webp";
import adventCalendarBoxes from "@/assets/christmas-products/advent-calendar-boxes.webp";

const carouselProducts = [
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/christmas-boxes/christmas-chocolate-boxes", desc: "Festive chocolate packaging with foil and food-safe inserts." },
    { name: "Christmas Tags", image: christmasTags, link: "/industries/christmas-boxes/christmas-tags", desc: "Custom die-cut holiday gift tags." },
    { name: "Christmas Gable Boxes", image: christmasGableBoxes, link: "/industries/christmas-boxes/christmas-gable-boxes", desc: "Handle carry boxes for holiday treats." },
    { name: "Christmas Cupcake Boxes", image: christmasCupcakeBoxes, link: "/industries/christmas-boxes/christmas-cupcake-boxes", desc: "Holiday cupcake packaging with secure inserts." },
    { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, link: "/industries/christmas-boxes/custom-christmas-candy-boxes", desc: "Seasonal candy packaging in vibrant holiday colors." },
    { name: "Christmas Gift Boxes", image: christmasGiftBoxes, link: "/industries/christmas-boxes/christmas-gift-boxes", desc: "Premium gift boxes with magnetic closures." },
    { name: "Christmas Treat Boxes", image: christmasTreatBoxes, link: "/industries/christmas-boxes/christmas-treat-boxes", desc: "Charming treat packaging for holiday snacks." },
    { name: "Christmas Paper Bags", image: christmasPaperBags, link: "/industries/christmas-boxes/christmas-paper-bags", desc: "Reinforced holiday shopping bags." },
    { name: "Christmas Gift Bags", image: christmasGiftBags, link: "/industries/christmas-boxes/christmas-gift-bags", desc: "Premium gift bags with festive designs." },
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What contents are typically placed in Christmas Eve boxes and how should they be compartmentalized?", a: "Traditional Christmas Eve boxes contain pajamas, a Christmas book, hot chocolate with a mug, a festive movie, and small seasonal treats—creating a curated pre-Christmas family ritual experience. Custom insert systems with individual foam-padded compartments or thermoform trays keep each item in designated position within the box, presenting the complete Christmas Eve collection as an organized, visually appealing arrangement when the lid is first opened rather than a disordered jumble of varied-size items." },
    { id: "item-2", q: "What lead times apply to Christmas Eve box orders for the holiday season?", a: "Christmas Eve boxes are one of the most time-sensitive seasonal packaging categories—requiring delivery by December 23rd at the latest for family tradition use on Christmas Eve. Place orders by October 1st for custom-printed programs requiring structural tooling. Standard print-only programs can be ordered through late October with 10–12 business day production. Rush December delivery is available but carries premium expedite costs—contact our team October 1st to guarantee Christmas Eve delivery scheduling for your seasonal program." },
    { id: "item-3", q: "Can Christmas Eve boxes include numbered or personalized name panels for individual family members?", a: "Yes. Variable data printed name panels for individual family member Christmas Eve boxes—children's names, family members, or recipient personalization—can be produced through digital printing on box lid panels, band wrap labels, or mounted name tag inserts. Personalized Christmas Eve boxes transform a seasonal gifting tradition into an individual named experience that amplifies the emotional significance of the Christmas Eve ritual for each recipient, making personalized name panel programming a high-value addition to family-oriented Christmas Eve box programs." },
    { id: "item-4", q: "What eco-friendly materials are available for Christmas Eve box packaging?", a: "FSC-certified kraft and recycled chipboard Christmas Eve boxes with soy-based ink printing and water-based adhesives provide the sustainable material option for environmentally conscious Christmas Eve box programs. Natural kraft exterior finishes complement the organic family tradition aesthetic that Christmas Eve box gifting represents—while FSC certification provides the responsible sourcing credentials that environmentally aware holiday consumers increasingly require from premium seasonal family gifting packaging." },
    { id: "item-5", q: "What box sizes are recommended for standard Christmas Eve box contents?", a: "Standard Christmas Eve box dimensions of 12×8×6 inches accommodate the typical pyjama-plus-treat assortment combination with comfortable headroom for folded fabric and packet items. Larger 14×10×8 inch configurations handle additional content including books, activity sets, and larger mug configurations. Mini Christmas Eve boxes at 8×6×4 inches suit treat-only or stocking-stuffer-scale Christmas Eve gifting programs for toddlers and younger children with less varied content package requirements." },
];

const ChristmasEveBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: productHero, alt: "Christmas Eve Boxes - Main View" },
        { src: productHero, alt: "Christmas Eve Boxes - Interior Compartments" },
        { src: productHero, alt: "Christmas Eve Boxes - Name Panel" },
        { src: productHero, alt: "Christmas Eve Boxes - Kraft Eco" },
        { src: productHero, alt: "Christmas Eve Boxes - Family Set" },
    ];
    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Christmas Eve Boxes | Festive Family Tradition Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas Eve boxes with personalized name panels, compartment inserts, festive foil printing, and eco-friendly materials. Build your family Christmas tradition with premium seasonal packaging." />
                <meta name="keywords" content="christmas eve boxes, custom christmas eve box, personalized christmas eve boxes, family christmas eve tradition boxes, christmas eve gift boxes" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">Industries</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/christmas-boxes">Christmas Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Christmas Eve Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas Eve</span> Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Custom Christmas Eve boxes with personalized name panels, organized compartment inserts, festive foil-stamped exteriors, and eco-certified material options—creating the magical family Christmas Eve tradition packaging that children remember for a lifetime and brands build seasonal loyalty with.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Christmas Eve Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Christmas Eve Boxes That Turn Family Tradition Into a Premium Gifting Experience</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas Eve boxes</strong> are designed to serve the one-of-a-kind family tradition function that no other seasonal packaging format occupies—the annual countdown-night ritual box of festive comfort items that transforms Christmas Eve from a waiting period into a beloved tradition experience in its own right. Rigid chipboard and kraft construction with compartment insert systems hold pajamas, books, hot chocolate, treats, and seasonal activities in organized presentation positions within the box interior—revealing the curated Christmas Eve collection as a complete, visually enchanting arranged display when the lid is first lifted.</p>
                        <p>Personalized variable-printed name panels on box lids or mounted name tags transform individual family member boxes into named personal keepsakes that amplify the emotional significance of the tradition. Festive red, green, and gold foil exterior printing, snowflake embossed panel designs, and premium interior tissue paper presentation complete the Christmas Eve box experience—making the packaging itself a tradition-defining, photographable holiday moment that families share annually and brands leverage for seasonal gifting program loyalty building.</p>
                    </div>
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
                                {productImages.map((img, i) => (
                                    <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === i ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <img src={img.src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
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
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="250" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Eve Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The Christmas Eve box tradition has become one of the most rapidly growing seasonal gifting rituals in contemporary holiday culture—a family practice that centers on presenting children and family members with a curated box of festive comfort items on the evening before Christmas to mark the beginning of the holiday celebration and create a memorable annual tradition experience. Originating primarily in UK holiday culture, the Christmas Eve box tradition has spread globally through social media communities that share the annual reveal, content curation ideas, and decorated box aesthetics—transforming a niche family custom into a mainstream seasonal gifting category that packaging brands, confectionery companies, and retail gift businesses are increasingly recognizing as a commercially significant market opportunity.</p>
                            <p>Unlike conventional gift boxes where the packaging is incidental to the gift, the Christmas Eve box is itself as important as its contents—because the box will be brought out and displayed annually, potentially stored and reused across years, and photographed and shared as a social media tradition content moment. This makes the quality, personalization, and aesthetic of the Christmas Eve box a primary consumer selection criterion that outweighs content completeness in many purchasing decisions. Families investing in Christmas Eve box programs select packaging that will photograph beautifully, withstand annual reuse where applicable, and create the established visual identity for their specific family tradition aesthetic.</p>
                            <h3>Christmas Eve Box Content Organization Systems</h3>
                            <ul>
                                <li><strong>Compartment Insert Trays:</strong> Thermoformed PET or foam-padded compartment tray systems create individual holding positions for pajamas, book, mug, and treat items within the box interior—ensuring each element of the Christmas Eve collection is presented in its designated position in an organized, visually appealing arrangement when the lid is first lifted rather than as a disordered grouping of varied-size items.</li>
                                <li><strong>Tissue Paper Interior Presentation:</strong> Branded or coordinated tissue paper in festive color combinations creates a luxurious interior presentation environment that enhances the initial lid-opening reveal moment—wrapping individual items within the tissue layer creates an additional element of discovery that amplifies the emotional excitement of the Christmas Eve box opening experience.</li>
                                <li><strong>Individual Item Labeling:</strong> Numbered or named label systems for individual item positions within the Christmas Eve box create a guided discovery sequence—directing recipients through the curated collection in a predetermined order that builds anticipation from first item to final reveal within the complete Christmas Eve box gift program.</li>
                            </ul>
                            <h3>Personalization Options for Christmas Eve Boxes</h3>
                            <ul>
                                <li><strong>Variable Name Panel Printing:</strong> Digital print personalization of individual recipient names on box lid panels, band labels, or mounted name cards—enabling family Christmas Eve box programs to produce individually named boxes for each child or family member at commercially viable variable print run economics.</li>
                                <li><strong>Embossed Name Plates:</strong> Foil-embossed name plate inserts in gold, silver, and rose gold metallic finishes mount to box lid surfaces—providing the premium personalization aesthetic that luxury Christmas Eve box programs require for recipient name presentation with the tactile quality that distinguishes premium from standard personalization approaches.</li>
                            </ul>
                            <h3>Festive Exterior Design for Christmas Eve Boxes</h3>
                            <ul>
                                <li><strong>Snowflake Geometric Embossing:</strong> Blind or foil-filled snowflake pattern embossing on box lid and side panel surfaces creates a premium tactile texture that communicates the winter festive quality associated with Christmas Eve tradition packaging—particularly effective combined with dark navy, deep burgundy, or forest green base color wrapping papers.</li>
                                <li><strong>Illustrated Festive Scenes:</strong> Custom illustrated Christmas Eve narrative scenes—Santa's reindeer, moonlit villages, cozy fireplace interiors, starlit winter landscapes—printed across box exterior surfaces create the enchanting visual storytelling that resonates emotionally with Christmas Eve tradition psychology and stands apart from generic seasonal pattern alternatives.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Eve Boxes</h3>
                            <p>Our Christmas Eve box packaging team understands the unique emotional significance of the seasonal tradition format—delivering personalized, beautifully presented, structurally premium Christmas Eve boxes that create the magical first impression that families photograph, share, and return to annually. Contact us for a Christmas Eve box program quote and sample today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Christmas Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete festive packaging range for every holiday occasion.</p>
                    </div>
                    <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                        <CarouselContent className="-ml-4">
                            {carouselProducts.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Link to={product.link} className="block h-full">
                                        <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                            <CardContent className="p-0 flex flex-col h-full">
                                                <div className="h-52 w-full bg-gray-50 overflow-hidden">
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                                </div>
                                                <div className="p-4 border-t border-border flex-grow flex flex-col">
                                                    <h3 className="font-semibold text-foreground text-sm mb-2">{product.name}</h3>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.desc}</p>
                                                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">View Product</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: count }).map((_, i) => (
                                <button key={i} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`} onClick={() => api?.scrollTo(i)} aria-label={`Go to slide ${i + 1}`} />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Personalized name panels, compartment inserts, and festive finishes for memorable Christmas Eve boxes.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Variable Name Personalization", body: "Digital variable-print name panels for individual family member Christmas Eve boxes transform standard seasonal packaging into personally addressed tradition keepsakes—amplifying the emotional significance of the Christmas Eve ritual for each named recipient with the individual attention that premium Christmas tradition gifting programs require to create genuinely memorable festive experiences." },
                                { title: "Organized Compartment Inserts", body: "Thermoformed PET and foam-padded compartment insert systems organize Christmas Eve box contents into individually positioned presentation arrangements—ensuring pajamas, books, treats, and mug items present beautifully when the lid is first lifted, creating the organized visual reveal that photographs well and maximizes the tradition opening-moment emotional impact." },
                                { title: "FSC Kraft Sustainable Materials", body: "Natural kraft FSC-certified Christmas Eve box construction with soy-based ink printing provides the rustic artisan sustainable aesthetic that environmentally conscious family Christmas tradition programs require—delivering the warm, natural material quality that kraft packaging communicates while meeting responsible sourcing certification standards that eco-aware seasonal gifting consumers increasingly prioritize." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                        <div><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.body}</p></div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Christmas Eve boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Christmas Eve Boxes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Eve Boxes</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the growing Christmas Eve tradition gifting market, packaging that personalizes, organizes, and enchants creates the family memories that define seasonal brand loyalty. Our Christmas Eve boxes combine variable name panel personalization, organized compartment insert systems, festive embossed exterior designs, and eco-certified kraft material options—delivering the premium tradition packaging experience that families return to annually and seasonal gifting brands build lasting holiday customer relationships with.</p>
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
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {faqs.map(faq => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Christmas Eve Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasEveBoxes;
