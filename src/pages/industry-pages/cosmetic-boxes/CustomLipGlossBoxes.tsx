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
import mainLipGloss from "@/assets/industry/cosmetic-boxes/Custom Lip Gloss Boxes.webp";

const CustomLipGlossBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainLipGloss, alt: "Custom Lip Gloss Box - Chic Front" },
        { src: mainLipGloss, alt: "Custom Lip Gloss Box - Window Display" },
        { src: mainLipGloss, alt: "Custom Lip Gloss Box - Holographic View" },
        { src: mainLipGloss, alt: "Custom Lip Gloss Box - Detailed Texture" },
        { src: mainLipGloss, alt: "Custom Lip Gloss Box - Retail Setup" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Lip Gloss Boxes | High-Fashion Makeup Packaging Wholesale</title>
                <meta name="description" content="Order custom lip gloss boxes wholesale. Chic makeup packaging with holographic finishes, window displays, and leak-proof design. Fast turnaround." />
                <meta name="keywords" content="custom lip gloss boxes, lip gloss packaging, wholesale makeup boxes, luxury lip gloss packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Custom Lip Gloss Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Lip Gloss Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your makeup collection with chic custom lip gloss boxes featuring high-clarity windows and vibrant holographic finishes that perfectly showcase your brilliant pigments while ensuring maximum protection and a premium unboxing experience.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get chic quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainLipGloss}
                                    alt="Custom Lip Gloss Boxes Hero"
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
                        Vibrant Brilliance for Your Signature Lip Line
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom lip gloss boxes</strong> are designed for beauty brands that demand both high-fashion aesthetics and industrial-grade protection. We utilize smudge-resistant cardstocks that maintain their pristine look even after frequent handling. Each box is engineered with a secure interlocking system that prevents accidental leaks and ensures your premium glosses arrive in perfect condition.
                        </p>
                        <p>
                            With options for high-clarity clear windows, customers can immediately appreciate the intensity and shine of your lip products. Enhance your brand with bespoke unboxing features like internal printing and textured finishes. Our <strong className="text-foreground">lip gloss packaging</strong> provides the ultimate canvas for your brand's unique visual identity.
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
                                                <Input id="length" type="number" placeholder="0.75" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="0.75" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4.5" className="h-9 bg-white" />
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
                        Gloss and Glamour: Mastering Custom Lip Gloss Packaging
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

                            <p>In the fast-paced world of cosmetic retail, lip gloss is a product driven by visual impulse and the promise of instant glamour. When a customer browses a makeup aisle or an online store, they are looking for that perfect pop of color and shine. Consequently, custom lip gloss boxes are your brand's most critical marketing tool. They must not only protect the delicate applicator and liquid formula within but also communicate the vibrancy and luxury of your brand from the first glance. At CustomPackMakers, we specialize in high-concept packaging that ensures your lip products dominate the marketplace.</p>
                            <p>Our philosophy for lip gloss packaging centers on the intersection of high-fidelity aesthetics and functional security. We understand that lip gloss formulas can be prone to seepage if not stored correctly, and the external tubes are often prone to scratching on retail shelves. Our custom-engineered boxes provide a protective cocoon that preserves the product's quality while offering a massive surface area for sophisticated brand storytelling. We help you create an unboxing ritual that makes every customer feel like a professional makeup artist.</p>

                            <h3>Material Selection for Luxury and Durability</h3>
                            <p>The foundation of a premium lip gloss box is the quality of the cardstock. we offer a range of specialized materials to match your brand's specific energy:</p>
                            <ul>
                                <li><strong>Premium SBS Cardstock:</strong> Solid Bleached Sulfate cardstock is the industry standard for high-end cosmetics. Its ultra-smooth, bright white surface allows for perfect color reproduction and supports complex finishes like holographic foiling and spot UV.</li>
                                <li><strong>Metallic and Foil-Lined Stocks:</strong> For brands that want ultimate "wow" factor, we can use metallic paperboard that shines from every angle, creating a luminous effect that mirrors the gloss inside.</li>
                                <li><strong>Textured Fine Art Papers:</strong> To convey a sense of boutique, handcrafted quality, we offer textured stocks that provide a unique tactile experience for the customer.</li>
                                <li><strong>Eco-Friendly Recycled Boards:</strong> We provide high-quality recycled options that don't compromise on durability or printing quality, allowing you to appeal to the conscious beauty consumer.</li>
                            </ul>

                            <h3>Strategic Design Elements for Maximum Impact</h3>
                            <p>To win the battle for attention, your custom lip gloss boxes need specialized design features that engage the consumer's senses:</p>
                            <ul>
                                <li><strong>High-Clarity PET Windows:</strong> We can incorporate custom-shaped windows into your boxes, allowing the brilliant hue of your lip gloss to serve as part of the overall packaging design.</li>
                                <li><strong>Precision-Fit Compartments:</strong> Our boxes are engineered to hold your gloss tubes snugly, preventing them from rattling or shifting during shipping, which reduces the risk of accidental cap unscrewing.</li>
                                <li><strong>Velvet-Touch Finishes:</strong> Use soft-touch matte lamination to provide a luxurious, velvet-like feel that signifies a high-end, comfortable formula.</li>
                                <li><strong>Dynamic Holographic Elements:</strong> Holographic foiling can create a "rainbow" shimmer effect that is incredibly popular among younger demographics and perfectly suits the high-shine nature of lip gloss.</li>
                            </ul>

                            <h3>Professional Printing and Fine Finishes</h3>
                            <p>We utilize the latest in offset and digital printing technology to ensure your brand's colors are reproduced with absolute accuracy. Whether you prefer minimalist, monochrome designs or complex, full-color patterns that wrap around the box, our processes deliver sharp, vibrant results. Finishes like gold and silver foil stamping add a classic luxury touch, while embossing your logo adds a three-dimensional depth that customers can feel. These small details aggregate to create a high-quality perception that encourages repeat purchases and brand loyalty.</p>

                            <h3>Sustainability in the Beauty Industry</h3>
                            <p>Modern consumers are increasingly aware of the environmental footprint of their beauty routines. We help you meet this demand without sacrificing style. Our sustainable packaging solutions include FSC-certified materials, soy-based inks, and recycled cardstock options. By choosing eco-friendly custom lip gloss boxes, you demonstrate a commitment to the planet that resonates with today’s "conscious beauty" movement. Let us help you select materials that are as responsible as they are beautiful.</p>

                            <h3>Comprehensive Wholesale and Scalability</h3>
                            <p>CustomPackMakers is built to grow with your brand. We offer low minimum order quantities (MOQs) which are perfect for testing new seasonal shades or limited-edition collaborations. For established brands, our high-volume production lines deliver massive capacity and wholesale cost-efficiency. Our industry-leading 8-10 day turnaround ensures that your supply chain remains agile and that your hottest-selling glosses are never out of stock. Contact our team today for a custom quote and take the first step toward transforming your lip line into a market leader.</p>
                            <p>Ultimately, a custom lip gloss box is an investment in your brand's perceived value. It is the messenger for your brand's quality and the protector of your brilliant pigments. Let us help you create the perfect blend of style, security, and sustainability that will make your lip gloss the top choice for beauty enthusiasts everywhere. Our experts are ready to assist with design consultation and technical development to bring your vision to life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Lip Gloss Box" productImage={mainLipGloss} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainLipGloss} alt="Differentiate Your Lip Gloss Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Glosses</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-fashion custom lip gloss boxes are meticulously engineered to differentiate your pigments in a competitive beauty landscape. By utilizing premium, smudge-resistant materials and precision-fit internal cradles, we ensure that every applicator remains secure and protected from environmental damage or leakage. From velvety soft-touch laminates that invite touch to elegant foil stamping that highlights your brand's unique energy, these boxes are more than containers; they are vital brand ambassadors. Scale your production with our scalable wholesale options designed for modern cosmetic innovators.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Lip Gloss Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your vibrant makeup line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can you guarantee leak-proof designs for lip gloss?", answer: "Yes, we use reinforced structural sleeves and secure-locking flaps that keep tubes upright and tightly sealed, effectively preventing leakage during shipping." },
                                    { id: "item-2", question: "Do you offer window displays to show gloss colors?", answer: "Absolutely. We can create custom-die-cut windows with high-clarity PET film, allowing your brilliant pigments to be visible without compromising the product's security." },
                                    { id: "item-3", question: "What is the best finish for a luxury high-end feel?", answer: "We highly recommend a soft-touch matte lamination combined with silver or gold foil stamping for an unmistakable premium, velvet-like aesthetic." },
                                    { id: "item-4", question: "Are the boxes resistant to smudges and fingerprints?", answer: "We utilize specialized scuff-resistant aqueous coatings that repel fingerprints and maintain the boxes' pristine, professional appearance even with frequent handling." },
                                    { id: "item-5", question: "Are your materials sustainable for eco-conscious brands?", answer: "Yes, we provide FSC-certified materials, soy-based inks, and completely recyclable cardstocks that align perfectly with the values of the modern beauty consumer." }
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
                            <img src={FAQimage} alt="Lip Gloss Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomLipGlossBoxes;
