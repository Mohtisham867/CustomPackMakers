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
import mainHairExtension from "@/assets/cosmetic-boxes/Hair Extension Boxes.webp";

const HairExtensionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainHairExtension, alt: "Custom Hair Extension Box - Luxury Front" },
        { src: mainHairExtension, alt: "Custom Hair Extension Box - Open Tray" },
        { src: mainHairExtension, alt: "Custom Hair Extension Box - Window View" },
        { src: mainHairExtension, alt: "Custom Hair Extension Box - Detail Finish" },
        { src: mainHairExtension, alt: "Custom Hair Extension Box - Shelf Setup" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hair Extension Boxes | Luxury Beauty Packaging Wholesale</title>
                <meta name="description" content="Design custom hair extension boxes wholesale. Premium beauty packaging with soft-touch finishes, window displays, and protective trays. Fast turnaround." />
                <meta name="keywords" content="custom hair extension boxes, hair extension packaging, wholesale beauty boxes, luxury extension packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Hair Extension Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Hair Extension Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your luxury salon brand with premium custom hair extension boxes featuring soft-touch finishes and elegant window displays that highlight your hair quality while ensuring maximum protection during shipping and retail storage.
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
                                    src={mainHairExtension}
                                    alt="Custom Hair Extension Boxes Hero"
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
                        Uncompromising Elegance for Premium Extensions
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom hair extension boxes</strong> are designed to elevate the status of your beauty brand. We understand that hair extensions are high-value luxury items that require packaging that reflects their premium quality. Using rigid paperboards and specialized coatings, we create an unboxing experience that justifies a high-end price point.
                        </p>
                        <p>
                            Each box features precision-engineered trays that keep hair bundles organized and tangle-free. With options for clear PET windows, customers can view the texture and color of your extensions without compromising the product's safety. Our <strong className="text-foreground">hair extension packaging</strong> is the ultimate blend of style and structural security.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
                        Luxury Meets Longevity: The Ultimate Guide to Hair Extension Packaging
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

                            <p>In the high-stakes world of hair aesthetics, hair extensions represent some of the most sought-after and expensive assets a beauty brand can offer. Whether you are selling 100% human virgin hair, Remy bundles, or high-tech synthetic pieces, the packaging is the first physical testament to the quality within. Custom hair extension boxes serve a dual purpose: they must represent the luxury and transformation your brand promises, and they must provide a secure, tangle-free environment for the hair itself. At CustomPackMakers, we specialize in creating bespoke packaging solutions that bridge the gap between high-fashion design and industrial-strength protection.</p>
                            <p>Our philosophy for hair extension packaging focuses on the unboxing experience as a critical component of brand loyalty. A customer opening a box should feel that they are unwrapping something precious. This is achieved through a combination of heavy-duty materials, specialized internal structures, and breathtaking visual finishes. We work with both boutique salon owners and national distributors to provide packaging that not only scales their business but also defines their brand's authority in the beauty marketplace.</p>

                            <h3>Material Innovation for Premium Protection</h3>
                            <p>The foundation of a great extension box is the material choice. We offer several high-performance substrates to suit your brand’s specific orientation:</p>
                            <ul>
                                <li><strong>Rigid Box Construction:</strong> For high-end human hair brands, rigid board options are the premier choice. These non-bending boxes provide an unmistakable high-end weight and a satisfy "thud" when closed, signaling ultimate durability and luxury.</li>
                                <li><strong>Premium Cardstock (SBS):</strong> Solid Bleached Sulfate cardstock is excellent for a clean, clinical, or modern aesthetic. Its smooth surface supports high-resolution printing and sophisticated finishes like soft-touch lamination perfectly.</li>
                                <li><strong>Window-Integrated Designs:</strong> We incorporate high-clarity PET windows into our box designs, allowing customers to verify the hair wave, texture, and color without opening the seal. This builds immediate trust and reduces "browsing damage."</li>
                                <li><strong>Sleeve and Tray Formats:</strong> A sliding sleeve and tray design adds a layer of interactive engagement to the unboxing process, revealing the extensions in a theatrical and premium fashion.</li>
                            </ul>

                            <h3>Internal Organization: Keeping Bundles Tangle-Free</h3>
                            <p>Nothing ruins a customer experience faster than opening a box to find a tangled mess of hair. Our custom hair extension boxes are engineered with internal success in mind:</p>
                            <ul>
                                <li><strong>Custom Die-Cut Trays:</strong> We design internal trays that hold the bundle's "weft" securely at the top, allowing the hair to flow naturally downwards within the box without shifting during transit.</li>
                                <li><strong>Satin or Silk Linings:</strong> For ultra-luxury lines, we can add a satin-finish lining inside the box to minimize friction and prevent the hair from catching on paper fibers.</li>
                                <li><strong>Compartmentalized Sets:</strong> If you sell full-head sets with multiple weft widths, we can create boxes with tiered internal layers so the customer can easily see and organize each piece.</li>
                                <li><strong>Included Care Cards:</strong> Our box designs often feature integrated slots for care instruction cards or promotional materials, making your brand feel like a complete professional system.</li>
                            </ul>

                            <h3>Visual and Tactile Finishing Techniques</h3>
                            <p>To differentiate your brand in a crowded market, your packaging needs a distinct visual and tactile edge. We offer a full suite of cosmetic-grade finishing options. Soft-touch matte lamination creates a velvety surface that invites touch and feels contemporary. Metallic foiling—available in gold, rose gold, silver, and copper—can be used to highlight your brand logo or the origin of the hair (e.g., "100% Brazilian Virgin Hair"). Spot UV coating can add a subtle, high-gloss shine to specific patterns or typography, creating a dynamic interplay of light that catches the eye on retail shelves. All these techniques are executed with precision registration, ensuring consistency across every production run.</p>

                            <h3>Scalable Wholesale Solutions for Beauty Brands</h3>
                            <p>Whether you are a local salon owner testing a signature line with a small batch or a large-scale distributor needing monthly shipments of thousands, our manufacturing is built to scale. We offer low minimum order quantities (MOQs) which are perfect for testing new hair types or seasonal launches. For high-volume wholesale accounts, we offer substantial cost savings without compromising the high-end character of the packaging. Our industry-leading 8-10 day turnaround ensures that your inventory levels remain consistent and that you can respond quickly to spikes in beauty market trends.</p>

                            <h3>The Eco-Conscious Beauty Movement</h3>
                            <p>Modern beauty consumers are increasingly making purchasing decisions based on environmental values. We help you meet this demand with our range of sustainable hair extension packaging options. From FSC-certified wood pulp products to soy-based inks and biodegradable laminates, we can create packaging that is as kind to the environment as it is beautiful for your brand. Highlighting your commitment to sustainable packaging can build deeper trust and affinity with conscious consumers, turning first-time purchasers into life-long brand advocates.</p>
                            <p>Investing in custom hair extension boxes is an investment in the long-term perceived value of your product. Let us help you create the perfect blend of protection, elegance, and sustainability that will make your hair brand the number one choice for stylists and consumers alike. Contact our team today for a design consultation and technical die-line development.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Hair Extension Box" productImage={mainHairExtension} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainHairExtension} alt="Differentiate Your Hair Extension Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Bundles</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-end custom hair extension boxes are meticulously designed to differentiate your premium hair bundles in an increasingly sophisticated beauty market. By utilizing rigid, structural-grade paperboard and precision-fit internal trays, we guarantee that every extension remains tangle-free and perfectly preserved. From delicate rose gold foiling that signals luxury to eco-friendly soy-based inks that reflect your modern values, our packaging solutions are fully customizable. Partner with us to create a world-class unboxing experience that builds lasting customer loyalty and drives significant brand growth.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Extension Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert guide for your hair brand's success.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you prevent hair from tangling inside the box?", answer: "We use precision-fit internal trays and elastic weft-holders that keep the hair stationary and aligned, even during rough shipping conditions." },
                                    { id: "item-2", question: "Can I choose a custom window size for my extensions?", answer: "Absolutely. We offer complete die-cutting customization, allowing you to create any window shape or size with high-clarity PET film to showcase your hair quality." },
                                    { id: "item-3", question: "Is the soft-touch finish durable enough for shipping?", answer: "Our premium soft-touch lamination is scuff-resistant and designed to handle typical logistics while maintaining its velvety smooth feel and luxurious aesthetic." },
                                    { id: "item-4", question: "Do you offer specialty foiling like Rose Gold?", answer: "Yes, we have a full range of metallic foils including traditional gold, silver, and the highly popular rose gold and holographic options for a luxe look." },
                                    { id: "item-5", question: "Are these boxes suitable for 100% human hair storage?", answer: "Yes, we use acid-free materials that are safe for long-term storage of natural hair, preventing drying or damage from chemical leaching." }
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
                            <img src={FAQimage} alt="Hair Extension Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default HairExtensionBoxes;
