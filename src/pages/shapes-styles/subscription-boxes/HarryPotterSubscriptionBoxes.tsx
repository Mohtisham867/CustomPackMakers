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
import { RelatedProductEcommerce } from "@/components/RelatedProductEcommerce";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImage from "@/assets/subscription-boxes/harry-potter-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const HarryPotterSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Harry Potter Subscription Boxes - Main View" },
        { src: heroImage, alt: "Harry Potter Subscription Boxes - Interior" },
        { src: heroImage, alt: "Harry Potter Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Harry Potter Subscription Boxes - Detail" },
        { src: heroImage, alt: "Harry Potter Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Harry Potter Subscription Boxes | Wizarding World Fan Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom Harry Potter subscription boxes wholesale. Premium wizarding world fan box packaging with magical designs, collectible finishes & fast turnaround. Get a free quote." />
                <meta name="keywords" content="Harry Potter subscription boxes, wizarding world fan box packaging, custom Harry Potter subscription packaging, monthly wizard boxes, fandom subscription box packaging" />
                <meta property="og:title" content="Custom Harry Potter Subscription Boxes | Wizarding World Fan Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom Harry Potter subscription packaging. Magical designs, collectible finishes & enchanting interior reveals. Low minimums, 8–10 day turnaround. Get a quote." />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes & Styles</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/subscription-boxes">Subscription Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Harry Potter Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Harry Potter Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom wizarding world fan box packaging engineered for fandom subscription brands, collectible curators, and licensed merchandise boxes — creating magical monthly experiences that transport every subscriber straight to Hogwarts.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Harry Potter Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Wizarding World Subscription Packaging That Creates Real Magical Moments
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom Harry Potter subscription boxes</strong> are purpose-built for fandom subscription brands, independent wizarding world collectible curators, unofficial fan merchandise subscription services, and licensed merchandise box companies serving the global Harry Potter fan community — a passionate, multi-generational fandom that spans young readers discovering the books for the first time to adult fans who have been devotees for decades. The Harry Potter fandom subscription market is among the most emotionally engaged in any pop culture category, and packaging that authentically captures the magical world's visual language creates unboxing experiences subscribers describe as genuinely enchanting.
                        </p>
                        <p>
                            Our <strong className="text-foreground">wizarding world fan box packaging</strong> draws on the iconic visual identity of the wizarding world — house colors and crests, magical creature illustrations, spell scroll typography, Hogwarts architectural motifs, and the characteristic warm dark-leather-and-aged-parchment aesthetic that fans worldwide associate with the most beloved fantasy series in publishing history. With house-specific color customization, aged-parchment texture printing, gold foil wax seal stamps, and interior magical world reveal prints, our Harry Potter subscription boxes create the enchanted unboxing moment that wizarding world fans celebrate with every delivery. Low minimums from 100 units.
                        </p>
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
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
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
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Creating Magical Unboxing Moments for the World's Most Passionate Fandom
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The Harry Potter fandom is one of the most dedicated, emotionally connected, and commercially active fandoms in the world. Harry Potter subscription box services have built substantial subscriber communities by delivering the magic of the wizarding world directly to fans' doorsteps — a monthly continuation of the experience that millions of readers fell in love with as children and have never truly left. At the center of every successful Harry Potter subscription is the box itself — the physical representation of the portal to the wizarding world, and the first signal of what magical discoveries await inside.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer Harry Potter themed subscription packaging that authentically reproduces the visual and tactile magic of the wizarding world. Our design capabilities allow fandom subscription brands to create packaging that feels like it arrived from Diagon Alley — complete with wax seal aesthetics, aged parchment textures, and house-color customization that makes every subscriber feel like they've just opened their own Hogwarts acceptance letter.
                            </p>

                            <h3>Wizarding World Aesthetic Design Capabilities</h3>
                            <p>
                                Harry Potter themed subscription packaging requires deep engagement with the visual language of the wizarding world:
                            </p>
                            <ul>
                                <li><strong>House-Specific Color Customization:</strong> Gryffindor scarlet and gold, Slytherin green and silver, Hufflepuff yellow and black, and Ravenclaw blue and bronze house color schemes allow subscribers to receive their monthly box aligned with their house identity — a powerful personalization feature that dramatically increases subscriber emotional investment.</li>
                                <li><strong>Aged Parchment Texture Printing:</strong> Specialty textured papers printed with aged parchment yellows and warm manuscript tones create the visual and tactile sensation of handling authentic wizarding world correspondence — evoking the acceptance letter, the Daily Prophet, and the hand-drawn Marauder's Map.</li>
                                <li><strong>Gold Foil Wax Seal Aesthetics:</strong> Gold foil stamping and custom die-cut circular wax seal motifs on exterior closures and panels create the authentic feel of official wizarding world correspondence — the same aesthetic thrill wizarding world fans experienced reading the first book's description of Harry's owl-delivered Hogwarts letter.</li>
                                <li><strong>Spell Typography and Magical Creature Illustration:</strong> Custom-designed spell typography in wizarding script fonts and detailed magical creature illustration wraps create immersive visual worlds on the exterior panels that fans examine closely and share enthusiastically.</li>
                                <li><strong>Magical World Interior Reveals:</strong> Interior lid printing of iconic wizarding world locations — the Great Hall, Hogsmeade High Street, the Forbidden Forest — creates a breathtaking secondary reveal when the box is opened.</li>
                            </ul>

                            <h3>Collectible Value Engineering</h3>
                            <p>
                                Harry Potter subscription box subscribers are often collectors as much as consumers. The best fandom subscription packaging is designed with collectible value as a core feature — boxes that subscribers keep, display, and photograph as part of their growing wizarding world collection. Our collectible-focused engineering includes:
                            </p>
                            <ul>
                                <li>Rigid chipboard construction that maintains its shape and print quality for years of display storage</li>
                                <li>Sequential month numbering systems that create complete collection sets across a subscription year</li>
                                <li>Special edition visual treatments for key calendar moments — book anniversary editions, house championship editions, holiday special editions</li>
                                <li>Certificate of authenticity style cards printed for limited-edition collectible box runs</li>
                            </ul>

                            <h3>The Fandom Subscription Ecosystem</h3>
                            <p>
                                Harry Potter subscription brands benefit from one of the most active fandom content creation communities in entertainment. Subscribers film unboxing videos, photograph their hauls, create flat-lay posts, and share reactions across YouTube, Instagram, TikTok, and dedicated Harry Potter fan communities. Our Harry Potter subscription boxes are designed to be maximally shareable — visually spectacular in overhead shots, dramatically lit in unboxing videos, and emotionally resonant in fan community spaces where authenticity and magical detail are rewarded with enthusiastic engagement. Partner with CustomPackMakers to create wizarding world subscription packaging that your fans are proud to share with every fellow wizard they know.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductEcommerce />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine authentic wizarding world aesthetics, house-specific personalization, and collectible-grade construction to create Harry Potter subscription boxes fans genuinely treasure.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Authentic Wizarding World Aesthetics</h3><p className="text-sm text-slate-500 leading-relaxed">Our aged parchment textures, gold foil wax seal stamps, spell typography, and magical creature illustrations create <strong>Harry Potter subscription boxes</strong> that wizarding world fans immediately recognize as authentically belonging to their beloved universe — packaging worthy of a real Hogwarts acceptance letter.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">House-Specific Personalization</h3><p className="text-sm text-slate-500 leading-relaxed">Our Gryffindor, Slytherin, Hufflepuff, and Ravenclaw house-color personalization system makes <strong>wizarding fan subscription boxes</strong> feel individually tailored to each subscriber's magical identity — the most powerful subscriber loyalty feature in the wizarding world fandom subscription market.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Collectible-Grade Display Construction</h3><p className="text-sm text-slate-500 leading-relaxed">Our heavyweight rigid chipboard construction ensures every <strong>Harry Potter subscription box</strong> maintains museum-quality shape and print fidelity for years of fan collection display — creating long-term brand presence in subscribers' homes and collectible value that motivates many fans to continue their subscriptions indefinitely.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Harry Potter Subscription Box" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={heroImage} alt="Wizarding World Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Cast the Perfect <span className="text-primary">Packaging Spell</span> on Your Wizarding World Subscribers
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that Harry Potter fandom subscription brands don't just sell merchandise — they sell monthly moments of magic. Every subscriber who opens your wizarding world subscription box is reliving the wonder of reading about Diagon Alley for the first time, of discovering the Great Hall, of finding their Hogwarts house. Our packaging engineering team creates Harry Potter subscription boxes that honor the depth of that emotional connection — authentic wizarding world aesthetics, house-specific personalization, collectible-grade construction, and magical interior reveals that make every delivery feel like a new chapter in a story that never truly ends.
                            </p>
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our wizarding world subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can Harry Potter subscription boxes be personalized by Hogwarts house?", answer: "Yes. We offer house-specific color customization at the per-subscriber level using our variable-data printing system. Each subscriber specifies their Hogwarts house — Gryffindor, Slytherin, Hufflepuff, or Ravenclaw — and their monthly box exterior is printed in the corresponding house color palette and crest design. This personalization feature generates extraordinary subscriber loyalty and unboxing content sharing in wizarding world fan communities." },
                                    { id: "item-2", question: "How do you achieve the aged parchment aesthetic for wizarding world packaging?", answer: "We achieve the aged parchment aesthetic through a combination of warm-toned specialty textured paper stocks, yellowed parchment CMYK color printing, and manuscript-style typography and borders that evoke the visual feel of authentic wizarding world correspondence. The result is a physical texture and color that fans immediately associate with the books' visual world — a tactile connection to the wizarding universe that fans describe as authentically magical." },
                                    { id: "item-3", question: "Can you design interior lid prints featuring Hogwarts locations?", answer: "Yes. Interior lid printing is one of our most celebrated features for Harry Potter subscription brands. We print dramatic full-color scenes of wizarding world locations — the Great Hall at feast, Hogsmeade village in winter, the Forbidden Forest at dusk, the Quidditch pitch — on the interior lid surface, creating an enchanting secondary reveal that fans photograph from the moment they open the box." },
                                    { id: "item-4", question: "Can subscription boxes include wax seal stamp aesthetics?", answer: "Yes. We achieve authentic wax seal aesthetics through precision die-cut circular foil stamps in gold or red that are applied to the box exterior closure, creating the visual sensation of opening an officially sealed wizarding world envelope. For an even more immersive touch, we can engineer real wax seal elements as box closure enhancements for premium tier subscription packaging." },
                                    { id: "item-5", question: "What is the minimum order and turnaround for Harry Potter themed subscription boxes?", answer: "Minimum order starts at 100 units. Standard production lead time is 8–10 business days from artwork approval. Rush 4–6 day production is available for special wizarding world event releases or book anniversary editions. House-specific personalized printing is available at a modest additional per-unit cost. Free shipping on qualifying wholesale orders." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Harry Potter Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default HarryPotterSubscriptionBoxes;
