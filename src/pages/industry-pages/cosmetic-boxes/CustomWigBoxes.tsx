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
import mainWigBox from "@/assets/cosmetic-boxes/Custom Wig Boxes.webp";

const CustomWigBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainWigBox, alt: "Custom Wig Box - Rigid Deluxe Front" },
        { src: mainWigBox, alt: "Custom Wig Box - Satin Lining Detail" },
        { src: mainWigBox, alt: "Custom Wig Box - Magnetic Closure" },
        { src: mainWigBox, alt: "Custom Wig Box - Gold Foil branding" },
        { src: mainWigBox, alt: "Custom Wig Box - Large Format Set" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Wig Boxes | Luxury Rigid Hair Packaging Wholesale</title>
                <meta name="description" content="Order luxury custom wig boxes wholesale. Rigid magnetic boxes featuring satin linings, anti-static coatings, and premium gold foil stamping. Fast shipping." />
                <meta name="keywords" content="custom wig packaging, luxury hair boxes, wholesale cosmetic packaging, custom branded hair boxes, wig box manufacturer" />
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
                                <BreadcrumbPage>Custom Wig Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Wig Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Deliver your elite hair transformations in luxury custom wig boxes featuring satin-finished internal linings and rigid magnetic closures that perfectly preserve delicate styling while providing a world-class unboxing experience for every customer.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get luxury quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainWigBox}
                                    alt="Custom Wig Boxes Hero"
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
                        Unyielding Elegance for Your Signature Hair Pieces
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom wig boxes</strong> are meticulously designed for premium hair brands that demand the highest standards of structural integrity and aesthetic luxury. Wigs are high-value beauty investments that require packaging providing a consistent, anti-static environment to maintain their style and texture. We utilize high-density rigid paperboards and secure magnetic closures that ensure your hair pieces remain stationary and perfectly preserved from your styling room to your customer's vanity.
                        </p>
                        <p>
                            To command authority in the luxury hair market, your <strong className="text-foreground">wig packaging</strong> must reflect the professional excellence of your transformations. We offer advanced finishing options, from silky matte laminations that convey modern reliability to elegant gold or rose gold foil stamping that signifies prestige. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader in professional hair care and accessory supply.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">H (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                        Crown of Luxury: The Definitive Guide to Professional Wig Packaging
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

                            <p>In the expansive and high-fidelity world of luxury hair and professional transformations, the wig is more than just a beauty accessory; it is a profound investment in self-expression and identity. Professional hair pieces are intricate, handcrafted works of art, promising a flawless, natural look. Consequently, custom wig boxes are your brand's primary vehicle for delivering both aesthetic authority and technical reliability. At CustomPackMakers, we specialize in high-concept rigid packaging that ensures your premium hair products dominate the market and provide a world-class unboxing experience that justifies a premium price point.</p>
                            <p>The technical requirements for wig packaging are significant and specific. Unlike cosmetics or smaller accessories, wigs are bulky and highly susceptible to crushing or style-loss if subjected to external pressure. Furthermore, hair fibers—both human and synthetic—require a consistent environment to prevent frizzing or static charge. Our design philosophy focuses on "Rigid Security," where we utilize heavy-duty board substrates and secure magnetic closures. This ensures your professional transformations remain perfectly styled and protected from environmental factors from your manufacture line to your customer's vanity, preserving the texture and luster of every unit.</p>

                            <h3>Material Innovation for Rigid Hair Care Success</h3>
                            <p>To differentiate your brand and ensure product integrity, we offer a selection of specialized, high-performance materials for your custom wig boxes:</p>
                            <ul>
                                <li><strong>Heavy-Density Rigid Board:</strong> Our premium-grade rigid board provides excessive crush resistance and an authoritative weight that signals luxury quality immediately upon handling.</li>
                                <li><strong>Satin and Velvet Internal Linings:</strong> We offer custom internal finishes that provide a soft, anti-static seat for the hair piece, preventing friction-frizz and tangling.</li>
                                <li><strong>High-Contrast SBS Wrap:</strong> We utilize ultra-smooth Solid Bleached Sulfate papers to wrap our rigid boxes, allowing for perfect high-definition printing and vibrant foil stamping.</li>
                                <li><strong>FSC-Certified Sustainable Substrates:</strong> We provide eco-friendly options that resonate deeply with conscious luxury consumers, allowing you to lead with sustainability without sacrificing professional quality.</li>
                            </ul>

                            <h3>Strategic Design Elements for Visual Authority</h3>
                            <p>To win on the crowded retail shelf or digital storefront, your custom wig boxes must include features that project an aura of expertise and luxury:</p>
                            <ul>
                                <li><strong>Premium Magnetic Closures:</strong> Implementing a secure magnetic lid provides a satisfying sensory experience that builds brand trust and allows the box to be used as a long-term storage unit.</li>
                                <li><strong>Sophisticated Gold & Silver Foil Stamping:</strong> Using metallic foils to highlight your brand logo or collection name creates a sense of treasure and justifies high-end pricing.</li>
                                <li><strong>Silky Matte and Soft-Touch Finishes:</strong> Velvety non-reflective laminations convey a sense of modern authority and resist fingerprints, maintaining a pristine look.</li>
                                <li><strong>Custom-Sized Internal Head-Forms:</strong> For the ultimate in protection, we can design boxes that include internal cardboard forms to keep the wig's cap shape perfectly intact during transit.</li>
                            </ul>

                            <h3>The Science of Large-Format Branding Accuracy</h3>
                            <p>In the wig market, size and scale provide a unique branding opportunity. Your packaging must accurately represent the luxury status of the product within while providing mandatory care instructions. At CustomPackMakers, we utilize advanced large-format offset printing to ensure your brand's graphics are reproduced with absolute precision and clarity across the entire box surface. Whether you are launching a minimalist medical-grade line or a bold artistic collection, we guarantee aesthetic consistency across every production run, establishing your brand as a reliable authority in professional hair care.</p>

                            <h3>Scalable Wholesale for Growing Hair Empires</h3>
                            <p>Whether you are a boutique artisan brand launching a signature collection or a global powerhouse requiring monthly wholesale shipments of thousands, we are built to support your growth. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal releases or limited-edition collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our standard 8-10 day turnaround ensures your supply chain remains agile and responsive to the fast-moving trends of the beauty market.</p>

                            <h3>Environmental Leadership in Luxury Hair Care</h3>
                            <p>Modern consumers make purchasing decisions based on a brand's environmental values. We help you lead the way with sustainable wig packaging solutions. Our options include recycled content rigid boards, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom wig boxes, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term customer loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom wig box is an investment in your brand's reputation for professional excellence. It is the messenger of your brand's quality and the protector of your most expensive hair pieces. Let us help you create packaging that is as precise and powerful as the transformations your products offer. Our experts are ready to assist with every detail of technical detail of your design. Contact us today for a custom quote and begin your journey toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Wig Box" productImage={mainWigBox} />

            {/* DIFFERENTIATE YOUR HAIR SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainWigBox} alt="Differentiate Your Hair Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Hair</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom wig boxes are performance-oriented packaging solutions designed to differentiate your premium hair extensions in a crowded beauty market. By integrating high-density rigid paperboards and specialized anti-static internal coatings, we ensure that every unit remains stationary and protected from environmental humidity or crushing during transit. From modern matte finishes that convey professional authority to elegant metallic foil stamping that catches the light, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that establishes your brand as a leader.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Custom Wig Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your premium hair pieces.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Why are rigid boxes recommended for wigs?", answer: "Rigid boards provide the highest level of crush resistance, ensuring that delicate hair styles and caps are not flattened or damaged during shipping and storage." },
                                    { id: "item-2", question: "Do you offer anti-static internal linings?", answer: "Yes, we can incorporate premium satin or silk-feel internal linings that prevent static build-up and friction, keeping your hair pieces smooth and ready-to-wear." },
                                    { id: "item-3", question: "Can I get gold foil branding on my wig boxes?", answer: "Absolutely. We specialize in high-end metallic foil stamping in gold, silver, and rose gold to signifying luxury and artistic authority to your customers." },
                                    { id: "item-4", question: "How do you ensure the wig doesn't shift inside the large box?", answer: "We can design custom internal head-forms or board inserts that anchor the wig cap in place, providing absolute vibration protection during entire logistics process." },
                                    { id: "item-5", question: "What is the minimum order quantity for luxury rigid boxes?", answer: "We offer competitive MOQs starting at 500 units for luxury rigid constructions, allowing boutique hair brands to access professional packaging solutions." }
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
                            <img src={FAQimage} alt="Wig Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomWigBoxes;
