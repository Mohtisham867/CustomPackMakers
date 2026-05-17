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
import mainHairColor from "@/assets/industry/cosmetic-boxes/hair-color-boxes.webp";

const HairColorBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainHairColor, alt: "Custom Hair Color Box - Vibrant Shade" },
        { src: mainHairColor, alt: "Custom Hair Color Box - Retail Display" },
        { src: mainHairColor, alt: "Custom Hair Color Box - Internal View" },
        { src: mainHairColor, alt: "Custom Hair Color Box - Matte Finish" },
        { src: mainHairColor, alt: "Custom Hair Color Box - Premium Quality" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hair Color Boxes | Professional Hair Dye Packaging Wholesale</title>
                <meta name="description" content="Order custom hair color boxes wholesale. Vibrant retail packaging for hair dyes featuring color-accurate printing, protective inserts, and premium finishes. Fast turnaround." />
                <meta name="keywords" content="custom hair color boxes, hair dye packaging, wholesale salon boxes, luxury hair color packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Hair Color Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Hair Color Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Transform your hair color line with vibrant custom hair color boxes meticulously engineered to showcase stunning shades while protecting developer bottles and delicate dye formulations from external temperatures and potential shipping hazards.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Start custom order
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainHairColor}
                                    alt="Custom Hair Color Boxes Hero"
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
                        Vibrant Presentation for Salon-Quality Perfection
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom hair color boxes</strong> are engineered to meet the unique demands of the hair dye industry. Because consistent color reproduction is vital for consumer confidence, we utilize high-fidelity printing processes that accurately reflect the results inside.
                        </p>
                        <p>
                            Each box is designed with organized compartments for dyes, developers, and accessories, ensuring everything remains in place during handling. With water-resistant coatings and durable construction, our <strong className="text-foreground">hair dye packaging</strong> protects your product's chemical integrity while captivating buyers on retail shelves.
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="7" className="h-9 bg-white" />
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
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Driving Brand Success with Custom Hair Color Packaging
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

                            <p>In the expansive and hyper-competitive beauty industry, hair color is a product category defined by aspiration and transformation. When a consumer looks at a hair dye box, they aren't just looking for a chemical solution; they are looking for a promise of a new identity. Consequently, custom hair color boxes carry an immense marketing burden. They must not only represent the final color result with absolute accuracy but also communicate the quality and safety of the formulation within. At CustomPackMakers, we specialize in high-impact packaging that bridge the gap between salon expertise and home convenience.</p>
                            <p>Our philosophy for hair color packaging focuses on three key pillars: color fidelity, structural organization, and premium brand storytelling. We understand that a hair color kit is a multifaceted product, often including dye tubes, developer bottles, conditioning treatments, and application tools. Our custom-engineered boxes ensure that each component is securely held in place, preventing leaks and breakage while creating a logical, user-friendly unboxing flow for the consumer.</p>

                            <h3>The Importance of Color Accuracy in Printing</h3>
                            <p>For a hair color brand, nothing is more critical than the consumer's perception of the shade they are purchasing. A discrepancy between the box artwork and the final result can lead to customer dissatisfaction and negative reviews. We address this challenge with state-of-the-art printing technology:</p>
                            <ul>
                                <li><strong>High-Fidelity CMYK & Pantone Printing:</strong> We utilize advanced color-calibration systems to ensure that the hair swatches and model photography on your boxes are vibrant and true-to-life.</li>
                                <li><strong>Extended Gamut Printing:</strong> For particularly challenging shades like deep violets or vibrant coppers, we can use extended color gamuts to achieve levels of saturation that standard printing cannot match.</li>
                                <li><strong>Vivid Gloss Coatings:</strong> A high-gloss UV coating can be applied to the hair swatches on the packaging, mimicking the shine of healthy, newly colored hair and attracting the customer's eye.</li>
                                <li><strong>Matte-Gloss Contrast:</strong> Using spot UV on specific elements like brand logos or shade numbers against a matte background creates a modern, premium look that stands out on retail shelves.</li>
                            </ul>

                            <h3>Structural Excellence for Multi-Component Kits</h3>
                            <p>Hair color kits are some of the most complex products in the cosmetic aisle. Our custom hair color boxes are designed to manage this complexity effortlessly:</p>
                            <ul>
                                <li><strong>Internal Dividers & Compartments:</strong> We can engineer custom die-cut inserts that create dedicated slots for developers and dyes, ensuring they don't shift during shipping and are presented clearly to the user.</li>
                                <li><strong>Product Safety Seals:</strong> Our boxes can include tamper-evident features like perforated side-entry or glue-sealed ends, providing consumers with peace of mind regarding the product's safety.</li>
                                <li><strong>Durable Material Selection:</strong> We use high-grade cardstock that resists moisture and oils, ensuring that even if a small leak occurs during transit, the integrity of the outer box remains intact.</li>
                                <li><strong>Integration of Instructions:</strong> We can design boxes with internal side-panels specifically sized for printed instructions or even QR codes that lead to video tutorials.</li>
                            </ul>

                            <h3>Strategic Branding and Shelf Dominance</h3>
                            <p>To win the battle for attention in a crowded retail environment, your brand needs a cohesive and authoritative visual presence. Custom hair color boxes allow for total design freedom, enabling you to use every square inch of the packaging for brand storytelling. Whether you are targeting professional stylists with minimalist, clinical designs or younger demographics with bold, artistic graphics, we provide the platform for your vision. Advanced finishes like silver or gold foiling can be used to highlight premium ingredients like argan oil or keratin, signaling quality to discerning buyers.</p>
                            <p>Tactile finishes also play a huge role in the conversion process. A soft-touch laminate provides a velvety feel that suggests a premium, gentle formulation, while a textured linen stock can evoke a sense of heritage and professional craftsmanship. These small sensory details create a perception of value that encourages the customer to choose your product over generic competitors.</p>

                            <h3>Sustainability in Hair Care Packaging</h3>
                            <p>Environmental responsibility is a top priority for modern beauty consumers. We help your brand lead the way with sustainable hair care packaging solutions. Our options include FSC-certified papers, recycled cardstock, and biodegradable coatings. By switching to eco-friendly custom hair color boxes, you demonstrate a commitment to the planet that resonates with conscious consumers, turning first-time buyers into long-term brand advocates. Our soy-based inks ensure that even your most vibrant colors are produced with a lower environmental impact.</p>

                            <h3>Comprehensive Wholesale Solutions</h3>
                            <p>We are built to support your brand's journey from a boutique line to a global powerhouse. Our production facilities offer the flexibility of low minimum order quantities (MOQs) for seasonal shade launches alongside massive capacity for nationwide retail distribution. With our rapid 8-10 day turnaround, you can keep your supply chain efficient and respond instantly to market demand. Partnering with CustomPackMakers means you have a dedicated packaging partner committed to the success and visual brilliance of your hair color line. Contact our team today for a custom quote and design consultation.</p>
                            <p>Ultimately, your hair color box is the most important salesperson for your brand. It represents the potential for a beautiful transformation. Let us help you create packaging that is as vibrant and reliable as the color inside. Our experts are ready to translate your brand's unique energy into physical packaging that dominates the market.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Hair Color Box" productImage={mainHairColor} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainHairColor} alt="Differentiate Your Hair Color Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Shades</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom hair color boxes are high-performance packaging solutions designed to differentiate your salon-quality dyes in a competitive retail environment. By integrating secure internal dividers for developers and gloves, we ensure a premium user-centric experience that highlights your brand's commitment to hair care excellence. From high-gloss lamination that reflects light like healthy hair to color-accurate CMYK printing that guarantees shade consistency, these boxes become vital extensions of your brand's visual identity. Partner with us for wholesale packaging that scales with your growing beauty empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hair Color Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Everything you need to know about professional dye packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you ensure color accuracy on the packaging?", answer: "We use high-fidelity CMYK and Pantone color calibration systems combined with premium cardstocks to ensure your shade swatches perfectly match the results inside." },
                                    { id: "item-2", question: "Are these boxes resistant to hair dye spills?", answer: "Yes, we apply waterproof and chemical-resistant aqueous coatings that prevent dyes and developers from soaking into the packaging if a small spill occurs." },
                                    { id: "item-3", question: "Can the boxes include internal compartments for gloves and brushes?", answer: "Absolutely. We can engineer custom die-cut inserts that create dedicated slots for developers, dyes, instructions, and application tools for a logical user experience." },
                                    { id: "item-4", question: "What is the turnaround time for a new boutique shade line?", answer: "Our standard manufacturing time is 8-10 business days after design approval, even for new custom shapes or boutique short runs." },
                                    { id: "item-5", question: "Do you offer eco-friendly packaging for beauty brands?", answer: "Yes, we utilize sustainable soy-based and vegetable-based inks that are safer for the environment while delivering vibrant, professional-grade color." }
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
                        <div className="relative w-full max-md:hidden max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Hair Color Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default HairColorBoxes;
