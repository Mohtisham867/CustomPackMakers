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
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images
import heroImg from "@/assets/material/kraft-boxes/paper-tube-packaging-v2.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const PaperTubePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Paper Tube Packaging - Main View" },
        { src: heroImg, alt: "Paper Tube Packaging - Top View" },
        { src: heroImg, alt: "Paper Tube Packaging - Open View" },
        { src: heroImg, alt: "Paper Tube Packaging - Detail Texture" },
        { src: heroImg, alt: "Paper Tube Packaging - Multi Sizing" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Paper Tube Packaging | Eco-Friendly Cylinder Boxes | CustomPackMakers</title>
                <meta name="description" content="Shop custom paper tube packaging and eco-friendly cylinder boxes for your brand. Durable kraft cardboard tubes for cosmetics, tea, and luxury retail. Fully brandable and sustainable." />
                <meta name="keywords" content="paper tube packaging, custom cylinder boxes, cardboard tube boxes, eco-friendly retail tubes, wholesale paper tubes" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
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
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Paper Tube Packaging</BreadcrumbPage>
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
                                <span className="text-primary">Paper</span> Tube Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your brand with unique cylindrical presentation. Our high-strength paper tubes offer a premium, eco-friendly solution for cosmetics, tea, and luxury retail.
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
                                    src={heroImg}
                                    alt="Paper Tube Packaging Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
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
                        Cylindrical Sophistication Focused on Strength and Sustainability
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom paper tube packaging</strong> represents the pinnacle of modern, eco-conscious retail presentation. Known as cylinder boxes or cardboard tubes, this packaging format offers a refreshing point of difference from traditional rectangular boxes. Crafted from multiple layers of high-density kraft paperboard, these tubes provide exceptional crush resistance, making them ideal for the protection of delicate beauty products, apparel accessory kits, or premium food items like loose-leaf tea and organic snacks.
                        </p>
                        <p>
                            We offer complete customization for your <strong className="text-foreground">wholesale cylinder boxes</strong>, including custom diameters and heights tailored to your specific SKU. The characteristic "flush-fit" or "telescopic" lid design creates a satisfying unboxing moment that resonates with luxury-focused consumers. With options for organic inks, specialty paper wraps, and eco-friendly coatings, our paper tubes ensure your brand projects an image of absolute quality and environmental respect.
                        </p>
                    </div>
                </div>
            </section>

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
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="diameter" className="text-xs font-semibold text-muted-foreground">Diameter (in)</Label>
                                                <Input id="diameter" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="height" className="text-xs font-semibold text-muted-foreground">Height (in)</Label>
                                                <Input id="height" type="number" placeholder="8" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Revolutionizing Brand Experience with Custom Paper Tube Packaging
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In an increasingly saturated e-commerce and retail market, the first physical touchpoint—your packaging—is a critical factor in building customer loyalty. Custom paper tube packaging, also known as cylinder packaging, has emerged as a preferred solution for brands seeking to combine state-of-the-art aesthetics with uncompromising structural performance. The unique cylindrical form factor doesn't just look different; it feels more premium and thought-out than generic flat-sided boxes.
                            </p>

                            <h3>The Structural Advantage of the Cylinder</h3>
                            <p>
                                From an engineering perspective, a cylinder is one of the strongest geometric shapes for packaging. Because the pressure is distributed evenly across the curved surface, paper tubes offer superior crush resistance compared to rectangular cardboard boxes. This makes them exceptionally protective during the rigors of shipping and handling. 
                            </p>
                            <p>
                                At CustomPackMakers, our paper tubes are manufactured through a multi-layer spiral winding process. This technique layers high-quality kraft or specialty paperboard to create a thick, rigid wall that can withstand significant vertical and horizontal force. Whether you are packaging delicate glass dropper bottles for skincare or heavy bags of artisanal coffee, our tubes ensure the contents remain pristine.
                            </p>

                            <h3>Why Brands are Choosing Paper over Plastic</h3>
                            <p>
                                Market trends show a clear move away from plastic-heavy containers. Paper tubes are seen as a high-end, sustainable alternative to plastic canisters. They are 100% biodegradable and industrially recyclable, helping your brand meet its corporate social responsibility (CSR) goals while appealing to the rapidly growing demographic of eco-conscious consumers. The natural, organic look of a kraft paper tube signals "clean" and "authentic" products, particularly in the beauty and wellness industries.
                            </p>

                            <h3>Functional Design: The Telescopic Opening</h3>
                            <p>
                                The unboxing experience of a paper tube is distinct. Most of our custom tubes utilize a two-piece telescopic design. The slow, smooth release of the lid creates a "vacuum effect" that feels incredibly satisfying to the customer. This tactile moment associates your brand with high-precision manufacturing and luxury care.
                            </p>
                            <ul>
                                <li><strong>Flush-Fit Design:</strong> The lid and the base have the same outer diameter, creating a seamless, sleek appearance.</li>
                                <li><strong>Neck-In Design:</strong> The lid slides over a slightly thinner inner tube (the neck), providing a classic and highly secure closure.</li>
                                <li><strong>Rolled Edges:</strong> We offer premium rolled-edge finishes that provide a smooth, rounded lip to both the lid and the base, eliminating any raw paper edges and enhancing the luxe feel.</li>
                            </ul>

                            <h3>Limitless Customization & Brand Identity</h3>
                            <p>
                                While many brands love the raw aesthetic of natural kraft, paper tubes are incredibly versatile for all types of branding:
                            </p>
                            <ul>
                                <li><strong>Full-Wrap Printing:</strong> We use high-resolution offset and digital printing to wrap the tube in your brand's colors, graphics, and typography. The cylindrical shape allows for continuous patterns that look stunning on 360-degree rotation.</li>
                                <li><strong>Specialty Foil Stamping:</strong> Add a gold or silver metallic foil logo to catch the light and add an immediate premium flair.</li>
                                <li><strong>Spot UV & Embossing:</strong> Create a play between matte and gloss or add tactile depth to your brand's patterns.</li>
                                <li><strong>Matte & Gloss Finishes:</strong> From a soft-touch matte that feels like silk to a vibrant high-gloss that makes colors pop, the choice is yours.</li>
                            </ul>

                            <h3>Applications Across Industries</h3>
                            <p>
                                Custom paper tubes have found a home in several high-growth industries. In the cosmetics sector, they are a favorite for beard oils, perfumes, and high-end facial serums. The food and beverage industry uses them extensively for loose-leaf teas, specialty spices, and premium wine or spirits. They are also popular for apparel accessory kits (like socks or ties) and corporate gifting events where a unique, reusable container adds significant perceived value.
                            </p>

                            <h3>Efficiency and Scalability</h3>
                            <p>
                                We specialize in high-volume wholesale production while maintaining the highest quality control standards. Our paper tubes are designed to be efficient for your production line—the rigid structure allows for rapid filling and capping. With industry-leading turnaround times of 8–10 days, we help your business stay agile, ensuring you have the inventory you need to meet market demand without long lead times.
                            </p>

                            <h3>Partnering with CustomPackMakers</h3>
                            <p>
                                Choosing the right packaging partner is about more than just manufacturing; it's about engineering a brand's success. Our team works with you at every step—from selecting the right diameter and height to choosing the perfect material finish and printing process. Let us help you turn a simple product into a world-class brand experience with custom paper tube packaging that speaks for itself.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">360-degree branding</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Elevate with <span className="text-primary">Cylindrical</span> Design
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Discover the perfect fusion of structural integrity and modern retail aesthetics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Crush-Resistant Build</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Multi-layered spiral winding provides incredible structural strength, protecting your products from the pressures of global shipping.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Luxury Unboxing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The slow, telescopic lid release creates a satisfying "vacuum" unboxing moment that associates your brand with precision quality.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Ethical Alternatives</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A 100% biodegradable and industrially recyclable alternative to plastic canisters, helping your brand meet zero-waste targets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Luxe Custom Paper Tube Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Make an Unforgettable Impact</p>
                                    <p className="text-white/75 text-sm">Packaging that customers want to reuse and display</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Bespoke Design</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Common inquiries regarding our cylinder packaging.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How do I choose the right diameter and height for my product?",
                                        answer: "We recommend measuring your product at its widest point and adding a small margin (typically 2-3mm) for ease of insertion. We offer a vast range of standard diameters and can engineer custom heights to your exact millimetric specifications."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are your paper tubes food-safe?",
                                        answer: "Yes, we can manufacture tubes with food-grade internal linings, including aluminum foil or grease-resistant paper, which provide a safe barrier for loose food items like tea, coffee, or snacks."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can these tubes hold liquid?",
                                        answer: "Paper tubes are not designed for direct contact with liquids. They are primarily a secondary packaging for bottles or dry goods. However, for cosmetics containing oils, we can provide specialized oil-resistant internal barriers."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer samples before I order wholesale?",
                                        answer: "Absolutely. We can provide unprinted material samples for fit-testing, or a fully printed physical prototype for a small fee to ensure your branding looks perfect before mass production."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are the tubes completely plastic-free?",
                                        answer: "Our standard paper tubes are 100% paper-based and plastic-free. For the viewing windows or internal linings, we offer eco-friendly alternatives like corn-starch-based PLA."
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
                                alt="Paper Tube Packaging FAQ"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PaperTubePackaging;
