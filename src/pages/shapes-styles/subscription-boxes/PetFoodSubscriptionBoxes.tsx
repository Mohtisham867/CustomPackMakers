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

import heroImage from "@/assets/subscription-boxes/pet-food-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const PetFoodSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Pet Food Subscription Boxes - Main View" },
        { src: heroImage, alt: "Pet Food Subscription Boxes - Interior" },
        { src: heroImage, alt: "Pet Food Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Pet Food Subscription Boxes - Detail" },
        { src: heroImage, alt: "Pet Food Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Pet Food Subscription Boxes | Pet Treat Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom pet food subscription boxes wholesale. Premium pet treat box packaging with pet-safe materials, durable construction & fast turnaround. Get a free quote." />
                <meta name="keywords" content="pet food subscription boxes, pet treat box packaging, custom pet subscription packaging, monthly pet boxes, wholesale pet food subscription packaging" />
                <meta property="og:title" content="Custom Pet Food Subscription Boxes | Pet Treat Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom pet food subscription packaging. Pet-safe materials, durable construction & adorable custom designs. Low minimums, 8–10 day turnaround. Get a quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Pet Food Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Pet Food Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom pet food subscription packaging engineered for pet brands, treat curators, and pet wellness subscription services — bringing delight to pet owners and healthy variety to beloved dogs and cats every month.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Pet Food Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Pet Subscription Packaging That Pet Owners Love and Pets Approve
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom pet food subscription boxes</strong> are purpose-built for pet treat brands, natural pet nutrition companies, dog and cat wellness subscription curators, and pet lifestyle brands that need packaging combining the safety standards of food packaging with the emotional warmth that pet owner communities respond to. The pet subscription market is driven by the profound bond pet owners have with their animals — subscribers don't just want quality treats; they want a monthly experience that celebrates their pet as a beloved family member.
                        </p>
                        <p>
                            Manufactured from food-safe, pet-safe materials including FDA-compliant coated board and sustainable kraft, our <strong className="text-foreground">pet treat subscription packaging</strong> safely contains dry treats, dehydrated chews, natural health supplements, and pet accessories. With adorable pet character printing, breed-specific personalization options, and playful brand typography, our packaging creates the visual warmth and humor that connects deeply with pet owner communities. Durable corrugated construction and tamper-evident sealing ensure products arrive safely to every pet's household. Low minimums start at 100 units.
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
                        Winning Pet Owner Loyalty Through Premium Subscription Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Pet owners are among the most brand-loyal consumers in any market. When a pet subscription brand earns their trust — through consistent product quality, safe ingredients, and a packaging experience that acknowledges the emotional centrality of their animal in family life — that subscriber stays for years, not months. The pet subscription market has grown to billions of dollars annually precisely because pet owners treat their subscriptions as expressions of love for their animals, not merely as purchasing convenience.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that pet food subscription packaging must work simultaneously on two levels: technical food safety for the pet products inside, and emotional warmth for the human pet owners who make every renewal decision. Our pet subscription boxes satisfy both requirements through precise engineering and deeply appealing visual design.
                            </p>

                            <h3>Pet-Safe Food Packaging Standards</h3>
                            <p>
                                Pet food packaging is subject to many of the same safety standards as human food packaging, with specific consideration for pet-unique product formats:
                            </p>
                            <ul>
                                <li><strong>FDA-Compliant Food-Safe Coatings:</strong> All interior surfaces use FDA-approved food-safe coatings that prevent ink or adhesive migration into pet food products, ensuring complete safety for all pet treat and food formats.</li>
                                <li><strong>Moisture-Resistant Interior Panels:</strong> Dehydrated treats, freeze-dried chews, and dry kibble samples require humidity-resistant interior coatings that prevent moisture absorption that causes spoilage and texture degradation during shipping.</li>
                                <li><strong>Individual Treat Compartments:</strong> Custom divider systems separate different treat varieties within the subscription box, allowing allergen-sensitive pet diets to be safely accommodated without cross-contamination risk.</li>
                                <li><strong>Tamper-Evident Sealing:</strong> Tamper-evident seals on pet food subscription boxes provide visual integrity assurance to pet owners who rightly demand certainty about product safety for their animals.</li>
                                <li><strong>Odor-Neutral Materials:</strong> All box materials are certified odor-neutral to prevent off-flavor contamination of sensitive pet foods from packaging adhesives, inks, or coating materials.</li>
                            </ul>

                            <h3>Pet Owner Emotional Design Principles</h3>
                            <p>
                                Pet subscription packaging must speak directly to the deep emotional bond between pet owners and their animals. Our design capabilities for pet subscription brands include:
                            </p>
                            <ul>
                                <li><strong>Breed-Specific Character Illustration:</strong> Custom-illustrated dog and cat breed characters that match your subscriber's pet type create immediate personalized connection — a packaging experience that says "this box was made for your specific dog or cat."</li>
                                <li><strong>Playful, Warm Brand Typography:</strong> Pet brand typography uses rounded, friendly letterforms and warm brand palettes that evoke the affection and playfulness of the human-animal relationship.</li>
                                <li><strong>Pet Name Personalization Panels:</strong> Variable-data printing allows individual boxes to feature each subscriber's pet name on the exterior — a powerful personalization feature that dramatically increases unboxing content creation and subscriber sharing.</li>
                                <li><strong>Humorous Pet-Perspective Copy:</strong> Exterior copy written from the pet's perspective — "My Monthly Treasure Has Arrived" or "Finally, Something in This House Is for ME" — creates the humor and warmth that resonates powerfully in pet owner communities.</li>
                            </ul>

                            <h3>The Pet Subscription Loyalty Flywheel</h3>
                            <p>
                                Pet subscription brands benefit from virtuous loyalty cycles: a pet owner receives a beautifully packaged subscription box, photographs their pet interacting with it, shares the content widely in pet owner social communities, receives peer validation and engagement, and renews their subscription to recreate that community moment next month. Premium packaging is the trigger for this entire cycle. Pet owner communities on Instagram, TikTok, and Facebook are among the most active content-sharing communities online, and your packaging is the primary vehicle for their content creation. Invest in packaging that makes every pet subscription delivery a photo opportunity worth sharing.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine pet-safe food engineering, emotional pet-owner design, and community-driven brand warmth to create pet subscription boxes that get photographed with every delivery.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Pet-Safe Food Engineering</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>pet food subscription box</strong> uses FDA-compliant, odor-neutral, tamper-evident packaging that pet owners trust for their animals' safety — from moisture-resistant treat compartments to individually sealed supplement pouches, we engineer product integrity from production through last-mile delivery.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Pet-Personality Character Design</h3><p className="text-sm text-slate-500 leading-relaxed">Our breed-specific character illustrations and pet-perspective humor copy create <strong>pet treat subscription packaging</strong> that pet owners find irresistible — packaging they photograph with their pets, share in community groups, and use as a primary driver for recommending your subscription to every fellow pet lover they know.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Pet Name Personalization</h3><p className="text-sm text-slate-500 leading-relaxed">Our variable-data printing capability allows individual <strong>pet subscription boxes</strong> to feature each subscriber's pet name on the exterior — a powerful engagement feature that transforms a standard subscription delivery into a personalized pet celebration that drives extraordinary unboxing content and word-of-mouth referrals.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Pet Food Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Pet Food Subscription Brand Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Pet Brand</span> With Packaging That Pet Owners Adore
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that pet subscription brands compete in a market where love — not just product quality — drives loyalty. Pet owners want packaging that celebrates their animals and reflects the depth of that bond. Our team creates pet food subscription boxes that feel personal, warm, and joyfully pet-centric, from breed-specific character illustrations and personalized pet name printing to pet-perspective humor copy and allergen-safe treat compartments. We help pet subscription brands build communities of passionate pet owners who share every delivery and subscribe for years because your box makes them feel like the best pet parent in the world.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our pet food subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are your pet food subscription box materials safe for pet food contact?", answer: "Yes. All interior materials use FDA-compliant, food-safe, odor-neutral coatings certified safe for dry pet food contact applications. Our materials are free from BPA, phthalates, and harmful adhesive solvents. We provide full material safety documentation for pet food brands requiring supplier certification records for their quality management systems." },
                                    { id: "item-2", question: "Can you personalize pet subscription boxes with each subscriber's pet name?", answer: "Yes. We offer variable-data printing capability that allows individual pet subscription boxes to be customized with each subscriber's pet name on the exterior panel. This feature significantly increases unboxing content creation rates, as pet owners share personalized boxes extensively in online pet communities — driving organic subscriber acquisition at no additional marketing cost." },
                                    { id: "item-3", question: "How do you accommodate allergen separation for pets with dietary restrictions?", answer: "We engineer custom divider systems with individual product compartments that physically separate different treat and food varieties within the subscription box. For allergen-strict pet dietary requirements, we offer individual food-safe sealed interior pouches for each product variety, preventing any cross-contamination within the overall box structure." },
                                    { id: "item-4", question: "Can you design breed-specific character art for dog and cat subscription boxes?", answer: "Absolutely. Our design team creates custom breed-specific illustrated characters for dog and cat subscription brands — Golden Retrievers, French Bulldogs, Maine Coons, Siamese cats, and any other breed. These breed characters create immediate personalized connection with subscribers who specifically seek out subscriptions curated for their pet's breed characteristics and dietary needs." },
                                    { id: "item-5", question: "What is the minimum order and lead time for pet food subscription boxes?", answer: "Minimum order starts at 100 units. Standard production lead time is 8–10 business days from artwork approval. Rush 4–6 day production is available. All orders include a complimentary digital proof review before production begins. Free shipping applies to qualifying wholesale pet food subscription packaging orders. Variable-data personalized printing is available at additional per-unit cost." }
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
                            <img src={FAQimage} alt="Pet Food Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default PetFoodSubscriptionBoxes;
