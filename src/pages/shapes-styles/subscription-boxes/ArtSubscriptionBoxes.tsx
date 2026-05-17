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

import heroImage from "@/assets/shape-style/subscription-boxes/art-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const ArtSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Art Subscription Boxes - Main View" },
        { src: heroImage, alt: "Art Subscription Boxes - Interior" },
        { src: heroImage, alt: "Art Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Art Subscription Boxes - Detail" },
        { src: heroImage, alt: "Art Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Art Subscription Boxes | Creative Supply Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom art subscription boxes wholesale. Premium creative supply box packaging with artist-inspired designs, precision inserts & fast turnaround. Get a free quote." />
                <meta name="keywords" content="art subscription boxes, creative supply box packaging, custom art subscription packaging, monthly art supply boxes, artist subscription box" />
                <meta property="og:title" content="Custom Art Subscription Boxes | Creative Supply Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom art subscription packaging. Artist-inspired designs, precision supply inserts & premium finishes. Low minimums, 8–10 day turnaround. Get a free quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Art Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Art Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom art subscription packaging designed for creative communities — precision-engineered to protect paints, brushes, canvases, and mixed-media supplies while delivering an inspired monthly unboxing experience that fuels artistic passion.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Art Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Art Subscription Packaging That Inspires Creativity Before the Box Is Even Opened
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom art subscription boxes</strong> are built for art supply brands, creative skill-building subscription services, adult painting kit curators, and children's art education subscriptions that need packaging worthy of the creative tools they contain. The art subscription market serves passionate hobbyists, aspiring artists, and creative communities whose relationship with their monthly supply box is deeply personal — it represents encouragement, inspiration, and investment in their artistic growth.
                        </p>
                        <p>
                            Manufactured from premium rigid board and corrugated materials, our <strong className="text-foreground">creative supply subscription packaging</strong> includes precision-engineered inserts for paint tubes, brush sets, canvas panels, palette knives, sketchbooks, and mixed-media materials. Custom-printed interior surfaces display the month's project tutorial, technique guide, or artist spotlight — transforming the box interior itself into an educational resource. With artist-inspired exterior print designs, matte black or gallery-white finishes, and tactile paper stocks, your art subscription box communicates creative excellence from the moment it arrives. Low minimums and 8–10 day turnaround.
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
                        Packaging the Creative Journey: Art Subscription Box Engineering
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Art subscription boxes serve a community of people who are particularly sensitive to aesthetic quality, material craftsmanship, and the visual language of creativity. Artists — whether professional, hobbyist, or beginner — bring their trained aesthetic sensibility to every visual evaluation, including the packaging their monthly art supplies arrive in. A low-quality, visually uninspiring subscription box communicates, perhaps unfairly but powerfully, that the art supplies inside may not be inspiring either. Premium packaging sets the tone for the entire creative experience that follows.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer art subscription boxes that are themselves works of thoughtful design — invoking the pleasure of opening a new sketchbook, the anticipation of a gallery opening, and the tactile satisfaction of high-quality materials. Our art subscription packaging helps brands communicate creative excellence before a single brush hits canvas.
                            </p>

                            <h3>Precision Supply Protection Engineering</h3>
                            <p>
                                Art supplies are diverse in their fragility profiles, requiring customized protection for each tool type:
                            </p>
                            <ul>
                                <li><strong>Paint Tube Holders:</strong> Individual die-cut slots hold acrylic, watercolor, and oil paint tubes securely, preventing cap leakage from pressure and keeping tubes from rolling and colliding during transit.</li>
                                <li><strong>Brush Roll Pockets:</strong> Individual brush pockets keep bristles aligned and protected from crushing — a critical protection for premium sable, hog bristle, and synthetic artist brushes.</li>
                                <li><strong>Canvas Panel Slots:</strong> Padded cardboard slots hold gessoed canvas panels flat and separated, preventing surface-to-surface contact that damages primed painting surfaces.</li>
                                <li><strong>Sketchbook Pockets:</strong> Rigid structural pockets hold sketchbooks and paper pads flat, preventing page-bending and corner damage that render fine drawing paper unusable.</li>
                                <li><strong>Small Supply Compartments:</strong> Individual compartments for palette knives, blending stumps, erasers, and small accessory tools prevent loose items from damaging more delicate supplies during shipping.</li>
                            </ul>

                            <h3>Artist-Focused Aesthetic Design</h3>
                            <p>
                                Art subscription packaging must speak the visual language of its audience. Our design capabilities for art subscription brands include:
                            </p>
                            <ul>
                                <li><strong>Gallery-Style Minimal Design:</strong> Clean, gallery-white or matte black exteriors with sophisticated typographic branding communicate the serious artistic quality of premium art supply subscription services.</li>
                                <li><strong>Original Artwork Exterior Wraps:</strong> Featuring original artwork from featured artists, monthly project previews, or abstract painterly compositions on the box exterior makes every delivery a rotating gallery experience.</li>
                                <li><strong>Artist Spotlight Profiles:</strong> Interior lid printing featuring the month's featured artist biography, inspiration story, and technique philosophy transforms the box into an educational art world connection.</li>
                                <li><strong>Textured Paper Stocks:</strong> Specialty textured exterior paper stocks that evoke watercolor paper, canvas, or cold-press board communicate material quality through tactile sensation — an immediate signal to artists that this subscription understands their material culture.</li>
                            </ul>

                            <h3>Building the Creative Subscription Community</h3>
                            <p>
                                Art subscription brands that succeed long-term build genuine creative communities around their monthly box. Packaging elements that support community building include a monthly challenge card inviting subscribers to share their completed project online using your brand hashtag, a technique tutorial booklet printed in full-color, and a featured subscriber artwork panel that celebrates community creativity. Our printing capabilities support all of these community-building inserts within your subscription box structure at minimal additional cost.
                            </p>
                            <p>
                                Whether your art subscription serves beginner hobbyists building foundational skills, intermediate artists exploring new mediums, or advanced practitioners seeking premium materials, our packaging solutions are engineered to validate and amplify the creative investment your subscribers make every month they renew. Contact CustomPackMakers for a custom art subscription box quote today.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine artist-calibrated aesthetics, precision supply protection, and creative community support to deliver art subscription boxes that inspire from the outside in.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Artist-Calibrated Aesthetics</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>art subscription boxes</strong> are designed by a team that understands the visual language of the creative community — gallery-quality minimalism, original artwork exterior wraps, and textured specialty paper stocks that communicate artistic excellence before a single supply is touched.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Precision Art Supply Protection</h3><p className="text-sm text-slate-500 leading-relaxed">Our brush pocket systems, canvas panel slots, paint tube holders, and sketchbook pockets protect every art supply in your <strong>creative subscription box</strong> from transit damage — ensuring brushes arrive with pristine bristles, canvases arrive flat, and paint tubes arrive without leakage or cap failure.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Educational Insert Printing</h3><p className="text-sm text-slate-500 leading-relaxed">Our interior lid printing capability transforms every <strong>art subscription box</strong> into an educational resource — featuring artist spotlights, technique tutorials, and monthly challenge prompts that build creative community and give subscribers added value beyond the physical supplies themselves.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Art Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Art Subscription Brand Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Art Brand</span> With Packaging That Speaks the Creative Language
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that art subscription subscribers are among the most aesthetically discerning consumers in any market segment. Their packaging must communicate the same level of craft and intentionality as the supplies inside. Our team specializes in gallery-quality box design, original artwork exterior integration, and precision supply engineering that creates an art subscription box worth being the centerpiece of a subscriber's studio. From featured artist exterior prints to interior tutorial reveals and brushwork-precise supply organization, we build art subscription packaging that fuels creative growth.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our art subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect paint tubes and brushes in art subscription boxes?", answer: "We engineer individual die-cut slots for paint tubes that prevent cap leakage and collision damage, and custom brush pockets that hold bristles aligned with sufficient clearance to prevent crushing. For premium sable or hog bristle brushes, we use padded pocket liners that protect bristle shape through all shipping orientations." },
                                    { id: "item-2", question: "Can the interior lid be printed with tutorial content or artist profiles?", answer: "Yes. Interior lid printing is one of our most popular features for art subscription brands. We print high-quality monthly technique tutorials, featured artist biographies, project step-by-step guides, and monthly creative challenges directly on the interior lid surface, creating an educational resource that adds substantial perceived value to every subscription delivery." },
                                    { id: "item-3", question: "What exterior design styles work best for art subscription brands?", answer: "Art subscription brands typically perform best with one of two aesthetic approaches: gallery-quality minimalism using matte black or gallery-white with refined typographic branding, or original artwork wraps featuring the month's featured artist's work or abstract painterly compositions. Both communicate creative excellence. We offer design consultation to help determine which approach best aligns with your subscriber community's taste profile." },
                                    { id: "item-4", question: "Can canvas panels and sketchbooks be accommodated in the same box?", answer: "Yes. We engineer multi-format insert systems that simultaneously accommodate canvas panels, sketchpads, paint tubes, brush sets, and accessory items in organized zones within the same art subscription box. Each item type receives its own dedicated structural slot or pocket appropriate to its fragility profile and dimensions." },
                                    { id: "item-5", question: "What is the minimum order and lead time for art subscription boxes?", answer: "Minimum order starts at 100 units with 8–10 business day production from artwork approval. Rush 4–6 day production is available for time-sensitive art subscription launches or seasonal feature collections. All orders receive one complimentary digital proof before production begins, and free shipping applies to qualifying wholesale art subscription packaging orders." }
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
                            <img src={FAQimage} alt="Art Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ArtSubscriptionBoxes;
