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
import { RelatedProductStationery } from "@/components/RelatedProductStationery";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product Image
import invitationBoxesHero from "@/assets/stationery-boxes/invitation-boxes/img-hero.png";
import invitationBoxes1 from "@/assets/stationery-boxes/invitation-boxes/img-1.png";
import invitationBoxes2 from "@/assets/stationery-boxes/invitation-boxes/img-2.png";
import invitationBoxes3 from "@/assets/stationery-boxes/invitation-boxes/img-3.png";
import invitationBoxes4 from "@/assets/stationery-boxes/invitation-boxes/img-4.png";
import invitationBoxes5 from "@/assets/stationery-boxes/invitation-boxes/img-5.png";
import invitationBoxes6 from "@/assets/stationery-boxes/invitation-boxes/img-whychoose.png";
import invitationBoxes7 from "@/assets/stationery-boxes/invitation-boxes/img-different.png";

// FAQ Image
import FAQimage from "@/assets/FAQ-image.png";

const InvitationBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: invitationBoxes1, alt: "Custom Invitation Boxes - Main View" },
        { src: invitationBoxes2, alt: "Custom Invitation Boxes - Angle View" },
        { src: invitationBoxes3, alt: "Custom Invitation Boxes - Ribbon Detail" },
        { src: invitationBoxes4, alt: "Custom Invitation Boxes - Quality Finish" },
        { src: invitationBoxes5, alt: "Custom Invitation Boxes - Event Setting" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Invitation Boxes | Luxury Event Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom invitation boxes wholesale. Premium luxury packaging for event announcements, wedding invitations, and corporate galas with elegant foil stamping." />
                <meta name="keywords" content="custom invitation boxes, luxury event packaging, wedding invitation boxes, wholesale announcement boxes, premium presentation boxes" />
                <meta property="og:title" content="Custom Invitation Boxes | Luxury Event Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom invitation boxes for your elegant events. Luxurious rigid construction, stunning finishes. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/stationery-boxes">Stationery Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Invitation Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Invitation Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Create unforgettable first impressions with our luxurious custom invitation boxes. Beautifully crafted with premium materials and elegant foil-stamped details, these protective keepsake boxes elevate your event announcements, ensuring your prestigious invitations arrive styled impeccably.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={invitationBoxesHero}
                                    alt="Custom Invitation Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Luxurious Presentation Packaging for Prestigious Event Announcements
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom invitation boxes</strong> are intricately engineered for high-end wedding planners, exclusive event organizers, and prestigious corporate hosts demanding absolutely breathtaking first impressions. Manufactured from incredibly thick rigid board cores perfectly wrapped in opulent specialty papers or luxurious silk fabrics, these premium encasements effortlessly transform standard event announcements into highly anticipated, monumental unboxing experiences. Whether you are distributing delicate acrylic wedding invitations or complex multi-piece corporate gala suites, our <strong className="text-foreground">premium presentation boxes</strong> deliver undeniably elegant protection and instant monumental prestige.
                        </p>
                        <p>
                            From sophisticated sleek two-piece rigid boxes featuring custom stamped monograms to elaborate clamshell designs revealing perfectly nestled content via soft satin ribbon lifts, our <strong className="text-foreground">custom event packaging</strong> brilliantly satisfies every extravagant requirement. Each bespoke order successfully incorporates perfectly molded internal velvet trays, precisely cut envelope compartments, and phenomenally lavish exterior branding capabilities. Elevate your event anticipation utilizing magnificent hot foil stamping, deeply pronounced blind embossing, and sumptuous soft-touch laminations guaranteeing your <strong className="text-foreground">wholesale luxury boxes</strong> transform standard paper correspondence into magnificent, highly treasured keepsakes long after the event concludes.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
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
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
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

                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="200" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
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

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Strategic Importance of Premium Event Packaging
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the elite execution of high-profile event planning and prominent luxury weddings, the formal invitation genuinely functions as the very first contextual impression your esteemed guests absolutely receive. It acts significantly beyond merely conveying critical date information—it actively establishes the exact tone, dictates the assumed dress code severity, and directly influences the overall perceived grandeur. To successfully ignite profound anticipation successfully, the physical delivery mechanism must instantly reflect matched sophistication. Custom invitation boxes function as the essential, extravagant theatrical stage, decisively elevating sheer excitement before the stunning typography is finally admired.
                            </p>
                            <p>
                                Our custom presentation mailers are meticulously crafted addressing this substantial emotional impact. Every single component, from the incredibly resolute rigid exterior walls effectively preventing postal damage to the perfectly tensioned satin ribbon lifting systems, is expertly engineered to maximize immense visual prestige and luxurious tactility. Making a strategic investment
                                in high-grade premium display boxes seamlessly guarantees you execute exceptional aesthetic introductions that naturally transform a simple mailed card into an utterly spectacular, highly anticipated social event triumph.
                            </p>

                            <h3>Unmatched Rigid Material Quality</h3>
                            <p>
                                A profoundly memorable invitation box is fundamentally defined by its remarkably reassuring, heavy-duty structural integrity. We provide an expertly curated selection of premium rigid core
                                materials fully combined with luxurious exterior wrappings, each guaranteeing remarkable tactile aesthetics and exceptional postal durability:
                            </p>
                            <ul>
                                <li><strong>Ultra-Rigid Chipboard Cores:</strong> Our flawlessly dense, high-grade chipboard structural cores fundamentally offer an utterly unbending, surprisingly substantial feel that instantly conveys established prestige and supreme document safety.</li>
                                <li><strong>Premium Soft-Touch Wraps:</strong> Delivering an elegant, velvety, and sumptuously smooth surface, these exceedingly specialized exterior papers provide exceptional tactile experiences while beautifully muting vibrant background colors.</li>
                                <li><strong>Luxurious Fabric Coverings:</strong> For intensely romantic, traditional events, our stunningly realistic linen, gleaming silk, or deeply textured velvet wrappings provide a gorgeously rich, sophisticated charm echoing haute couture fashion.</li>
                                <li><strong>Elegant Metallic Foil Linings:</strong> Designed unequivocally for vibrant, high-end thematic contrasts, these brilliantly lustrous interior box linings make embedded event monograms dramatically pop while offering a dazzling unboxing revelation.</li>
                            </ul>

                            <h3>Custom Internal Protective Finishes</h3>
                            <p>
                                True monumental differentiation inevitably relies on executing flawless, highly bespoke internal accommodation details. We proudly offer specialized premium interior fitments that flawlessly transform your rigid box into a highly functional premium vessel:
                            </p>
                            <ul>
                                <li><strong>Plush Velvet Covered EVA Foam:</strong> Tastefully apply highly protective, perfectly contoured dense foam wrapped tightly in luxuriously soft velvet to cradle thick acrylic invitations precisely, completely neutralizing any potential scratching.</li>
                                <li><strong>Concealed Magnetic Closures:</strong> Strategically embed wonderfully smooth, highly satisfying magnetic locking mechanisms entirely within the rigid box front flaps—providing an undeniably irresistible, seamless opening and snapping tactile ritual.</li>
                                <li><strong>Elegant Satin Ribbon Lifts:</strong> Brilliantly attach sophisticated, seamlessly color-matched satin fabric ribbon pulls carefully engineered beneath the main invitation stack to gracefully elevate your premium documents from their deep internal resting trays.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductStationery />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our custom invitation boxes are manufactured using exceptionally sturdy premium rigid chipboard and wrapped in luxurious specialty paper stocks. We guarantee your delicate invitations remain completely secure and perfectly pristine during transit.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Tailored Functionality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Experience flawless presentation with our bespoke internal fitments meticulously designed for your specific invitation suites. We create precise velvet-lined trays and secure ribbon lifts that elegantly cradle your elaborate event announcements securely.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Sleek Elegant Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Enhance your event anticipation with breathtaking custom finishes including sophisticated metallic foil stamping, elegant soft-touch lamination, and striking embossed textures. We deliver unforgettable presentation boxes that perfectly match your luxurious event themes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={invitationBoxes6}
                                    alt="Premium Custom Invitation Boxes Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Planners
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium event packaging across North America</p>
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


            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={invitationBoxes7}
                                    alt="Differentiate Your Event"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Gala Invitations</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we absolutely recognize that your upscale event packaging functions fundamentally as an intimate prelude directly forecasting the impending opulence. To decisively ensure your wedding or corporate invitations inherently radiate commanding exclusivity, we strictly utilize intensely rigid core boards combined with flawlessly precise wrapping machinery. Our masterful structural specialists collaboratively design utterly pristine magnetic closures, breathtaking multi-tiered envelope cavities, and meticulously soft protective linings exactly parameterized for your expensive acrylic or elaborate paper suites. By deliberately integrating these profoundly tactile, highly bespoke presentations alongside brilliant metallic insignia imprinting, we effortlessly transform standard mailings into magnificent, deeply treasured keepsakes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What rigid materials ensure the durability of these invitation boxes?",
                                        answer: "We employ immensely thick, high-density rigid chipboard wrapped in premium specialty papers. This heavy-duty construction provides exceptional crush resistance, guaranteeing your delicate custom invitation boxes securely survive postal transit unscathed."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I order fully customized sizing for my invitation boxes?",
                                        answer: "Yes, we create completely bespoke sizing configurations. Whether housing uniquely proportioned square acrylic invitations or elaborate multi-card paper suites, we precisely engineer presentation boxes ensuring a flawlessly snug fit."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are there discounts available for large-volume event orders?",
                                        answer: "Absolutely. We provide highly favorable wholesale pricing deliberately structured for expansive corporate events and large weddings, thoroughly ensuring you obtain magnificent, deeply luxurious packaging while strictly maintaining excellent value."
                                    },
                                    {
                                        id: "item-4",
                                        question: "How do you protect fragile acrylic invitations inside?",
                                        answer: "We perfectly incorporate custom-molded, incredibly soft velvet-lined dense EVA foam inserts specifically contour-cut to securely embrace fragile acrylic invitations. This completely eliminates internal shifting and crucially prevents undesirable aesthetic scratching."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What elegant finishes can I apply to my invitation packaging?",
                                        answer: "You can exponentially elevate your presentation utilizing brilliant metallic hot foil stamping, distinctly tactile blind debossing, utterly seamless hidden magnetic flap closures, and wonderfully smooth luxury soft-touch exterior lamination."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Invitation Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default InvitationBoxes;
