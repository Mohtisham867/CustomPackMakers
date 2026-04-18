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
import { RelatedProductGift } from "@/components/RelatedProductGift";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import cardboardGiftBoxeshero from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-hero.png";
import cardboardGiftBoxesimg1 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-1.png";
import cardboardGiftBoxesimg2 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-2.png";
import cardboardGiftBoxesimg3 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-3.png";
import cardboardGiftBoxesimg4 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-4.png";
import cardboardGiftBoxesimg5 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-5.png";
import cardboardGiftBoxesimg6 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-whychoose.png";
import cardboardGiftBoxesimg7 from "@/assets/gift-boxes/Cardboard-Gift-Boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const CardboardGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: cardboardGiftBoxesimg1, alt: "Cardboard Gift Boxes - Main View" },
        { src: cardboardGiftBoxesimg2, alt: "Cardboard Gift Boxes - Lifestyle Shot" },
        { src: cardboardGiftBoxesimg3, alt: "Cardboard Gift Boxes - Side Angle" },
        { src: cardboardGiftBoxesimg4, alt: "Cardboard Gift Boxes - Detail Shot" },
        { src: cardboardGiftBoxesimg5, alt: "Cardboard Gift Boxes - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Gift Boxes | Versatile Packaging | CustomPackMakers</title>
                <meta name="description" content="Order versatile custom cardboard gift boxes. Wholesale affordable, highly customizable gift packaging with premium printing and durable structural integrity." />
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
                                    <Link to="/categories/gift-boxes">Gift Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cardboard Gift Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                Custom <span className="text-primary">Cardboard</span> Gift Boxes
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your brand with premium custom cardboard gift boxes. Designed for affordable elegance, our fully customizable packaging solutions provide a stunning presentation and reliable protection, ensuring your gifts leave a lasting, professional impression.
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

                        {/* RIGHT: Large Product Image */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={cardboardGiftBoxeshero}
                                    alt="Custom Cardboard Gift Boxes Hero"
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
                        Versatile Protection for Unforgettable Gifts
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our premium custom cardboard gift boxes provide the perfect balance of exceptional durability and sophisticated design for your corporate and retail gifting needs. Manufactured from top-tier, eco-friendly materials, these boxes are engineered to offer versatile protection while delivering an unforgettable unboxing experience.
                        </p>
                        <p>
                            Whether you require sleek boxes for e-commerce or elegant structures for luxury items, our high-quality structural integrity guarantees that your products remain secure during transit. Each box is meticulously crafted to support extensive customization, allowing you to showcase your logo and unique finishes. Elevate your brand perception with sustainable, beautifully structured <strong className="text-foreground">custom cardboard gift packaging</strong> designed to impress your most valued clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        {/* LEFT SIDE: Product Gallery */}
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
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
                        Perfect Packaging Scalability for Diverse Gifting Needs
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>Cardboard gift boxes represent the pinnacle of versatile, cost-effective retail and corporate packaging. In an increasingly competitive marketplace, businesses need packaging solutions that not only protect their merchandise but also elevate their brand identity to new heights. Our custom cardboard gift boxes are expertly engineered to meet these exact requirements, offering a seamless blend of structural durability, aesthetic appeal, and logistical efficiency.</p>

                            <h3>Material Options for Premium Packaging</h3>
                            <p>The foundation of any exceptional packaging solution lies in its material quality. We provide an extensive selection of premium cardboard stocks specifically tailored to fulfill diverse industry demands. Whether your priority is maximum rigidity for heavy fragile items or lightweight flexibility for cost-efficient shipping, our material portfolio delivers unmatched performance.</p>
                            <ul>
                                <li><strong>Premium Corrugated Cardboard:</strong> Engineered with advanced fluting technology, corrugated cardboard offers superior structural integrity and extreme crush resistance. This makes it the ideal choice for shipping heavy luxury items, fragile electronics, or subscription boxes that must endure rigorous transit networks while arriving in pristine condition.</li>
                                <li><strong>High-Density Kraft Paperboard:</strong> For brands prioritizing an organic, rustic, and highly sustainable aesthetic, our premium kraft paperboard provides a beautifully textured, natural unbleached finish. It is exceptionally tear-resistant and perfectly communicates a commitment to environmental responsibility without sacrificing protective strength.</li>
                                <li><strong>Coated Solid Bleached Sulfate (SBS):</strong> When vibrant color reproduction and sharp graphic details are critical, SBS board is the definitive industry standard. Its ultra-smooth, bright white coated surface accepts high-resolution offset and digital printing flawlessly, resulting in crisp imagery, vibrant typography, and a truly luxurious tactile experience.</li>
                            </ul>

                            <h3>Finishing Techniques for Brand Differentiation</h3>
                            <p>To truly differentiate your brand on the retail shelf or during the unboxing process, standard printing is rarely enough. We offer an impressive array of advanced finishing techniques designed to transform simple Custom Cardboard Gift Boxes into sophisticated, unforgettable brand touchpoints.</p>
                            <ul>
                                <li><strong>Foil Stamping and Embossing:</strong> Incorporate stunning metallic gold, dramatic silver, or brilliant holographic foil accents to instantly communicate premium value. Combine this with precision embossing or debossing to create a raised or recessed 3D tactile effect that consumers can physically feel, adding an element of prestige and luxury to your logo.</li>
                                <li><strong>Spot UV and Soft-Touch Coatings:</strong> Utilize high-gloss Spot UV treatments to draw immediate attention to specific design elements, such as brand names or intricate patterns, creating a striking visual contrast against matte backgrounds. Alternatively, apply an all-over soft-touch lamination to give the entire package a velvety, high-end feel that exudes sophistication.</li>
                                <li><strong>Custom Die-Cut Windows:</strong> Enhance consumer engagement and drive sales by allowing a clear, protected view of your product before the box is ever opened. We precisely manufacture custom die-cut windows backed with durable, crystal-clear PET film, flawlessly integrating product visibility with protective packaging structural integrity.</li>
                            </ul>

                            <h3>Commitment to Sustainability</h3>
                            <p>Modern consumers actively seek out and reward brands that demonstrate a genuine commitment to environmental stewardship. Our sustainable packaging initiatives ensure that your Custom Cardboard Gift Boxes align perfectly with modern eco-conscious values, minimizing environmental impact while maximizing brand reputation.</p>
                            <ul>
                                <li><strong>100% Recyclable and Biodegradable:</strong> Our standard cardboard packaging materials are fully recyclable and naturally biodegradable, ensuring complete diversion from landfills and supporting a circular economy.</li>
                                <li><strong>FSC-Certified Sourcing:</strong> We proudly offer materials sourced exclusively from Forest Stewardship Council (FSC) certified forests, guaranteeing that the wood pulp used in our manufacturing process has been responsibly and ethically harvested.</li>
                                <li><strong>Eco-Friendly Inks and Adhesives:</strong> We enthusiastically utilize advanced soy-based and water-based inks that produce brilliant, fade-resistant colors while remaining completely free of harmful volatile organic compounds (VOCs). Paired with non-toxic, water-soluble adhesives, our boxes are safe for the environment from production to disposal.</li>
                            </ul>

                            <h3>Unmatched Customization and Structural Design</h3>
                            <p>Packaging should never be a generic, one-size-fits-all solution. Our dedicated structural engineering team works collaboratively with your brand to design Custom Cardboard Gift Boxes that perfectly align with your specific product dimensions, shipping requirements, and aesthetic vision.</p>
                            <ul>
                                <li><strong>Tailored Dimensions and Shapes:</strong> Whether you require traditional rectangular boxes, elegant pillow boxes, sophisticated magnetic closure rigid boxes, or complex geometric shapes, we possess the advanced manufacturing capabilities to produce packaging that flawlessly houses your unique products.</li>
                                <li><strong>Custom Inserts and Dividers:</strong> Ensure a pristine unboxing experience and prevent product damage during transit by incorporating expertly engineered custom inserts. We offer precision die-cut cardboard dividers, plush foam inserts, and molded pulp trays that securely cradle your items in perfect alignment.</li>
                                <li><strong>Inside/Outside Printing:</strong> Surprise and delight your customers the moment they open their package by utilizing full internal printing. Seamlessly extend your branding, display personalized thank-you messages, or include detailed assembly instructions directly on the interior walls of your gift boxes.</li>
                            </ul>

                            <p>Partnering with us means securing a comprehensive packaging manufacturing solution that prioritizes quality, speed, and brand elevation. Our Custom Cardboard Gift Boxes provide an unparalleled opportunity to enhance product perceived value, optimize shipping logistics, and forge a deeper connection with your target audience. Discover the definitive difference of strategically engineered, expertly crafted bespoke packaging.</p>

                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductGift />

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
                        {/* LEFT: Features */}
                        <div className="space-y-5">
                            {/* Feature 1 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unmatched Versatile Design</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We engineer precise, custom structural packaging tailored to fit your unique products perfectly. This incredible flexibility allows for a stunning, reliable presentation that efficiently matches your exact corporate requirements and enhances overall brand perception effortlessly.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Cost Effective Excellence</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Maximize your business budget with our competitive wholesale pricing, without sacrificing premium quality. Our advanced high-volume cardboard manufacturing ensures you receive spectacular physical presentation while smartly optimizing your critical packaging expenditures for maximum profitability continuously.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Completely Customizable Surfaces</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Flawlessly print your vibrant brand graphics on our high-quality, completely smooth cardboard surfaces. We beautifully reproduce your intricate, colorful designs directly onto the packaging, allowing you to powerfully express your unique corporate identity and vision.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={cardboardGiftBoxesimg6} alt="Premium Cardboard Box" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            {/* Badges */}
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

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={cardboardGiftBoxesimg7} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Stunning</span> Corporate Needs
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we passionately believe that spectacular custom packaging is the key to dominating your market presence. Our beautifully designed cardboard gift boxes naturally elevate your brand's aesthetic, creating an unforgettable unboxing experience that builds immediate customer loyalty. By expertly combining premium materials with striking, personalized graphics, we help you efficiently separate your products from competitors, ensuring your business confidently stands out on any retail shelf or e-commerce delivery right away.
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
                                    Everything you need to know about our gift packaging services.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What thicknesses do you offer for cardboard gift boxes?", answer: "We provide a versatile range of premium cardboard thicknesses, from flexible 14pt paperboard to highly durable 28pt stock. Our expert team will help you select the exact specifications needed to ensure complete structural integrity and maximum retail protection." },
                                    { id: "item-2", question: "Are custom cardboard gift boxes suitable for shipping?", answer: "Yes, our custom cardboard packaging is engineered perfectly for demanding shipping environments. We utilize exceptionally durable corrugated materials that confidently protect fragile items from impact, guaranteeing your merchandise arrives safely and maintains its beautiful, premium presentation completely flawlessly." },
                                    { id: "item-3", question: "Can I order double-sided printing on cardboard packaging?", answer: "Absolutely. We offer high-definition printing on both the deep interior and smooth exterior of your gift boxes. This fantastic dual-sided customization effectively maximizes brand engagement, allowing you to surprise customers with elegant internal graphics and brilliantly displayed messaging." },
                                    { id: "item-4", question: "Do you offer custom die-cut windows for cardboard boxes?", answer: "Yes, we expertly manufacture precise custom die-cut windows backed with clear, durable PET film. This elegant packaging solution successfully allows consumers to view your products directly, significantly increasing visual appeal while smartly maintaining complete structural security simultaneously." },
                                    { id: "item-5", question: "What is the minimum wholesale order for cardboard gift boxes?", answer: "We proudly maintain a highly accommodating minimum order quantity of just 100 units. This flexible volume intelligently supports small businesses while our massive manufacturing capacity effortlessly and quickly fulfills large-scale bulk orders with highly competitive and affordable wholesale pricing." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
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
                            <img src={FAQimage} alt="FAQ Cardboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default CardboardGiftBoxes;
