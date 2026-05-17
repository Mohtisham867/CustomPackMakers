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
import bookBoxesHero from "@/assets/industry/stationery-boxes/Book-Box/img-hero.webp";
import bookBoxes1 from "@/assets/industry/stationery-boxes/Book-Box/img-1.webp";
import bookBoxes2 from "@/assets/industry/stationery-boxes/Book-Box/img-2.webp";
import bookBoxes3 from "@/assets/industry/stationery-boxes/Book-Box/img-3.webp";
import bookBoxes4 from "@/assets/industry/stationery-boxes/Book-Box/img-4.webp";
import bookBoxes5 from "@/assets/industry/stationery-boxes/Book-Box/img-5.webp";
import bookBoxes6 from "@/assets/industry/stationery-boxes/Book-Box/img-whychoose.webp";
import bookBoxes7 from "@/assets/industry/stationery-boxes/Book-Box/img-different.webp";

// FAQ Image
import FAQimage from "@/assets/FAQ-image.webp";

const BookBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: bookBoxes1, alt: "Custom Book Boxes - Main View" },
        { src: bookBoxes2, alt: "Custom Book Boxes - Angle View" },
        { src: bookBoxes3, alt: "Custom Book Boxes - Inside View" },
        { src: bookBoxes4, alt: "Custom Book Boxes - Material Detail" },
        { src: bookBoxes5, alt: "Custom Book Boxes - Branding Finish" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Book Boxes | Printed Corrugated Mailers | CustomPackMakers</title>
                <meta name="description" content="Order custom book boxes wholesale. Durable corrugated mailers strictly tailored to protect valuable publications featuring vibrant custom printing." />
                <meta name="keywords" content="custom book boxes, wholesale publication mailers, printed corrugated boxes, strong book packaging, rigid literature mailers" />
                <meta property="og:title" content="Custom Book Boxes | Printed Corrugated Mailers | CustomPackMakers" />
                <meta property="og:description" content="Premium custom book boxes built to protect your publications. Strong corrugated board, snug functional fits, brilliant printed graphics. Get a quote." />
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
                                <BreadcrumbPage>Book Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Book Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your valuable literary publications using our incredibly robust custom book boxes. Precisely engineered utilizing exceptionally strong corrugated kraft board and vibrant branded graphics, these durable mailing solutions brilliantly ensure your books arrive completely pristine.
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
                                    src={bookBoxesHero}
                                    alt="Custom Book Boxes Hero"
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
                        Robust Transit Mailers for Valuable Publications
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom book boxes</strong> are meticulously engineered for independent authors, expansive publishing houses, and specialized subscription services who absolutely demand uncompromising transit protection flawlessly paired with breathtaking unboxing aesthetics. Manufactured from exceptionally rigid, violently crush-resistant multi-flute corrugated kraft boards, these highly specialized shipping mailers effortlessly eliminate devastating corner blunting, frustrating cover scratching, and disastrous spine breaking during aggressively demanding postal shipping completely. Whether shipping solitary delicate hardcovers or fulfilling massive multi-volume encyclopedia series, our <strong className="text-foreground">custom printed mailers</strong> deliver outstanding physical defense absolutely guaranteeing flawless literary deliveries.
                        </p>
                        <p>
                            From wonderfully compact tuck-end solutions perfectly housing standard paperbacks to massive highly engineered roll-end tuck-front (RETF) boxes securely locking expansive coffee table volumes, our <strong className="text-foreground">wholesale book packaging</strong> remarkably handles every unique dimension flawlessly. Each substantial order successfully incorporates precisely calculated structural folds entirely preventing dangerous internal shifting, incredibly satisfying tear-strip opening mechanisms enabling delightfully effortless reader access, and gorgeously printed exterior branding graphics. Elevate your vital literary shipments seamlessly utilizing intensely vivid flexographic CMYK inks, sophisticated minimalist unbleached kraft textures, and strikingly crisp typography reproduction, guaranteeing your <strong className="text-foreground">bespoke mailing cartons</strong> dramatically outperform generic shipping supplies instantly.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
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
                        The Strategic Importance of Purpose-Built Book Mailers
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
                                In the highly expectant, remarkably demanding modern e-commerce landscape of literary distribution, the external shipping envelope absolutely must provide unquestionable structural defense alongside stunning brand introductions simultaneously. Unlike flimsy generic padded envelopes, a meticulously engineered corrugated mailer fundamentally functions significantly further than merely shielding a spine—it actively dictates the critical initial unboxing reaction, exponentially reduces devastating shipping returns concerning crushed corners, and continually reinforcing unparalleled corporate quality commitments. To successfully capture essential consumer delight instantly during their highly anticipated parcel receipt, the physical container must execute flawless performance violently. Custom book boxes proudly serve as these incredibly resilient defensive units, definitively establishing perceived publisher value immediately surrounding your heavily anticipated authors.
                            </p>
                            <p>
                                Our custom corrugated mailers are intentionally engineered carefully optimizing this highly vital transit impact. Every single precisely calculated structural fold, right from the incredibly resilient, impact-absorbing reinforced corners effectively deflecting heavy postal machinery crushing to the exquisitely engineered self-locking tabs completely eliminating messy adhesive reliance, is expertly manufactured specifically to maximize immense logistical efficiency continually. Making an intelligent calculated investment
                                in high-grade purpose-built protective cartons invariably ensures you flawlessly execute spectacular literary deliveries that consistently transform standard online orders into fiercely loyal, massively delighted repeating readership perfectly.
                            </p>

                            <h3>Unmatched Transit Survival Material Quality</h3>
                            <p>
                                A profoundly effective book distribution tool is fundamentally defined by its remarkably resilient, highly dependable shock-dispersing foundation. We systematically provide an expertly curated selection of premium structural grade
                                corrugated boards intentionally optimized for specific publication weights, guaranteeing remarkable transit protection and exceptional unboxing presentation:
                            </p>
                            <ul>
                                <li><strong>Pre-Engineered Dense B-Flute Corrugated:</strong> Our flawlessly strong, incredibly robust thick-flute cardboard strictly guarantees perfectly rigid structural defense preventing dangerous vertical crushing damages entirely, strictly ideal for incredibly massive multi-volume encyclopedia shipments.</li>
                                <li><strong>Highly Compact E-Flute Boards:</strong> Delivering an exceptionally sleek, completely crush-resistant enclosure precisely contouring around standard single novels gracefully, these incredibly crisp boards promise an undeniably premium lightweight shipping experience minimizing postal rates continuously.</li>
                                <li><strong>Eco-Friendly Natural Kraft Textures:</strong> For environmentally conscious publishers requiring superb durability, our wonderfully authentic unbleached brown kraft surfaces provide gorgeous rustic organic appearances whilst actively screaming your vital corporate sustainability commitments loudly.</li>
                            </ul>

                            <h3>Custom Structural Engineering Details</h3>
                            <p>
                                True fulfillment differentiation heavily relies on executing flawless, highly specific physical distribution details perfectly. We proudly offer incredibly precise custom dimensional cuts that elegantly transform generic shipping containers into highly engaging functional assets:
                            </p>
                            <ul>
                                <li><strong>Convenient Tear-Strip Rip-Cords:</strong> Tastefully integrate wonderfully ergonomic, incredibly precise perforated opening tracks exactly alongside the main seal, simultaneously enabling consumers to effortlessly rip open tight-fitting mailers without employing dangerous kitchen knives threatening internal covers.</li>
                                <li><strong>Pre-Applied Peel-and-Seal Adhesives:</strong> Strategically utilize remarkably precise, completely integrated heavy-duty self-adhesive strips entirely completely along the closing flaps—providing an undeniably brilliant, incredibly speedy packing solution massively reducing costly warehouse assembly labor drastically.</li>
                                <li><strong>Vibrant Double-Sided Flexographic Printing:</strong> Brilliantly execute insanely sharp, flawlessly aligned bold typography or completely immersive custom graphics powerfully utilizing previously wasted internal box panels to beautifully deliver delightful secret surprise messaging during frantic unboxing moments.</li>
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
                                        Our custom book mailing boxes are specifically engineered utilizing incredibly strong multi-flute corrugated kraft boards. We successfully guarantee your heavy casebound volumes and delicate paperbacks remain flawlessly protected against aggressive transit conditions completely.
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
                                        We systematically design precisely measured shipping mailers perfectly hugging your exact publication dimensions. These brilliantly calculated tolerances entirely eliminate damaging internal shifting whilst drastically reducing wasteful void fill requirements completely during massive distributions.
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
                                        Transform generic literary shipments utilizing breathtaking exterior flexographic printing featuring incredibly crisp brand typography and vivid promotional marketing messages. We deliver deeply memorable initial unboxing experiences instantly magnifying immense reader excitement perfectly effortlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={bookBoxes6}
                                    alt="Premium Custom Book Boxes Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Publishers
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium literary mailers across North America</p>
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
                                    src={bookBoxes7}
                                    alt="Differentiate Your Literary Shipping"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Publishing Fulfillment</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we intimately understand your protective shipping exterior acts significantly as your brand's absolutely crucial first physical interaction concerning highly anticipated literary deliveries. To definitively ensure your spectacular published works completely dominate incredibly demanding modern unboxing expectations gracefully, we strictly deploy breathtakingly robust structural engineering flawlessly paired perfectly with insanely crisp automated printing presses. Our exceedingly talented industrial designers systematically innovate brilliant cohesive folding architectures entirely eliminating destructive internal friction, exceptionally robust double-walled siding.
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
                                        question: "What specific materials do you use for durable book mailing boxes?",
                                        answer: "We primarily utilize exceptionally robust premium corrugated board formats including wonderfully strong E-flute and incredibly dense B-flute structures depending perfectly upon your exact book weight, thoroughly ensuring your custom mailers easily endure punishing transit gracefully."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I order shipping boxes specifically sized for multiple volumes?",
                                        answer: "Yes, we comprehensively manufacture entirely bespoke structural dimensions precisely calculated perfectly holding your exact multi-book box sets flawlessly. These highly tailored dimensional tolerances beautifully secure massive weight distributions completely safely without sudden rupturing."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are there discounts available for massive bulk wholesale distributions?",
                                        answer: "Absolutely. We provide incredibly aggressive wholesale structural pricing specifically scaled for immense continuous fulfillment runs, thoroughly ensuring you obtain magnificently reliable protective mailers while effectively slashing your vital ongoing corporate shipping footprint considerably."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do your book mailers require extra packing tape to seal securely?",
                                        answer: "No, we perfectly execute highly precise custom roll-end tuck-front (RETF) designs frequently featuring wonderfully convenient self-adhesive peel-and-seal incredibly strong strips securely. This brilliantly allows distributors to quickly seal massive shipping batches totally tape-free completely safely."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you print custom branding on the inside of the box?",
                                        answer: "Yes, we exclusively leverage advanced double-sided printing technologies powerfully guaranteeing insanely vibrant branding graphics beautifully printed directly across entirely internal panels perfectly. This seamlessly delivers an incredibly delightful surprise revealing hidden artwork during reader unboxings."
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
                                alt="Custom Book Boxes FAQ"
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

export default BookBoxes;
