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
import mainHairSpray from "@/assets/industry/cosmetic-boxes/Hair Spray Boxes.webp";

const HairSprayBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainHairSpray, alt: "Custom Hair Spray Box - Durable Design" },
        { src: mainHairSpray, alt: "Custom Hair Spray Box - Retail Layout" },
        { src: mainHairSpray, alt: "Custom Hair Spray Box - Close-up Finish" },
        { src: mainHairSpray, alt: "Custom Hair Spray Box - Open Display" },
        { src: mainHairSpray, alt: "Custom Hair Spray Box - Multiple Sizes" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hair Spray Boxes | Professional Styling Packaging Wholesale</title>
                <meta name="description" content="Order custom hair spray boxes wholesale. Secure styling product packaging with moisture-resistant coatings, reinforced bases, and high-quality printing. Fast turnaround." />
                <meta name="keywords" content="custom hair spray boxes, hair spray packaging, wholesale styling boxes, luxury hair spray packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Hair Spray Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Hair Spray Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your professional styling formulations with durable custom hair spray boxes engineered to provide a secure fit for pressurized containers while delivering a high-impact retail presence that perfectly captures your brand's energy.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get quote now
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainHairSpray}
                                    alt="Custom Hair Spray Boxes Hero"
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
                        Durable Security for Professional Styling Lines
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom hair spray boxes</strong> are engineered for the specific weight and structural requirements of aerosol and pump styling products. We utilize high-density paperboard and reinforced stress-points to ensure that every bottle remains stationary and protected from the moment it leaves our facility until it reaches your customer's salon shelf.
                        </p>
                        <p>
                            To combat the humidity often found in professional salon environments, we offer moisture-resistant coatings and specialty laminations. These ensure that your <strong className="text-foreground">hair spray packaging</strong> maintains its structural integrity and vibrant visual appeal even in high-moisture conditions, reinforcing your brand's commitment to quality.
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
                                                <Input id="length" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="9" className="h-9 bg-white" />
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
                        The Science of Superiority: Why Custom Hair Spray Boxes Matter
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

                            <p>In the professional beauty world, brand perception is everything. Styling products like hair sprays are the workhorses of the industry, used daily by both professionals and home enthusiasts. However, because these products are often housed in metal aerosol canisters or plastic pump bottles, they can feel cold or industrial. Custom hair spray boxes provide the necessary layer of branding and luxury that transforms an industrial tool into a premium beauty asset. At CustomPackMakers, we design hair spray packaging that commands attention, ensures safety, and communicates your brand’s commitment to excellence.</p>
                            <p>The challenges of hair spray packaging are unique. These containers are often heavy, tall, and sometimes pressurized. They require packaging that offers exceptional vertical compression strength and a secure base to prevent toppling during distribution. Our engineering team addresses these challenges with bespoke structural designs that prioritize the product's safety while maximizing the printable surface area for your brand artwork. We work with leading salon brands to deliver packaging that survives the rigors of logistics and arrives in showroom condition every time.</p>

                            <h3>Structural Integrity for Pressurized and Heavy Containers</h3>
                            <p>To ensure your hair spray reaches the customer safely, we offer a range of specialized materials and constructions:</p>
                            <ul>
                                <li><strong>Heavy-Duty Paperboard:</strong> We use high-caliber cardstock that offers superior rigidity, ensuring the boxes don't buckle or crush even when stacked high in a warehouse or during transit.</li>
                                <li><strong>Reinforced Bottom Closures:</strong> For taller, heavier hair spray bottles, we recommend auto-lock or snap-lock bottom designs. These provide a secure, non-slip base that can handle the vertical weight effortlessly.</li>
                                <li><strong>Custom-Sized Fitments:</strong> We engineer our boxes to provide a snug fit for your specific bottle dimensions, eliminating internal movement that could lead to accidental nozzle activation or scuffing of the bottle artwork.</li>
                                <li><strong>Tuck-Top Convenience:</strong> A standard tuck-top with a secure dust-flap ensures that your product is easy to open for the consumer while remaining safely sealed during shipping.</li>
                            </ul>

                            <h3>Strategic Branding and Visual Shelf Power</h3>
                            <p>The hair care aisle is one of the most crowded in retail. To gain "shelf power," your custom hair spray boxes must have a distinct visual energy. We utilize state-of-the-art printing and finishing techniques to achieve this:</p>
                            <ul>
                                <li><strong>Vibrant Full-Color CMYK:</strong> Whether you want photographic-quality images of stunning hairstyles or bold, solid brand colors, our offset and digital printing processes deliver crisp, accurate results.</li>
                                <li><strong>Holographic and Metallic Finishes:</strong> Hair sprays are often associated with shine and gloss. Using holographic patterns or metallic foiling on your packaging can subconsciously mirror the "shininess" and quality of the results your product offers.</li>
                                <li><strong>Moisture-Resistant Aqueous Coating:</strong> This clear coating protects your artwork from fingerprints and the humidity typical of salon and bathroom environments, ensuring the brand always looks its best.</li>
                                <li><strong>Tactile Embossing:</strong> Raising your logo or specific patterns on the cardstock adds a premium feel that customers can sense the moment they pick up the box.</li>
                            </ul>

                            <h3>Environmental Resistance and Long-Term Display</h3>
                            <p>Professional styling products are often stored in environments with varying levels of heat and humidity. Our packaging is designed to withstand these conditions without warping, peeling, or losing its visual luster. We offer specialized laminations—including high-gloss and soft-touch matte—that create a protective barrier against moisture and atmospheric oils. This means your brand remains the professional centerpoint of a stylist's station for as long as the product lasts.</p>

                            <h3>Wholesale Scalability for Global Beauty Brands</h3>
                            <p>Our manufacturing process is designed to support your brand’s trajectory from a small local favorite to a global powerhouse. We provide flexible production options, including low minimum order quantities (MOQs) for testing new formulations or limited-edition launches. For high-volume wholesale requirements, our production lines deliver massive capacity and significant cost efficiencies. With our standard 8-10 day turnaround, you can maintain a lean and responsive supply chain, ensuring your best-selling hair sprays are always in stock when your distributors call.</p>

                            <h3>Sustainability in Hair Care Packaging</h3>
                            <p>Modern consumers are looking for sustainable alternatives in every category of beauty. We help you lead the way with eco-friendly custom hair spray boxes. Our materials are sourced from responsibly managed forests (FSC-certified) and we utilize biodegradable inks and coatings that don't compromise the professional look of your brand. By highlighting your commitment to sustainable packaging, you can build deeper brand affinity with the growing demographic of eco-conscious beauty enthusiasts, turning one-time buyers into lifelong advocates.</p>
                            <p>Investing in custom hair spray boxes is an investment in your brand's authority. Let us help you create packaging that is as high-performance and reliable as the styling formulas you produce. Our team of packaging experts is ready to assist you with every technical detail, from die-line creation to final finish selection. Contact us today for a results-oriented design consultation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Hair Spray Box" productImage={mainHairSpray} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainHairSpray} alt="Differentiate Your Hair Spray Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Style</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom hair spray boxes are high-performance packaging solutions designed to differentiate your professional styling products in a competitive retail landscape. By integrating reinforced structural bases and moisture-resistant coatings, we ensure that every bottle remains secure and protected from accidental activation or environmental damage. From vibrant holographic finishes that command attention on crowded shelves to clean, minimalist designs for salon-exclusive lines, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales seamlessly with your expanding professional beauty empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hair Spray Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your professional product line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can your boxes prevent accidental nozzle activation?", answer: "Yes, our custom-engineered internal dimensions provide a snug fit that keeps the bottle secure, with sufficient clearance at the top to prevent pressure on the nozzle." },
                                    { id: "item-2", question: "Do the boxes hold up well in humid salon environments?", answer: "Absolutely. We offer moisture-resistant aqueous and UV coatings that maintain the structural and visual integrity of the box even in high-humidity settings." },
                                    { id: "item-3", question: "Are the boxes strong enough for heavy aerosol cans?", answer: "We use high-density reinforced paperboard and specialized bottom-closure designs specifically engineered to support the weight of industrial-size aerosol styling cans." },
                                    { id: "item-4", question: "Do you offer holographic finishes for a modern look?", answer: "Yes, we specialize in high-impact finishes including holographic laminates and metallic foils that command attention and reflect a contemporary brand energy." },
                                    { id: "item-5", question: "Is your hair spray packaging fully recyclable?", answer: "We offer completely recyclable material options with sustainable inks and coatings, ensuring your professional brand aligns with modern environmental standards." }
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
                            <img src={FAQimage} alt="Hair Spray Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default HairSprayBoxes;
