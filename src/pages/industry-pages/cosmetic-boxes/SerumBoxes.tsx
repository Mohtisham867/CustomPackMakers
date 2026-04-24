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
import { RelatedProductCosmetic } from "@/components/RelatedProductCosmetic";
import { WhyBrandsChooseCosmetic } from "@/components/WhyBrandsChooseCosmetic";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


// Image Imports
import FAQimage from "@/assets/FAQ-image.webp";
import mainSerum from "@/assets/cosmetic-boxes/Serum Boxes.webp";

const SerumBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainSerum, alt: "Custom Serum Box - Elegant Design" },
        { src: mainSerum, alt: "Custom Serum Box - Medical Aesthetic" },
        { src: mainSerum, alt: "Custom Serum Box - Open View" },
        { src: mainSerum, alt: "Custom Serum Box - Shelf Display" },
        { src: mainSerum, alt: "Custom Serum Box - Detail" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Serum Boxes | Luxury Skincare Packaging Wholesale</title>
                <meta name="description" content="Design custom serum boxes with premium finishes. Wholesale skincare packaging featuring medical-grade aesthetics, UV protection, and custom inserts. Fast turnaround." />
                <meta name="keywords" content="custom serum boxes, serum packaging, wholesale skincare boxes, luxury serum packaging, professional medical cosmetic boxes" />
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
                                    <Link to="/industries/cosmetic-boxes">Cosmetic Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Serum Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Serum Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your skincare collection with luxury custom serum boxes designed to provide unyielding protection for delicate glass bottles while projecting a sophisticated medical-grade aesthetic that builds immediate consumer trust and brand prestige.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get custom quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainSerum}
                                    alt="Custom Serum Boxes Hero"
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
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Medical-Grade Protection Meets Visual Brilliance
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom serum boxes</strong> redefine skincare standards by offering unparalleled structural integrity. Serums are often investment pieces in a customer's skincare routine, and your packaging should reflect that value. We utilize heavy-duty cardstock and rigid boards to create a protective shell that guards against the common hazards of shipping and retail handling.
                        </p>
                        <p>
                            Whether you're selling Vitamin C serums that require UV protection or high-end anti-aging formulas, our <strong className="text-foreground">serum packaging</strong> solutions are tailored to your formula's specific needs. Enhance your brand with bespoke inserts that keep dropper bottles perfectly upright and stationary.
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
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
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

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
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
                                                <Input id="length" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
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
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Elevating Retail Skincare with Custom Serum Packaging
                    </h2>

                    {/* Scrollable content box */}
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

                            <p>In the luxury skincare market, the serum is often the "hero" product of a brand's lineup. It contains the most potent ingredients and commands the highest retail price. Consequently, custom serum boxes must be designed to validate this premium positioning. Packaging serves as the first physical touchpoint between your brand and the consumer, creating an emotional connection that can define the entire user experience. At CustomPackMakers, we specialize in high-concept packaging that ensures your serum is the star of the shelf.</p>
                            <p>Our approach to serum packaging is rooted in a balance of scientific necessity and artistic expression. We understand that many serum ingredients—such as Vitamin C, retinol, and various botanical extracts—are highly sensitive to light and temperature. Our packaging solutions prioritize light-blocking materials and sturdy construction to preserve the efficacy of your formulations until they reach the customer's hands. Beyond protection, we focus on creating an unboxing experience that feels like opening a modern artifact of beauty.</p>

                            <h3>Material Integrity and Formulation Safety</h3>
                            <p>The choice of material for your custom serum boxes significantly impacts both the product's safety and its perceived value. We offer a curated selection of stocks to meet diverse brand philosophies:</p>
                            <ul>
                                <li><strong>Premium Bleached Cardstock (SBS):</strong> This is the gold standard for high-end skincare. Its smooth, non-porous surface provides a clean, clinical aesthetic and supports high-fidelity printing and luxury finishes like spot UV or holographic foiling.</li>
                                <li><strong>Recycled Corrugated Boards:</strong> For brands shipping larger clinical sets or those with a heavy e-commerce focus, E-flute corrugated board provides extreme crush resistance while remaining surprisingly lightweight.</li>
                                <li><strong>Specialty Foil-Lined Stocks:</strong> To protect highly photosensitive serums, we can incorporate foil linings or light-impermeable coatings that ensure active ingredients remain potent.</li>
                                <li><strong>Rigid Luxury Boards:</strong> For premium anti-aging lines, rigid board boxes with magnetic closures offer the ultimate high-end feel, signaling exclusivity and medical-grade quality.</li>
                            </ul>

                            <h3>Strategic Design Elements for Trust and Authority</h3>
                            <p>Skincare consumers are increasingly sophisticated; they look for cues of authority and medical expertise on packaging. We can incorporate specific design features that build this trust:</p>
                            <ul>
                                <li><strong>Medical-Grade Typography & Layout:</strong> We use precision printing techniques to ensure that ingredient lists and clinical claims are sharp and legible, reinforcing the product's scientific credibility.</li>
                                <li><strong>Integrated Dropper Inserts:</strong> Custom-cut foam or board inserts hold the serum bottle and its delicate glass dropper securely, ensuring the product arrives in perfect condition and is presented beautifully when opened.</li>
                                <li><strong>Safety Seals and Tamper Evidence:</strong> Professional packaging includes features like perforated tear-strips or custom-taped closures that provide consumers with peace of mind regarding the product's purity.</li>
                                <li><strong>Minimalist Matte Finishes:</strong> A soft-touch matte finish often conveys a modern, clinical, and premium feel that resonates with today's "clean beauty" demographic.</li>
                            </ul>

                            <h3>Luxury Finishes for Maximum Shelf Impact</h3>
                            <p>To differentiate your brand in a crowded retail environment like Sephora or Ulta, your serum boxes need a distinct visual and tactile edge. We offer a variety of upscale finishing techniques to achieve this:</p>
                            <p>Metallic foil stamping—in gold, silver, or even rose gold—can be used to highlight key brand elements or premium active ingredients. Embossing and debossing add a three-dimensional depth that invites customers to run their fingers over the box, creating a tactile memory of your brand. Spot UV coating can create a dynamic play of light, highlighting patterns or logos against a flat matte background to catch the eye of passersby. All these techniques are executed using state-of-the-art machinery that ensures perfect registration and consistency across every production run.</p>

                            <h3>Scalability for Emerging and Established Brands</h3>
                            <p>The path from a viral startup to a global skincare staple requires a packaging partner that can scale with you. We offer flexible manufacturing solutions that cater to every stage of your business growth. If you are launching a new formula, our low minimum order quantities (MOQs) allow you to test the market without massive upfront investment. For established players, our high-volume production facilities deliver significant wholesale discounts and consistent quality. With our industry-leading 8-10 day turnaround, you can maintain lean inventory levels and respond quickly to spikes in demand or seasonal promotions.</p>

                            <h3>The Eco-Conscious Skincare Revolution</h3>
                            <p>The modern skincare consumer is deeply concerned with sustainability. We help you meet this demand without sacrificing the luxury feel of your brand. Our sustainable packaging options include FSC-certified papers, soy-based inks, and completely plastic-free internal inserts. By choosing eco-friendly custom serum boxes, you align your brand with the values of the modern world, building deeper brand affinity and long-term customer loyalty. Let us guide you through the process of selecting materials that are as responsible as they are beautiful.</p>
                            <p>Ultimately, a custom serum box is an investment in your brand's future. It is the container for your most valuable formulas and the messenger for your most important brand promises. At CustomPackMakers, we are committed to providing you with packaging that is as effective as the ingredients inside. Contact our team today for a design consultation and take the first step toward transforming your serum line into an industry leader.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Serum Box" productImage={mainSerum} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainSerum} alt="Differentiate Your Skincare Brand" className="w-full h-full object-cover" />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Skincare</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-end custom serum boxes are meticulously engineered to differentiate your liquid skincare products in a competitive beauty landscape. Utilizing premium-grade, UV-resistant materials and precision-fit internal cradles, we ensure that every serum bottle is shielded from environmental stressors and accidental impact. From soft-touch finishes that invite touch to elegant embossing that highlights your brand's unique philosophy, these boxes are more than just containers; they are essential brand ambassadors. Scale your production with our scalable wholesale options designed for modern skincare innovators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Serum Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your skincare brand.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Do your serum boxes offer UV protection?", answer: "Yes, we use thick, high-opacity cardstocks that effectively block UV rays, helping to keep your photosensitive serum ingredients stable and potent." },
                                    { id: "item-2", question: "Can you create custom inserts for unconventional bottle shapes?", answer: "Absolutely. Our design team uses precision die-cutting to create custom foam or board inserts that perfectly cradle even the most unique serum bottle silhouettes." },
                                    { id: "item-3", question: "Are your materials compatible with clean beauty branding?", answer: "We offer a wide selection of sustainable, FSC-certified papers and biodegradable coatings that perfectly align with the values of clean beauty and eco-conscious brands." },
                                    { id: "item-4", question: "Will gold foiling rub off during shipping?", answer: "We use high-grade heat-transferred foils and protective aqueous coatings to ensure that metallic accents remain crisp and vibrant throughout the entire logistics journey." },
                                    { id: "item-5", question: "What is the best finish for a medical-grade skincare look?", answer: "A soft-touch matte lamination combined with clinical-grade typography is highly recommended for achieving a professional, medical-grade aesthetic that builds consumer trust." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Serum Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SerumBoxes;
