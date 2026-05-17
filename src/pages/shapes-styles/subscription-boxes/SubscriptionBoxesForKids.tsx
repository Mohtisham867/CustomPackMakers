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

import heroImage from "@/assets/shape-style/subscription-boxes/subscription-boxes-for-kids.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SubscriptionBoxesForKids = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Subscription Boxes For Kids - Main View" },
        { src: heroImage, alt: "Subscription Boxes For Kids - Interior" },
        { src: heroImage, alt: "Subscription Boxes For Kids - Open Box" },
        { src: heroImage, alt: "Subscription Boxes For Kids - Detail" },
        { src: heroImage, alt: "Subscription Boxes For Kids - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Subscription Boxes For Kids | Children's Activity Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom subscription boxes for kids wholesale. Premium children's activity box packaging with safe materials, colorful printing & fast turnaround. Get a free quote." />
                <meta name="keywords" content="subscription boxes for kids, children's subscription box packaging, kids activity boxes, monthly kids boxes, wholesale children's subscription packaging" />
                <meta property="og:title" content="Custom Subscription Boxes For Kids | Children's Activity Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom kids subscription box packaging. Child-safe materials, vibrant full-color printing & interactive designs. Low minimums, 8–10 day turnaround. Get a quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Subscription Boxes For Kids</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Subscription Boxes For Kids
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom children's subscription packaging engineered with child-safe materials, vibrant imagination-sparking designs, and fun interactive elements that make every monthly delivery the highlight of a child's month.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Subscription Boxes For Kids Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Children's Subscription Packaging That Sparks Imagination and Builds Anticipation
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom subscription boxes for kids</strong> are designed for children's activity services, educational toy curators, arts and crafts subscription brands, and family-focused gift box companies that understand the profound difference between packaging that merely contains products and packaging that actively participates in the child's experience. Every structural element — from the colorful exterior illustration to the interactive interior reveal — is engineered to maximize that irreplaceable moment when a child sees their monthly box at the door.
                        </p>
                        <p>
                            Manufactured from child-safe, non-toxic materials that meet rigorous safety standards, our <strong className="text-foreground">children's subscription packaging</strong> supports vibrant full-color printing of illustrated characters, activity instructions, and themed educational content directly on the box surfaces. With durable corrugated construction, puncture-resistant interiors, and secure product organization, we ensure every craft kit, activity set, educational toy, and book arrives in perfect condition — ready for children to dive in immediately. Low minimums start at 100 units with 8–10 day production turnaround.
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
                        Creating Magic Monthly Moments With Children's Subscription Box Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Children's subscription boxes occupy a uniquely powerful position in the subscription economy — they don't just satisfy a consumer preference, they create a monthly ritual that children actively look forward to and parents invest in as a tool for child development, enrichment, and joy. Brands like KiwiCo, Little Passports, Bookroo, and Surprise Ride built enormous subscriber communities by understanding that the experience of receiving the box is inseparable from the products inside. For the child, the box is not packaging — it is the beginning of the adventure.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer children's subscription boxes that are designed from a child's perspective first: bold, colorful, exciting, and interactive. Every element of our kids' subscription packaging is aligned with unlocking maximum joy from the very first glimpse — a brightly illustrated exterior, a playful interior reveal, a clearly organized activity layout, and a structural durability that survives even the most enthusiastic young subscriber.
                            </p>

                            <h3>Child-Safety-First Material Standards</h3>
                            <p>
                                When packaging is designed for children, safety standards are non-negotiable. All materials used in our kids' subscription boxes meet stringent child safety standards:
                            </p>
                            <ul>
                                <li><strong>Non-Toxic Inks:</strong> All printing inks used on children's subscription boxes are certified non-toxic and conform to ASTM D-4236 safety standards for child contact applications.</li>
                                <li><strong>Rounded Interior Edges:</strong> All die-cut interior elements are engineered with rounded edge profiles that eliminate paper cuts and sharp corners that could injure small hands during unboxing.</li>
                                <li><strong>No Low-Molecular-Weight Plastics:</strong> We avoid phthalate-containing plastics and BPA in any packaging components that children may handle, in compliance with CPSC toy safety standards.</li>
                                <li><strong>Child-Safe Adhesives:</strong> All adhesives used in our kids' subscription packaging are water-based and certified non-toxic, with no solvent off-gassing that could cause respiratory irritation.</li>
                                <li><strong>Structural Puncture Resistance:</strong> Our reinforced corrugated and chipboard options resist puncturing during energetic unboxing by young children, preventing box collapse or structural failure that could injury a child's hands or eyes.</li>
                            </ul>

                            <h3>Design Elements That Maximize Child Engagement</h3>
                            <p>
                                Children's subscription packaging is a creative canvas for building anticipation and excitement. Our printing and structural design capabilities for kids' boxes include engagement-maximizing features:
                            </p>
                            <ul>
                                <li><strong>Illustrated Character Wraps:</strong> Full-bleed illustrated exterior wraps featuring your brand's characters, monthly theme mascots, or licensed characters create immediate visual excitement from the moment the deliveryman's truck rolls up.</li>
                                <li><strong>Interactive Exterior Activities:</strong> Printing puzzles, mazes, connect-the-dots, or spot-the-difference activities on the exterior panels gives children immediate engagement before the box is even opened — turning the packaging itself into entertainment.</li>
                                <li><strong>Color-In Box Panels:</strong> Unprinted coloring panel zones on the exterior allow children to personalize and decorate their own subscription box — a powerful engagement feature that children love and parents photograph constantly.</li>
                                <li><strong>Interior Illustrated World Reveals:</strong> Full-color interior lid prints revealing a themed illustrated world — underwater, outer space, jungle adventure — create a magical moment of discovery when the lid is lifted.</li>
                            </ul>

                            <h3>Activity Kit Organization Engineering</h3>
                            <p>
                                Children's activity subscription kits require careful internal organization to ensure all components are immediately understandable for a child to use. Messy, disorganized interiors frustrate children and parents alike. Our kids' subscription box inserts include:
                            </p>
                            <ul>
                                <li>Numbered compartment zones that guide children through activity steps sequentially</li>
                                <li>Dedicated printed booklet pockets that hold activity instruction guides flat and visible</li>
                                <li>Material bag compartments that organize small craft components safely without spillage risk</li>
                                <li>Secure book slots that hold illustrated story or educational books in pristine, spine-up condition</li>
                            </ul>

                            <h3>Parent Decision-Making: Safety, Value & Educational Quality</h3>
                            <p>
                                While children are the primary users of kids' subscription boxes, parents are the purchasers and renewal decision-makers. Your packaging must communicate to parents that the subscription investment is worthwhile — that the materials are safe, the activities are educational, and the brand is trustworthy. Our kids' subscription packaging supports parent-facing communication through exterior quality certifications, ingredient transparency panels, and branded parent guide inserts that demonstrate the educational and developmental value of each month's activities.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine child-safety engineering, imagination-sparking design, and structural durability to create the monthly box moment kids actually cheer for.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Child-Safety-First Standards</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>kids subscription box</strong> we produce uses non-toxic, ASTM-certified inks, rounded die-cut edges, and child-safe adhesives that parents can trust completely — communicating brand safety and responsibility through every physical material choice.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Character & Theme Illustration Printing</h3><p className="text-sm text-slate-500 leading-relaxed">Our vibrant full-color illustrated exterior wraps for <strong>children's subscription boxes</strong> create immediate visual excitement that children recognize and anticipate — turning delivery day into a monthly celebration that builds powerful brand loyalty through the most impressionable years of childhood.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Durable Play-Friendly Construction</h3><p className="text-sm text-slate-500 leading-relaxed">Our puncture-resistant corrugated structures and rounded interior edges mean <strong>kids subscription packaging</strong> survives enthusiastic unboxing without collapse, tearing, or sharp edge exposure — durable enough that the box itself often becomes a play item or storage container after unboxing.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Kids Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Differentiate Your Kids Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Make Every Delivery a <span className="text-primary">Magical Moment</span> for Every Child
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that children's subscription brands are in the business of making kids happy — and the box is the first moment of that happiness. Our team specializes in creating kids' subscription packaging that transforms delivery day into an adventure. From themed illustrated exteriors that children recognize from across the room to interactive exterior activities and magical interior world reveals, we engineer every element to maximize the joy, excitement, and sense of discovery that keeps children asking parents to renew their subscriptions month after month.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our kids' subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are the materials in your kids' subscription boxes child-safe?", answer: "Yes. All materials in our kids' subscription boxes — inks, adhesives, coatings, and board materials — are certified non-toxic and conform to child safety standards including ASTM D-4236. We use water-based inks with no harmful VOCs, child-safe adhesives, and rounded die-cut interior edges that prevent paper cuts. Full MSDS documentation is available upon request." },
                                    { id: "item-2", question: "Can you print characters and illustrations directly on the box?", answer: "Absolutely. Full-bleed character illustration printing is one of our most popular features for kids' subscription packaging. We reproduce illustrated characters, monthly theme scenes, and interactive activity graphics directly on the corrugated or chipboard surface using non-toxic inks. We can also print activity games, mazes, and coloring zones on exterior panels." },
                                    { id: "item-3", question: "Can the interior of the box be printed with a themed world reveal?", answer: "Yes. Interior lid printing is a powerful engagement feature for children's subscription boxes. We print full-color illustrated world reveals — underwater kingdoms, jungle adventures, space stations — on the interior lid surface, creating a magical moment of discovery when children lift the lid. This feature drives enormous social sharing among parents." },
                                    { id: "item-4", question: "How do you organize multiple small activity components safely inside the box?", answer: "We engineer custom-height cardboard dividers, numbered compartment zones, material bag pockets, and secure book slots for kids' activity subscription kits. Each internal element is positioned to prevent small component spillage, keep the activity sequence logically organized for children, and create a visually exciting reveal when the lid is first opened." },
                                    { id: "item-5", question: "What is the minimum order and production time for kids' subscription boxes?", answer: "Minimum order quantity starts at 100 units. Standard production lead time is 8–10 business days from artwork approval. Rush 4–6 day production is available for new subscription launch windows. All orders include one complimentary digital proof before production. Free shipping applies to qualifying wholesale kids' subscription packaging orders." }
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
                            <img src={FAQimage} alt="Subscription Boxes For Kids FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SubscriptionBoxesForKids;
